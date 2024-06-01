---
title: Frequently used Docker commands
permalink: docker-commands-frequently-used
published:
wordpress: https://kamaslau.wordpress.com/2023/07/05/docker-commands-frequently-used/
zhihu: https://zhuanlan.zhihu.com/p/641539108
jianshu: https://www.jianshu.com/p/cf0f89e8a195?v=1688517599977
---

```bash
# https://docs.docker.com/engine/reference/builder/

# Build with
docker build . -t local_image_name

# Tag with (remember to push at least 1 latest tag)
docker tag local_image_name:tagname <org-name>/<image-name>:tagname

# Push with
docker push <org-name>/local_image_name:tag-name

# Pull with
docker pull <org-name>/local_image_name:tag-name

# Export with
docker save local_image_name -o local_image_name.tar

# Load from file with
docker load -i local_image_name.tar

# Run with
docker container run --name container_name --restart always --add-host=host.docker.internal:host-gateway --privileged -d -p 3000:3000 local_image_name>

# Copy file from container to pwd (causes data leak, proceed with caution)
docker cp container_name:/root/app/.env ./.env

# Exec with (dont't do this in production container)
docker exec -it container_name bash

# Prune all
docker system prune -a

# Prune build cache
docker builder prune -f

# Prune dangling images
docker rmi $(docker images --filter dangling=true -q)

# Prune logs
truncate -s 0 $(docker inspect --format='{{.LogPath}}' container_name)
```
