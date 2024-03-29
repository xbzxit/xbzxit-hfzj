# Redis介绍

## 什么是分布式缓存

1. redis是分布式计算
2. redis是一种缓存

## 什么redis

1. 非关系性数据库
2. 以 K-V 的形式存储的
3. 数据是存储在内存中，所以读取速度特别快
4. 支持持久化存储，AOF  RDB

## 安装

> [redis](https://redis.io/download)
>
> linux --- /software

```shell
tar -zxvf redis-5.0.0.tar.gz

#安装依赖
yum instal -y gcc-c++

#编译
make # 需要一段时间

# 安装
make install 

cd redis-5.0.5

cd utils

cp redis_init_script  /etc/init.d/

cd /etc/init.d  # 就会看到刚才拷贝的文件

cd /redis-home

mkdir /usr/local/redis -p

cp redis.conf   /usr/local/redis


cd /usr/local/redis

vim redis.config

    #后台运行
    daemonize yes

    dir /usr/local/redis/working

mkdir /usr/local/redis/working -p

    #可以被外部访问
    bind 0.0.0.0
  
    #修改访问密码
    requirepass xbzxit
  
    redis_pid /var/run/redis_6379.pid
  
    :wq


cd /etc/init.d/redis.conf

vim redis_init_script
  #设置端口号
  port 6379
  EXEC=/usr/local/bin/redis-server
  CONF="/usr/local/redis/redis.conf"
  
  
chmod 777 /etc/init.d/redis_init_script

#启动redis
./redis_init_script

ps -ef | grep redis

vim redis_init_script
  #chkconfig: 22345 10 90
  #description: Start and Stop redis
  
  :wq
  
chkconfig redis_init_script on


## 测试是否设置好redis自启动

reboot

ps -ef | grep redis

```
