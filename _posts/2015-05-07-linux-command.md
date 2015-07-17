---
title: "Linux常用命令"
category: "编译安装"
tags: [Linux, command]
---
####Linux设置网卡开机启动
/etc/sysconfig/network-scripts/ifcfg-eth0 (这个文件名看你网卡名称而异，具体你到该目录看）
里面的内容里，有个ONBOOT=yes
这个就是决定你是否开机启动。 你编辑它，重启network服务就生效了。

####Linux重启网卡的几种方法

1、network
利用root帐户
service network restart

2、ifdown/ifup
ifdown eth0
ifup eth0

3、ifconfig
ifconfig eth0 down
ifconfig eth0 up