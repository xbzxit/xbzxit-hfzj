# Python基础

## 注释

单行注释  #加上空格

多行注释：""" """

## 变量

> 变量是用来临时存储程序运行中所需要的一些数据

**变量命名规则**

标识符由字母，下划线和数字组成，且数字不能开头

python中的标识符是区分大小写的

变量名一般用小写加下划线组成

不能和关键字和已有的名字冲突

**如何定义一个变量**

```python
#首先会申请一块内存10

#变量存储程序需要的临时数据

a=10 #创建一个新的变量，并且赋值操作

a=100 #重新赋值
```

**变量的类型**

> 在现实生活中，数据有多种类型，文本类型，数值类型的，类型约定了数据之间的计算规则
>
> python里面定义变量不需要指定类型，根据赋值来推断变量类型
>
> print("hello world!")

integer（整数）

float（浮点数，小数）

bool（布尔类型）用来表示逻辑运算结果，该变量只有两个值true和false

str（字符串类型）

```python
# 两个数字相加
num1 = 10
num2 = 20
ret = num1 + num2
print(ret)

# int
age = 20
# 执行结果  <class 'int'>
print(type(age))

# float
height = 178.8
# 执行结果  <class 'float'>
print(type(height))

# bool
is_man = True
# 执行结果  <class 'bool'>
print(type(is_man))

# str
name = '小明'
# 执行结果  <class 'str'>
print(type(name))
```



## 复合赋值运算符


| 运算符 | 写法一 | 写法二 |
| -------- | -------- | -------- |
| =      | c=a+b  |        |
| +=     | c+=a   | c=c+a  |
| -=     | c-=a   | c=c-a  |
| *=     | c=a    | c=ca   |
| /=     | c/=a   | c=c/a  |
| //=    | c//=a  | c=c//a |
| %=     | c%=a   | c=c%a  |
| ..=    | c=a    | c=c    |

**字符串和数字的运算规则**

* 数字和数字之间可以进行所有的运算
* 数字和字符串之间只能进行乘法运算
* 字符串和字符串之间可以经常加法运算

## 格式化字符串

> 占位符：1，占位 2，位置上数据的类型
>
> 格式化字符串：他的名字是%s,他的年龄是%d
>
> %s    string
> %d     digit
> %f     float
> %%    输出百分号

```python
myAge = 19
print("鲁班七号的年龄%d岁" % myAge)

myAge = myAge + 1

# 简写
myAge += 1
print("鲁班七号的年龄%d岁" % myAge)

myAge += 1
print("鲁班七号的年龄%d岁" % myAge)


name = "鲁班七号"
print("我的名字：%s" % name)

age = 12
print("我的年龄：%d" % age)

height = 178.9
# 默认情况下 python使用%f 会保留小数点后面六位
print("我的身高: %f" % height)
print("我的身高:%.2f" % height)

man = True
print("我是man: %s" % man)
print("我是man: %d" % man)

```

## 逻辑运算符

> or and  not
>
> 非0为真，0为假#如果第一个条件为假，第二个条件没有必要去执行了，直接返回第一个条件的结果#如果第一个条件为真，则第二个条件必须执行，直接返回第二个条件的结果

```python

```



## if

**if**

```python
flag = False
if flag:
    print("符合判断条件")
print("不在不判断条件内")

my_age = int(input("请输入年龄"))
if my_age >= 18:
    print("成年人的世界很精彩")

print("你还年轻，小伙子")
```


**if else**

```python
flag = not True
if flag:
    print("吃饭")
else:
    print("睡觉")
print("打豆豆")

age = 9
if age >= 18:
    print("成年了")
else:
    print("继续浪")
```


**elif == else if**

```python
score = -100
if score > 90:
    print("优秀")
elif 80 <= score < 90:
    print("良好")
elif 60 <= score < 80:
    print("中等")
elif 0 <= score < 60:
    print("差劲")
else:
    print("绝了")
```

**if if if**

```python
money = 7
man = False
if man:
    print("man")
    if money > 0:
        print("有钱人")
    else:
        print("穷鬼")
else:
    print("woman")
```


## While

```python
i = 0
while i < 5:
    print("%d" % (i+1))
    i += 1
print("===========")

```


**计算1~100的累计和**

```python
num = 1
mySum = 0
while num < 101:
    mySum += num
    num += 1
print("累加 %d" % mySum)
```


**计算1~100之间偶数乘积和**

```python
num2 = 0
mySum2 = 0
while num2 < 101:
    if num2 % 2 == 0:
        mySum2 += num2
    num2 += 1
print(mySum2)
```


**计算1~100之间偶数乘积

```python
num3 = 1
mySum3 = 1
while num3 < 101:
    if num3 % 2 == 0:
        mySum3 *= num3
    num3 += 1
print(mySum3)
```
