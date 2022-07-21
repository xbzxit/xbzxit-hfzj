# PLSQL存储函数

> ORACLE  提供可以把 PL/SQL  程序存储在数据库中，并可以在任何地方来运行它。这样就叫存储过
> 程或函数。过程和函数统称为 PL/SQL 子程序，他们是被命名的 PL/SQL 块，均存储在数据库中，并
> 通过输入、输出参数或输入/输出参数与其调用者交换信息。 过程和函数的唯一区别是函数总向调
> 用者返回数据，而过程则不返回数据。

## 语法

> OR REPLACE 为可选. 有了它, 可以或者创建一个新函数或者替换相同名字的函数, 而不会出现冲突
>
> 函数名后面是一个可选的参数列表, 其中包含 IN, OUT 或 IN OUT 标记. 参数之间用逗号隔开.
>
> IN:  标记表示传递给函数的值在该函数执行中不改变;
>
> OUT: 标记表示一个值在函数中进行计算并通过该参数传递 给调用语句;
>
> IN OUT:  标记表示传递给函数的值可以变化并传递给调用语句.
>
> 若省略标记,  则参数隐含为 IN 。因为函数需要返回一个值, 所以 RETURN包含返回结果的数据类型.


```sql
CREATE [OR REPLACE] FUNCTION function_name
[ (argment [ { IN | IN OUT }] Type,
argment [ { IN | OUT | IN OUT } ] Type ]
[ AUTHID DEFINER | CURRENT_USER ]
RETURN return_type
{ IS | AS }
<类型.变量的说明>
BEGIN
FUNCTION_body
EXCEPTION
其它语句
END;
```

## 案例

### 不带参数的函数

```sql
CREATE OR REPLACE FUNCTION TEST_FUN
 RETURN DATE
 IS
 V_DATE DATE;
BEGIN
 SELECT SYSDATE INTO V_DATE FROM DUAL;
 DBMS_OUTPUT.put_line('没有参数的函数');
 RETURN V_DATE;
END;
```

* 调用函数

```sql

```


### 带输入输出参数

```sql
CREATE OR REPLACE FUNCTION GET_SALARY(DEPT_ID EMPLOYEES.DEPARTMENT_ID%TYPE,
                                      EMP_COUNT OUT NUMBER) RETURN NUMBER IS
  v_sum number;
BEGIN

  select sum(salary), count(*)
    into v_sum, EMP_COUNT
    from employees
   where employees.department_id = dept_id;

  return v_sum;

EXCEPTION
  when no_data_found then
    dbms_output.put_line('您的数据不存在');
  when others then
    dbms_output.put_line(sqlcode || ':' || sqlerrm);
END GET_SALARY;

```


## 内嵌函数的调用

### 位置表示法

> argument_value1[,argument_value2 …]

```sql
DECLARE
    v_num number;
    v_sum number;
BEGIN
    v_sum := get_salary(80,v_num);
    dbms_output.put_line('80号部门工资总和：' || v_sum || '人数:' || v_num);   
END;
```

### 名称表示法

> argument => parameter [,…]
> 其中：argument 为形式参数，它 必须与函数定义时所声明的形式参数名称相同。Parameter 为实际参数。
> 在这种格式中，形势参数与实际参数成对出现，相互间关系唯一确定，所以参数的顺序可以任意排列。

```sql
DECLARE
   v_num number;
   v_sum number;
BEGIN
  v_sum := get_salary(emp_count => v_num, dept_id => 80);
  dbms_output.put_line('80号部门工资总和：' || v_sum || '人数:' || v_num);   
END;
```

### 混合表示法

> 即在调用一个函数时，同时使用位置表示法和名称表示法为函数传递参数。
>
> 采用这种参数传递方法时，使用位置表示法所传递的参数必须放在名称表示法所传递的参数前面。
>
> 也就是说，无论函数具有多少个参数，只要其中有一个参数使用名称表示法，其后所有的参数都必须使用名称表示法。

```sql
DECLARE
  v_num number;
  v_sum number;
BEGIN
  v_sum := get_salary(80, EMP_COUNT => v_num);
  dbms_output.put_line('80号部门工资总和：' || v_sum || '人数:' || v_num);   
  
END;
```

## 输入参数自带默认值

```sql
CREATE OR REPLACE FUNCTION get_salay(dept_id employees.department_id%type default 50,
                                     emp_count out number)
return number
is

v_sum number;

BEGIN
  SELECT SUM(SALARY), COUNT(*) INTO V_SUM, EMP_COUNT FROM EMPLOYEES
  WHERE DEPARTMENT_ID = DEPT_ID;
  
  RETURN V_SUM;
  
EXCEPTION
  WHEN NO_DATA_FOUND THEN
     dbms_output.put_line('您需要的数据不存在');   
  WHEN OTHERS THEN
     dbms_output.put_line(SQLCODE || SQLERRM);   
END;
```
