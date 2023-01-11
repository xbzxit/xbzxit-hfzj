# Zookeeper注册中心

## 注册中心Zookeper
> zookeeper是一个分布式协调工具，可以实现注册中心功能
> 关闭Linux服务器防火墙后启动zookeeper服务器
> zookeeper服务器取代Eureka服务器，zk作为服务注册中心


## 服务提供者
### 新建module
> springcloud-provider-payment8004

### pom.xml


### yml


### 主启动类


### Controller


### 启动8004 注册进ZK


### 验证测试


### 思考
>服务节点是临时节点




## 服务消费者