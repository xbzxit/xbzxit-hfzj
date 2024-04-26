# Lambda表达式

> Lambda 是一个 匿名函数，我们可以把 Lambda 表达式理解为是 一段可以传递的代码（将代码 像数据一样进行传递）。
> 可以写出更简洁、更灵活的代码。作为一种更紧凑的代码风格，使Java的语言表达能力得到了提升。

## 匿名类到Lambda

### 匿名内部类

* 传统写法

```java
Runnable r1 = new Runnable() {
    @Override
    public void run() {
        System.out.println("Hello World!!!");
    }
};
```

* Lambda

```java
Runnable r2 = () -> System.out.println("Hello Lambda");
```

### 匿名内部类作为参数

* 传统写法

```java
//内名内部类作为参数使用
TreeSet<String> ts = new TreeSet<>(new Comparator<String>() {
    @Override
    public int compare(String o1, String o2) {
        return Integer.compare(o1.length(), o2.length());
    }
});

```

* Lambda

```java
TreeSet<String> ts2 = new TreeSet<>(
   (o1, o2) -> Integer.compare(o1.length(), o2.length())
);

```

## Lambda表达式语法

> Lambda 表达式在Java 语言中引入了一个新的语法元素和操作符。这个操作符为 “- -> >” ， 该操作符被称为 Lambda 操作符或剪头操作符。
>
> 它将 Lambda 分为两个部分：
>
> 左侧：指定了 Lambda 表达式需要的所有参数
> 右侧：指定了 Lambda 体，即 Lambda 表达式要执行的功能。

### 格式一

> 无参， 无返回值， Lambda体只需一条语句

```java
Runnable r1 = () -> System.out.pritln("Hello Lambda");
```

### 格式二

> Lambda需要一个参数

```java
Consumer<String> fun = (args) -> System.out.println(args);
```

### 格式三

> Lambda只需要一个参数时，参数的小括号可以省略

```java
Consumer<String> fun = args -> System.out.println(args);
```

### 格式四

> Lambda需要两个参数，并且有返回值

```java
BinaryOperator<Long> bo = (x,y) -> {
    System.out.println("实现函数接口方法");
    return x + y;
};
```

### 格式五

> 当Lambda体只有一条语句时，return与大括号可以省略

```java
BinaryOperator<Long> bo = (x, y) -> x + y;


BinaryOperator<Long> bo = (x, y) -> {
  return x + y;
}
```

### 格式六

> 数据类型可以省略，因为可由编译器推断得出，称为 ”类型推断“
>
> Lambda 表达式中的参数类型都是由编译器推断得出的。Lambda 表达式中无需指定类型，程序依然可
> 以编译，这是因为 javac 根据程序的上下文，在后台推断出了参数的类型。
>
> Lambda 表达式的类型依赖于上下文环境，是由编译器推断出来的。这就是所谓的“类型推断”

```java
BinaryOperator<Long> bo = (Long x, Long y) -> {
    System.out.println("实现函数接口方法");
    return x + y;
};

BinaryOperator<Long> bo = ( x, y) -> {
    System.out.println("实现函数接口方法");
    return x + y;
};
```

## 应用场景

> 函数式接口： Lambda 表达式最常见的用法是创建函数式接口的实例。函数式接口是只包含一个抽象方法的接口，Lambda 表达式可以作为这个抽象方法的实现。
>
> 匿名函数： Lambda 表达式允许你以更简洁的方式创建匿名函数，避免了传统匿名内部类的冗长语法。
>
> 传递行为： Lambda 表达式可以作为参数传递给方法，这样你可以在调用方法时指定不同的行为。
>
> 集合操作： Lambda 表达式常用于集合操作，例如使用 forEach 遍历集合、使用 filter 过滤元素、使用 map 转换元素等。
>
> 排序和比较： Lambda 表达式可以用于自定义排序和比较规则，例如使用 Comparator 接口。
>
> 并行和多线程： Lambda 表达式在并行流和多线程编程中发挥重要作用，可以更容易地编写并发代码。
>
> 事件处理： Lambda 表达式可以用于事件处理，例如 GUI 应用程序中的按钮点击事件。
>
> 替代策略模式： Lambda 表达式可以替代传统的策略模式，使代码更加简洁。
>
> 延迟执行： Lambda 表达式可以实现延迟执行，例如在某个条件满足时才执行代码。
>
> 简化回调： 使用 Lambda 表达式可以简化回调函数的定义和传递。
>
> 流式编程： Lambda 表达式与 Java 流式编程结合，可以实现链式的数据处理和转换。

### 传递行为

* 传统写法

```java
public void process(Action action) {
    action.execute();
}
 
Action action = new Action() {
    public void execute() {
        System.out.println("Action executed.");
    }
};
 
process(action);
```

* Lambda

```java
public void process(Action action) {
    action.execute();
}

process(() -> System.out.println("Action executed."));
```

### 集合操作

* 传统写法

```java
List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5);
 
for (Integer number : numbers) {
    System.out.println(number);
}
```

* Lambda

```java
List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5);

numbers.forEach(number -> System.out.println(number));
```

### 排序和比较

* 传统写法

```java
List<String> names = Arrays.asList("Alice", "Bob", "Charlie");
 
Collections.sort(names, new Comparator<String>() {
    public int compare(String s1, String s2) {
        return s1.compareTo(s2);
    }
});
```

* Lambda

```java
List<String> names = Arrays.asList("Alice", "Bob", "Charlie");
 
Collections.sort(names, (s1, s2) -> s1.compareTo(s2));
```

### 事件处理

* 传统写法

```java
button.addActionListener(new ActionListener() {
    public void actionPerformed(ActionEvent e) {
        System.out.println("Button clicked.");
    }
});
```

* Lambda

```java
button.addActionListener(e -> System.out.println("Button clicked."));
```

### 替代策略模式

* 传统写法

```java
Validator validator = new Validator() {
    public boolean isValid(String input) {
        return input != null && !input.isEmpty();
    }
};
```

* Lambda

```java
Validator validator = input -> input != null && !input.isEmpty();
```

### 简化回调

* 传统写法

```java
performOperation(new Callback() {
    public void onSuccess() {
        System.out.println("Operation succeeded.");
    }
  
    public void onFailure() {
        System.out.println("Operation failed.");
    }
});
————————————————

                            版权声明：本文为博主原创文章，遵循 CC 4.0 BY-SA 版权协议，转载请附上原文出处链接和本声明。
                      
原文链接：https://blog.csdn.net/weixin_42051691/article/details/132176565
```


* Lambda

```java

```

### 流式编程

* 传统写法

```java
List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5);
 
int sum = 0;
for (int number : numbers) {
    sum += number;
}
```

* Lambda

```java
List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5);
 
int sum = numbers.stream().reduce(0, (x, y) -> x + y);
```
