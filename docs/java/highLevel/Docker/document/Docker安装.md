# Docker安装

## 安装步骤

> [官网 安装手册](https://docs.docker.com/engine/install/centos/)

### CentOS7安装Docker

* 查看Linux版本

```
# CentOS版本必须是7以上
cat /etc/redhat-release
```

![image.png](./assets/image.png)

* 查看内核版本

```
# Linux内核不低于3.10
uname -a
```

![image.png](./assets/1714957564920-image.png)

* 写在旧版本

```shell
sudo yum remove docker \
                  docker-client \
                  docker-client-latest \
                  docker-common \
                  docker-latest \
                  docker-latest-logrotate \
                  docker-logrotate \
                  docker-engine
```

![image.png](./assets/1714957624205-image.png)

* 安装gcc相关依赖
  > 可以上外网才能安装
  >

```shell
yum -y install gcc
```

![image.png](./assets/1714957761145-image.png)

```shell
yum -y install gcc-c++
```

![image.png](./assets/1714957788475-image.png)

* 安装需要的软件包

```shell
yum install -y yum-utils
```

![image.png](./assets/1714957920109-image.png)

![image.png](./assets/1714957947731-image.png)

* 设置镜像

```shell
yum-config-manager --add-repo http://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo
```

![image.png](./assets/1714958072073-image.png)

* 更新yum软件包索引

```shell
yum makecache fast
```

![image.png](./assets/1714958364356-image.png)

* 安装Docker-CE
  > 有问题再执行一次安装
  >

```shell
yum -y install docker-ce docker-ce-cli containerd.io
```

![image.png](./assets/1714958670798-image.png)

![image.png](./assets/1714958688253-image.png)

![image.png](./assets/1714958626825-image.png)

![image.png](./assets/1714959060195-image.png)

* 启动Docker

```shell
systemctl start docker
```

![image.png](./assets/1714959115175-image.png)

* 开机启动

```shell
systemctl enable docker
```

![image.png](./assets/1714959366393-image.png)

* 测试

```shell
# 查看版本
docker version
```

![image.png](./assets/1714959139844-image.png)

```shell
# 运行hello world
docker run hello-world
```

![image.png](./assets/1714959445274-image.png)

* 卸载

```shell
systemctl stop docker 

yum remove docker-ce docker-ce-cli containerd.io

rm -rf /var/lib/docker

rm -rf /var/lib/containerd
```

## 阿里云镜像加速

> [介绍](https://promotion.aliyun.com/ntms/act/kubernetes.html)


### 重启服务器

```shell
systemctl daemon-reload

systemctl restart docker
```


## 永远的HelloWorld

![image.png](./assets/1714959445274-image.png)


![image.png](./assets/1714959683444-image.png)

## 低层原理

> 1)docker有着比虚拟机更少的抽象层
> 由于docker不需要Hypervisor(虚拟机)实现硬件资源虚拟化,运行在docker容器上的程序直接使用的都是实际物理机的硬件资源。因此在CPU、内存利用率上docker将会在效率上有明显优势。
>
> (2)docker利用的是宿主机的内核,而不需要加载操作系统OS内核
> 当新建一个容器时,docker不需要和虚拟机一样重新加载一个操作系统内核。进而避免引寻、加载操作系统内核返回等比较费时费资源的过程,当新建一个虚拟机时,虚拟机软件需要加载OS,返回新建过程是分钟级别的。
>
> 而docker由于直接利用宿主机的操作系统,则省略了返回过程,因此新建一个docker容器只需要几秒钟。

![image.png](./assets/1714959628516-image.png)


![image.png](./assets/1714959655173-image.png)
