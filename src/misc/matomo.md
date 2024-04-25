# Matomo

以私有化部署为例：

## 后端

https://github.com/matomo-org/docker

```bash
docker run \
  -p 8081:80 \
  -d \
  --restart always \
  --network trial-mysql_backend \
  --link mysql:db \
  --name=matomo \
  matomo
```

## 控制台页面

- 安装并初始化 Matomo
- 新建并配置站点信息
- 获取站点 URL 及站点 ID

## 应用前端

以 Next.js (App router) 为例：
命令行

```bash
# https://github.com/SocialGouv/matomo-next
pnpm add @socialgouv/matomo-next
```

matomo.js

```javascript
"use client";

import { init } from "@socialgouv/matomo-next";
import { useEffect } from "react";

export default function Main() {
  const MATOMO_URL = "https://nobelpress.matomo.cloud/"; // 站点MatomoURL
  const MATOMO_SITE_ID = "1"; // 站点ID

  useEffect(() => {
    init({ url: MATOMO_URL, siteId: MATOMO_SITE_ID });
  }, []);
}
```

layout.js

```javascript
import Matomo from "@/components/common/matomo";

// ...
return (
  // ...
  <Matomo /> // ...
);
```

## 参考资料

- [官方网站](https://matomo.org/)
