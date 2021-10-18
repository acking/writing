---
title: "Yii2搭建新的项目"
category: "yii2"
tags: [yii2, php]
---

>Yii2官方网站：http://www.yiiframework.com

###通过 Composer 安装
第一步：

	php composer.phar global require "fxp/composer-asset-plugin:~1.2.0"
	#安装Composer Asset插件

第二步：

	php composer.phar create-project yiisoft/yii2-app-advanced advanced 2.0.10
	安装yii2的高级模版

eg:

	$ composer create-project yiisoft/yii2-app-advanced superplanner 2.0.10
	$ cd superplanner/
	#进入superplanner项目文件夹
	$ ls
	#安装yii2完成,查看文件目录列表
	$ php init
	#初始化php项目,ok可以通过http://localhost/superplanner/frontend/web/访问前台页面

###通过bitbucket管理代码
第一步：

	创建新的repository,得到git@bitbucket.org:******/superplanner.git

第二步：
将新项目加入到bitbucket里面

	$ cd superplanner #进入项目目录
	$ git init #初始化git
	$ git remote add origin ssh://git@bitbucket.org/******/superplanner.git
	$ git add -A #添加到本地仓库
	$ git commit -a -m "v0.1" #提交到本地仓库添加备注信息
	$ git push -u origin master #推送到远程master分支

至此新建Yii2项目已完成！