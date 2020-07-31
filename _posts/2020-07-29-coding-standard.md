---
title: "代码编写规范"
category: "培训"
tags: [code docs]
---
## 命名规范

#### 文件编码统一使用 UTF-8 编码

#### 核心原则：语义化

命名方法 要求采用统一的命名方法。常用命名方法有：

1）连写式命名法，如：helloworld

2）中线命名法，如：hello-world（目前采用此方法的较多，建议采用）

3）下划线命名法，如：hello_world

4）骆驼命名法，如：helloWorld

5）帕斯卡命名法，如：HelloWorld

6）其他方法


## 接口URL规范（RESTful API）


https://api.example.com/v1/


```
GET：读取（Read）
POST：新建（Create）
PUT：更新（Update）
PATCH：更新（Update），通常是部分更新
DELETE：删除（Delete）
```

```
eg:
GET /zoos：列出所有动物园
POST /zoos：新建一个动物园
GET /zoos/ID：获取某个指定动物园的信息
PUT /zoos/ID：更新某个指定动物园的信息（提供该动物园的全部信息）
PATCH /zoos/ID：更新某个指定动物园的信息（提供该动物园的部分信息）
DELETE /zoos/ID：删除某个动物园
GET /zoos/ID/animals：列出某个指定动物园的所有动物
DELETE /zoos/ID/animals/ID：删除某个指定动物园的指定动物

```

```
eg:过滤信息（Filtering）
?limit=10：指定返回记录的数量
?offset=10：指定返回记录的开始位置。
?page=2&per_page=100：指定第几页，以及每页的记录数。
?sortby=name&order=asc：指定返回结果按照哪个属性排序，以及排序顺序。
?animal_type_id=1：指定筛选条件

```


[RESTful API 设计指南 - 阮一峰](http://www.ruanyifeng.com/blog/2014/05/restful_api.html)

[RESTful API 最佳实践 - 阮一峰](http://www.ruanyifeng.com/blog/2018/10/restful-api-best-practices.html)

[Microsoft REST API Guidelines](https://github.com/microsoft/api-guidelines/blob/vNext/Guidelines.md)

[Best practices for REST API design](https://stackoverflow.blog/2020/03/02/best-practices-for-rest-api-design/)

[RESTful API Designing guidelines — The best practices](https://hackernoon.com/restful-api-designing-guidelines-the-best-practices-60e1d954e7c9)


## 接口文档规范


```
## 用户模块 UserController.php
#### 获取用户列表
[GET]- v1/users
#### 获取用户详细
[GET]- v1/users/1
#### 删除用户信息
[DELETE]- v1/users/1
#### 通过token获取用户信息
[GET]- v1/users/user-profile/<token>

```

## 附件模块 WebFileController.php

数据库字段

```
CREATE TABLE `web_file` (
	`id` int(11) unsigned NOT NULL AUTO_INCREMENT,
	`type` varchar(50) NOT NULL COMMENT '附件所属模块',
	`use_id` int(11) NOT NULL COMMENT '关联id',
	`file_title` varchar(100) DEFAULT NULL COMMENT '标题',
	`file_description` varchar(300) DEFAULT NULL COMMENT '描述',
	`path` varchar(200) DEFAULT NULL COMMENT '附件路径',
	`status` tinyint(1) DEFAULT '1' COMMENT '是否冻结状态：1启用，2禁用',
	`is_del` tinyint(1) DEFAULT '1' COMMENT '状态：1正常，2回收站',
	`created_at` int(11) DEFAULT NULL,
	`updated_at` int(11) DEFAULT NULL,
	PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=727 DEFAULT CHARSET=utf8mb4 COMMENT='附件表';


```

#### 获取列表
[GET]- v1/web-files

#### 新增
[POST]- v1/web-files

#### 更新
[PATCH]- v1/web-files/1

#### 删除
[DELETE]- v1/web-files/3

#### 文件上传
[POST]- v1/web-files/upload?uuid=acking&path=article

- uuid：标识id
- path：文件保存路径
- name_type: 文件名命名规则（1为上传名称，2为时间戳，默认为1）

```
HEADERS
Authorization：Bearer [token]
Content-Type: multipart/form-data

BODY:
file:File

Response 200 OK
{
	"class": "success",
	"status": "save-success",
	"msg":{
		"alert": "保存成功",
		"filename": "acking-i.min-1555758122.png"
	}
}
or
{
	"class": "error",
	"status" => 'save-error',
    "msg" => {
        'alert'=>"无法保存文件",
        'error_info'=> "error_info"
    }
}

```

#### 比较推荐的返回格式

```
http Status 200/500/400/....
API 返回格式
success：
{
    "status": 1,
    "message": "成功",
    "data": {
        "id": 1，
        "name": "acking"
    }
}

error：
{
    "status": 0,
    "message": "保存失败",
	 "data": {
        "error_info'=> {...}
         ...
    }
}

http Status为网络状态返回码
200 OK - [GET]：服务器成功返回用户请求的数据。
500 INTERNAL SERVER ERROR - [*]：服务器内部发生错误，大部分是代码的原因

status 为业务状态码，根据公司业务制定
0 失败
1 成功
10003   账号被封
10004   某参数不对
10005   缺少参数
```


## 代码管理规范

目录结构

```
api
docs
...
README.md
```

git 使用.gitignore [忽略特殊文件](https://www.liaoxuefeng.com/wiki/896043488029600/900004590234208)

[gitignore](https://github.com/github/gitignore)


## 代码安全规范

使用基本的 web 安全防范策略（XSS、CSRF、统一登录等）

Debug 信息禁止对外暴露（测试、正式环境禁止开启 debug 模式，建议规范错误日志，查看日志定位问题）

权限回收（应用统一回收通知模块，定时通知业务测负责人对外部人员权限进行梳理确认，应用开发框架集成）





