# SpringAOP

> AspectJ是Java社区里最完整最流行的AOP框架。
>
> 在Spring2.0以上版本中，可以使用基于AspectJ注解或基于XML配置的AOP。



## AOP前奏


## 

## HelloWorld

### pom.xml

```xml
<!--spirng-aspects的jar包-->
<dependency>
  <groupId>org.springframework</groupId>
  <artifactId>spring-aspects</artifactId>
  <version>5.3.1</version>
</dependency>
```

### 配置文件

```xml
<!--    开启组件扫描-->
<context:component-scan base-package="com.atguigu"></context:component-scan>
<!--    开启AspectJ注解支持-->
<aop:aspectj-autoproxy></aop:aspectj-autoproxy>
```

###


## Spring中JdbcTemplate



## 