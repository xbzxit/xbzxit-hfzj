# JSON

> JSON (JavaScript Object Notation)
>
> 一种数据格式，JSON 数据格式简单，可读性特别强，传输速度快
>
> JSON数据可以被不同的语言所识别，所以通常被用作不同系统间的数据传输
>
> JSON的数据格式： 字符串 数值 布尔型 null 对象  数组


## JSON字符串

```js
var obj = '{"name":"java","age":"95"}';
```


```js
var obj = '[11,2,4,"java",true]';
```


```js
var obj = '{"arr":[1,2,3]}';

var obj = '{"name":"spring","arr":[1,2,3]}';
```


```js
var obj = '[{"name":"java","age":"95"},{"name":"java","age":"95"}]';
```


## JSON对象

```js
var obj = {name:"java",age:95};
```

```json
var obj = [11,2,4,"java",true];
```

```js
var obj = {arr:[1,2,3]};

var obj = {name:"spring",arr:[1,2,3]};
```

```js
var obj = [{name:"java",age:95},{name:"java",age:95}];
```


## JSON转换

### parse

> 将JSON字符串转成JSON对象

```js
var json = '{"name":"java","age":"95"}';

var o = JSON.parse(json);
```

### stringify

> 将JSON对象转化为JSON字符串

```js
var jsonobj = {name:"java",age:95};

var str = JSON.stringify(jsonob);
```


## JSON兼容

> IE7以下不支持JSON对象

### eval

> eval 函数可以将一段字符串当成代码执行，如果某一段代码要当成一段代码可以在两边加（）
>
> 不推荐使用，会有注入安全隐患


```js
var str = '{"name":"java","age":95}';


var obj = eval("("+str+")");

console.log(obj);
```


### 引入外部插件库

> json2.js
>
> 推荐使用

```js
<script type="text/javascript" src="js/json2.js"></script>

var jsonobj = {name:"java",age:95};

var str = JSON.stringify(jsonob);
```
