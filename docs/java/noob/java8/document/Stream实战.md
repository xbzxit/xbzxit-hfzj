# Stream实战

> Java 8 API添加了一个新的抽象称为流Stream，可以让你以一种声明的方式处理数据。
>
> Stream使用一种类似用SQL语句从数据库查询数据的直观方式来提供一种对Java集合运算和表达的高阶抽象。
>
> Stream API可以极大提高Java程序员的生产力，让程序员写出高效率、干净、简洁的代码。
>
> 这种风格将要处理的元素集合看作一种流， 流在管道中传输， 并且可以在管道的节点上进行处理， 比如筛选， 排序，聚合等。
>
> 元素流在管道中经过 中间操作（intermediate operation） 的处理，最后由最终操作(terminal operation) 得到前面处理的结果。

![image.png](./assets/1715744243949-image.png)

## Optional


| 方法            | 描述                                                                                                                                   |
| ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| **of**          | 把指定的值封装为`Optional`对象，如果指定的值为`null`，则抛出`NullPointException`异常                                                   |
| **empty**       | 创建一个空的`Optional`对象                                                                                                             |
| **ofNullable**  | 把指定的值封装为`Optional`对象，如果指定的值为`null`，则创建一个空的`Optional`对象                                                     |
| **get**         | 如果创建的`Optional`对象中有值存在，则返回此值，否则抛出`NoSuchElementException`                                                       |
| **orElse**      | 如果创建的`Optional`对象中有值存在，则返回此值，否则返回一个默认值                                                                     |
| **orElseGet**   | 如果创建的`Optional`对象中有值存在，则返回此值，否则返回一个由`Supplier`接口生成的值                                                   |
| **orElseThrow** | 如果创建的`Optional`对象中有值存在，则返回此值，否则返回一个由`Supplier`接口生成的异常                                                 |
| **filter**      | 如果创建的`Optional`的值满足`filter`中的条件，则返回该值的`Optional`对象，否则返回一个空的`Optional`对象                               |
| **map**         | 如果创建的`Optional`对象中有值存在，对该值执行提供的`Function`的函数调用                                                               |
| **flatMap**     | 如果创建的`Optional`对象中有值存在，对该值执行提供的`Function`的函数调用，返回一个`Optional`类型的值，否则就返回一个空的`Optional`对象 |
| **isPresent**   | 如果创建的`Optional`对象中有值存在，返回`true`，否则返回`false`                                                                        |
| **ifPresent**   | 如果创建的`Optional`对象中有值存在，则执行该方法的调用，否则什么都不做                                                                 |

### 常用写法

```java
Set<T> set = Optional.ofNullable(xxxSet).orElse(Sets.newHashSet());
List<T> list = Optional.ofNullable(xxxList).orElse(Lists.newArrayList());
```

* 实例

```java
public class StreamAdvance {

    public static void main(String[] args) {
        Set<String> codeSet = Sets.newHashSet("N23652", "N63221", "N82372", "N23721", "R34373", "R12922", "R72322", "R43984", "T93849", "T23728", "T72322", "T23829");
        Map<String, Set<String>> codeGroupMap = Optional.ofNullable(codeSet).orElse(Sets.newHashSet()).stream()
                // 根据首字符分组，分组的映射对象为codeSet里的code，返回Map<String, Set<String>>
                .collect(Collectors.groupingBy(i -> i.substring(0, 1), Collectors.mapping(i -> i, Collectors.toSet())));

        Map<String, List<String>> codeGroupList = Optional.ofNullable(codeSet).orElse(Sets.newHashSet()).stream()
                // 根据首字符分组，分组的映射对象为codeSet里的code，返回Map<String, List<String>>
                .collect(Collectors.groupingBy(i -> i.substring(0, 1), Collectors.mapping(i -> i, Collectors.toList())));

        System.out.println(codeGroupMap);
        System.out.println(codeGroupList);
    }
}

```

## Collectors


