# Zookeeper安装

注意：Zookeeper需要依赖JDK环境。
参考：
[CentOS7卸载openJDK安装JDK1.8](https://gper.club/articles/7e7e7f7ff7g59gc3g6a)

另：
[Jean同学-zookeeper 集群搭建](https://gper.club/articles/7e7e7f7ff4g5dgc6g64)

## 1、下载ZK

https://zookeeper.apache.org/releases.html
这里下载二进制版本，不需要编译
以安装路径 /usr/local/soft为例

```
cd /usr/local/soft
wget https://mirror.bit.edu.cn/apache/zookeeper/zookeeper-3.6.1/apache-zookeeper-3.6.1-bin.tar.gz
```

## 2、解压

```
tar -xzvf apache-zookeeper-3.6.1-bin.tar.gz
```

### 3、修改配置文件

```
cd apache-zookeeper-3.6.1-bin/conf
cp zoo_sample.cfg zoo.cfg
```

端口号默认2181。
配置文件zoo.cfg里面的dataDir要修改，如果不改，需要创建这个目录

```
mkdir -p /tmp/zookeeper
```

## 4、启动ZK

```
cd ../bin
./zkServer.sh start
```

zookeeper默认端口 2181

输出日志：

```
ZooKeeper JMX enabled by default
Using config: /usr/local/soft/apache-zookeeper-3.6.1-bin/bin/../conf/zoo.cfg
Starting zookeeper ... STARTED
```

查看是否启动成功

```
ps -ef | grep zookeeper
```

其他命令：
查看zk的运行状态

```
./zkServer.sh status
```

客户端链接zk

```
./zkCli.sh 
```

ls 查看节点

```
ls
```

get 获取节点数据和更新信息

```
get /节点名字
```

create 创建节点 e 临时节点 s 顺序节点

```
create [-s] [-e] path data acl 
```

删除节点

```
delete path [version] 
```

## 集群

## 一、安装前准备

1. 三台Linux虚拟机
2. 虚拟机上安装JDK
3. 下载Zookeeper程序包
   下载地址：https://mirrors.tuna.tsinghua.edu.cn/apache/zookeeper/zookeeper-3.5.5/

## 二、搭建步骤

1. 解压zk程序包到指定目录下
2. 进入zk安装目录中的conf目录，在该目录下复制一份zoo_sample.cfg文件，并重命名成zoo.cfg
3. 打开zoo.cfg文件,可自由配置数据目录dataDir、服务启动的端口号clientPort、日志数据目录dataLogDir；
   ![图片.png](https://gper.club/server-img//mdEditors/2019/7/6b1a45de772548c6a268c6b00889938f.png)
4. 进入dataDir所配置的目录,创建myid文件，并在该文件中定义该zk节点的id【配置范围1~255】，如下图
   ![图片.png](https://gper.club/server-img//mdEditors/2019/7/03b9f6d06fd04c938f160a210c34dc0d.png)
   **注意：该id在集群的所有节点中不可重复!!**
5. 在另外2台虚拟机上重复1-4步骤，【注意myid不要重复】
6. 再次编辑zoo.cfg文件，按server.A=ip:port1:port2的格式配置；
   其中，
   A 指的是每台zk服务定义的myid;
   ip 为zk服务所对应虚拟机的ip地址；
   port1 为这台服务器与集群中的Leader服务器交换信息的端口；
   port2 表示的是万一集群中的Leader服务器挂了，需要一个端口来重新进行选举，选出一个新的Leader，这个端口就是用来执行选举时服务器相互通信的端口。
   如下图

![图片.png](https://gper.club/server-img//mdEditors/2019/7/07df1ff531b74d5a84d8245950523e04.png)

**注意1：每个zk节点都需配置上所有节点对应的服务信息【即3个服务节点每个都要在zoo.cfg文件中配置server.1、server.2、server.3的内容】
注意2：如果是伪集群搭建【即在一台机器上搭建集群，每个server的端口port1和port2配置都不可重复】**

## 三、启动集群

进入每个zk节点安装目录下的bin文件夹，输入命令 ./zkServer.sh start,启动zk服务。
启动所有zk服务节点之后，输入./zkServer.sh status 查看状态,出现类似如下内容即集群搭建成功。
