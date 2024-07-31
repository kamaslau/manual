# Installation

Official download page: [https://golang.google.cn/dl/](https://golang.google.cn/dl/).

## Linux

```bash
# Assign version (choose one)
# GO_VERSION=1.22.5 # Fixed value
read -p "Which version of Golang do you want? " GO_VERSION # Prompt for input

# Download, remove exsiting version, then install and echo current version
ARCH=$(dpkg --print-architecture)
curl -O -L "https://golang.org/dl/go${GO_VERSION}.linux-${ARCH}.tar.gz"
sudo rm -rf /usr/local/go && sudo tar -C /usr/local -xzf go${GO_VERSION}.linux-${ARCH}.tar.gz
export PATH=$PATH:/usr/local/go/bin
go versoin
```
