# Next.js: Deploy with Docker

将 Next.js 应用编译为 Docker 镜像，以供后续部署。

## 配置编译输出模式

在 `next.config.js` 文件中，添加 `output` 配置项：

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  // ...
  output: "standalone",
};

module.exports = nextConfig;
```

## .dockerignore

``` docker
.git
.next
node_modules
.dockerignore
.env.local
Dockerfile
README.md
```

## Dockerfile

```dockerfile
# origin from https://github.com/vercel/next.js/tree/canary/examples/with-docker
FROM node:lts-alpine AS base
# [Optional] Config PRC mirror for NPM
# RUN npm set registry https://registry.npmmirror.com/
RUN npm add -g pnpm@latest


# Install dependencies only when needed
FROM base AS deps
# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat
WORKDIR /app

# https://typicode.github.io/husky/how-to.html#ci-server-and-docker
ENV CI=true
COPY .husky ./.husky

# Install dependencies based on the preferred package manager
COPY package.json pnpm-lock.yaml* ./
RUN \
  if [ -f pnpm-lock.yaml ]; then pnpm i --frozen-lockfile; \
  else echo "Lockfile not found." && exit 1; \
  fi


# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Next.js collects completely anonymous telemetry data about general usage.
# Learn more here: https://nextjs.org/telemetry
# Uncomment the following line in case you want to disable telemetry during the build.
ENV NEXT_TELEMETRY_DISABLED 1
RUN pnpm build


# Production image, copy all the files and run next
FROM base AS runner
WORKDIR /app

ENV NODE_ENV=production
# Uncomment the following line in case you want to disable telemetry during runtime.
ENV NEXT_TELEMETRY_DISABLED=1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public

# Set the correct permission for prerender cache
RUN mkdir .next
RUN chown nextjs:nodejs .next

# Automatically leverage output traces to reduce image size
# https://nextjs.org/docs/advanced-features/output-file-tracing
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000
# set hostname to localhost
ENV HOSTNAME "0.0.0.0"

CMD ["node", "server.js"]
```

## 【可选】添加 sharp 库

若使用了 Next.js 的 [Image 组件](https://nextjs.org/docs/app/api-reference/components/image)，则需要引入 [sharp 库](https://www.npmjs.com/package/sharp) 以支持该组件的图像优化功能。

```bash
pnpm add sharp
```

## 编译、标记，并推送镜像文件到 registry

参考 [Docker image: build and push](../docker/build-and-push.md)

## 参考资料

- https://nextjs.org/docs/app/building-your-application/deploying#docker-image
- https://nextjs.org/docs/messages/sharp-missing-in-production
- https://github.com/vercel/next.js/tree/canary/examples/with-docker
