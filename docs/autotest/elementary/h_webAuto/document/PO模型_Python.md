# PO模型_Python

## 版本一 原始的脚本

> 所有内容写在一块，非常乱

```python
# 导包
from selenium import webdriver

# 获取driver对象
driver = webdriver.Firefox()
# 最大化浏览器
driver.maximize_window()
# 隐式等待
driver.implicitly_wait(30)
# 打开url
driver.get("http://localhost")
# 点击登录连接
driver.find_element_by_partial_link_text("登录").click()
# 输入用户名
driver.find_element_by_css_selector("#username").send_keys("13011113322")
# 输入密码
driver.find_element_by_css_selector("#password").send_keys("123456")
# 输入验证码
driver.find_element_by_css_selector("#verify_code").send_keys("8888")
# 点击登录按钮
driver.find_element_by_css_selector(".J-login-submit").click()
# 获取错误提示信息
msg = driver.find_element_by_css_selector(".layui-layer-content").text
print("msg:", msg)
# 断言
assert msg == "账号不存在!"
# 点击提示框确定按钮
driver.find_element_by_css_selector(".layui-layer-btn0").click()
# 关闭
driver.quit()

```

## 版本二 简单封装

### setUpClass

```python
# 导包
import unittest

from selenium import webdriver


# 新建测试类 并继承
class TestLogin(unittest.TestCase):
    driver = None

    # 初始化 setUp
    @classmethod
    def setUpClass(cls):
        # 获取driver对象
        cls.driver = webdriver.Firefox()
        # 最大化浏览器
        cls.driver.maximize_window()
        # 隐式等待
        cls.driver.implicitly_wait(30)
        # 打开url
        cls.driver.get("http://localhost")
        # 点击登录连接
        cls.driver.find_element_by_partial_link_text("登录").click()

    # 结束 tearDown
    @classmethod
    def tearDownClass(cls):
        # 关闭浏览器
        cls.driver.quit()

    # 新建测试方法 用户名不存在
    def test_login_username_not_exist(self):
        driver = self.driver
        # 输入用户名
        username = driver.find_element_by_css_selector("#username")
        username.clear()
        username.send_keys("13011112222")
        # 输入密码
        pwd = driver.find_element_by_css_selector("#password")
        pwd.clear()
        pwd.send_keys("123456")
        # 输入验证码
        code = driver.find_element_by_css_selector("#verify_code")
        code.clear()
        code.send_keys("8888")
        # sleep(2)
        # 点击登录按钮
        driver.find_element_by_css_selector(".J-login-submit").click()
        # sleep(2)
        # 获取错误提示信息
        msg = driver.find_element_by_css_selector(".layui-layer-content").text
        print("msg:", msg)
        try:
            # 断言
            self.assertEqual(msg, "账号不存在!")
            # 点击提示框确定按钮
            driver.find_element_by_css_selector(".layui-layer-btn0").click()
        except AssertionError:
            # 截图
            driver.get_screenshot_as_file("../image/fail.png")

    # 新建测试方法 密码错误
    def test_login_password_err(self):
        driver = self.driver
        # 输入用户名
        username = driver.find_element_by_css_selector("#username")
        username.clear()
        username.send_keys("13800001111")
        # 输入密码
        pwd = driver.find_element_by_css_selector("#password")
        pwd.clear()
        pwd.send_keys("123123")
        # 输入验证码
        code = driver.find_element_by_css_selector("#verify_code")
        code.clear()
        code.send_keys("8888")
        # sleep(2)
        # 点击登录按钮
        driver.find_element_by_css_selector(".J-login-submit").click()
        # sleep(2)
        # 获取错误提示信息
        msg = driver.find_element_by_css_selector(".layui-layer-content").text
        print("msg:", msg)
        try:
            # 断言
            self.assertEqual(msg, "密码错误!")
            # 点击提示框确定按钮
            driver.find_element_by_css_selector(".layui-layer-btn0").click()
        except AssertionError:
            # 截图
            driver.get_screenshot_as_file("../image/fail.png")

```

### setUp

