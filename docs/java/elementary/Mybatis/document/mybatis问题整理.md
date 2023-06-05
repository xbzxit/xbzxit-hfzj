# mybatis问题整理

## 为什么没有配置EmpMapper.xml不报错

1.这个问题可以从这个@Select注解去看为什么不报错。

2.然后看这个注解的实现

![image.png](./assets/1655194358313-image.png)

3.然后查看这个Select 的实现类

![image.png](./assets/1655194383008-image.png)

4.查看parse方法

![image.png](./assets/1655194407343-image.png)

![]()

5.loadXmlResource 方法

![image.png](./assets/1655194434240-image.png)

![image.png](./assets/1655194461852-image.png)

![]()

![]()

没有报错，是因为抛出异常的时候被忽略了。

![image.png](./assets/1655194488142-image.png)

![]()
