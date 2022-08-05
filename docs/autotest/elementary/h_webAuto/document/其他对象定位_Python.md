# 其他对象定位_Python

## 设置浏览器的属性

### 窗口最大化

```python
driver.maximize_window()
```

### 窗口固定大小

```python
driver.set_window_size(300, 200)
```

### 窗口固定的位置

> 浏览器左上角为0.0 ,设置的位置为左上角的坐标

```python
# 320 横坐标  150 纵坐标
driver.set_window_position(320, 150)
```

### 当前网页前进

```python
driver.back()
```

### 当前网页后退

```python
driver.forward()
```

### 当前页面刷新

```python
driver.refresh()
```

### 当前页面的title

```python
title = driver.title
```

### 当前页面的url

```python
current_rul = driver.current_url
```

### 关闭主窗口

> 如果还要其他页面打开，只会关闭当前页面，如果只有该页面则会关闭浏览器

```python
driver.close()
```

### 关闭浏览器对象

```python
driver.quit()
```

## 表单操作

### 获取文本框的大小

```python
size = driver.find_element_by_css_selector("#user").size
```

### 获取超文本链接内容

> 默认获取文件中的第一个链接

```python
text = driver.find_element_by_css_selector("a").text
```

### 获取超文本链接地址

> 默认获取文件中的第一个链接

```python
att = driver.find_element_by_css_selector("a").get_attribute("href")
```

### 判断span元素是否可见

```python
display = driver.find_element_by_css_selector("span").is_displayed()
```

### 判断按钮是否可用

```python
enabled = driver.find_element_by_css_selector("#cancel").is_enabled()
```

### 选中复选框

```python
driver.find_element_by_css_selector("#ly").click()
```

### 判断复选框是否选中

```python
selected = driver.find_element_by_css_selector("#ly").is_selected()
```

## 鼠标操作

> ```
>     目标：基于selenium完成 鼠标事件操作
>     说明：
>         1. selenium框架中将鼠标操作的一系列方法封装在 ActionChains类中
>     方法：
>         1. 双击 double_click()
>         2. 右击 context_click()
>         3. 悬停 move_to_element()
>         4. 拖拽 drag_and_drop()
>         5. 执行 perform()
>     操作：
>         1. 导入 ActionChains类  位置：from selenium.webdriver.common.action_chains import ActionChains
>         2. 实例化
>             匿名：ActionChains(driver).double_click(element).perform()
>             匿名：ActionChains(driver).context_click(element).perform()
>             实名：action = ActionChains(driver)
>         3. 调用响应的方法：
>             如：
>                 1. ActionChains(driver).double_click(element).perform()
>                 2. action.double_click(element).perform()
>     注意：
>         鼠标操作方法，必须调用perform()才能执行
> ```

### 双击

```python
ActionChains(driver).double_click(pwd).perform()
```

### 移动鼠标到按钮上不点击

```python
# 移动到注册按钮上  预期：按钮变色 出现 加入会员A
ActionChains(driver).move_to_element(driver.find_element_by_css_selector("button")).perform()
```


### 右键菜单

> ActionChains(driver).context_click(username).perform()

```python
# 导包
from selenium import webdriver
from time import sleep

# 获取浏览器驱动对象
from selenium.webdriver.common.action_chains import ActionChains

driver = webdriver.Firefox()
# driver = webdriver.Ie()
# 谷歌浏览器不支持 --> 粘贴快捷键
# driver = webdriver.Chrome()
# 打开url
url = "file:///D:/workspace_test/selenium-python/html/注册A.html"

driver.get(url)

# 实例化并获取 ActionChains类
action = ActionChains(driver)
# 定位用户名 在用户名上 右击鼠标  预期：粘贴
# 获取用户名元素  admin123
username = driver.find_element_by_css_selector("#userA")
# 点击右键
action.context_click(username).perform()
# 发送p
username.send_keys("p")

# 暂停 2

# sleep(2)
# 关闭驱动对象
driver.quit()

```

## 键盘操作

### 删除

```python
username.send_keys(Keys.BACK_SPACE)
```

### 全选

```python
username.send_keys(Keys.CONTROL, "a")
```

### 复制

```python
username.send_keys(Keys.CONTROL, "c")
```

### 粘贴

```python
driver.find_element_by_css_selector("#passwordA").send_keys(Keys.CONTROL, "v")
```


## 上传

```python
# 导包
from selenium import webdriver

# 获取浏览器驱动对象
driver = webdriver.Firefox()

# 打开url
url = "file:///D:/workspace_test/selenium-python/html/注册A.html"
driver.get(url)
# 错误的实现
# driver.find_element_by_css_selector("[name='upfilea']").click()
# 正确实现，使用 send_keys("文件路径及文件名")
driver.find_element_by_css_selector("[name='upfilea']").send_keys("D:\\apple.jpg")

# 暂停 2
# sleep(2)
# 关闭驱动对象
# driver.quit()

```
