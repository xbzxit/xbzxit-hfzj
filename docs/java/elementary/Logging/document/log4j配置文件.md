# log4j配置文件

> Log4j建议日志只使用FATAL ,ERROR ,WARN ,INFO ,DEBUG这五个级别。



## log4j.xml

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE log4j:configuration SYSTEM "log4j.dtd">

<log4j:configuration>
    <!-- 将日志信息输出到控制台 -->
    <appender name="ConsoleAppender" class="org.apache.log4j.ConsoleAppender">
        <!-- 设置日志输出的样式 -->
        <layout class="org.apache.log4j.PatternLayout">
            <!-- 设置日志输出的格式 -->
            <param name="ConversionPattern" value="[%d{yyyy-MM-dd HH:mm:ss:SSS}] [%-5p] [method:%l]%n%m%n%n" />
        </layout>
        <!--过滤器设置输出的级别-->
        <filter class="org.apache.log4j.varia.LevelRangeFilter">
            <!-- 设置日志输出的最小级别 -->
            <param name="levelMin" value="WARN" />
            <!-- 设置日志输出的最大级别 -->
            <param name="levelMax" value="ERROR" />
            <!-- 设置日志输出的xxx，默认是false -->
            <param name="AcceptOnMatch" value="true" />
        </filter>
    </appender>

    <!-- 将日志信息输出到文件，但是当文件的大小达到某个阈值的时候，日志文件会自动回滚 -->
    <appender name="RollingFileAppender" class="org.apache.log4j.RollingFileAppender">
        <!-- 设置日志信息输出文件全路径名 -->
        <param name="File" value="D:/log4j/RollingFileAppender.log" />
        <!-- 设置是否在重新启动服务时，在原有日志的基础添加新日志 -->
        <param name="Append" value="true" />
        <!-- 设置保存备份回滚日志的最大个数 -->
        <param name="MaxBackupIndex" value="10" />
        <!-- 设置当日志文件达到此阈值的时候自动回滚，单位可以是KB，MB，GB，默认单位是KB -->
        <param name="MaxFileSize" value="10KB" />
        <!-- 设置日志输出的样式 -->
        <layout class="org.apache.log4j.PatternLayout">
            <!-- 设置日志输出的格式 -->
            <param name="ConversionPattern" value="[%d{yyyy-MM-dd HH:mm:ss:SSS}] [%-5p] [method:%l]%n%m%n%n" />
        </layout>
    </appender>

    <!-- 将日志信息输出到文件，可以配置多久产生一个新的日志信息文件 -->
    <appender name="DailyRollingFileAppender" class="org.apache.log4j.DailyRollingFileAppender">
        <!-- 设置日志信息输出文件全路径名 -->
        <param name="File" value="D:/log4j/DailyRollingFileAppender.log" />
        <!-- 设置日志每分钟回滚一次，即产生一个新的日志文件 -->
        <param name="DatePattern" value="'.'yyyy-MM-dd-HH-mm'.log'" />
        <!-- 设置日志输出的样式 -->
        <layout class="org.apache.log4j.PatternLayout">
            <!-- 设置日志输出的格式 -->
            <param name="ConversionPattern" value="[%d{yyyy-MM-dd HH:mm:ss:SSS}] [%-5p] [method:%l]%n%m%n%n" />
        </layout>
    </appender>

	<!-- 指定logger的设置，additivity指示是否遵循缺省的继承机制-->   
    <logger name="com.runway.bssp.activeXdemo" additivity="false">   
        <priority value ="info"/>     
        <appender-ref ref="activexAppender" />     
    </logger>   
   
    <!-- 根logger的设置-->   
    <root>   
        <priority value ="debug"/>   
        <appender-ref ref="myConsole"/>   
        <appender-ref ref="myFile"/>      
    </root>
