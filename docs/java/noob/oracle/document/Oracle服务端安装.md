# Oracle安装

## Oracle服务端安装

**硬件要求**

> CPU: Pentium 1.6G Hz 以上
>
> 内存: 512MB 以上
>
> 可用硬盘空间:
> 系统盘: 500 MB 以上
> 安装盘: 1.6G 以上

**安装图解**

![image.png](./assets/1638527615687-image.png)

![image.png](./assets/1638527626554-image.png)

![image.png](./assets/1638527662013-image.png)

![image.png](./assets/1638527677624-image.png)

![image.png](./assets/1638527710559-image.png)

![image.png](./assets/1638527764684-image.png)

![image.png](./assets/1638527787573-image.png)

![image.png](./assets/1638527802036-image.png)

![image.png](./assets/1638527814422-image.png)

![image.png](./assets/1638527833613-image.png)

![image.png](./assets/1638527849157-image.png)

![image.png](./assets/1638527870367-image.png)

![image.png](./assets/1638527881841-image.png)

## Oracle客户端安装

![image.png](./assets/1638527922350-image.png)

![image.png](./assets/1638527945712-image.png)

![image.png](./assets/1638527965650-image.png)

![image.png](./assets/1638527979153-image.png)

![image.png](./assets/1638527991326-image.png)

![image.png](./assets/1638528009645-image.png)

![image.png](./assets/1638528022988-image.png)

![image.png](./assets/1638528036116-image.png)

![image.png](./assets/1638528050694-image.png)

![image.png](./assets/1638528066134-image.png)

![image.png](./assets/1638528081198-image.png)

![image.png](./assets/1638528098150-image.png)

![image.png](./assets/1638528112555-image.png)

![image.png](./assets/1638528124391-image.png)

> 若测试成功，则忽略此步。
> 如果测试不成功，需要操作如下：
> 通过开始-服务端选项的“配置和移植工具”-net manager来配置监听文件，并重启服务-homeListener
> 通过开始-服务端选项的“配置和移植工具”-net configuration assitant来加载监听器和本地Net服务连接。

![image.png](./assets/1638528164276-image.png)

![image.png](./assets/1638528175886-image.png)

![image.png](./assets/1638528186898-image.png)

![image.png](./assets/1638528201059-image.png)

![image.png](./assets/1638528212489-image.png)

![image.png](./assets/1638528232910-image.png)

![image.png](./assets/1638528247314-image.png)

![image.png](./assets/1638528294443-image.png)

## Oracle卸载

![image.png](./assets/1638528354961-image.png)

![image.png](./assets/1638528369905-image.png)

![image.png](./assets/1638528381615-image.png)

![image.png](./assets/1638528394656-image.png)

![image.png](./assets/1638528419993-image.png)

![image.png](./assets/1638528438327-image.png)

![image.png](./assets/1638528452889-image.png)

> 以上只是简单的将Oracle卸载掉了，还需要对注册表进行修改
> 修改注册表，在开始-运行中执行regedit命令，进入注册表，对注册表中的键值进行修改
> 将HKEY_CLASS_ROOT下所有以ORACLE或者ORAL开头的注册表项删除
> 将HKEY_LOCAL_MACHINE\SOFTWARE下ORACLE注册表项删除
> 将HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Service下的以Oracle开头的注册表项删除
> 重新启动计算机
> 删除 c:\Program Files\Oracle目录
>  
>  
> 通过以上步骤才正真的完成了Oracle的卸载，此时可以安装新的Oracle
