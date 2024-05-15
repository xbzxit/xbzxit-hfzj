# Docker常规安装

> 搜索镜像 - 拉取镜像 - 查看镜像 - 启动镜像 - 停止容器 - 移除容器


## Tomcat

* docker hub上面查找tomcat镜像

```shell
docker search tomcat
```

![image.png](./assets/1715452842276-image.png)


* 从docker hub上拉取tomcat镜像到本地

```shell
docker pull tomcat
```

![image.png](./assets/1715453264151-image.png)


* docker images查看是否有拉取到的tomcat

```shell
docker images tomcat
```

![image.png](./assets/1715453384246-image.png)


* 使用tomcat镜像创建容器实例(也叫运行镜像)

```shell
## -p 小写，主机端口:docker容器端口
## -P 大写，随机分配端口
## i:交互
## t:终端
## d:后台
docker run -it -p 8080:8080 tomcat
```


![image.png](./assets/1715453589438-image.png)















## Redis