| 描述       | 方法                                             |
| ------------ | -------------------------------------------------- |
| 计数       | counting                                         |
| 最大最小值 | maxBy、minBy                                     |
| 求和       | reducing、summingInt、summingLong、summingDouble |
| 平均值     | averagingInt、averagingLong、averagingDouble     |
| 收集       | toMap、toList、toSet                             |
| 字符串拼接 | joining                                          |
| 分组       | groupingBy                                       |
| 分区       | partitioningBy                                   |

### 获取List列表的某个Object对象属性Set集合

```java
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Person {

    private String id;
    private String name;
    private Integer age;
    private BigDecimal salary;
}

List<Person> list = new ArrayList<>();
list.add(new Person("1", "Ram", 30, new BigDecimal("10000")));
list.add(new Person("2", "Shyam", 21, new BigDecimal("12000")));
list.add(new Person("3", "Shiv", 20, new BigDecimal("16000")));
list.add(new Person("4", "Mahesh", 35, new BigDecimal("20000")));
list.add(new Person("5", "Austin", 26, new BigDecimal("8000")));
list.add(new Person("6", "Jacklin", 24, new BigDecimal("24000")));

//将list转成以id为key的map，value是id对应的Person对象
Map<String, Person> map1 = list.stream().collect(Collectors.toMap(Person::getId, Function.identity()));
System.out.println("map1=" + map1);

//输出结果：
map1={1=Person(id=1, name=Ram, age=30), 2=Person(id=2, name=Shyam, age=20), 3=Person(id=3, name=Shiv, age=20), 4=Person(id=4, name=Mahesh, age=30), 5=Person(id=5, name=Austin, age=26), 6=Person(id=6, name=Jacklin, age=10)}
```

***如果id存在重复值，则会报错 `Duplicate key xxx`，所以解决id重复的写法是：***

```java
//解决方案1：只取后一个key及value -> (k1, k2) -> k2
list.add(new Person("6", "Tom", 10));
Map<String, Person> map2 = list.stream().collect(Collectors.toMap(Person::getId, Function.identity(), (k1, k2) -> k2));
System.out.println("map2=" + map2);

//输出结果，同样id为6的，输出用户Tom：
map2={1=Person(id=1, name=Ram, age=30), 2=Person(id=2, name=Shyam, age=20), 3=Person(id=3, name=Shiv, age=20), 4=Person(id=4, name=Mahesh, age=30), 5=Person(id=5, name=Austin, age=26), 6=Person(id=6, name=Tom, age=10)}

//解决方案2：只取前一个key及value -> (k1, k2) -> k1
Map<String, Person> map3 = list.stream().collect(Collectors.toMap(Person::getId, Function.identity(), (k1, k2) -> k1));
System.out.println("map3=" + map3);

//输出结果，同样id为6的，输出用户Jacklin：
map3={1=Person(id=1, name=Ram, age=30), 2=Person(id=2, name=Shyam, age=20), 3=Person(id=3, name=Shiv, age=20), 4=Person(id=4, name=Mahesh, age=30), 5=Person(id=5, name=Austin, age=26), 6=Person(id=6, name=Jacklin, age=10)}
```

### 获取id和name对应的Map<String,String>集合

```java
Map<String, String> idNameMap = list.stream().collect(Collectors.toMap(Person::getId, Person::getName));
System.out.println("idNameMap=" + idNameMap);

//输出结果
idNameMap={1=Ram, 2=Shyam, 3=Shiv, 4=Mahesh, 5=Austin, 6=Jacklin}
```

***当存在name为null的时候，这种方式获取会报NPE空指针异常，所以解决value为null的写法是：***

```java
list.add(new Person("7", null, 10));
//解决空指针异常
Map<String, String> idNameMapPreventNPE = list.stream().collect(Collectors.toMap(Person::getId, p -> p.getName() == null ? "" : p.getName()));
System.out.println("idNameMapPreventNPE=" + idNameMapPreventNPE);
```

### 将集合的属性转成对象集合

