# Nginx配置

> 核心配置文件 /usr/local/nginx/conf/nginx.conf

![image.png](./assets/1713014280479-image.png)

## 频率特高的常用命令

```shell
## 编辑配置文件
vim nginx.conf


## 测试配置文件是否有错
../sbin/nginx -t

## 查看是否Nginx进程
ps -ef | grep nginx

## 重新加载配置文件
./nginx -s reload
```

## 进程模型解析

> master进程： 主进程   Boss
>
> worker进程： 工作进程 ，低层干活的

### 信号命令

```shell
./nginx -s stop

./nginx -s quit

./nginx -s reload

./nginx -t

```

![image.png](./assets/1712390177264-image.png)

## 其他配置介绍

### nobody

```properties
user nobody

user root;
```

### epoll

> events 标签下的节点

```properties
# 默认使用epoll
use epoll

# 每个worker允许连接的客户端最大连接数
worker_connections 1024
```

### worker_processes

> 可以看到工作进程有2个 ， 如果设置3 就会有3个
>
> 一般情况根据CPU的核数来设置

```properties
worker_processes 2;
```

![image.png](./assets/1712496044134-image.png)

### error_log

> /var/log/nginx

```properties
# debug info notice warn error crit

#error_log logs/error.log;
#error_log logs/error.log notice;
#error_log logs/error.log info;
```

### pid

> /var/run/nginx

```properties
#pid  logs/nginx.pid;
```

## events

```properties
events {
    use epoll;
    ## 每个worker允许连接的客户端最大连接数
    worker_connections 10240;
} 
```

## http

```properties
http {
    ## mime.types 是一个文件
    include mime.types;

    ## 默认类型
    default_type application/octet-stream;

    ## 日志的格式
    #log_format main 
    # '$remote_addr - $remote_user [$time_local] "$request"'
    # '$status $body_bytes_sent "$http_referer"'
    #  '"$http_user_agent" "$http_x_forwarded_for"'
      
    #access_log logs/access.log main;

    # 提升文件的传输
    sendfile on;

    # 高效传输 取外卖，送外卖
    tcp_nopush on;
  
    # keepalive_timeout 0;
    keepalive_timeout 65;
  
    #gzip on;
  
    listen 88;
  
    server_name localhost;
  
    server {

    }

    localtion {
  
    }
}
```

## server

```properties
server {
    listen 88;
    server_name localhost;
    location / {
        root html;
        index index.html index.htm;
    }
    error_page 500 502 503 504  /50x.html;
    location = /50x.html {
        root html;
    }
}
```
