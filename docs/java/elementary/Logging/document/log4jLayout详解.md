# log4jLayout详解


## HTMLLayout

> 格式化日志输出为HTML表格形式，一般用的比较少，html格式如下：

```html
<table cellspacing="0" cellpadding="4" border="1" bordercolor="#224466" width="100%">
    <tr>
        <th>Time</th>
        <th>Thread</th>
        <th>Level</th>
        <th>Category</th>
        <th>Message</th>
    </tr>
    <tr>
        <td>0</td>
        <td title="main thread">main</td>
        <td title="Level">INFO</td>
        <td title="com.open1111.Test category">com.Test</td>
        <td title="Message">普通Info信息</td>
    </tr>
    <tr>
        <td>2</td>
        <td title="main thread">main</td>
        <td title="Level"><font color="#993300"><strong>FATAL</strong></font></td>
        <td title="com.open1111.Test category">com.Test</td>
        <td title="Message">严重错误fatal信息</td>
    </tr>
    <tr>
        <td>3</td>
        <td title="main thread">main</td>
        <td title="Level"><font color="#993300"><strong>ERROR</strong></font></td>
        <td title="com.open1111.Test category">com.Test</td>
        <td title="Message">报错信息</td>
    </tr>
    <tr>
        <td bgcolor="#993300" style="color:White; font-size : xx-small;" colspan="6">java.lang.IllegalArgumentException: 非法参数
<br>     at com.Test.main(Test.java:17)
        </td>
    </tr>
</table>
```


## SimpleLayout

> 简单的日志输出格式化，打印的日志格式为（info - message）,格式如下：

```java
og.debug("hello 51gjie");
log.info("hello 51gjie");

//输出
DEBUG - hellow 51gjie
INFO - hellow 51gjie
```


## PatternLayout

> 最强大的格式化期，可以根据自定义格式输出日志，如果没有指定转换格式，就是用默认的转换格式
>
> **1. %c %c{数字} 输出日志器的名称**
>
> 日志器名称为：com.linxingyang.Test1
>
> %c | %c{1} | %c{2} | %c{3} | %c{4}分别输出com.linxingyang.Test1 | Test1 | linxingyang.Test1 | com.linxingyang.Test1 | com.linxingyang.Test1
>
> 2. **%C %C{数字} 输出调用者的名称**
> 3. %d 输出打印日志的日期时间**
>
> 常用的格式有 %d{DATE}, %d{ABSOLUTE}, %d{HH:mm:ss,SSS}, %d{ddMMyyyy HH:mm:ss,SSS}
>
>
> 4. %n - 换行
> 5. %m - 日志内容
> 6. %p - 日志级别(FATAL,   ERROR,   WARN,   INFO,   DEBUG   or   custom)
> 7. %r - 程序启动到现在的毫秒数
> 8. %t - 当前线程名
> 9. %l - 同 %F%L%C%M
> 10. %F - java源文件名
> 11. %L - java源码行数
> 12. %C - java类名,%C{1} 输出最后一个元素
> 13. %M-java方法名



```properties
log4j.appender.console.layout=org.apache.log4j.PatternLayout
log4j.appender.console.layout.ConversionPattern=[%d{HH\:mm\:ss\:SSS}][%p] (%c\:%L) - %m%n 

输出：
输出格式为：[00:10:59:232][INFO] (com.web.action:35) - 服务器启动
```
