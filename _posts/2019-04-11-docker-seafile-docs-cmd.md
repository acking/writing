---
title: "docker安装seafile docs版"
category: "seafile"
tags: [docker seafile docs]
---

# 安装步骤

第一步进入centos系统

### 安装docker

```
$ yum install docker

```

### 启动docker

```
$ systemctl start docker

```

### 安装docker-compose

1\.

```
sudo curl -L "https://github.com/docker/compose/releases/download/1.24.0/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose

```

2\.

```
$ sudo chmod +x /usr/local/bin/docker-compose

```

3\.

```
$ sudo ln -s /usr/local/bin/docker-compose /usr/bin/docker-compose

```

参考网站：<https://docs.docker.com/compose/install/>

### 安装seafile-docs

进入系统用户目录，新建docker-compose 文件

```
$ cd ~
$ vi docker-compose.yml

```

文件内容

```
version: '2.0'
services:
  db:
    image: mariadb:10.3
    container_name: seafile-docs-mysql
    privileged: true
    ports:
      - "127.0.0.1:3306:3306"
    environment:
      - MYSQL_ROOT_PASSWORD=db_dev  # Set the root's password of MySQL service.
      - MYSQL_LOG_CONSOLE=true
    volumes:
      - /opt/mysql-data:/var/lib/mysql  # Specify the data directory of MySQL.

  memcached:
    image: memcached:1.4-alpine
    container_name: seafile-docs-memcached
    privileged: true
    ports:
      - "127.0.0.1:11211:11211"
          
  seafile:
    image: seafileltd/seafile-docs:latest
    container_name: seafile-docs
    privileged: true
    ports:
      - "8000:80"
#     - "443:443"  # If https is enabled, cancel the comment.
    volumes:
      - /opt/docs-data/:/shared/seafile   # Specifies the path to the seafile data persistent store.
    environment:
      - DB_HOST=db
      - DB_ROOT_PASSWD=db_dev
      - SEAFILE_ADMIN_EMAIL=test@test.com # Specifies seafile admin user, default is me@example.com
      - SEAFILE_ADMIN_PASSWORD=test     # Specifies seafile admin password, default is asecret
      - SEAFILE_SERVER_LETSENCRYPT=false   # Whether to use https or not
      - SEAFILE_SERVER_HOSTNAME=www.test.com # Specifies your host name if https is enabled
    depends_on:
      - db
      - memcached

```

### 执行安装

```
$ sudo docker-compose up

```

### 如若安装不成功

可能存在防火墙问题