# Matomo

以私有化部署为例：

## 后端

以下以部署到 `8082` 端口，MySQL 服务所在的网络为`trial-mysql_backend`为例。

```bash
docker run \
  -p 8082:80 \
  -d \
  --restart always \
  -v matomo_data:/data \
  --network trial-mysql_backend \
  --link mysql:db \
  --name=matomo \
  matomo
```

### 【可选】安装地理位置数据库

为了精确解析访问者的地理位置数据，需要额外安装 IP 数据库，Matomo 推荐使用 [db-ip.com 的免费数据库](https://db-ip.com/db/download/ip-to-city-lite)。

首先，需要将数据库文件下载到容器内：

```bash
# 进入容器命令行界面
docker exec -it matomo bash

# 进入 misc 目录
cd misc

# 下载免费版数据库 MMDB 格式压缩文件
curl -O https://download.db-ip.com/free/dbip-city-lite-2024-05.mmdb.gz

# 解压缩并重命名
gzip -d dbip-city-lite-2024-05.mmdb.gz
mv dbip-city-lite-2024-05.mmdb DBIP-City.mmdb
exit # 退出命令行
```

然后，在“设置 → 系统 → 地理位置”页面的“位置信息提供商”部分，点选“DBIP / GeoIP（PHP）”项并点击该部分底部的“保存”按钮，刷新一下页面即可。

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
- https://github.com/matomo-org/docker
