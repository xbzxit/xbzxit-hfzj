# UnitTest_Python

> 测试框架

## TestCase

> 编写类继承 unittest
>
> 测试方法名必须以test开头
>
> 可以使用unittest.main("文件名") 运行所有以test开头的
>
> 也可以使用main方法执行所有以test开头的方法,或者执行指定的方法
>
> 也可以不使用unittest.main 或者main方法 直接运行（按顺序从上往下执行）

```python
# 编写求和函数
def add(x, y):
    return x + y


# 定义测试类 并 继承
class Test01(unittest.TestCase):

    # 定义测试方法 注意：以test字母开头
    def test_add(self):
        # 调用要用的函数
        result = add(1, 1)
        print("结果为：", result)

    def test_add02(self):
        result = add(1, 2)
        print("结果为：", result)
        # 文件名
        print("__name__内置变量获取当前运行的模块名称：", __name__)

    #必须是test开头，否则都不识别
    def eest_add03(self):
        result = add(1, 2)
        print("结果为：", result)


# 可以这么使用
# unittest.main("01_testcase")

if __name__ == '__main__':
    test = Test01()
    test.test_add()
```

## fixture

> 固定组合
>
> setUpClass  所有方法运行前执行  tearDownClass  所有方法运行后执行
>
> - setUpClass tearDownClass 必须加该注解，固定搭配 @classmethod
>
> setUp  每个方法运行前执行 tearDown  每个方法运行后执行

```python
import unittest


def setUpModule():
    print("setUpModule")


def tearDownModule():
    print("tearDownModule")


class Test03(unittest.TestCase):

    @classmethod
    def setUpClass(cls):
        print("setUpClass被执行")

    @classmethod
    def tearDownClass(cls):
        print("tearDownClass被执行")

    def setUp(self):
        print("setUp被执行")

    def tearDown(self):
        print("tearDown被执行")

    def test01(self):
        print("test01被执行")

    def test02(self):
        print("test02被执行")


class Test04(unittest.TestCase):

    @classmethod
    def setUpClass(cls):
        print("setUpClass被执行")

    @classmethod
    def tearDownClass(cls):
        print("tearDownClass被执行")

    def setUp(self):
        print("setUp被执行")

    def tearDown(self):
        print("tearDown被执行")

    def test01(self):
        print("test01被执行")

    def test02(self):
        print("test02被执行")

```

## 断言

### 判断是否为true

```python
# 断言是否为True
flag = True
flag = False
self.assertTrue(flag)
self.assertFalse(flag)
```

### 判断是否相等

```python
# 判断两个字符串是否相等
self.assertEqual("你好，斑马！", "你好，奥码！")
self.assertEqual("你好，斑马！", "你好，斑马！")
```

### 判断是否包含

```python
# 判断后边的字符串是否包含前边的字符串
self.assertIn("hello bama", "hello bama,wahaha")
self.assertIn("hello wahaha", "hello bama,wahaha")
```

### 判断是否为None

```python
# 判断是否为None
flag = None
self.assertIsNone(flag)
self.assertIsNotNone(flag)
```

## 断言及截图的应用

> 截图： driver.get_screenshot_as_file("../image/{}.png".format(time.strftime("%Y_%m_%d_%H_%M_%S")))

