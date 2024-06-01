---
title: Frequently used Docker commands
permalink: docker-commands-frequently-used
published:
wordpress: https://kamaslau.wordpress.com/2023/07/05/docker-commands-frequently-used/
zhihu: https://zhuanlan.zhihu.com/p/641539108
jianshu: https://www.jianshu.com/p/cf0f89e8a195?v=1688517599977
---

## Build & output

```bash

# https://docs.docker.com/engine/reference/builder/

# Build with
docker build . -t local_image_name

# Tag with (remember to push at least 1 latest tag)
docker tag local_image_name:tagname org_name/image_name:tagname

# Push with
docker push org_name/local_image_name:tag_name

# Export with
docker save local_image_name -o local_image_name.tar

```

## Import & startup

```bash
# Pull with
docker pull org_name/local_image_name:tag_name

# Load from file with
docker load -i local_image_name.tar

# Run with (stop and remove operating container, if any)
if [ $(docker ps -aq --filter name=container_name) ]; then \
  docker stop container_name && docker rm container_name \
fi
docker container run --name container_name --restart always --add-host=host.docker.internal:host-gateway --privileged -d -p 3000:3000 local_image_name
```

## Misc Operations

Use these commands with caution under production env.

```bash
# Exec commands and enter container cli
docker exec -it container_name bash

# Copy file from container to pwd
docker cp container_name:/root/app/.env ./.env
```

## Clean-up

```bash
# Prune all
docker system prune -a

# Prune build cache
docker builder prune -f

# Prune dangling images
docker rmi $(docker images --filter dangling=true -q)

# Prune logs
truncate -s 0 $(docker inspect --format='{{.LogPath}}' container_name)

```

## Docker compose

```bash
# Update containers composed with new images (if any, otherwith would just perform a group restart)
docker compose pull && docker compose down && docker compose up -d
```