```python
import unittest

from selenium import webdriver


class TestLogin(unittest.TestCase):

    # 初始化 setUp
    def setUp(self):
        def setUp(self):
            # 获取driver对象
            self.driver = webdriver.Firefox()
            # 最大化浏览器
            self.driver.maximize_window()
            # 隐式等待
            self.driver.implicitly_wait(30)
            # 打开url
            self.driver.get("http://localhost")
            # 点击登录连接
            self.driver.find_element_by_partial_link_text("登录").click()

    # 结束 tearDown
    def tearDown(self):
        # 关闭浏览器
        self.driver.quit()

    # 新建测试方法 用户名不存在
    def test_login_username_not_exist(self):
        driver = self.driver
        # 输入用户名
        driver.find_element_by_css_selector("#username").send_keys("13011112222")
        # 输入密码
        driver.find_element_by_css_selector("#password").send_keys("123456")
        # 输入验证码
        driver.find_element_by_css_selector("#verify_code").send_keys("8888")
        # 点击登录按钮
        driver.find_element_by_css_selector(".J-login-submit").click()
        # 获取错误提示信息
        msg = driver.find_element_by_css_selector(".layui-layer-content").text
        print("msg:", msg)
        try:
            # 断言
            self.assertEqual(msg, "账号不存在!")
            # 点击提示框确定按钮
            driver.find_element_by_css_selector(".layui-layer-btn0").click()
        except AssertionError:
            # 截图
            driver.get_screenshot_as_file("../image/fail.png")

    # 新建测试方法 密码错误
    def test_login_password_err(self):
        driver = self.driver
        # 输入用户名
        driver.find_element_by_css_selector("#username").send_keys("13800001111")
        # 输入密码
        driver.find_element_by_css_selector("#password").send_keys("123123")
        # 输入验证码
        driver.find_element_by_css_selector("#verify_code").send_keys("8888")
        # 点击登录按钮
        driver.find_element_by_css_selector(".J-login-submit").click()
        # 获取错误提示信息
        msg = driver.find_element_by_css_selector(".layui-layer-content").text
        print("msg:", msg)
        try:
            # 断言
            self.assertEqual(msg, "密码!")
            # 点击提示框确定按钮
            driver.find_element_by_css_selector(".layui-layer-btn0").click()
        except AssertionError:
            # 截图
            driver.get_screenshot_as_file("../image/fail.png")

```

## 版本三 测试用例与页面对象分离

### 测试用例

```python

# 导包
import unittest

from parameterized import parameterized

from day06_02.v3.page.page_login import PageLogin


# 新建测试类
class TestLogin(unittest.TestCase):

    # 初始化方法
    def setUp(self):
        # 获取登录页面对象
        self.login = PageLogin()

    # 结束方法
    def tearDown(self):
        # 关闭驱动对象
        self.login.driver.quit()

    # 新建测试方法
    @parameterized.expand([("13822223333", "123456", "8888", "账号不存在!"), ("13800001111", "123123", "8888", "密码错误!")])
    def test_login(self, username, pwd, code, expect):
        # 调用测试登录方法
        self.login.page_login(username, pwd, code)
        # 获取登录后的信息
        msg = self.login.page_get_text()
        try:
            # 断言
            self.assertEqual(msg, expect)
            # 点击确定
            self.login.page_click_err_btn_ok()
        except AssertionError:
            # 截图
            pass

```

### 页面操作对象

```python
from selenium import webdriver


class PageLogin:
    def __init__(self):
        # 获取driver对象
        self.driver = webdriver.Firefox()
        # 最大化浏览器
        self.driver.maximize_window()
        # 隐式等待
        self.driver.implicitly_wait(30)
        # 打开url
        self.driver.get("http://localhost")

    # 点击登录 连接
    def page_click_login_link(self):
        self.driver.find_element_by_partial_link_text("登录").click()

    # 输入用户名
    def page_input_username(self, username):
        self.driver.find_element_by_css_selector("#username").send_keys(username)

    # 输入密码
    def page_input_pwd(self, pwd):
        self.driver.find_element_by_css_selector("#password").send_keys(pwd)

    # 输入验证码
    def page_input_verify_code(self, code):
        self.driver.find_element_by_css_selector("#verify_code").send_keys(code)

    # 点击登录按钮
    def page_click_login_btn(self):
        self.driver.find_element_by_css_selector(".J-login-submit").click()

    # 获取异常提示信息
    def page_get_text(self):
        return self.driver.find_element_by_css_selector(".layui-layer-content").text

    # 点击提示框确定按钮
    def page_click_err_btn_ok(self):
        self.driver.find_element_by_css_selector(".layui-layer-btn0").click()

    # 组装登录业务方法  给业务层调用
    def page_login(self, usrename, pwd, code):
        self.page_click_login_link()
        self.page_input_username(usrename)
        self.page_input_pwd(pwd)
        self.page_input_verify_code(code)
        self.page_click_login_btn()

```