</log4j:configuration>
```


## log4j.properties

```properties
log4j.rootLogger=INFO,consoleAppender,logfile,MAIL
log4j.addivity.org.apache=true
#ConsoleAppender，控制台输出
#FileAppender，文件日志输出
#SMTPAppender，发邮件输出日志
#SocketAppender，Socket 日志
#NTEventLogAppender，Window NT 日志
#SyslogAppender，
#JMSAppender，
#AsyncAppender，
#NullAppender
#文件输出：RollingFileAppender
#log4j.rootLogger = INFO,logfile
log4j.appender.logfile = org.apache.log4j.RollingFileAppender
log4j.appender.logfile.Threshold = INFO
# 输出以上的 INFO 信息
log4j.appender.logfile.File = INFO_log.html
#保存 log 文件路径
log4j.appender.logfile.Append = true
# 默认为 true，添加到末尾，false 在每次启动时进行覆盖
log4j.appender.logfile.MaxFileSize = 1MB
# 一个 log 文件的大小，超过这个大小就又会生成 1 个日志 # KB ，MB，GB
log4j.appender.logfile.MaxBackupIndex = 3
# 最多保存 3 个文件备份
log4j.appender.logfile.layout = org.apache.log4j.HTMLLayout
# 输出文件的格式
log4j.appender.logfile.layout.LocationInfo = true
#是否显示类名和行数
log4j.appender.logfile.layout.Title=title:\u63d0\u9192\u60a8\uff1a\u7cfb\u7edf\u53d1\u751f\u4e86\u4e25\u91cd\u9519\u8bef
#每天文件的输出：DailyRollingFileAppender
#log4j.rootLogger = INFO,errorlogfile
log4j.appender.errorlogfile = org.apache.log4j.DailyRollingFileAppender
log4j.appender.errorlogfile.Threshold = ERROR
log4j.appender.errorlogfile.File = ../logs/ERROR_log
log4j.appender.errorlogfile.Append = true
#默认为 true，添加到末尾，false 在每次启动时进行覆盖
log4j.appender.errorlogfile.ImmediateFlush = true
#直接输出，不进行缓存
# ' . ' yyyy - MM: 每个月更新一个 log 日志
# ' . ' yyyy - ww: 每个星期更新一个 log 日志
# ' . ' yyyy - MM - dd: 每天更新一个 log 日志
# ' . ' yyyy - MM - dd - a: 每天的午夜和正午更新一个 log 日志
# ' . ' yyyy - MM - dd - HH: 每小时更新一个 log 日志
# ' . ' yyyy - MM - dd - HH - mm: 每分钟更新一个 log 日志
log4j.appender.errorlogfile.DatePattern = ' . ' yyyy - MM - dd ' .log '
#文件名称的格式
log4j.appender.errorlogfile.layout = org.apache.log4j.PatternLayout
log4j.appender.errorlogfile.layout.ConversionPattern =%d %p [ %c] - %m %n %d
#控制台输出：
#log4j.rootLogger = INFO,consoleAppender
log4j.appender.consoleAppender = org.apache.log4j.ConsoleAppender
log4j.appender.consoleAppender.Threshold = ERROR
log4j.appender.consoleAppender.layout = org.apache.log4j.PatternLayout
log4j.appender.consoleAppender.layout.ConversionPattern =%d %-5p %m %n
log4j.appender.consoleAppender.ImmediateFlush = true
# 直接输出，不进行缓存
log4j.appender.consoleAppender.Target = System.err
# 默认是 System.out 方式输出
### 输出DEBUG 级别以上的日志到=E://logs/error.log ###
log4j.appender.D = org.apache.log4j.DailyRollingFileAppender
log4j.appender.D.File = E://logs/log.log
log4j.appender.D.Append = true
log4j.appender.D.Threshold = DEBUG 
log4j.appender.D.layout = org.apache.log4j.PatternLayout
log4j.appender.D.layout.ConversionPattern = %-d{yyyy-MM-dd HH:mm:ss}  [ %t:%r ] - [ %p ]  %m%n
 
### 输出ERROR 级别以上的日志到=E://logs/error.log ###
log4j.appender.E = org.apache.log4j.DailyRollingFileAppender
log4j.appender.E.File =E://logs/error.log 
log4j.appender.E.Append = true
log4j.appender.E.Threshold = ERROR 
log4j.appender.E.layout = org.apache.log4j.PatternLayout
log4j.appender.E.layout.ConversionPattern = %-d{yyyy-MM-dd HH:mm:ss}  [ %t:%r ] - [ %p ]  %m%n
#数据库：JDBCAppender
log4j.appender.DATABASE = org.apache.log4j.jdbc.JDBCAppender
log4j.appender.DATABASE.URL = jdbc:oracle:thin:@ 210.51 . 173.94 : 1521 :YDB
log4j.appender.DATABASE.driver = oracle.jdbc.driver.OracleDriver
log4j.appender.DATABASE.user = ydbuser
log4j.appender.DATABASE.password = ydbuser
log4j.appender.DATABASE.sql = INSERT INTO A1 (TITLE3) VALUES ( ' %d - %c %-5p %c %x - %m%n' )
log4j.appender.DATABASE.layout = org.apache.log4j.PatternLayout
log4j.appender.DATABASE.layout.ConversionPattern =% d - % c -%- 4r [ % t] %- 5p % c %x - % m % n
```
