# Installation

Official download page: [https://golang.google.cn/dl/](https://golang.google.cn/dl/).

## Linux

```bash
#!/bin/bash
# Run with "sh -x upgrade_golang.sh"
# Author: Kamas Lau<kamaslau@dingtalk.com>
# Golang 安装/更新脚本

# Assign version (choose one)
# GO_VERSION=1.22.5 # Fixed value
read -p "Which version of Golang do you want? " GO_VERSION # Prompt for input
[ $(go env GOVERSION) = 'go1.22.5' ] && echo 'Version ${GO_VERSION} had already been installed.' && exit 1

# Download, remove exsiting version, then install and echo current version
ARCH=$(dpkg --print-architecture)
curl -O -L "https://golang.org/dl/go${GO_VERSION}.linux-${ARCH}.tar.gz"
sudo rm -rf /usr/local/go && sudo tar -C /usr/local -xzf go${GO_VERSION}.linux-${ARCH}.tar.gz
export PATH=$PATH:/usr/local/go/bin
go version

# EOL
exit 0
```
