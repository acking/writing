---
title: "CentOS7安装Nginx+PHP+MySQL"
category: "安装web环境"
tags: [CentOS, WEB]
---
##检查服务器版本命令

	uname -a # 查看内核/操作系统/CPU信息
	head -n 1 /etc/issue # 查看操作系统版本
	file /sbin/init #查看linux机器是32位还是64位

##卸载yum或rpm安装的amp软件

	在编译安装lamp之前，首先先卸载已存在的rpm包吧。
	rpm -e httpd
	rpm -e mysql
	rpm -e php
	yum -y remove httpd
	yum -y remove php
	yum -y remove mysql-server mysql
	yum -y remove php-mysql

##禁用SeLinux

	selinux可能会致使编译安装失败，我们先禁用它。
	sed -i 's/SELINUX=enforcing/SELINUX=disabled/g' /etc/selinux/config //永久禁用，需要重启生效
	setenforce 0 //临时禁用，不需要重启

##升级centos

	yum -y update
	升级所有包，改变软件设置和系统设置,系统版本内核都升级
	yum -y upgrade
	升级所有包，不改变软件设置和系统设置，系统版本升级，内核不改变

##Nginx 部分
Nginx为centos提供了Pre-Built的发布包，使得安装起来非常简单。
配置nginx软件包仓库

在Linux下创建这个文件/etc/yum.repos.d/nginx.repo，并编辑进去如下内容：

	[nginx]
	name=nginx
	repobaseurl=http://nginx.org/packages/OS/OSRELEASE/$basearch/
	gpgcheck=0
	enabled=1
	其中，OS要替换为rhel或者centos；OSRELEASE需要替换为5.x,6.x,7.x分别替换为5,6,7。

可见nginx官网

执行yum安装

	yum install nginx -y

查看nginx版本

	nginx -v
启动nginx

	service nginx start
停止

	service nginx stop
配置文件

	/etc/nginx/conf.d/ 这里
需要注意将root放在server下面，这样可以保证全局访问。

默认首页 /usr/share/nginx/html

##php部分
安装软件 nginx / php

安装 remi 源
1、首先确认yum源的地址是否有效。

	# yum install epel-release
	# rpm -Uvh http://rpms.famillecollet.com/enterprise/remi-release-7.rpm
	yum install http://rpms.famillecollet.com/enterprise/remi-release-7.rpm

2、确认安装的php版本

	yum list --enablerepo=remi --enablerepo=remi-php56 | grep php

3、安装php5.6及常用模块

	yum install --enablerepo=remi --enablerepo=remi-php56 nginx php php-opcache php-pecl-apcu php-devel php-mbstring php-mcrypt php-mysqlnd php-phpunit-PHPUnit php-pecl-xdebug php-pecl-xhprof php-pdo php-pear php-fpm php-cli php-xml php-bcmath php-process php-gd php-common php-xcache

启动服务

	systemctl start nginx
	systemctl start php-fpm

##mysql部分

安装repo 源

	yum install http://repo.mysql.com/mysql-community-release-el7-5.noarch.rpm

安装 mysqlserver

	yum install mysql-server

启动mysql

	systemctl start mysqld


补充
安装php7
webtatic方式

	rpm -Uvh https://dl.fedoraproject.org/pub/epel/epel-release-latest-7.noarch.rpm
	rpm -Uvh https://mirror.webtatic.com/yum/el7/webtatic-release.rpm

	yum install php70w php70w-opcache php70w-fpm


nginx配置

	server{
        listen 80;
        server_name lara.0003688.com;

	    root /home/www/laravel/public;
	    index index.php index.html index.htm;

	    location / {
	        try_files $uri $uri/ /index.php?$query_string;
	    }
	    location ~ \.php$ {
	        try_files $uri /index.php =404;
	        fastcgi_split_path_info ^(.+\.php)(/.+)$;
	        fastcgi_pass 127.0.0.1:9000;
	        fastcgi_index index.php;
	        fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
	        include fastcgi_params;
	    }
	}

如果显示空白可能是

	  chmod -R 777 storage


开机自启动nginx，php-fpm（其他服务类似）
centos 7以上是用Systemd进行系统初始化的，Systemd 是 Linux 系统中最新的初始化系统（init），它主要的设计目标是克服 sysvinit 固有的缺点，提高系统的启动速度。
Systemd服务文件以.service结尾，比如现在要建立nginx为开机启动，如果用yum install命令安装的，yum命令会自动创建nginx.service文件，直接用命令systemcel enable nginx.service设置开机启动即可。

	systemcel enable nginx.service

源码安装的手动建立nginx.service服务文件

在系统服务目录里创建nginx.service文件

	vi /lib/systemd/system/nginx.service

写入以下内容（路径改成自己的）

	[Unit]
	Description=nginx
	After=network.target
	[Service]
	Type=forking
	ExecStart=/www/lnmp/nginx/sbin/nginx -c /www/lnmp/nginx/conf/nginx.conf
	ExecReload=/www/lnmp/nginx/sbin/nginx -s reload
	ExecStop=/www/lnmp/nginx/sbin/nginx -s quit
	PrivateTmp=true
	[Install]
	WantedBy=multi-user.target

在系统服务目录里创建php-fpm.service文件

	vi /lib/systemd/system/php-fpm.service

写入以下内容（路径改成自己的）

	[Unit]
	Description=php-fpm
	After=network.target
	[Service]
	Type=forking
	ExecStart=/www/lnmp/php/sbin/php-fpm
	PrivateTmp=true
	[Install]
	WantedBy=multi-user.target

Unit]:服务的说明
Description:描述服务
After:描述服务类别
[Service]服务运行参数的设置
Type=forking是后台运行的形式
ExecStart为服务的具体运行命令
ExecReload为重启命令
ExecStop为停止命令
PrivateTmp=True表示给服务分配独立的临时空间
注意：[Service]的启动、重启、停止命令全部要求使用绝对路径
[Install]运行级别下服务安装的相关设置，可设置为多用户，即系统运行级别为3

测试并加入开机自启

先关闭nginx，php-fpm

使用以下命令开启

	systemctl start nginx.service             #如果服务是开启状态，使用此命令会启动失败。
	systemctl start php-fpm.service

开启成功，将服务加入开机自启

	systemctl enable nginx.service                #注意后面不能跟空格
	systemctl enable php-fpm.service

重启服务器，查看是否启动

	shutdown -r now        #重启

	systemctl list-units --type=service           #查看运行的服务

其他命令

	systemctl start nginx.service              #启动nginx服务
	systemctl enable nginx.service             #设置开机自启动
	systemctl disable nginx.service            #停止开机自启动
	systemctl status nginx.service             #查看服务当前状态
	systemctl restart nginx.service　          #重新启动服务
	systemctl list-units --type=service        #查看所有已启动的服务






参考
http://www.jianshu.com/p/9eb18b3aeb16
http://www.ha97.com/5882.html

http://www.jianshu.com/p/b4631a899030

http://www.jianshu.com/p/b5fa86d54685