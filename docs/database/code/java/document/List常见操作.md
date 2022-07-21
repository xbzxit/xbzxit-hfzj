# List 常见操作


## JDK8常见操作

### 获取某个属性

> List中存储一个对象，需要获取某个属性的集合

```java
List<String> ldportList = bpalieCntrLs.stream().map(DmsEdiBaplieCntrs :: getEbcPotLdport).collect(Collectors.toList());
```

### 获取某个属性去重

> 获取List中某个属性 并对该属性的集合进行去重

```java
List<String> ldportList_distinct = ldportList.stream().distinct().collect(Collectors.toList());
```


### 将一个对象转换成List

> 一个Long转换成List;
>
> 一个数组转成List

```java
Arrays.asList(dmsContainersSources.getIycCntrid())


List<String> resultList = new ArrayList<>(Arrays.asList(cTypes));
```


## 异常处理

### 抛出的异常带有可变参数

```java
throw bizExceptionGenerate.FormatBizException(DmsContainerGroupSystemError.DMS_CONTAINER_GROUP_ERROR34, cntrnoNew);
```
