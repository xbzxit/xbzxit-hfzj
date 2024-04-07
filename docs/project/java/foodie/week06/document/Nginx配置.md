# Nginx配置

> 核心配置文件 /usr/local/nginx/conf/nginx.conf

## 频率特高的常用命令

```shell
## 编辑配置文件
vim nginx.conf


## 测试配置文件是否有错
../sbin/nginx -t

## 查看是否Nginx进程
ps -ef | grep nginx
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
