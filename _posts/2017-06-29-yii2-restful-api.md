---
title: "yii2 restful api使用"
category: "yii2 restful api使用"
tags: [yii2, php]
---

##yii2构建restful api

###1、新建单独的webapi应用

拷贝backend项目全局替换为webapi

修改common\config\bootstrap.php文件，对新建的应用增加alias别名

	Yii::setAlias('@webapi', dirname(dirname(__DIR__)) . '/webapi');

###2、webapi美化路由
配置 webapi／config／mian.php

	'urlManager' => [
        'enablePrettyUrl' => true,
        'showScriptName' => false,
        'enableStrictParsing' =>true,//可先设置为false
        'rules' => [],
    ]

在入口web目录新建立.htaccess文件

	<IfModule mod_rewrite.c>

	Options +FollowSymLinks
	IndexIgnore */*
	RewriteEngine on

	# if a directory or a file exists, use it directly
	RewriteCond %{REQUEST_FILENAME} !-f
	RewriteCond %{REQUEST_FILENAME} !-d

	# otherwise forward it to index.php
	RewriteRule . index.php

	</IfModule>

###3、gii生成api版本v1的modules



