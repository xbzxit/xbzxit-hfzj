# Nginx配置

> 删除无用的配置
>
> ngin.conf

## 配置结构与指令语法

```json
main 全局配置 
event 配置工作模式以及连接数
    http http模块相关配置
        server 虚拟主机配置，可以有多个
            location 路由规则， 表达式
            upstream 集群，内网服务器
```

## 黑心配置文件

## Nginx常用命令

## 日志切割

## upstream的指令参数

## max_connx

### slow_start

> 商业版使用

### down

### backup

### max_fails

### fail_timeout

## ip_hash
