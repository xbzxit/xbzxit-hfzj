# Kafka安装


## 单机版


参考：
[VMware+Centos7 静态IP设置方法](https://gper.club/articles/7e7e7f7ffeg53gc1)

姊妹篇：
[CentOS Kafka 2.5.0 单机集群安装（伪集群）](https://gper.club/articles/7e7e7f7ff4g57gcag69)

[CentOS安装Zookeeper 3.6.1单节点](https://gper.club/articles/7e7e7f7ff4g57gcag6a)

[kafka常用命令(基于2.6版本)](https://gper.club/articles/7e7e7f7ff2g51gc6g65)

[基于Canal和Kafka实现数据同步](https://gper.club/articles/7e7e7f7ff3g59gc6g6d)

以安装路径为 /usr/local/soft为例

### JDK依赖

[CentOS7卸载openJDK安装JDK1.8](https://gper.club/articles/7e7e7f7ff7g59gc3g6a)

### 下载解压kafka

获取下载地址（点开具体版本）：
http://kafka.apache.org/downloads

下载Binary 二进制版本而不是源码

复制链接：
![20200709_142405.png](https://gper.club/server-img//mdEditors/2020/7/759489235af54da5848bed8d35665d73.png)

```
cd /usr/local/soft
wget https://mirror.bit.edu.cn/apache/kafka/2.5.0/kafka_2.13-2.5.0.tgz
tar -xzvf kafka_2.13-2.5.0.tgz
cd kafka_2.13-2.5.0
```

### 启动zookeeper

kafka需要依赖ZK，安装包中已经自带了一个ZK，也可以改成指定已运行的ZK。
如果改成指定的ZK需要修改修改 kafka 安装目录下的 config/server.properties 文件中的 zookeeper.connect 。这里使用自带的ZK。

后台启动ZK：

```
nohup ./bin/zookeeper-server-start.sh config/zookeeper.properties >> zookeeper.nohup &
```

检查zookeeper是否启动成功：

```
ps -ef|grep zookeeper
```

### 启动kafka

修改相关配置

```
vim config/server.properties
```

Broker ID启动以后就不能改了

```
broker.id=1
```

取消注释，改成本机IP：

```
listeners=PLAINTEXT://192.168.44.160:9092
```

num.partitions后面增加2行。
发送到不存在topic自动创建。允许永久删除topic。

```
num.partitions=1
auto.create.topics.enable=true
delete.topic.enable=true
```

后台启动kafka（kafka安装目录下）：

```
nohup ./bin/kafka-server-start.sh ./config/server.properties & 
```

日志在logs目录下

### 创建Topic

创建一个名为gptest的topic，只有一个副本，一个分区：

```
sh bin/kafka-topics.sh --create --zookeeper localhost:2181 --replication-factor 1 --partitions 1 --topic gptest
```

查看已经创建的 topic：

```
sh bin/kafka-topics.sh -list -zookeeper localhost:2181
```

### 启动Producer

打开一个窗口，在kafka解压目录下：

```
sh bin/kafka-console-producer.sh --broker-list localhost:9092 --topic gptest
```

### 启动Consumer

在一个新的远程窗口中：

```
sh bin/kafka-console-consumer.sh --bootstrap-server localhost:9092 --topic gptest --from-beginning
```

### Producer窗口发送消息

输入hello world 回车
![20200709_144635.png](https://gper.club/server-img//mdEditors/2020/7/189abc49401042f4b25f4c5da0aefc06.png)

消费者收到了消息：
![20200709_144648.png](https://gper.club/server-img//mdEditors/2020/7/b052bfea9eec4cc79af2f6418880aa85.png)

---

删除kafka全部数据步骤：
1、停止每台机器上的kafka；
2、删除kafka存储目录（server.properties文件log.dirs配置，默认为“/tmp/kafka-logs”）全部topic的数据目录；
3、删除zookeeper上与kafka相关的znode节点；除了/zookeeper
4、重启kafka。



## 伪集群


参考：
[VMware+Centos7 静态IP设置方法](https://gper.club/articles/7e7e7f7ffeg53gc1)

其他：
[kafka常用命令(基于2.6版本)](https://gper.club/articles/7e7e7f7ff2g51gc6g65)

以安装路径/usr/local/soft，IP 192.168.44.161为例
实际上就是在同一台机器上，运行多个kafka服务，只是端口不同。

基于kafka单机版安装流程，先看一遍这个步骤：
[CentOS安装kafka 2.5.0单机版](https://gper.club/articles/7e7e7f7ff4g57gccg68)

所有的kafka节点连接到相同的ZK（或ZK集群），需要先安装一个ZK。
ZK安装参考：
[CentOS安装Zookeeper 3.6.1单节点](https://gper.club/articles/7e7e7f7ff4g57gcag6a)
在本例中ZK也安装在这台机器上。

注意：
单机的kafka和集群的kafka不要混用一个zk，否则会出现数据混乱的问题。

### 1、下载解压kafka

```
cd /usr/local/soft
wget https://mirror.bit.edu.cn/apache/kafka/2.5.0/kafka_2.13-2.5.0.tgz
tar -xzvf kafka_2.13-2.5.0.tgz
cd kafka_2.13-2.5.0
```

### 2、修改配置文件

复制3个配置文件

```
cd config
cp server.properties server1.properties 
cp server.properties server2.properties 
cp server.properties server3.properties 
```

修改配置文件中的broker.id分别为1、2、3
listeners这一行取消注释，端口号分别为9093、9094、9095
log.dirs分别设置为kafka-logs1、kafka-logs2、kafka-logs3（先创建）

```
mkdir -p /tmp/kafka-logs1 /tmp/kafka-logs2 /tmp/kafka-logs3
```

server1.properties 的配置：

```
broker.id=1
listeners=PLAINTEXT://192.168.44.161:9093
log.dirs=/tmp/kafka-logs1
```

server2.properties 的配置：

```
broker.id=2
listeners=PLAINTEXT://192.168.44.161:9094
log.dirs=/tmp/kafka-logs2
```

server3.properties 的配置：

```
broker.id=3
listeners=PLAINTEXT://192.168.44.161:9095
log.dirs=/tmp/kafka-logs3
```

### 3、启动3个服务

第一步：
启动ZK。

再启动kafka。

```
cd ../bin
./kafka-server-start.sh -daemon ../config/server1.properties
./kafka-server-start.sh -daemon ../config/server2.properties
./kafka-server-start.sh -daemon ../config/server3.properties
```

PS：如果遇到zk node exists的问题，先把brokers节点删掉（临时解决方案）。

### 4、集群下创建Topic

在bin目录下，
创建一个名为gptest的topic，只有一个副本，一个分区：

```
sh kafka-topics.sh --create --zookeeper localhost:2181 --replication-factor 1 --partitions 1 --topic gptest
```

查看已经创建的 topic：

```
sh kafka-topics.sh -list -zookeeper localhost:2181
```

### 5、集群下启动Consumer

在一个新的远程窗口中：

```
sh kafka-console-consumer.sh --bootstrap-server 192.168.44.161:9093,192.168.44.161:9094,192.168.44.161:9095 --topic gptest --from-beginning
```

### 6、集群下启动Producer

打开一个新的窗口，在kafka解压目录下：

```
sh kafka-console-producer.sh --broker-list 192.168.44.161:9093,192.168.44.161:9094,192.168.44.161:9095 --topic gptest
```

### ~~~7、集群下Producer窗口发送消息

在生产者窗口输入hello world 回车
