# PLSQL存储过程

## 语法

```sql
CREATE [OR REPLACE] PROCEDURE Procedure_name
    [ (argment [ { IN | IN OUT }] Type,
    argment [ { IN | OUT | IN OUT } ] Type ]
    [ AUTHID DEFINER | CURRENT_USER ]
    { IS | AS }
    <类型.变量的说明>
BEGIN
    <执行部分>
    EXCEPTION
        <可选的异常错误处理程序>
END;
```

## 案例

### 删除指定员工记录

```sql
create or replace procedure ce1_emp (
    v_empid in emplovees.employee_id%type)is
    no_result exception;
begin
    delete from employees where employee_id = v_empid;
    if sql%notfound then
        raise no_result;
    end if;
    dbms_output.put_line( '编号为:'|| v_empid ||'的员工已被除名');
    exception
        when no_result then
            dbms_output.put_line( '您要删除的数据不存在' ) ;
        when others then
            dbms_output.put_line(sclcode || '--' || sqlerrm);
end;
```

### 插入员工记录

```sql
create or replace procedure insert_emp (v_empno emp.empno%type,
                                        v_name emp.ename%type,
                                        v_depno emp.deptno%type)
is
    empno_remaining exception;
    pragma exception_init (empno_remaining,-1);
begin
    insert into emp (empno,ename,deptno) values(v_empno,v_name, v_depno);
    dbms_output.put_line('插入数据成动! ' );
    exception
        when empno_remaining then
            dbms_output.put_line( '违反完整性约束! ');
        when others then
         dbms_output.put_line(sclcode || '--' || sqlerrrm) ;
end;
```

### 查询指定员工记录

```sql
create or replace procedure query_emp ( v_empid employees.employee_idstype,
                                        v_name out employees.last_namestype,
                                        v_sal out employees.salary%type)
is
begin
    select last_narme,salary into v_name, v_sal from employees where employee_id = v_empid;
    dbms_output.put_line( '员工号为:' ||  v_empid || '的员工已经找到');
    exception
        when no_data_found then
            dbms_output . put_line ('你要查询的数据不存在');
        when others then
            dbms_output.put_line (sc1code || '--' || sqlerrm) ;
end;
```

* 调用

```sql
declare
    v1 employees.last_name%type;
    v2 employees.salary%type;
begin
    query_emp(200,v1, v2);
    dbms_output.put_line ('姓名:' ||  v1  ||  '，工资:' ||  v2) ;
    query_emp(201,v1, v2);
    dbms_output.put_line ( '姓名:' ||  v1  ||  '，工资:' ||  v2);
end;

```

### 计算指定部门的工资总和，并统计其中的职工数量

```sql
create or replace procedure proc_demo (
    v_depid employees.department_id%type default 10,
    v_salsum out employees.salary%type,
    v_empcount out number)
is
begin
    select sun (salary), count (*) into v_salsum, v_empcount from employees where department_id = v_depid;
    exception
    when no_data_found then
    dbms_output.put_line('你需要的数据不存在');
    when others then
    dbms_output.put_line(sqlcode || '--'|| sqlerrm) ;
end;

```

* 调用

```sql
declare
    v_num number;
    v_sum number;
begin
    proc_demo (v_salsum => v_sum, v_empcount => v_num) ;
    dbms_output.put_line ( '10号部门的工资总额为:'|| v_sum || '，人数为:'|| v_num) ;
end;

```

## 调用权限

> 在创建存储过程时, 可使用 AUTHID CURRENT_USER 或 AUTHID DEFINER 选项,以表明在执行该过程时 Oracle 使用的权限.
>
> 1. 如果使用 AUTHID CURRENT_USER 选项创建一个过程, 则 Oracle用调用该过程的用户权限执行该过程.为了成功执行该过程,调用者必须具有访问该存储过程体中引用的所有数据库对象所必须的权限
> 2. 如果用默认的 AUTHID DEFINER 选项创建过程, 则 Oracle  使用过程所有者的特权执行该过程.为了成功执行该过程,  过程的所有者 必须具有访问该存储过程体中引用的所有数据库对象所必须的权限.想要简化应用程序用户的特权管理, 在创建存储过程时, 一般选择 AUTHID DEFINER选项这样就不必授权给需要调用的此过程的所有用户了.

## 开发存储过程步骤(起始没啥用)

### 使用文字编辑处理软件编辑存储过程源码

使用文字编辑处理软件编辑存储过程源码，，需将源码存为文本格式。
在 SQLPLUS  或用调试工具将存储过程程序进行解释

### 在 SQLPLUS 或用调试工具将存储过程程序进行解释；

在 SQL>下调试，可用 START 或 GET 等 ORACLE 命令来启动解释。如：
SQL>START c:\stat1.sql

### 调试源码直到正确

> 我们不能保证所写的存储过程达到一次就正确。所以这里的调式是每个程序员必须进行的工作之一。
>
> 在 SQLPLUS 下来调式主要用的方法是：
> 使用 SHOW ERROR  命令来提示源码的错误位置；
> 使用 user_errors 数据字典来查看各存储过程的错误位置。

### 授权执行权给相关的用户或角色

> 如果调式正确的存储过程没有进行授权，那就只有建立者本人才可以运行。所以作为应用系统的一部分的存储过程也必须进行授权才能达到要求。
>
> 在 SQL*PLUS 下可以用 GRANT 命令来进行存储过程的运行授权。

```sql
GRANT EXECUTE ON dbms_job TO PUBLIC WITH GRANT OPTION
```

### 与过程相关数据字典

```sql
USER_SOURCE, ALL_SOURCE, DBA_SOURCE, USER_ERRORS
```

相关的权限:

```sql
CREATE ANY PROCEDURE
DROP ANY PROCEDURE
在 SQL*PLUS 中，可以用 DESCRIBE 命令查看过程的 名字及其参数表。
DESCRIBE Procedure_name;
```

## 删除过程

> 可以使用 DROP PROCEDURE 命令对不需要的过程进行删除，语法如下：

```sql
DROP PROCEDURE [user.]Procudure_name
```

## 删除函数

> 可以使用 DROP FUNCTION 命令对不需要的函数进行删除，语法如下：

```sql
DROP FUNCTION [user.]Function_name;
```
