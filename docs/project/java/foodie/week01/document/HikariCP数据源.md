# HikariCP数据源

## 加入数据库驱动
```xml
<dependency>
    <groupId>mysql</groupId>
    <artifactId>mysql-connector-java</artifactId>
    <version>8.0.29</version>
</dependency>
```


## 配置数据源
> appliction.yml
> 

```properties
spring:
  datasource:                                           # 数据源的相关配置
    type: com.zaxxer.hikari.HikariDataSource          # 数据源类型：HikariCP
    driver-class-name: com.mysql.cj.jdbc.Driver          # mysql驱动
    url: jdbc:mysql://192.168.128.59:3306/foodie-db?useUnicode=true&characterEncoding=UTF-8&autoReconnect=true&useSSL=false
    username: root
    password: 123456
    hikari:
      connection-timeout: 30000       # 等待连接池分配连接的最大时长（毫秒），超过这个时长还没可用的连接则发生SQLException， 默认:30秒
      minimum-idle: 5                 # 最小连接数
      maximum-pool-size: 20           # 最大连接数
      auto-commit: true               # 自动提交
      idle-timeout: 600000            # 连接超时的最大时长（毫秒），超时则被释放（retired），默认:10分钟
      pool-name: DateSourceHikariCP     # 连接池名字
      max-lifetime: 1800000           # 连接的生命时长（毫秒），超时而且没被使用则被释放（retired），默认:30分钟 1800000ms
      connection-test-query: SELECT 1


```