```python
import time
# 导包
import unittest
from time import sleep

from selenium import webdriver


# 定义测试类 并 继承 unittest.TestCase
class TestTphopLogin(unittest.TestCase):

    # 定义初始化方法
    def setUp(self):
        # 获取浏览器驱动对象
        self.driver = webdriver.Firefox()
        # 打开 url
        self.driver.get("http://demo.ruoyi.vip/login")
        # 最大化浏览器
        self.driver.maximize_window()
        # 隐式等待
        self.driver.implicitly_wait(30)

    # 定义teardown
    def tearDown(self):
        # 关闭浏览器驱动
        sleep(2)
        self.driver.quit()

    # 定义登录测试方法 验证码为空
    def test_login_code_null(self):
        driver = self.driver
        # 点击登录连接
        # driver.find_element_by_partial_link_text("登录").click()
        # 输入用户名
        driver.find_element_by_name("#username").send_keys("13800001111")
        # 输入密码
        driver.find_element_by_name("#password").send_keys("123456")

        # 输入验证码
        driver.find_element_by_name("#validateCode").send_keys("")

        # 点击登录
        driver.find_element_by_class_name(".btnSubmit").click()

        # 获取登录后提示信息
        result = driver.find_element_by_class_name(".layui-layer-move").text
        print("result：", result)
        # 定义预期结果
        # expect_result = "验证码不能为空！"
        # 测试断言错误
        expect_result = "验证码错误"
        try:
            # 断言
            self.assertEqual(result, expect_result)
        except AssertionError:
            # 截图
            driver.get_screenshot_as_file("../image/{}.png".format(time.strftime("%Y_%m_%d_%H_%M_%S")))
            # 抛异常
            raise

```

## 参数化

### 推荐使用

@parameterized.expand(get_data())

```python
import unittest

from parameterized import parameterized


def add(x, y):
    return x + y


"""
    问题：
        如果有三组数据需要测试？
        [(1,1,2), (1,2,3), (0,3,3)]
"""


def get_data():
    return [(1, 2, 3), (3, 0, 3), (2, 1, 3)]


# 定义测试类 并 继承
class Test01(unittest.TestCase):
    # 定义测试方法 注意：以test字母开头
    @parameterized.expand(get_data())
    def test_add(self, a, b, expect):
        # 调用 要是的函数
        result = add(a, b)
        assert result == expect
```

### 单个参数

```python
# 单个参数使用方法
    @parameterized.expand(["1", "2", "3"])
    def test_add_one(self, num):
        print("num:", num)
```

## 多个参数

```python
class Test01(unittest.TestCase):
    # 多个参数使用方法 写法1
    @parameterized.expand([(1, 2, 3), (3, 0, 3), (2, 1, 3)])
    def test_add_more(self, a, b, result):
        print("{}+{}={}:".format(a, b, result))

    data = [(1, 2, 3), (3, 0, 3), (2, 1, 3)]

    # 写法2
    @parameterized.expand(data)
    def test_add_more(self, a, b, result):
        print("{}+{}={}:".format(a, b, result))

    # 写法 3 推荐
    def get_data(self):
        return [(1, 2, 3), (3, 0, 3), (2, 1, 3)]

    @parameterized.expand(get_data())
    def test_add_more(self, a, b, result):
        print("{}+{}={}:".format(a, b, result))

```


## Skip

> skip  可以定义在类或者函数上，如果一个函数暂时没有实现或者因为某种原因不能测试可以加该注解进行忽略
>
> skipIf  可以定义在类或者函数上，如果一个函数在什么样的条件下不需要执行可以加该注解

```python
import unittest

version = 1


# 新建测试类
# @unittest.skip("Test01方法功能暂未实现")
@unittest.skipIf(version > 25, "版本大于25了，跳过此用例！")
class Test01(unittest.TestCase):
    # 新建测试方法 1
    # @unittest.skip("test01方法功能暂未实现")
    def test01(self):
        print("test01")
        """此方法功能暂未完T成"""
        pass

    # 新建测试方法 2
    # @unittest.skipIf(version > 25, "版本大于25了，跳过此用例！")
    def test02(self):
        print("test02")

```


## 测试报告

```python
import time
# 导包
import unittest

from tools.HTMLTestRunner import HTMLTestRunner

# 定义 测试套件 case目录下以 test开头的脚本
suite = unittest.defaultTestLoader.discover("./case", pattern="test*.py")
# 定义报告存放路径及文件名称
report_dir = "./report/{}.html".format(time.strftime("%Y_%m_%d %H_%M_%S"))
# 获取报告文件流 并执行
with open(report_dir, "wb") as f:
    HTMLTestRunner(stream=f,
                   title="自动化测试报告",
                   description="操作系统 win10").run(suite)

```
