# Consul注册中心

## Consul简介

> Consul 是一套开源的分布式服务发现和配置管理系统，由 HashiCorp 公司用 Go 语言开发
> 提供了微服务系统中的服务治理、配置中心、控制总线等功能。这些功能中的每一个都可以根据需要单独使用，也可以一起使用以构建全方位的服务网格，总之Consul提供了一种完整的服务网格解决方案。
> 它具有很多优点。包括:基于 ra 协议，比较简洁，支持健康检查,同时支持 HTTP 和 DNS 协议 支持跨数据中心的 WAN 集群 提供图形界面 跨平台，支持 Linux、Mac、Windows
>
> [Consul官网](https://www.consul.io/intro/index.html)

### 下载

> [下载地址](https://www.consul.io/downloads.html)

![image.png](./assets/1673315527673-image.png)

### 操作手册

> [操作手册](https://www.springcloud.cc/spring-cloud-consul.html)

![image.png](./assets/1673315697741-image.png)

### 能做什么

* 服务发现
  * 提供HTTP和DNS两种发现方式
* 健康监测
  * 支持多种协议，HTTP、TCP、Docker、Shell脚本定制化
* KV存储
  * key , Value的存储方式
* 多数据中心
  * Consul支持多数据中心

## 安装并运行Consul、

### 官网安装

[安装手册](https://learn.hashicorp.com/consul/getting-started/install.html)

### 查看版本号

> 配置环境变量， 双击运行查看版本号

![image.png](./assets/1673317385302-image.png)

### 启动

```bash
consul agent -dev
```

### 访问

[访问Consul](http://localhost:8500/)

![image.png](./assets/1673333124587-image.png)

## 服务器提供者

### 新建module

> springcloud-providerconsul-payment8006

![image.png](./assets/1673317687802-image.png)

### pom.xml

```xml
<dependencies>
        <!-- https://mvnrepository.com/artifact/org.springframework.cloud/spring-cloud-starter-consul-discovery -->
        <dependency>
            <groupId>org.springframework.cloud</groupId>
            <artifactId>spring-cloud-starter-consul-discovery</artifactId>
        </dependency>

        <dependency>
            <groupId>com.xbzxit</groupId>
            <artifactId>springcloud-api-commons</artifactId>
            <version>${project.version}</version>
        </dependency>


        <!-- https://mvnrepository.com/artifact/org.springframework.boot/spring-boot-starter-web -->
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-web</artifactId>
        </dependency>

        <!-- https://mvnrepository.com/artifact/org.springframework.boot/spring-boot-starter-web -->
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-actuator</artifactId>
        </dependency>

        <!-- https://mvnrepository.com/artifact/org.springframework.boot/spring-boot-devtools -->
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-devtools</artifactId>
            <scope>runtime</scope>
            <optional>true</optional>
        </dependency>

        <!-- https://mvnrepository.com/artifact/org.projectlombok/lombok -->
        <dependency>
            <groupId>org.projectlombok</groupId>
            <artifactId>lombok</artifactId>
            <optional>true</optional>
        </dependency>

        <!-- https://mvnrepository.com/artifact/org.springframework.boot/spring-boot-starter-test -->
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-test</artifactId>
            <scope>test</scope>
        </dependency>

    </dependencies>
```

## 服务消费者

## 三个注册中心异同点

### CAP

> CAP理论关注粒度是数据，而不是整体系统设计的策略

* C:Consistency(强一致性)
* A:Availability(可用性)
* P:Partition tolerance(分区容错)

```
最多只能同时较好的满足两个。
CAP理论的核心是: 一个分布式系统不可能同时很好的满足一致性，可用性和分区容错性这三个需求，
因此，根据CAP原理将NoSQL数据库分成了满足CA原则、满足CР原则和满足AP原则三大类: 

CA - 单点集群，满足一致性，可用性的系统，通常在可扩展性上不太强大。
CP - 满足一致性，分区容忍必的系统，通常性能不是特别高。
AP - 满足可用性，分区容忍性的系统，通常可能对—致性要求低一些。I
```

### AP(Eureka)

> 保整系统的可用性

![image.png](./assets/1673335678128-image.png)

![image.png](./assets/1673335690436-image.png)

### CP(Zookeeper/Consul)

> 保证数据的一致性

![image.png](./assets/1673335654293-image.png)

![image.png](./assets/1673335665914-image.png)
