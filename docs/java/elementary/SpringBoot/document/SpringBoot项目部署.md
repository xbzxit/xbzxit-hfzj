# SpringBoot项目部署


## 打包部署

### 打包插件

> 打包插件必须加入

```xml
  <build>
    <plugins>
      <!-- 打jar包时如果不配置该插件，打出来的jar包没有清单文件 -->
      <plugin>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-maven-plugin</artifactId>
      </plugin>
    </plugins>
  </build>
```



### 打包

![image.png](./assets/1671588243272-image.png)


### jar包

![image.png](./assets/1671588362051-image.png)


### 运行

![image.png](./assets/1671588412466-image.png)


![image.png](./assets/1671588457117-image.png)

### 预览效果

![image.png](./assets/1671588542957-image.png)
