---
title: "mysql常用操作笔记"
category: "mysql"
tags: [mysql]
---

##mysql常用操作笔记

添加表字段
	alter table `subject` add `status` tinyint(1) DEFAULT '1' COMMENT '是否冻结状态：1启用，2禁用';
	alter table `subject` add `is_del` tinyint(1) DEFAULT '1' COMMENT '状态：1正常，2回收站';
	alter table `subject` add `created_at` int(11) DEFAULT NULL;
	alter table `subject` add `updated_at` int(11) DEFAULT NULL;


查看错误信息
	SHOW ENGINE INNODB STATUS;
	看看这个LATEST FOREIGN KEY ERROR部分

