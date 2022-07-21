# 开发Maven插件


## pom.xml

```xml
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0http://maven.apache.org/xsd/maven-4.0.0.xsd">
    <modelVersion>4.0.0</modelVersion>

    <groupId>pc.hfzj</groupId>
    <artifactId>maven-plugin</artifactId>
    <version>1.0-SNAPSHOT</version>
    <packaging>maven-plugin</packaging>

    <dependencies>
        <dependency>
            <groupId>org.apache.maven</groupId>
            <artifactId>maven-plugin-api</artifactId>
            <version>3.5.0</version>
        </dependency>
        <dependency>
            <groupId>org.apache.maven.plugin-tools</groupId>
            <artifactId>maven-plugin-annotations</artifactId>
            <version>3.5</version>
            <scope>provided</scope>
        </dependency>
    </dependencies>
    <build>
        <plugins>
            <plugin>
                <groupId>org.apache.maven.plugins</groupId>
                <artifactId>maven-compiler-plugin</artifactId>
                <version>3.6.1</version>
                <configuration>
                    <source>1.8</source>
                    <target>1.8</target>
                </configuration>
            </plugin>
        </plugins>
    </build>
</project>
```

## mojo.java

```java
@Mojo(name="mymojo",defaultPhase = LifecyclePhase.PACKAGE)
public class MyMojo extends AbstractMojo {

    @Parameter
    private String msg;
    @Parameter
    private List<String> options;
    @Parameter(property = "args")
    private String args;

    @Override
    public void execute() throws MojoExecutionException, MojoFailureException {
        System.out.printf("皇甫网络"+msg +options +args);
    }
}
```

## 引用自定义的插件

```xml
<plugin>
    <groupId>pc.hfzj</groupId>
    <artifactId>maven-plugin</artifactId>
    <version>1.0-SNAPSHOT</version>
    <configuration>
        <msg>11111</msg>
        <options>
            <option>1</option>
            <option>2</option>
        </options>
    </configuration>
</plugin>
```
