# 常用选择器_Python

## ID定位

> find_element_by_id
>
> 用标签中id属性的值进行定位
>
> send_keys 输入内容

```python
# 导包
from time import sleep

from selenium import webdriver

# 获取 浏览器对象
# 如果是Firefox 需要主要驱动与浏览器版本的问题， 谷歌浏览器下没有问题
driver = webdriver.Firefox()

# 打开url
# 注意：\反斜杠在python是转义字符  r:修饰的字符串，如果字符串中有转义字符，不进行转义使用
url = r"D:\workspace_python\python-selenium\html\注册A.html"

# 使用双反斜杠 进行转义操作
# url = "D:\\workspace_python\\python-selenium\\html\\注册A.html"

# 使用本地浏览模式 前缀必须添加 file:///
# url = "file:///D:/workspace_python/python-selenium/html/注册A.html"

# 复制浏览器地址
# url = "D:/workspace_python/python-selenium/html/注册A.html"
driver.get(url)

# 查找 用户名元素
username = driver.find_element_by_id("userA")

# 查找 密码元素
password = driver.find_element_by_id("passwordA")

# 用户名输入 admin  send_keys("内容")
username.send_keys("admin")

# 密码 输入 123456
password.send_keys("123456")

# 暂停3秒
sleep(3)

# 退出浏览器驱动
driver.quit()



# 导包
from time import sleep

from selenium import webdriver

# 获取浏览器对象
driver = webdriver.Firefox()
# 打开 url
url = "file:///d:/workspace_python/python-selenium/html/注册A.html"
driver.get(url)
# 查找元素 用户名 并 输入admin
driver.find_element_by_id("userA").send_keys("admin")
# 查找元素 密码框 并 输入123456
driver.find_element_by_id("passwordA").send_keys("123456")
# 暂停3秒
sleep(3)
# 关闭浏览器驱动对象
driver.quit()

```

## name定位

> find_element_by_name
>
> 用标签中name属性的值进行定位

```python
from time import sleep

from selenium import webdriver

driver = webdriver.Firefox()
url = "file:///d:/workspace_python/python-selenium/html/注册A.html"
driver.get(url)

driver.find_element_by_name("userA").send_keys("admin")

driver.find_element_by_name("passwordA").send_keys("123456")

sleep(10)
driver.quit()

```

## class-name定位

> find_element_by_class_name
>
> 用标签中class属性的值进行定位

```python
from time import sleep

from selenium import webdriver

driver = webdriver.Firefox()

url = "file:///d:/workspace_python/python-selenium/html/注册A.html"

driver.get(url)

driver.find_element_by_class_name("telA").send_keys("1111111")

sleep(10)

driver.quit()

```

## tag-name定位

> find_element_by_tag_name
>
> 用标签名进行定位 如：&lt;a&gt;  &lt;p&gt; &lt;div&gt; &lt;input&gt;

```python
from time import sleep

from selenium import webdriver

driver = webdriver.Firefox()

url = "file:///d:/workspace_python/python-selenium/html/注册A.html"
driver.get(url)

driver.find_element_by_tag_name("input").send_keys("admin1234")

sleep(10)

driver.quit()

```

## link-text定位

> find_element_by_link_text
>
> 用超链接中所有文件进行定位

```python
from time import sleep

from selenium import webdriver

driver = webdriver.Firefox()

url = "file:///d:/workspace_python/python-selenium/html/注册A.html"

driver.get(url)
# 使用 link_text定位 访问 新浪 网站 <全部匹配>
driver.find_element_by_link_text("访问 新浪 网站").click()
# 错误写法，没有全部匹配文本
# driver.find_element_by_link_text("访问").click()

sleep(13)
driver.quit()

```

## partial-link-text定位

> find_element_by_partial_link_text
>
> 用于超链接标签&lt;a&gt; 中的一部分文件进行定位

```python
from time import sleep

# 导包
from selenium import webdriver

# 获取 浏览器驱动对象
driver = webdriver.Firefox()

# 打开 注册A.html
url = "file:///d:/workspace_python/python-selenium/html/注册A.html"
driver.get(url)

# 使用partial_link_text定位 使用模糊 唯一代表关键词
# driver.find_element_by_partial_link_text("访问").click()

driver.find_element_by_partial_link_text("问 新").click()

# 没有使用唯一代表词  默认操作符合条件的第一个元素
# driver.find_element_by_partial_link_text("新浪").click()

# 使用全部匹配
# driver.find_element_by_partial_link_text("访问 新浪 网站").click()

# 暂停 3秒
sleep(3)
# 退出浏览器驱动
driver.quit()
```

