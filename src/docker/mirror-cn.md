# Docker 中国大陆镜像配置

如果在阿里云实例上使用 Docker ，可以先获取[阿里云镜像加速器（仅在阿里云实例上可用）的私有服务路径](https://cr.console.aliyun.com/cn-shanghai/instances/mirrors)。

将镜像路径写入 Docker 配置文件：

```bash
sudo mkdir -p /etc/docker
sudo tee /etc/docker/daemon.json <<-'EOF'
{
"registry-mirrors": [
    "https://bgmg0wzh.mirror.aliyuncs.com",
    "https://dockerproxy.com",
    "https://docker.m.daocloud.io",
    "https://mirror.baidubce.com",
    "https://docker.nju.edu.cn",
    "https://docker.mirrors.sjtug.sjtu.edu.cn"
  ]
}
EOF
```

重启 Docker 及相关服务：

```bash
sudo systemctl daemon-reload
sudo systemctl restart docker
```