```java
List<String> ids = Arrays.asList("1", "2", "3");
List<Person> personList = ids.stream().map(id -> {
    Person person = new Person();
    person.setId(id);
    person.setName("name" + id);
    return person;
}).collect(Collectors.toList());

//输出结果：
personList: [Person(id=1, name=name1, age=null), Person(id=2, name=name2, age=null), Person(id=3, name=name3, age=null)]
```

### 判断集合中是否有一个对象包含某个属性

```java
boolean flag = list.stream().anyMatch(person -> "Austin".equals(person.getName()));
// ...allMatch和...anyMatch类似
```

### ***对集合的某个对象求和***

```java
BigDecimal reduce = list.stream().map(Person::getSalary).reduce(BigDecimal.ZERO, BigDecimal::add);
System.out.println("总薪酬reduce: " + reduce);
```

### 集合转Map(value为对象本身)

```java
//List集合转Map
Map<String, Person> mapCollect = list.stream().collect(Collectors.toMap(Person::getId, person -> person));
//输出结果：
mapCollect: {1=Person(id=1, name=Ram, age=30, salary=10000), 2=Person(id=2, name=Shyam, age=20, salary=12000), 3=Person(id=3, name=Shiv, age=20, salary=14000), 4=Person(id=4, name=Mahesh, age=30, salary=20000), 5=Person(id=5, name=Austin, age=26, salary=9000), 6=Person(id=6, name=Jacklin, age=10, salary=18000)}
```

### 集合转Map(key存在重复)

```java
//List集合转Map, key重复时，value取值取前面的
Map<String, Person> mapCollect = list.stream().collect(Collectors.toMap(Person::getId, person -> person, (before, after) -> before));
```

### 集合分组转Map

```java
Map<BigDecimal, List<Person>> mapGroupBySalary = list.stream().collect(Collectors.groupingBy(Person::getSalary));
//输出结果：
mapGroupBySalary: {10000=[Person(id=1, name=Ram, age=30, salary=10000)], 12000=[Person(id=2, name=Shyam, age=20, salary=12000), Person(id=6, name=Jacklin, age=10, salary=12000)], 14000=[Person(id=3, name=Shiv, age=20, salary=14000)], 20000=[Person(id=4, name=Mahesh, age=30, salary=20000)], 9000=[Person(id=5, name=Austin, age=26, salary=9000)]}
```

### 集合分区转Map

```java
Map<Boolean, List<Person>> mapPartitionBySalary = list.stream().collect(Collectors.partitioningBy(person -> person.getSalary().compareTo(new BigDecimal("12000")) == 0));

//输出结果（两个区，一个是salary=12000的，另一个区是salary!=12000的）：
mapPartitionBySalary: {false=[Person(id=1, name=Ram, age=30, salary=10000), Person(id=3, name=Shiv, age=20, salary=14000), Person(id=4, name=Mahesh, age=30, salary=20000), Person(id=5, name=Austin, age=26, salary=9000)], true=[Person(id=2, name=Shyam, age=20, salary=12000), Person(id=6, name=Jacklin, age=10, salary=12000)]}
```

### 集合分组转某个属性集合

```java
Map<String, List<BigDecimal>> mapList = list.stream().collect(Collectors.groupingBy(Person::getId, Collectors.mapping(Person::getSalary, Collectors.toList())));
System.out.println("mapList: " + mapList);
//输出结果：
mapList: {Shiv=[14000], Jacklin=[12000], Mahesh=[20000], Austin=[12000, 9000], Ram=[10000]}
```

### 获取集合某个对象属性返回String类型，并用[]包括返回

```java
String nameStr1 = list.stream().map(person -> person.getName()).collect(Collectors.joining(",", "[", "]"));
System.out.println("nameStr1: "+ nameStr1);
String nameStr2 = list.stream().collect(Collectors.mapping(Person::getName, Collectors.joining(",", "[", "]")));
System.out.println("nameStr2: "+ nameStr2);
//输出结果：
nameStr1: [Ram,Shyam,Shiv,Mahesh,Austin,Jacklin]
nameStr2: [Ram,Shyam,Shiv,Mahesh,Austin,Jacklin]
```

