# Migrate Docker Volume

## Pack current volume data

Pack all volume data as one _volume_backup.tar_ file in current directory.

```bash
docker run \
  --rm \
  --volumes-from matomo \
  -v $(pwd):/backup \
  ubuntu \
  tar cvf /backup/volume_backup.tar /data
```

## [Optional] Transport file to remote machine

```bash
scp ./volume_backup.tar user_name@host_url:~
```

Enter the password when being prompted.

## TODO Mount volume data to new container

First, start up the new container with a Docker Volume.

```bash
docker run -v /dbdata --name dbstore2 ubuntu /bin/bash
```

Then load the data from the tar file to the new Docker Volume.

```bash
docker run --rm --volumes-from matomo -v $(pwd):/backup ubuntu bash -c "cd /data && tar xvf /backup/volume_backup.tar --strip 1"
```

## Reference

- [Back up, restore, or migrate data volumes](https://docs.docker.com/engine/storage/volumes/#back-up-restore-or-migrate-data-volumes)
