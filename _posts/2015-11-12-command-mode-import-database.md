---
title: "命令模式导入数据库"
category: "Linux Mysql"
tags: [命令模式导入数据库]
---


####命令模式导入数据库

###方法1：
	/usr/local/mysql/bin/mysql -uroot -p123 eduserviceshuabei < /home/mysqlbak/eduserviceshuabei.sql

###方法2：
	进入mysql命令行
	show databases;
	use 数据库名； （use eudserviceshuabei;）
	source:路径；（source /home/mysqlbak/eduserviceshuabei.sql;）

###导出数据库方法：
	mysqldump -h10.172.48.220  -uroot -p123456 database > D:/database.sql