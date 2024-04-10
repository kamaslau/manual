# Multi-platform images

检查本地编译器可构建的架构：

```bash
docker buildx ls
```

编译多种平台架构的镜像：

```bash
docker buildx build --platform linux/amd64,linux/arm64 -t <username>/<image>:latest --push .
```

检查某一镜像可用的架构：

```bash
docker buildx imagetools inspect <username>/<image>:latest
```

## 参考资料

- https://docs.docker.com/build/building/multi-platform/