## 版本四  测试用例-页面对象-基础信息

### 基础信息公共操作

```python
from selenium import webdriver
from selenium.webdriver.support.wait import WebDriverWait


class Base:
    # 初始化
    def __init__(self):
        # self.driver = driver
        # 临时代替driver
        self.driver = webdriver.Firefox()
        self.driver.maximize_window()
        self.driver.get("http://localhost")

    # 查找元素方法 (提供：点击、输入、获取文本)使用
    def base_find_element(self, loc, timeout=30, poll=0.5):
        return WebDriverWait(self.driver, timeout=timeout, poll_frequency=poll).until(lambda x: x.find_element(*loc))

    # 点击方法
    def base_click(self, loc):
        self.base_find_element(loc).click()

    # 输入方法
    def base_input(self, loc, value):
        el = self.base_find_element(loc)
        # 清空
        el.clear()
        # 输入
        el.send_keys(value)

    # 获取文本方法
    def base_get_text(self, loc):
        # 注意：一定要返回元素的文本信息
        return self.base_find_element(loc).text

    # 截图方法
    def base_get_image(self):
        self.driver.get_screenshot_as_file("../image/{}.png".format(time.strftime("%Y_%m_%d %H_%M_%S")))

```

### 页面对象操作

```python
from day06_02.v4 import page
from day06_02.v4.base.base import Base


class PageLogin(Base):
    # 点击登录链接
    def page_click_login_link(self):
        self.base_click(page.login_link)

    # 输入用户名
    def page_input_username(self, username):
        self.base_input(page.login_username, username)

    # 输入密码
    def page_input_password(self, pwd):
        self.base_input(page.login_pwd, pwd)

    # 输入验证
    def page_input_verify_code(self, code):
        self.base_input(page.login_verify_code, code)

    # 点击登录按钮
    def page_click_login_btn(self):
        self.base_click(page.login_btn)

    # 获取异常提示信息
    def page_get_error_info(self):
        return self.base_get_text(page.login_err_info)

    # 点击异常信息框 确定
    def page_click_err_btn_ok(self):
        self.base_click(page.login_err_btn_ok)

    # 截图
    def page_get_img(self):
        self.base_get_image()

    # 组合业务方法
    def page_login(self, username, pwd, code):
        self.page_input_username(username)
        self.page_input_password(pwd)
        self.page_input_verify_code(code)
        self.page_click_login_btn()

```

### 测试用例

```python
# 导包
import unittest

from parameterized import parameterized
from day06_02.v4.page.page_login import PageLogin


def get_data():
    return [("13822223333", "123456", "8888", "账号不存在!"),
            ("13800001111", "123123", "8888", "密码错误!")]


# 新建测试类 并 继承
class TestLogin(unittest.TestCase):
    login = None

    # setUp
    # classmethod
    @classmethod
    def setUpClass(cls):
        # 实例化 获取页面对象 PageLogin
        cls.login = PageLogin()
        # 点击登录连接
        cls.login.page_click_login_link()

    # tearDown
    @classmethod
    def tearDownClass(cls):
        # 关闭 driver驱动对象
        cls.login.driver.quit()

    # 登录测试方法
    @parameterized.expand(get_data())
    def test_login(self, username, pwd, code, expect_result):
        # 调用登录方法
        self.login.page_login(username, pwd, code)
        # 获取登录提示信息
        msg = self.login.page_get_error_info()
        try:
            # 断言
            self.assertEqual(msg, expect_result)
        except AssertionError:
            # 截图
            self.login.page_get_img()

```
