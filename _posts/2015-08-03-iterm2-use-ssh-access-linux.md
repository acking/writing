---
title: "ITerm2下使用ssh访问Linux"
category: "Linux"
tags: [ITerm2下使用ssh访问Linux]
---

iTerm2下有一个Profiles功能

可以将将远程访问的相关内容写成一个脚本，然后在Profile里调用即可。

#####脚本内容如下：
	#!/usr/bin/expect -f	
	set user <用户名>
	set host <ip地址>
	set password <密码>
	set timeout -1
 
	spawn ssh $user@$host
  	expect "*assword:*"
  	send "$password\r"
  	interact
	expect eof
	
保存这个文件到对应的位置，然后在profile里面用command命令调用它

eg：Command 中填写：expect 文件名。
