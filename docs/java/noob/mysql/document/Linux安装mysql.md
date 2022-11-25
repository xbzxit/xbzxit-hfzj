# Linux安装mysql


## rpm安装

```shell
## 通过浏览器下载
https://cdn.mysql.com/archives/mysql-5.7/mysql-5.7.29-1.el7.x86_64.rpm-bundle.tar

## 解压
tar -xvf mysql-5.7.29-1.el7.x86_64.rpm-bundle.tar

## 查找核心包
rpm -qa|grep mariadb
    mariadb-libs-5.5.60-1.el7_5.x86_64

## 安装核心包
rpm -e --nodeps mariadb-libs-5.5.60-1.el7_5.x86_64

chmod -R 777 mysql

## 安装组件
rpm -ivh mysql-community-common-5.7.29-1.el7.x86_64.rpm
rpm -ivh mysql-community-libs-5.7.29-1.el7.x86_64.rpm
rpm -ivh mysql-community-client-5.7.29-1.el7.x86_64.rpm
rpm -ivh mysql-community-server-5.7.29-1.el7.x86_64.rpm

## 配置
vim /etc/my.cnf  (改文件必须存在，不能自己创建)

[mysqld]
skip-grant-tables
character_set_server=utf8 
init_connect='SET NAMES utf8'


## 在linux 下运行 开机启动
systemctl start mysqld.service


## 启动mysql
mysql

## 修改root密码
update mysql.user set authentication_string=password('root') where user='root';
flush privileges;


## 
systemctl stop mysqld.service
编辑my.cnf配置文件将：skip-grant-tables这一行注释掉
重启mysql服务
systemctl start mysqld.service 


mysql -uroot -proot
set password=password('root');


如果想要设置简单一点的密码就要设置密码策略，否则设置简单的密码会出错
SHOW VARIABLES LIKE 'validate_password%';
1）、validate_password_length  固定密码的总长度；
2）、validate_password_dictionary_file 指定密码验证的文件路径；
3）、validate_password_mixed_case_count  整个密码中至少要包含大/小写字母的总个数；
4）、validate_password_number_count  整个密码中至少要包含阿拉伯数字的个数；
5）、validate_password_policy 指定密码的强度验证等级，默认为 MEDIUM；


## 设置密码的验证强度等级，设置 validate_password_policy 的全局参数为 LOW
set global validate_password_policy=LOW;


## 只要设置密码的长度小于 3 ，都将自动设值为 4
set global validate_password_length=4;


## 开放端口
firewall-cmd --zone=public --add-port=3306/tcp --permanent
--zone #作用域
--add-port=80/tcp #添加端口，格式为：端口/通讯协议
--permanent #永久生效，没有此参数重启后失效


## 远程登录
grant all privileges on *.* to 'root'@'%' identified by '123456' with grant option;


## 查看mysql启动的状态并查找启动失败的原因
systemctl status mysqld.service 
 
journalctl -xn
```
