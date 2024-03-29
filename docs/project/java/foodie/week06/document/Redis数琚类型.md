# Redis数琚类型

## 客户端的使用

> redis-cli
>
> auth xbzxit  授权密码

```shell
set name aaaa
OK

get name 
"aaaa"

del name
(integer)1

get name
(nil)


keys * 
（empty list or set)

set name imooc
OK

set age 18
OK

key * 
1) "age"
2) "name"


type age 
string

set age 20
OK

get age 
"20"

SETNX age 18
(integer) 0


setnx sex man 
(integer)1


ttl age
(integer) -1

expire age 30 
(integer)1

#设置过期时间
set vip yes ex 20
OK

ttl vip
(integer)-2

get age 
(nil)


append name 123
(integer) 8 


get name 
"imooc123"

strlen name
(integer) 8 

set age 18


# 累加 默认步长1
incr age 
(integer) 19


# 累见
decr age 
(integer 17

#根据数字累减
decrby age 10

#根据数字累加
incrby age 5

```
