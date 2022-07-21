# 使用Jmeter玩转接口测试

## 环境搭建

### 下载

[Jmeter](http://archive.apache.org/dist/jmeter/binaries/)

![image.png](./assets/image.png)

### 运行

![image.png](./assets/1648553294964-image.png)

### 主界面

![image.png](./assets/1648553320203-image.png)

### 设置语言

![image.png](./assets/1648553937890-image.png)

## 使用场景

> 通常都会有接口文档，才方便测试，但是如果没有测试文档也是可以测试的， 可以利用抓包进行测试

### 简易测试结构

![image.png](./assets/1648553788874-image.png)

### jmeter使用

* **【Test Plan】- 【Add】 - 【Threads】 - 【Thread Group】**

![image.png](./assets/1648555337959-image.png)

* **【线程组】 - 【Add】 - 【Sampler】 - 【HTTP Request】**

![image.png](./assets/1648555484284-image.png)

![image.png](./assets/1648555583077-image.png)

* **【线程组】 - 【Add】 - 【Listener】 - 【View Results Tree】**

![image.png](./assets/1648555666167-image.png)

* **发送请求**

![image.png](./assets/1648555857290-image.png)

* **发送请求必须有监听器才能查看请求结果**

![image.png](./assets/1648555984913-image.png)

![image.png](./assets/1648555283587-image.png)

##
