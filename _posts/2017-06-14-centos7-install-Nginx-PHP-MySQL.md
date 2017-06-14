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

######参考
http://www.jianshu.com/p/9eb18b3aeb16
http://www.ha97.com/5882.html