### 将`List<String>`转`Map<String, List<String>>`按照key的某个前缀分组返回

> ```
> 举个🌰：现在有一些产品code："N1111", "N2222", "N3333", "S1223", "S2323", "S7462", "L2382", "L2323", "L3232"， 不同的首字母区分不同产品，现在需要将不同的产品区分开来，并返回。
> ini复制代码
> ```

```java
List<String> list = Arrays.asList("N1111", "N2222", "N3333", "S1223", "S2323", "S7462", "L2382", "L2323", "L3232");
Map<String, List<String>> codeMap = list.parallelStream().collect(Collectors.groupingBy(k -> k.substring(0, 1), Collectors.mapping(k -> k, Collectors.toList())));
System.out.println(codeMap);
  
//输出结果
{S=[S1223, S2323, S7462], L=[L2382, L2323, L3232], N=[N1111, N2222, N3333]}
```

### map和flatMap

> * map：接收一个函数作为参数，该函数会被应用到每个元素上，并将其映射成一个新的元素。
> * flatMap：实现多对多的映射，或者将多个列表合并成一个列表操作，将多个流合并成为一个流。

```java
// map和flatMap
// 假设现在有一个句子列表，需要将句子中的每个单词都提取出来得到一个所有单词列表，这种情况下map就搞不定了。
String[] strings = {"Hello boy", "Welcome to the world!"};
List<String> words = Stream.of(strings).map(s -> s.split(" ")).flatMap(s -> Stream.of(s)).distinct().collect(Collectors.toList());
words.forEach(c -> {
    System.out.println(c);
});
//输出结果
Hello
boy
Welcome
to
the
world!

List<List<String>> listOfLists = Arrays.asList( Arrays.asList("13378520000", "13278520000"), Arrays.asList("13178520000", "13558520000"), Arrays.asList("15138510000", "15228310000") ); List<String> flatMapList = listOfLists.stream().flatMap(Collection::stream).collect(Collectors.toList()); System.out.println(flatMapList); 

打印结果：[13378520000, 13278520000, 13178520000, 13558520000, 15138510000, 15228310000]
```

### sort排序

```java
//升序方式一
List<Person> sortListAsc = list.stream().sorted((a, b) -> a.getAge() - b.getAge()).collect(Collectors.toList());
System.out.println("sortListAsc=" + sortListAsc);
//升序方式二
List<Person> sortListAsc2 = list.stream().sorted(Comparator.comparing(Person::getAge)).collect(Collectors.toList());
System.out.println("sortListAsc2=" + sortListAsc2);
//降序方式一
List<Person> sortListDesc = list.stream().sorted((a, b) -> b.getAge() - a.getAge()).collect(Collectors.toList());
System.out.println("sortListDesc=" + sortListDesc);
//降序方式二
List<Person> sortListDesc2 = list.stream().sorted(Comparator.comparing(Person::getAge).reversed()).collect(Collectors.toList());
System.out.println("sortListDesc2=" + sortListDesc2);

//输出结果
sortListAsc=[Person(id=6, name=Jacklin, age=10), Person(id=7, name=null, age=10), Person(id=2, name=Shyam, age=20), Person(id=3, name=Shiv, age=20), Person(id=5, name=Austin, age=26), Person(id=1, name=Ram, age=30), Person(id=4, name=Mahesh, age=30)]
sortListAsc2=[Person(id=6, name=Jacklin, age=10), Person(id=7, name=null, age=10), Person(id=2, name=Shyam, age=20), Person(id=3, name=Shiv, age=20), Person(id=5, name=Austin, age=26), Person(id=1, name=Ram, age=30), Person(id=4, name=Mahesh, age=30)]
sortListDesc=[Person(id=1, name=Ram, age=30), Person(id=4, name=Mahesh, age=30), Person(id=5, name=Austin, age=26), Person(id=2, name=Shyam, age=20), Person(id=3, name=Shiv, age=20), Person(id=6, name=Jacklin, age=10), Person(id=7, name=null, age=10)]
sortListDesc2=[Person(id=1, name=Ram, age=30), Person(id=4, name=Mahesh, age=30), Person(id=5, name=Austin, age=26), Person(id=2, name=Shyam, age=20), Person(id=3, name=Shiv, age=20), Person(id=6, name=Jacklin, age=10), Person(id=7, name=null, age=10)]
```

