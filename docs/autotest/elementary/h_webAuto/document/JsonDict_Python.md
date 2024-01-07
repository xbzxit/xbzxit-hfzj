# JsonDict_Python 
> JSON与字典的转换


## 字典转JSON

> json.dumps(要转换的字典)

```python
import json


# 定义 字典
data = {"name":"张三", "age":18}
# 调用dumps进行转换json字符串
print("转换之前的数据类型：", type(data))

d2 = json.dumps(data)
print("转换之后的数据类型：", type(d2))
print(d2)
```

## 字符串转字典

> loads

```python
import json


# 定义 字符串
data = '{"data":"张三", "age":18}'
# 注意错误写法 ，属性名必须使用双引号 , 字符串使用单引号
# data = "{'data':'张三', 'age':18}"
print("转之前：", type(data))
# 转换
d3 = json.loads(data)
print("转之后：", type(d3))
```

## 读取json文件

> load

```python
import json

# 打开要读取的文件流 并调用 load方法
with open("data/write.json", encoding="utf-8") as f:
    data = json.load(f)
    print(data) 

# {'name': '李四', 'age': 18}

```


## 写JSON数据到文件

> dump  删除原来内容，写入新的内容

```python
import json

# 定义 写的内容
# data = {"name": "tom", "age": 18}
data = {"name": "李四", "age": 18}
# 获取文件流 并 写入数据
"""
    ensure_ascii：设置编码格式-解决中文问题；
"""
with open("data/write.json", "w", encoding="utf-8") as f:
    json.dump(data, f, ensure_ascii=False)

```


## 遍历字符串

```python
from selenium.webdriver.common.by import By

num = "1129283245313421"
# num = 1129283245313421
for n in num:
    clac_num = By.CSS_SELECTOR, "simple{}".format(n)
    print(n)
    print(clac_num)

```


## 通过字典的键获取值

```python
dic = {"name": "张三", "age": 18}
# [键名]
print(dic['name'])
# print(dic['naem'])

# 使用get("键名")
print(dic.get("name"))
# print(dic.get("nema"))

```