## xpath定位

> find_element_by_xpath
>
> 常见用法： //input[@id='passwordA' and @placeholder='密码A']
>
> 一个单独的技术， 相对于其他选择器稍微复杂点

```python
from time import sleep

# 导包
from selenium import webdriver

# 获取 浏览器驱动对象
driver = webdriver.Firefox()

# 打开 注册A.html
url = "file:///d:/workspace_python/python-selenium/html/注册A.html"
driver.get(url)

# 使用绝对路径定位 用户名 admin
# driver.find_element_by_xpath("/html/body/form/div/fieldset/p[1]/input").send_keys("admin")

# 使用层级结合属性 定位用户名：  //p[@id='p1']/input
driver.find_element_by_xpath("//p[@id='userA']").send_keys("admin")

# 暂停2秒
sleep(2)

# 使用相对路径 定位 密码  123
# driver.find_element_by_xpath("//input[@id='passwordA']").send_keys("123")


# 使用逻辑结合
driver.find_element_by_xpath("//input[@id='passwordA' and @placeholder='密码A']").send_keys("123")
# 暂停 3秒
sleep(113)
# 退出浏览器驱动
driver.quit()
```

## css选择器定位

> find_element_by_css_selector
>
> 可以使用CSS的name,tag,id,class，层次选择器

```python
from time import sleep

# 导包
from selenium import webdriver

# 获取 浏览器驱动对象
driver = webdriver.Firefox()

# 打开 注册A.html
url = "d:/workspace_python/python-selenium/html/注册A.html"
driver.get(url)

# 1. 使用css id选择器 定位用户名 输入admin
driver.find_element_by_css_selector("#userA").send_keys("admin")
# 2. 使用css 属性选择 定位密码框 输入123456
driver.find_element_by_css_selector("[name='passwordA']").send_keys("123456")
# 3. 使用 css class 选择器 定位电话号码： 18611112222
driver.find_element_by_css_selector(".telA").send_keys("18611112222")
# 4. 使用css 元素选择器 定位span标签获取文本值
span = driver.find_element_by_css_selector("span").text
print("获取的span标签文本值：", span)

# 5. 使用层级选择器 定位email 输入 123@qq.com
driver.find_element_by_css_selector("p>input[placeholder='电子邮箱A']").send_keys("123@qq.com")

# 暂停 3秒
sleep(3)
# 退出浏览器驱动
driver.quit()

```

## css选择器扩展

> CSS选择器，类似正则的表达式

```python
from time import sleep

# 导包
from selenium import webdriver

# 获取 浏览器驱动对象
driver = webdriver.Firefox()

# 打开 注册A.html
url = r"file:///d:/workspace_python/python-selenium/html/注册A.html"
driver.get(url)

# 1. 使用css id选择器 定位用户名 输入admin 以指定字母开头 语法：[属性^='开头的字母']
driver.find_element_by_css_selector("[name^='us']").send_keys("admin")
# 2. 使用css 属性选择 定位密码框 输入123456 以指定字母结束 语法：[属性$='结束的字母']
driver.find_element_by_css_selector("[name$='dA']").send_keys("123456")
# 3. 使用 css class 选择器 定位电话号码： 18611112222 包含指定字母 语法：[属性*='包含字母']
driver.find_element_by_css_selector("[class*='el']").send_keys("18611112222")
# 4. 使用css 元素选择器 定位span标签获取文本值
span = driver.find_element_by_css_selector("span").text
print("获取的span标签文本值：", span)

# 5. 使用层级选择器 定位email 输入 123@qq.com
driver.find_element_by_css_selector("p>input[placeholder='电子邮箱A']").send_keys("123@qq.com")

# 暂停 3秒
sleep(3)
# 退出浏览器驱动
driver.quit()
```

## 通用选择器

> find_element

```python
from time import sleep

# 导包
from selenium import webdriver
# 获取 浏览器驱动对象
from selenium.webdriver.common.by import By

driver = webdriver.Firefox()

# 打开 注册A.html
url = r"file:///d:/workspace_test/selenium-python/html/注册A.html"
driver.get(url)

# 使用find_element()定位用户名
driver.find_element(By.ID, "userA").send_keys("admin")
# 使用find_element()定位密码
driver.find_element(By.CSS_SELECTOR, "#passwordA").send_keys("123456")

# 暂停 3秒
sleep(3)
# 退出浏览器驱动
driver.quit()
```
