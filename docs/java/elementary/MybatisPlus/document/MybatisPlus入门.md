# MybatisPlus入门

## 创建数据库

### 创建数据库及表

```sql
CREATE DATABASE `mp` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;
use `mp`;
CREATE TABLE `user` (
`id` bigint(20) NOT NULL COMMENT '主键ID',
`name` varchar(30) DEFAULT NULL COMMENT '姓名',
`age` int(11) DEFAULT NULL COMMENT '年龄',
`email` varchar(50) DEFAULT NULL COMMENT '邮箱',
PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
```

### 添加数据

```sql
NSERT INTO user (id, name, age, email) VALUES
(1, 'Jone', 18, 'test1@baomidou.com'),
(2, 'Jack', 20, 'test2@baomidou.com'),
(3, 'Tom', 28, 'test3@baomidou.com'),
(4, 'Sandy', 21, 'test4@baomidou.com'),
(5, 'Billie', 24, 'test5@baomidou.com');
```

## 新建聚合工程

> MybatisPlus-xbzxit

### pom.xml

```xml
<dependencyManagement>
    <dependencies>
        <!--数据库相关的-->
        <dependency>
            <groupId>mysql</groupId>
            <artifactId>mysql-connector-java</artifactId>
            <version>8.0.27</version>
        </dependency>
        <dependency>
            <groupId>com.alibaba</groupId>
            <artifactId>druid</artifactId>
            <version>1.0.31</version>
        </dependency>
    </dependencies>
</dependencyManagement>
```

## 新增子模块

> mybatisplus-quick

### pom.xml

```xml
<dependencies>
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter</artifactId>
    </dependency>
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-test</artifactId>
        <scope>test</scope>
    </dependency>
    <dependency>
        <groupId>com.baomidou</groupId>
        <artifactId>mybatis-plus-boot-starter</artifactId>
        <version>3.5.3</version>
    </dependency>
    <dependency>
        <groupId>mysql</groupId>
        <artifactId>mysql-connector-java</artifactId>
    </dependency>
    <dependency>
        <groupId>p6spy</groupId>
        <artifactId>p6spy</artifactId>
        <version>3.0.0</version>
    </dependency>
    <dependency>
        <groupId>com.alibaba</groupId>
        <artifactId>druid</artifactId>
    </dependency>
    <dependency>
        <groupId>org.projectlombok</groupId>
        <artifactId>lombok</artifactId>
    </dependency>
    <dependency>
        <groupId>junit</groupId>
        <artifactId>junit</artifactId>
        <scope>test</scope>
    </dependency>
</dependencies>
```

### application.yml

> 1、驱动类driver-class-name
> spring boot 2.0（内置jdbc5驱动），驱动类使用：`driver-class-name: com.mysql.jdbc.Driver`
>
> spring boot 2.1及以上（内置jdbc8驱动），驱动类使用：`driver-class-name: com.mysql.cj.jdbc.Driver`
> 否则运行测试用例的时候会有 WARN 信息
>
> 2、连接地址url
> MySQL5.7版本的url：
> `jdbc:mysql://localhost:3306/mybatis_plus?characterEncoding=utf-8&useSSL=false`
>
> MySQL8.0版本的url：
> `jdbc:mysql://localhost:3306/mybatis_plus?serverTimezone=GMT%2B8&characterEncoding=utf-8&useSSL=false`
>
> 否则运行测试用例报告如下错误：
> java.sql.SQLException: The server time zone value 'ÖÐ¹ú±ê×¼Ê±¼ä' is unrecognized or represents more

```yml
# DataSource Config
spring:
  datasource:
    type: com.alibaba.druid.pool.DruidDataSource            # 当前数据源操作类型
    driver-class-name: com.mysql.cj.jdbc.Driver             # mysql驱动包
    url: jdbc:mysql://10.105.0.235:3306/mp             # 数据库名称
    username: root
    password:
    dbcp2:
      min-idle: 5                                           # 数据库连接池的最小维持连接数
      initial-size: 5                                       # 初始化连接数
      max-total: 5                                          # 最大连接数
      max-wait-millis: 200                                  # 等待连接获取的最大超时时间
```

### 启动类

```java
@SpringBootApplication
@MapperScan("com.xbzxit.mp.mapper")
public class Application {

    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }

}
```

### 实体类

```java
@Data
@TableName("user")
public class User {

    @TableId(type = IdType.AUTO)
    private Long id;

    @TableField("name")
    private String name;
    private Integer age;
    private String email;
}
```

### mapper接口

```java
public interface UserMapper extends BaseMapper<User> {


}
```

### 测试类

> @Test 注解使用 org.junit.jupiter.api.Test;

```java
import org.junit.Assert;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;


@SpringBootTest(classes = Application.class)
public class SampleTest {

    @Autowired
    private UserMapper userMapper;

    @Test
    public void testSelect() {
        System.out.println(("----- selectAll method test ------"));
        List<User> userList = userMapper.selectList(null);
        Assert.assertEquals(5, userList.size());
        userList.forEach(System.out::println);
    }

}
```

## 日志方式打印SQL语句

### yml

```yml
# 打印SQL语句 方式一
logging:
  level:
    com:
      xbzxit:
        mp:
          mapper: debug
```

### 日志结果

```properties
2023-01-04 09:38:58.012  INFO 18980 --- [           main] com.alibaba.druid.pool.DruidDataSource   : {dataSource-1} inited
2023-01-04 09:38:59.057 DEBUG 18980 --- [           main] c.x.mp.mapper.UserMapper.selectList      : ==>  Preparing: SELECT id,name,age,email FROM user
2023-01-04 09:38:59.084 DEBUG 18980 --- [           main] c.x.mp.mapper.UserMapper.selectList      : ==> Parameters: 
2023-01-04 09:38:59.253 DEBUG 18980 --- [           main] c.x.mp.mapper.UserMapper.selectList      : <==      Total: 12010
```

## mybatisplus自带的打印SQL语句

### yml

```yml
# 配置MyBatis日志
mybatis-plus:
 configuration:
  log-impl: org.apache.ibatis.logging.stdout.StdOutImpl
```

### 日志结果

```properties
==>  Preparing: SELECT id,name,age,email FROM user WHERE (name LIKE ?)
==> Parameters: %j%(String)
<==    Columns: id, name, age, email
<==        Row: 1, Jone, 18, test1@baomidou.com
<==        Row: 2, Jack, 20, test2@baomidou.com
<==      Total: 2
```
