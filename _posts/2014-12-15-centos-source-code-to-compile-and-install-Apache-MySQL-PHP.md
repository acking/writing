---
title: "CentOS源码编译安装Apache+MySQL+PHP"
category: "编译安装"
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

##安装wget工具
	yum -y install wget

##安装GCC软件套件
	yum -y install gcc
	yum -y install gcc-c++

##安装make
	yum -y install make

##安装vim
	yum -y install vim

##安装rz/sz命令
	yum install -y lrzsz
	sz命令发送文件到本地：sz filename
	rz命令本地上传文件到服务器：rz

##下载各个安装包：基本上多是官网提供的源
1.httpd
	2.apr
	3.apr-util
	4.php
	5.pcre
	6.libmcrypt
	wget http://mirrors.hust.edu.cn/apache//httpd/httpd-2.4.10.tar.gz
	wget http://mirrors.hust.edu.cn/apache//apr/apr-1.5.1.tar.gz
	wget http://apache.fayea.com//apr/apr-util-1.5.4.tar.gz
	wget http://am1.php.net/get/php-5.6.3.tar.gz/from/this/mirror
	wget ftp://mcrypt.hellug.gr/pub/crypto/mcrypt/libmcrypt/libmcrypt-2.5.7.tar.gz
	wget http://nchc.dl.sourceforge.net/project/mcrypt/Libmcrypt/2.5.8/libmcrypt-2.5.8.tar.gz
	wget ftp://ftp.csx.cam.ac.uk/pub/software/programming/pcre/pcre-8.38.tar.gz

##以上源码包全部用tar zxvf xxx.tar.gz解压缩
	tar zxvf httpd-2.4.10.tar.gz
	tar zxvf apr-1.5.1.tar.gz 
	tar zxvf apr-util-1.5.4.tar.gz
	tar zxvf php-5.6.3.tar.gz
	tar zxvf pcre-8.36.tar.gz
	tar zxvf libmcrypt-2.5.8.tar.gz

##安装Apache
###1.安装apache依赖包pcre
	cd pcre-8.36
	./configure --prefix=/usr/local/pcre
	make && make install
###2.安装openssl
	yum -y install openssl-devel
###3.移动apr和apr-util到httpd-2.4.3文件夹下srclib内并且重命名
	mv apr-1.5.1 /httpd-2.4.10/srclib/apr
	mv apr-util-1.5.4 /httpd-2.4.10/srclib/apr-util
###4.安装Apache 2.4.3主程序
	cd httpd-2.4.10
	./configure --prefix=/usr/local/apache --enable-so --enable-authn-dbm --enable-vhost-alias --enable-charset-lite --enable-deflate=shared --enable-ssl=shared --enable-expires=shared --enable-headers=shared --enable-rewrite=shared --enable-static-support --with-included-apr --with-mpm=prefork --enable-cache --enable-file-cache --with-pcre=/usr/local/pcre
	make && make install
###5.基本配置让apache自启动
	修改httpd.conf，wq保存退出
	vim /usr/local/apache/conf/httpd.conf
	找到“#ServerName www.example.com:80”，在下面加上这一行ServerName localhost:80

	加入配置文件实现自启动
	cp /usr/local/apache/bin/apachectl /etc/init.d/httpd
	vim /etc/init.d/httpd
	在#!/bin/sh 下面加上这两行，wq保存退出
	" # chkconfig: 345 90 90 "
	" # description: Apache "
	chkconfig --add /etc/init.d/httpd
	service httpd start

	防火墙设置：
	添加端口80，443以及ssh端口22，你也可以添加ftp端口21等等
	/sbin/iptables -I INPUT -p tcp --dport 80 -j ACCEPT
	/sbin/iptables -I INPUT -p tcp --dport 443 -j ACCEPT
	/etc/init.d/iptables save               ##保存配置
	/etc/init.d/iptables restart             ##重启防火墙 	

	到此。Apache的设置基本完成。

##安装MySQL

	注：重新运行配置，需要删除CMakeCache.txt文件
	rm CMakeCache.txt	

	设置MySQL用户和组
	groupadd mysql #新增mysql用户组
	useradd -r -g mysql mysql  #新增mysql用户

###1.下载mysql
	wget http://dev.mysql.com/get/Downloads/MySQL-5.6/mysql-5.6.22.tar.gz
	tar zxvf mysql-5.6.22.tar.gz
###2.安装cmake
	yum -y install cmake make
安装一些其他
	yum -y install  autoconf bison automake zlib* fiex* libxml* ncurses-devel libmcrypt* libtool-ltdl-devel*