## 实战

```java
Person person1 = Person.builder().id("1").age(26).name("austin").salary(20000).build();
Person person2 = Person.builder().id("2").age(30).name("jacklin").salary(15000).build();
Person person3 = Person.builder().id("3").age(18).name("tony").salary(8000).build();
Person person4 = Person.builder().id("4").age(22).name("lucy").salary(30000).build();
Person person5 = Person.builder().id("5").age(38).name("Mica").salary(12000).build();
Person person6 = Person.builder().id("6").age(22).name("mike").salary(15000).build();
```

### 按薪资升序排序输出

```java
List<Integer> salary = list.stream().sorted(Comparator.comparing(Person::getSalary)).map(Person::getSalary).collect(Collectors.toList());

// 输出结果：[8000, 12000, 15000, 15000, 20000, 30000
```

### 按薪资倒序排序输出

```java
List<Integer> salaryReversed = list.stream().sorted(Comparator.comparing(Person::getSalary).reversed()).map(Person::getSalary).collect(Collectors.toList());

// 输出结果：[30000, 20000, 15000, 15000, 12000, 8000]
```

### 筛选出薪资大于等于20000的姓名并按薪资升序输出

```java
//筛选出薪资大于等于20000的姓名并按薪资升序输出
List<String> nameListWhichSalaryMoreThen20k = list.stream()
        .filter(p -> p.getSalary() >= 20000)
        .sorted(Comparator.comparing(Person::getSalary))
        .map(Person::getName).collect(Collectors.toList());
System.out.println("nameListWhichSalaryMoreThen20k: " + nameListWhichSalaryMoreThen20k);
//输出结果：
nameListWhichSalaryMoreThen15k: [austin, lucy]
```

### 先按薪资升序排序再按年龄由大到小（降序）排序

```java
// 先按薪资升序排序在按年龄有大到小（降序）排序
List<Person> collect = list.stream().sorted((p1, p2) -> {
    if (p1.getSalary().compareTo(p2.getSalary()) == 0) {
        // 如果薪资相同，年龄降序输出（大的先输出）
        return p2.getAge() - p1.getAge();
    } else {
        // 按薪资升序输出
        return p1.getSalary() - p2.getSalary();
    }
}).map(Function.identity()).collect(Collectors.toList());
System.out.println(collect);

//输出结果：
[Person(id=3, name=tony, age=18, salary=8000), Person(id=5, name=Mica, age=38, salary=12000), Person(id=2, name=jacklin, age=30, salary=15000), Person(id=6, name=mike, age=22, salary=15000), Person(id=1, name=austin, age=26, salary=20000), Person(id=4, name=lucy, age=22, salary=30000)]
```

### 求两个list集合的差集和交集

```java
// 求两个集合的差集和交集
List<Integer> list1 = Arrays.asList(1, 3, 4, 5, 6, 8);
List<Integer> list2 = Arrays.asList(2, 3, 5, 7, 9);

// list1存在，list2不存在的数据
List<Integer> diffList = list1.stream().filter(i -> !list2.contains(i)).collect(Collectors.toList());
System.out.println("diffList: " + diffList);

// 公共数据
List<Integer> unionList = list1.stream().filter(i -> list2.contains(i)).collect(Collectors.toList());
System.out.println("unionList: " + unionList);
```

### 实现数据的平方（按倒序）输出

```java
List<Integer> numbers = Arrays.asList(3, 2, 2, 3, 7, 3, 5);
List<Integer> squareList = numbers.stream().map(i -> i * i)
        .sorted((x, y) -> y - x)
        .collect(Collectors.toList());
System.out.println("squareList: " + squareList);
// 输出结果：
squareList: [49, 25, 9, 9, 9, 4, 4]
```
