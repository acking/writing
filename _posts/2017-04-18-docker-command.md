---
title: "Docker Web Service Command"
category: "docker php"
tags: [docker, php]
---

###查看docker
docker ps

###进入docker
docker exec -it [DockerName] bash


###cassandra数据导出备份
docker exec -it dse_container cqlsh sh.dc.spark-6.rechaos.com  -u cassandra -p cassandra
COPY test.zss_0713_famecare_category_brand_new TO '/var/lib/cassandra/datafamecare_rawdata0713.csv' WITH HEADER = TRUE AND QUOTE='"' AND ESCAPE='\';
cd /data/dse/lib/cassandra/data/



