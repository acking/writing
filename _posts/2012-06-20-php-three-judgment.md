---
title: "php三元判断"
category: "代码人生"
tags: [php]
---
<?php

echo $a=1+1== 2?1+1==11?11:2:1+1==2?2:11;

echo $a=1+1==11?1+1==11?11:2:1+1==2?2:11;

if(1+1==2){

if(1+1==11){

echo 11;

}else{

echo 2;

}

}else{

if(1+1==2){

echo 1;

}else{

echo 11;

}

}

?>