###3.安装mysql 5.5.28主程序
	cd mysql-5.6.22
	cmake -DCMAKE_INSTALL_PREFIX=/usr/local/mysql -DMYSQL_DATADIR=/usr/local/mysql/data -DSYSCONFIGDIR=/usr/local/mysql/etc -DWITH_INNOBASE_STORAGE_ENGINE=1 -DWITH_ARCHIVE_STORAGE_ENGINE=1 -DWITH_BLACKHOLE_STORAGE_ENGINE=1 -DWITH_PARTITION_STORAGE_ENGINE=1 -DMYSQL_UNIX_ADDR=/tmp/mysqld.sock -DMYSQL_TCP_PORT=3306 -DENABLED_LOCAL_INFILE=1 -DEXTRA_CHARSETS=all -DDEFAULT_CHARSET=utf8 -DDEFAULT_COLLATION=utf8_general_ci -DMYSQL_USER=mysql
	执行
	make && make install
	官方说明：
	The MyISAM, MERGE, MEMORY, and CSV engines are mandatory (always compiled into the server) and need not be installed explicitly.（说明：mysql默认支持的数据库引擎有MyISAM, MERGE, MEMORY, CSV，无需在编译时再声明）
	所以上面的编译条件省掉了如下两行
	-DWITH_MYISAM_STORAGE_ENGINE=1
	-DWITH_MEMORY_STORAGE_ENGINE=1
	但INNODB一定要声明式安装，所以多了这一行
	-DWITH_INNOBASE_STORAGE_ENGINE=1	

	修改mysql安装目录
	cd /usr/local/mysql   
	chown -R mysql:mysql .


###4.配置mysql 5.6.22
	cp /usr/loacl/mysql/support-files/my-default.cnf /etc/my.cnf
	vim /etc/my.cnf
	修改my.cnf配置，把innodb相关选项前面的#去掉，大概在115-130行之间。	

	以下命令为mysql 启动及自启动配置
	cp /usr/local/mysql/support-files/mysql.server /etc/init.d/mysqld
	/usr/local/mysql/scripts/mysql_install_db --user=mysql --basedir=/usr/local/mysql --datadir=/usr/local/mysql/data	

	chkconfig --add mysqld
	chkconfig --level 345 mysqld on
	service mysqld start 	

	mysql的设置
	/usr/local/mysql/bin/mysql -uroot -p -S /tmp/mysqld.sock
	弹出输入password的提示，直接回车。
	设置密码：
	SET PASSWORD FOR 'root'@'localhost' = PASSWORD('123456');	

	quit;
	删除root密码为空的记录
	/usr/local/mysql/bin/mysql -uroot -p123456 -S /tmp/mysqld.sock

	use mysql;
	delete from user where password='';
	flush privileges;
	配置mysql允许root远程登录                                 
	grant all privileges on *.* to root@'%' identified by "123456";
	flush privileges;
	quit
	主机可以通过软件来远程访问centos的mysql数据库了

##安装PHP
###1.查看apache版本
	/usr/local/apache/bin/httpd -v
	查看apache已编译安装的模块
	/usr/local/apache/bin/httpd -M
###2.安装相关资源及依赖包
	yum -y install bzip2 bzip2-devel curl curl-devel libjpeg libjpeg-devel libpng libpng-devel freetype-devel
###3.使用php mcrypt 前必须先安装Libmcrypt
	libmcrypt源码安装方法：
	cd libmcrypt-2.5.8
	./configure --prefix=/usr/local
	make && make install
###4.安装php
	vim /usr/local/apache/bin/apxs
	编辑apxs，把#!/replace/with/path/to/perl/interpreter -w 这一行（一般是第一行）更改为"#!/usr/bin/perl -w"。
	注意：如果没有改，编译的时候会出现了“Sorry, I cannot run apxs”的错误提示。因为没有指明正确的perl执行程序的位置。
	cd php-5.6.3
	./configure --prefix=/usr/local/php --with-apxs2=/usr/local/apache/bin/apxs --with-libxml-dir=/usr/include/libxml2 --with-config-file-path=/usr/local/apache/conf --with-mysql=/usr/local/mysql --with-mysqli=/usr/local/mysql/bin/mysql_config --with-gd --enable-gd-native-ttf --with-zlib --with-mcrypt --with-pdo-mysql=/usr/local/mysql --enable-shmop --enable-soap --enable-sockets --enable-wddx --enable-zip --with-xmlrpc --enable-fpm --enable-mbstring --with-zlib-dir --with-bz2 --with-curl --enable-exif --enable-ftp --with-jpeg-dir=/usr/lib --with-png-dir=/usr/lib --with-freetype-dir=/usr/lib/
	make && make install
	php配置，编译安装时我的php.ini文件目录指向/usr/local/apache/conf
	cd php-5.6.3
	cp php.ini-production /usr/local/apache/conf/php.ini
###5.apache配置文件httpd.conf相关修改以支持PHP
	vim /usr/local/apache/conf/httpd.conf
	a.添加php支持
	AddType application/x-httpd-php .php .phtml
	AddType application/x-httpd-php-source .phps
	b.添加默认索引页面index.php，再找到“DirectoryIndex”，在index.html后面加上“ index.php”
	DirectoryIndex index.html index.php
	c.不显示目录结构，找到“Options Indexes FollowSymLinks”，修改为
	Options FollowSymLinks
	d.开启Apache支持伪静态，找到“AllowOverride None”，修改为
	AllowOverride All
	保存httpd.conf配置，然后再执行以下两行命令
	chown -R nobody. /usr/local/apache/htdocs/
	chmod -R 777 /usr/local/apache/htdocs/
	service httpd restart
	注意：重启有可能libphp5.so报错
