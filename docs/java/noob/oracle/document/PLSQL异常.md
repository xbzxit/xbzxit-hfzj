# PLSQL异常

> 异常情况处理(EXCEPTION) 是用来处理正常执行过程中未预料的事件, 程序块的异常处理预定义的错误 和 自定义错误,
>
> 由于 PL/SQL  程序块一旦产 生异常而没有指出如何处理时, 程序就会自动终止整个程序运行.


## 异常类型

### 预定义 ( Predefined ) 错误

ORACLE 预定义的异常情况大约有 24 个。对这种异常情况的处理，无需在程序中定义，由 由 ORACLE  自动将其引发。

### 非预定义 ( Predefined )错误

即其他标准的 ORACLE 错误。对这种异常情况的处理，需要用户在程序中定义，然后由 ORACLE 自动将其引发。

### 用户定义(User_define) 错误

程序执行过程中，出现编程人员认为的非正常情况。对这种异常情况的处理， 需要 用户在程序中定义，然后显式地在程序中将其引发。

异常处理部分一般放在 PL/SQL 程序体的后半部,结构为:

```sql
EXCEPTION
WHEN first_exception THEN <code to handle first exception >
WHEN second_exception THEN <code to handle second exception >
WHEN OTHERS THEN <code to handle others exception >
END;
```

异常处理可以按任意次序排列,但 OTHERS 必须放在最后.


## 预定义异常列表

错误号  异常错误信息名称  说明
ORA-0001  Dup_val_on_index  试图破坏一个唯一性限制
ORA-0051  Timeout-on-resource  在等待资源时发生超时
ORA-0061  Transaction-backed-out  由于发生死锁事务被撤消
ORA-1001  Invalid-CURSOR  试图使用一个无效的游标
ORA-1012  Not-logged-on  没有连接到 ORACLE
ORA-1017  Login-denied  无效的用户名/口令
ORA-1403  No_data_found  SELECT INTO 没有找到数据
ORA-1422  Too_many_rows  SELECT INTO 返回多行
ORA-1476  Zero-divide  试图被零除
ORA-1722  Invalid-NUMBER  转换一个数字失败
ORA-6500  Storage-error  内存不够引发的内部错误
ORA-6501  Program-error  内部错误
ORA-6502  Value-error  转换或截断错误
ORA-6504  Rowtype-mismatch  宿主游标变量与 PL/SQL 变量有不兼容行类型
ORA-6511  CURSOR-already-OPEN  试图打开一个已存在的游标
ORA-6530  Access-INTO-null  试图为 null 对象的属性赋值
ORA-6531  Collection-is-null  试图将 Exists 以外的集合( collection)方法应用于
一个 null pl/sql 表上或 varray 上
ORA-6532  Subscript-outside-limit  对嵌套或 varray 索引得引用超出声明范围以外
ORA-6533  Subscript-beyond-count  对嵌套或 varray 索引得引用大于集合中元素的个数.
对这种异常情况的处理，只需在 PL/SQL 块的异常处理部分，直接引用相应的异常情况名，并对其完成


## 案例

### 处理预定义异常

```sql
DECLARE 
  v_empno employees.employee_id%type := &v_empno;
  v_sal employees.salary%type;

BEGIN
  select salary into v_sal from employees where employee_id = v_empno for update;
  
  if v_sal <= 3000 then
    update employees set salary = salary + 3000 where employee_id = v_empno;
    dbms_output.put_line('编号为' || v_empno || '员工工资已更新');
  else
    dbms_output.put_line('编号为' || v_empno || '员工工资不需要更新');
  end if;
  
  exception
    when no_data_found then
      dbms_output.put_line('数据中没有编号为'|| v_empno || '的员工');
    when too_many_rows then
      dbms_output.put_line('程序运行错误，请使用游标');
    when others then
      dbms_output.put_line('其他错误');
END;
```


### 非预定义异常

```sql
--非预定义异常
DECLARE 
  v_deptno dept.deptno%type := &v_deptno;
  deptno_remaining exception;
  
  pragma exception_init(deptno_remaining, -2292);

BEGIN
  delete from dept where deptno = v_deptno;
  
EXCEPTION
  when deptno_remaining then
    dbms_output.put_line('违反数据完整性约束');
  when others then
    dbms_output.put_line(sqlcode || '' || sqlerrm);
 
END;
```
