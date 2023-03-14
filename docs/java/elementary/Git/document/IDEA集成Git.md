# IDEA集成Git

## 忽略的文件

> *.idea
>
> target

### idea特有的文件

![image.png](./assets/1678237338942-image.png)

### class文件

![image.png](./assets/1678237901488-image.png)

![image.png](./assets/1678237882227-image.png)

## git.ignore

> 存放位置 `C:/Users/HFZJ/git.ignore`

```properties
# Compiled class file
*.class
# Log file
*.log
# BlueJ files
*.ctxt
# Mobile Tools for Java (J2ME)
.mtj.tmp/
# Package Files #
*.jar
*.war
*.nar
*.ear
*.zip
*.tar.gz
*.rar
# virtual machine crash logs, see 
http://www.java.com/en/download/help/error_hotspot.xml
hs_err_pid*
.classpath
.project
.settings
target
.idea
*.iml
```

### .gitconfig

> .gitconfig 中引入  git.ignore

```properties
[user]
	name = xbzxit
	email = xbzxit@163.com
[http]
	sslVerify = false
[core]
	excludesfile = C:/Users/HFZJ/git.ignore
```

## 初始化本地仓库

### idea中集成git

![image.png](./assets/1678239482831-image.png)

* 配置git 并测试git 是否成功

![image.png](./assets/1678239553663-image.png)

* 找到项目所在的路径

![image.png](./assets/1678239625197-image.png)

* 将项目使用git管理

![image.png](./assets/1678239759220-image.png)

* 选择管控的项目

![image.png](./assets/1678239792195-image.png)

* 目录多了.git文件

![image.png](./assets/1678239869425-image.png)

## 添加到暂存区

### 添加之前

> 变红色

![image.png](./assets/1678239963160-image.png)

### 添加后

> 变绿色

![image.png](./assets/1678240198228-image.png)

![image.png](./assets/1678240227623-image.png)

### 提交到本地仓库

![image.png](./assets/1678240301552-image.png)

![image.png](./assets/1678242133548-image.png)


### 提交的仓库后

> 变白色

![image.png](./assets/1678242226846-image.png)


### 修改文件

> 变蓝色

![image.png](./assets/1678242348677-image.png)


## 切换分支

### 查看当前分支

![image.png](./assets/1678242578099-image.png)


### 切换版本

![image.png](./assets/1678242720758-image.png)


### 创建分支

![image.png](./assets/1678243092249-image.png)


![image.png](./assets/1678243057823-image.png)


### 切换分支

* 右下角切换分支

![image.png](./assets/1678243566483-image.png)

* 如果右下角没有

![image.png](./assets/1678243383304-image.png)

* 最下方右键

![image.png](./assets/1678243402271-image.png)


## 合并分支

> 就是将A 分支上的代码合并到B分支上

### master分支

> 黄色的是当前分支

![image.png](./assets/1678251661078-image.png)


* 右下角切换分支

![image.png](./assets/1678251869652-image.png)


* 合并分支到master

![image.png](./assets/1678252678243-image.png)

* 没有冲突时会自动合并

![image.png](./assets/1678252764842-image.png)


* 有冲突时要解决冲突再合并

> 分别切换到master, dev分支上 修改文件内容并提交
>
> 切换到master 分支上
>
> 将 dev 分支进行合并到master 上就会冲突

![image.png](./assets/1678254707051-image.png)


![image.png](./assets/1678254653290-image.png)


## 解决冲突

![image.png](./assets/1678254977803-image.png)


![image.png](./assets/1678254963048-image.png)


* 不解决冲突

![image.png](./assets/1678254775278-image.png)
