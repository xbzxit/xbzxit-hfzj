# JMS规范

## JMS经典模式详解

> JMS即Java消息服务（Java Message Service）应用程序接口，是一个Java平台中关于面向消息中间
> 件（MOM，Message oriented Middleware）的API，用于在两个应用程序之间，或分布式系统中发送
> 消息，进行异步通信。与具体平台无关的API，绝大多数MOM提供商都支持。
> 它类似于JDBC(Java Database Connectivity)。

### JMS消息

消息是JMS中的一种类型对象，由两部分组成：报文头和消息主体。
报文头包括消息头字段和消息头属性。字段是JMS协议规定的字段，属性可以由用户按需添加。
JMS报文头全部字段：

### 体系架构

```
JMS供应商产品
-JMS接口的一个实现。该产品可以是Java的JMS实现，也可以是非Java的面向消息中间件的适配器。

JMS Client
-生产或消费基于消息的Java的应用程序或对象。

JMS Producer
-创建并发送消息的JMS客户。

JMS Consumer
-接收消息的JMS客户。

JMS Message
-包括可以在JMS客户之间传递的数据的对象

JMS Queue
-缓存消息的容器。消息的接受顺序并不一定要与消息的发送顺序相同。消息被消费后将从队列
中移除。

JMS Topic
-Pub/Sub模式。

```

### 对象模型

### 模式

### 传递方式

### 供应商

## JMS在应用集群中的问题

##
