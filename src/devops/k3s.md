# K3s

## 卸载

### server 节点

```bash
sh -x /usr/local/bin/k3s-uninstall.sh
```

### agent 节点

```bash
sh -x /usr/local/bin/k3s-agent-uninstall.sh
```

## 安装

### server 节点

```bash
curl -sfL https://get.k3s.io | sh -

# 大陆地区镜像
curl -sfL https://rancher-mirror.rancher.cn/k3s/k3s-install.sh | INSTALL_K3S_MIRROR=cn sh -
```

kubeconfig 文件将写入到 `/etc/rancher/k3s/k3s.yaml`，由 K3s 安装的 kubectl 将自动使用该文件。

查看集群中各个节点情况：

```bash
sudo k3s kubectl get node
```

### agent 节点

首先，从 server 节点获取 `node-token`

```bash
cat /var/lib/rancher/k3s/server/node-token
```

安装 K3s，并注册为 agent 节点：

```bash
curl -sfL https://get.k3s.io | K3S_URL=https://master_ip_or_url:6443 K3S_TOKEN=your_node_token sh -

# 大陆地区镜像
curl -sfL https://rancher-mirror.rancher.cn/k3s/k3s-install.sh | INSTALL_K3S_MIRROR=cn K3S_URL=https://master_ip_or_url:6443 K3S_TOKEN=your_node_token sh -
```

## 参考资料

- https://docs.k3s.io/zh/quick-start
