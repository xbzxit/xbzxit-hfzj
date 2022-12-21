# log4j集成


## SpringMvc集成log4j

### 依赖

```xml
<dependency>
	<groupId>commons-logging</groupId>
	<artifactId>commons-logging</artifactId>
	<version>1.1</version>
</dependency>
<dependency>
	<groupId>org.apache.logging.log4j</groupId>
	<artifactId>log4j-api</artifactId>
	<version>2.0.2</version>
</dependency>
<dependency>
	<groupId>org.apache.logging.log4j</groupId>
	<artifactId>log4j-core</artifactId>
	<version>2.0.2</version>
</dependency>
```

* slf4j

```xml
//或者依赖slf4j
<properties>
	<slf4j.api.version>1.7.5</slf4j.api.version>
</properties>
<dependencies>
<dependency>
  <groupId>org.slf4j</groupId>  
  <artifactId>slf4j-log4j12</artifactId>  
  <version>${slf4j.api.version}</version>  
</dependency>
</dependencies>
```


### log4j.properties

```properties
//log4j.properties配置
### 设置###
log4j.rootLogger = WARN,stdout,D,E
### 输出信息到控制抬 ###
log4j.appender.stdout = org.apache.log4j.ConsoleAppender
log4j.appender.stdout.Target = System.out
log4j.appender.stdout.layout = org.apache.log4j.PatternLayout
log4j.appender.stdout.layout.ConversionPattern = [%p][%d{yyyy-MM-dd HH:mm:ss} %l] ?%m%n
 
#log4j.appender.stdout = org.apache.log4j.ConsoleAppender
#log4j.appender.stdout.Target = System.out
#log4j.appender.stdout.layout = org.apache.log4j.PatternLayout
#log4j.appender.stdout.layout.ConversionPattern = [%p][%d{yyyy-MM-dd HH:mm:ss} %l] ?%m%n
#log4j.appender.stdout.layout.ConversionPattern = [%p][%d{yyyy-MM-dd HH:mm:ss} %l] ?%m%n
### 输出DEBUG 级别以上的日志到=E://logs/error.log ###
#log4j.appender.D = org.apache.log4j.DailyRollingFileAppender
log4j.appender.D = org.apache.log4j.RollingFileAppender
log4j.appender.D.File = log/Wifi_sy/Wifi_sy_warn.log
log4j.appender.D.Append = true
log4j.appender.D.Threshold = WARN?
log4j.appender.D.MaxFileSize = 10240KB
log4j.appender.D.MaxBackupIndex = 3?
log4j.appender.D.layout = org.apache.log4j.PatternLayout
log4j.appender.D.layout.ConversionPattern = %d{yyyy-MM-dd HH:mm:ss} [%c:%L:[%p]] %m%n
### 输出ERROR 级别以上的日志到=E://logs/error.log ###
log4j.appender.E = org.apache.log4j.RollingFileAppender
log4j.appender.E.File = log/Wifi_sy/Wifi_sy_err.log
log4j.appender.E.Append = true
log4j.appender.E.Threshold = ERROR?
log4j.appender.E.MaxFileSize = 10240KB
log4j.appender.E.MaxBackupIndex = 3?
log4j.appender.E.layout = org.apache.log4j.PatternLayout
log4j.appender.E.layout.ConversionPattern = %d{yyyy-MM-dd HH:mm:ss} [%l:[%p]] %m%n
```

### web.xml

```xml
<context-param>
	<param-name>log4jConfigLocation</param-name>
	<param-value>classpath:log4j.properties</param-value><!-- log4j配置文件路径 -->
</context-param>
<!--log4jRefreshInterval为100000表示 开一条watchdog线程每10秒扫描一下配置文件的变化;   -->
<context-param>
	<param-name>log4jRefreshInterval</param-name>
	<param-value>100000</param-value>
</context-param>
<listener>
	<!-- 容器初始化（销毁）时开启（关闭）Log4j -->
	<!-- 1. 动态的改变记录级别和策略，不需要重启Web应用; 2. 把log文件定在 /WEB-INF/logs/ 而不需要写绝对路径。 -->
	<listener-class>org.springframework.web.util.Log4jConfigListener</listener-class>
</listener>
```


### 使用

```java
private static final Logger logger=Logger.getLogger(Test.class);



logger.fatal("致命错误");

logger.error("严重警告");

logger.warn("警告");

logger.info("普通信息");

logger.debug("调试信息");
```
