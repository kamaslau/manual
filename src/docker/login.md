# Login to container registry

```bash
# 模板语法
docker login your_registry_url -u your_username --password-stdin

# 常见平台示例
docker login # 不传入Registry路径则默认为 docker.io ，即DockerHub
docker login ghcr.io # GitHub
docker login registry.cn-shanghai.aliyuncs.com # 阿里云
```

## 参考资料

- [阿里云容器镜像服务 ACR](https://cr.console.aliyun.com/?spm=5176.8351553.products-recent.dacr.3d2a1991xq4LcJ)
- [Amazon Elastic Container Registry](https://aws.amazon.com/cn/ecr/)
- [GitHub Packages](https://github.com/features/packages)
- https://docs.gitlab.com/ee/user/packages/container_registry/authenticate_with_container_registry.html#use-gitlab-cicd-to-authenticate
