# Docker 中国大陆镜像配置

首先，获取[阿里云镜像加速器的私有地址](https://cr.console.aliyun.com/cn-shanghai/instances/mirrors)

然后与其它公开镜像服务路径一并写入配置文件，并重启服务：

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
sudo systemctl daemon-reload
sudo systemctl restart docker
```
