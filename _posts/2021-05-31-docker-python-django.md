---
title: "基于centos docker 配置python 生产环境"
category: "培训"
tags: [centos docker]
---
## 第一步run docker 镜像

```
docker run -d -it -p 8082:80  -v /data/pyapi/source/:/root/pyapi/source  -v /data/pyapi/config/:/root/pyapi/config -v /data/pyapi/logs/:/root/pyapi/logs --name web_server centoscd ../

```

## 第二步 进入docker 容器，下载所需安装包

dcoker exec -it {container_name} bash

下载文件
安装wget yum install -y wget

安装依赖配置yum install -y make pcre pcre-devel zlib zlib-devel openssl openssl-devel

安装编译环境 yum -y install gcc gcc-c++ autoconf automake make

nginx: wget http://nginx.org/download/nginx-1.20.1.tar.gz

Python v=3.8.6;wget https://www.python.org/ftp/python/3.8.6/Python-3.8.6.tgz

### nginx 安装
解压文件&安装 nginx
tar -zxvf nginx-1.17.0.tar.gz

./configure

安装make && make install

启动nginx
/usr/local/nginx/sbin/nginx

检测nginx状态：http://{your ip}:{docker port}/

查看nginx进程：ps -ef|grep nginx

### python 安装（这步不安装pyenv会自己安装）
解压文件&安装 python
tar -zxvf Python-3.8.6.tgz

./configure

安装make && make install

建立软连接
ln -s /usr/local/bin/python3.6 /usr/bin/python3

检测python3
python3 -V

查看python3进程：ps -ef|grep python3



### 配置不同的 虚拟环境
安装pyenv
mkdir ~/.pyenv
git clone git://github.com/yyuu/pyenv.git ~/.pyenv  
echo 'export PYENV_ROOT="$HOME/.pyenv"' >> ~/.bashrc  
echo 'export PATH="$PYENV_ROOT/bin:$PATH"' >> ~/.bashrc  
echo 'eval "$(pyenv init -)"' >> ~/.bashrc  
exec $SHELL -l 


安装对应版本的虚拟环境，取名为venv351
安装虚拟环境
$ pyenv install 3.8.6

$ pyenv virtualenv 3.8.6 try_service

pyenv activate try_service



pip install -r requirements.txt -i https://pypi.doubanio.com/simple

requirements.txt








