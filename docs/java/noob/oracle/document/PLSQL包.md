# PLSQL包

> 包是一组相关过程、函数、变量、常量和游标等 PL/SQL  程序设计元素的组合，它具有面向对象程序设计语言的特点，是对这些 PL/SQL 程序设计元素的封装。
>
> 包类似于 C++和 和 JAVA  语言中的类，其中变量相当于类中的成员变量，过程和函数相当于类方法。
>
> 把相关的模块归类成为包， 可使开发人员利用面向对象的方法进行存储过程的开发，从而提高系统性能。
>
> 与类相同， 包中的程序元素也分为公用元素和私用元素两种，这两种元素的区别是他们允许访问的程序范围不同，即它们的作用域不同。
>
> 公用元素不仅可以被包中的函数、过程所调用，也可以被包外的 PL/SQL程序访问，而私有元素只能被包内的函数和过程序所访问。
>
> 在 PL/SQL 程序设计中，使用包不仅可以使程序设计模块化，对外隐藏包内所使用的信息（通过使用私用变量），而且可以提高程序的执行效率。
>
> 因为，**当程序首次调用包内函数或过程时，ORACLE 将整个包调入内存，当再次访问包内元素时，ORACLE 直接从内存中读取，而不需要进行磁盘 I/O 操作**，从而使程序执行效率得到提高。

## 介绍

> **一个包由两个分开的部分组成：**
> 包定义（PACKAGE）：包定义部分声明包内数据类型、变量、常量、游标、子程序和异常错误处理等元素，这些元素为包的公有元素。
>
> 包主体（PACKAGE BODY）：包主体则是包定义部分的具体实现，它定义了包定义部分所声明的游标和子程序，在包主体中还可以声明包的私有元素。
>
> 包定义和包主体分开编译，并作为两部分 分开的对象存放在数据库字典中，详见数据字典 user_source,all_source, dba_source.

## 基础语法

### 包定义

> 其中：AUTHID CURRENT_USER和AUTHID DEFINER选项说明应用程序在调用函数时所使用的权限模式，它们与
> CREATE FUNCTION语句中invoker_right_clause子句的作用相同。

```sql
CREATE [OR REPLACE] PACKAGE package_name
[AUTHID {CURRENT_USER | DEFINER}]
{IS | AS}
[公有数据类型定义[公有数据类型定义]…]
[公有游标声明[公有游标声明]…]
[公有变量、常量声明[公有变量、常量声明]…]
[公有子程序声明[公有子程序声明]…]
END [package_name];
```

### 包主体

> 其中： 在包主体定义公有程序时，它们必须与包定义中所声明子程序的格式完全一致.

```sql
CREATE [OR REPLACE] PACKAGE BODY package_name

{IS | AS}
[私有数据类型定义[私有数据类型定义]…]
[私有变量、常量声明[私有变量、常量声明]…]
[私有子程序声明和定义[私有子程序声明和定义]…]
[公有游标定义[公有游标定义]…]
[公有子程序定义[公有子程序定义]…]
BEGIN
PL/SQL 语句
END [package_name];
```

### 包的开发步骤

与开发存储过程类似，包的开发需要几个步骤：
1． 将每个存储过程调式正确；
2． 用文本编辑软件将各个存储过程和函数集成在一起；
3． 按照包的定义要求将集成的文本的前面加上包定义；
4． 按照包的定义要求将集成的文本的前面加上包主体；
5． 使用 SQLPLUS 或开发工具进行调式。

## 案例

### 一个记录变量 两个函数 一个存储过程

* 包定义

```sql
CREATE OR REPLACE PACKAGE demo_pack
IS
    DeptRec dept%ROWTYPE;
  
    FUNCTION add_dept(dept_no NUMBER, dept_name VARCHAR2, location VARCHAR2)
    RETURN NUMBER;
   
    FUNCTION remove_dept(dept_no NUMBER)
    RETURN NUMBER;
  
    PROCEDURE query_dept(dept_no IN NUMBER);
  
END demo_pack;
```

* 包体

```sql
CREATE OR REPLACE PACKAGE BODY demo_pack
    IS
  
    FUNCTION add_dept(dept_no NUMBER, dept_name VARCHAR2, location VARCHAR2)
    RETURN NUMBER
    IS
        empno_remaining EXCEPTION;
        PRAGMA EXCEPTION_INIT(empno_remaining, -1);
        /* -1 是违反唯一约束条件的错误代码 */
    BEGIN
        INSERT INTO dept VALUES(dept_no, dept_name, location);
        IF SQL%FOUND THEN
        RETURN 1;
        END IF;
        EXCEPTION
        WHEN empno_remaining THEN
        RETURN 0;
        WHEN OTHERS THEN
        RETURN -1;
    END add_dept;
  
  
    FUNCTION remove_dept(dept_no NUMBER)
    RETURN NUMBER
    IS
    BEGIN
        DELETE FROM dept WHERE deptno = dept_no;
        IF SQL%FOUND THEN
            RETURN 1;
        ELSE
            RETURN 0;
        END IF;
        EXCEPTION
            WHEN OTHERS THEN
                RETURN -1;
    END remove_dept;
   
  
    PROCEDURE query_dept(dept_no IN NUMBER)
    IS
    BEGIN
        SELECT * INTO DeptRec FROM dept WHERE deptno=dept_no;
    EXCEPTION
        WHEN NO_DATA_FOUND THEN
            DBMS_OUTPUT.PUT_LINE('数据库中没有编码为'||dept_no||'的部门');
        WHEN TOO_MANY_ROWS THEN
            DBMS_OUTPUT.PUT_LINE('程序运行错误!请使用游标');
        WHEN OTHERS THEN
            DBMS_OUTPUT.PUT_LINE(SQLCODE||'----'||SQLERRM);
    END query_dept;
    BEGIN
        Null;
END demo_pack;
```

* 调用

```sql
--对包内共有元素的调用格式为：包名. 元素名称
--调用 demo_pack 包内函数对 dept 表进行插入、查询和修改操作，并通过 demo_pack 包中的记录变量 DeptRec显示所查询到的数据库信息：
DECLARE
    Var NUMBER;
BEGIN
    Var := demo_pack.add_dept(90,'Administration', 'Beijing');
    IF var =-1 THEN
        DBMS_OUTPUT.PUT_LINE(SQLCODE||'----'||SQLERRM);
    ELSIF var =0 THEN
        DBMS_OUTPUT.PUT_LINE('该部门记录已经存在！');
    ELSE
        DBMS_OUTPUT.PUT_LINE('添加记录成功！');
        Demo_pack.query_dept(90);
        DBMS_OUTPUT.PUT_LINE(demo_pack.DeptRec.deptno||'---'|| demo_pack.DeptRec.dname||'---'||demo_pack.DeptRec.loc);
        var := demo_pack.remove_dept(90);
        IF var =-1 THEN
            DBMS_OUTPUT.PUT_LINE(SQLCODE||'----'||SQLERRM);
        ELSIF var=0 THEN
            DBMS_OUTPUT.PUT_LINE('该部门记录不存在！');
        ELSE
            DBMS_OUTPUT.PUT_LINE('删除记录成功！');
        END IF;
    END IF;
END;
```

### 包里创建存储过程

* 包定义

```sql
CREATE OR REPLACE PACKAGE emp_package
IS
    TYPE emp_table_type IS TABLE OF emp%ROWTYPE
        INDEX BY BINARY_INTEGER;
  
    PROCEDURE read_emp_table (p_emp_table OUT emp_table_type);
END emp_package;
```

* 包实体

```sql
CREATE OR REPLACE PACKAGE BODY emp_package
IS
    PROCEDURE read_emp_table (p_emp_table OUT emp_table_type)
    IS
        I BINARY_INTEGER := 0;
    BEGIN
        FOR emp_record IN ( SELECT * FROM emp ) LOOP
            P_emp_table(i) := emp_record;
            I := I + 1;
        END LOOP;
    END read_emp_table;
END emp_package;
```

* 调用

```sql
DECLARE
    E_table emp_package.emp_table_type;
BEGIN
    Emp_package.read_emp_table(e_table);
    FOR I IN e_table.FIRST .. e_table.LAST LOOP
        DBMS_OUTPUT.PUT_LINE(e_table(i).empno || e_table(i).ename);
    END LOOP;
END;
```

### 包中创建存储过程

* 包定义

```sql
CREATE SEQUENCE empseq
    START WITH 1000
    INCREMENT BY 1
ORDER NOCYCLE;

CREATE SEQUENCE deptseq
    START WITH 50
    INCREMENT BY 10
ORDER NOCYCLE;


CREATE OR REPLACE PACKAGE emp_mgmt
    AS
    FUNCTION hire(ename VARCHAR2, job VARCHAR2, mgr NUMBER, sal NUMBER,comm NUMBER, deptno NUMBER)
    RETURN NUMBER;
   
    FUNCTION create_dept(dname VARCHAR2, loc VARCHAR2)
    RETURN NUMBER;
   
    PROCEDURE remove_emp(empno NUMBER);
   
    PROCEDURE remove_dept(deptno NUMBER);
   
    PROCEDURE increase_sal(empno NUMBER, sal_incr NUMBER);
   
    PROCEDURE increase_comm(empno NUMBER, comm_incr NUMBER);
END emp_mgmt;
```

* 包体

```sql
CREATE OR REPLACE PACKAGE BODY emp_mgmt
AS
    tot_emps NUMBER;
    tot_depts NUMBER;
    no_sal EXCEPTION;
    no_comm EXCEPTION;
  
    FUNCTION hire(ename VARCHAR2, job VARCHAR2, mgr NUMBER,sal NUMBER, comm NUMBER, deptno NUMBER)
        RETURN NUMBER IS
        new_empno NUMBER(4);
    BEGIN
        SELECT empseq.NEXTVAL INTO new_empno FROM dual;
        INSERT INTO emp VALUES (new_empno, ename, job, mgr, sysdate, sal, comm, deptno);
        tot_emps:=tot_emps+1;
        RETURN(new_empno);
        EXCEPTION
            WHEN OTHERS THEN
                DBMS_OUTPUT.PUT_LINE('发生其它错误!');
    END hire;
    
    
    FUNCTION create_dept(dname VARCHAR2, loc VARCHAR2)
    RETURN NUMBER IS
        new_deptno NUMBER(4);
    BEGIN
        SELECT deptseq.NEXTVAL INTO new_deptno FROM dual;
        INSERT INTO dept VALUES (new_deptno, dname, loc);
        Tot_depts:=tot_depts;
        RETURN(new_deptno);
        EXCEPTION
            WHEN OTHERS THEN
                DBMS_OUTPUT.PUT_LINE('发生其它错误!');
    END create_dept;
  
    PROCEDURE remove_emp(empno NUMBER) IS
        No_result EXCEPTION;
    BEGIN
        DELETE FROM emp WHERE emp.empno=remove_emp.empno;
        IF SQL%NOTFOUND THEN
            RAISE no_result;
        END IF;
        tot_emps:=tot_emps-1;
        EXCEPTION
            WHEN no_result THEN
                DBMS_OUTPUT.PUT_LINE('你需要的数据不存在!');
            WHEN OTHERS THEN
                DBMS_OUTPUT.PUT_LINE('发生其它错误!');
    END remove_emp;
   
   
    PROCEDURE remove_dept(deptno NUMBER) IS
        No_result EXCEPTION;
        e_deptno_remaining EXCEPTION;
        PRAGMA EXCEPTION_INIT(e_deptno_remaining, -2292);
        /* -2292 是违反一致性约束的错误代码 */
    BEGIN
        DELETE FROM dept WHERE dept.deptno=remove_dept.deptno;
        IF SQL%NOTFOUND THEN
            RAISE no_result;
        END IF;
        Tot_depts:=tot_depts-1;
        EXCEPTION
            WHEN no_result THEN
                DBMS_OUTPUT.PUT_LINE('你需要的数据不存在!');
            WHEN e_deptno_remaining THEN
                DBMS_OUTPUT.PUT_LINE('违反数据完整性约束!');
            WHEN OTHERS THEN
                DBMS_OUTPUT.PUT_LINE('发生其它错误!');
    END remove_dept;
   
   
    PROCEDURE increase_sal(empno NUMBER, sal_incr NUMBER) IS
        curr_sal NUMBER(7, 2);
    BEGIN
        SELECT sal INTO curr_sal FROM emp WHERE emp.empno=increase_sal.empno;
        IF curr_sal IS NULL THEN
            RAISE no_sal;
        ELSE
            UPDATE emp SET sal=sal+increase_sal.sal_incr WHERE emp.empno=increase_sal.empno;
        END IF;
        EXCEPTION
            WHEN NO_DATA_FOUND THEN
                DBMS_OUTPUT.PUT_LINE('你需要的数据不存在!');
            WHEN no_sal THEN
                DBMS_OUTPUT.PUT_LINE('此员工的工资不存在!');
            WHEN OTHERS THEN
                DBMS_OUTPUT.PUT_LINE('发生其它错误!');
    END increase_sal;
    
    
    PROCEDURE increase_comm(empno NUMBER, comm_incr NUMBER) IS
        curr_comm NUMBER(7,2);
    BEGIN
        SELECT comm INTO curr_comm FROM emp WHERE emp.empno=increase_comm.empno;
        IF curr_comm IS NULL THEN
            RAISE no_comm;
        ELSE
            UPDATE emp SET comm=comm+increase_comm.comm_incr WHERE emp.empno=increase_comm.empno;
        END IF;
        EXCEPTION
            WHEN NO_DATA_FOUND THEN
                DBMS_OUTPUT.PUT_LINE('你需要的数据不存在!');
            WHEN no_comm THEN
                DBMS_OUTPUT.PUT_LINE('此员工的奖金不存在!');
            WHEN OTHERS THEN
                DBMS_OUTPUT.PUT_LINE('发生其它错误!');
    END increase_comm;
    
    
END EMP_MGMT;
```

### 包中有游标

> 利用游标变量创建包 Curvarpack。由于游标变量指是一个指针，其状态是不确定的，因此它不能随同包存储在数据库中，既不能在 PL/SQL 包中声明游标变量。
>
> 但在包中可以创建游标变量参照类型，并可向包中的子程序传递游标变量参数。

* 包定义

```sql
CREATE OR REPLACE PACKAGE CurVarPack AS
    TYPE DeptCurType IS REF CURSOR RETURN dept%ROWTYPE; --强类型定义
    TYPE CurType IS REF CURSOR;-- 弱类型定义
    PROCEDURE OpenDeptVar(Cv IN OUT DeptCurType, Choice INTEGER DEFAULT 0, Dept_no NUMBER DEFAULT 50, Dept_name VARCHAR DEFAULT '%');
END;
```

* 包体

```sql
CREATE OR REPLACE PACKAGE BODY CurVarPack AS
    PROCEDURE OpenDeptvar( Cv IN OUT DeptCurType, Choice INTEGER DEFAULT 0, Dept_no NUMBER DEFAULT 50, Dept_name VARCHAR DEFAULT '%')
    IS
    BEGIN
        IF choice =1 THEN
            OPEN cv FOR SELECT * FROM dept WHERE deptno <= dept_no;
        ELSIF choice = 2 THEN
            OPEN cv FOR SELECT * FROM dept WHERE dname LIKE dept_name;
        ELSE
            OPEN cv FOR SELECT * FROM dept;
        END IF;
    END OpenDeptvar;
END CurVarPack;
```

* 调用

```sql
--定义一个应用
DECLARE
    DeptRec Dept%ROWTYPE;
    EmpRec Emp%ROWTYPE;
    Cv1 Curvarpack.deptcurtype;
    Cv2 Curvarpack.curtype;
BEGIN
    DBMS_OUTPUT.PUT_LINE('游标变量强类型定义应用');
    Curvarpack.OpenDeptVar(cv1, 1, 30);
    FETCH cv1 INTO DeptRec;
        WHILE cv1%FOUND LOOP
            DBMS_OUTPUT.PUT_LINE(DeptRec.deptno||':'||DeptRec.dname);
        FETCH cv1 INTO DeptRec;
    END LOOP;
    CLOSE cv1;

    DBMS_OUTPUT.PUT_LINE('游标变量弱类型定义应用');
    CurVarPack.OpenDeptvar(cv2, 2, dept_name => 'A%');
    FETCH cv2 INTO DeptRec;
        WHILE cv2%FOUND LOOP
            DBMS_OUTPUT.PUT_LINE(DeptRec.deptno||':'||DeptRec.dname);
        FETCH cv2 INTO DeptRec;
    END LOOP;
  
    DBMS_OUTPUT.PUT_LINE('游标变量弱类型定义应用—dept 表');
    OpenCurtype(cv2, 'D');
    FETCH cv2 INTO DeptRec;
        WHILE cv2%FOUND LOOP
            DBMS_OUTPUT.PUT_LINE(deptrec.deptno||':'||deptrec.dname);
        FETCH cv2 INTO deptrec;
    END LOOP;
  
    DBMS_OUTPUT.PUT_LINE('游标变量弱类型定义应用—emp 表');
    OpenCurtype(cv2, 'E');
    FETCH cv2 INTO EmpRec;
        WHILE cv2%FOUND LOOP
            DBMS_OUTPUT.PUT_LINE(emprec.empno||':'||emprec.ename);
        FETCH cv2 INTO emprec;
    END LOOP;
    CLOSE cv2;
END;
```

### 子程序重载

* 包定义

```sql
CREATE OR REPLACE PACKAGE demo_pack1
IS
    DeptRec dept%ROWTYPE;
    V_sqlcode NUMBER;
    V_sqlerr VARCHAR2(2048);
        
    FUNCTION query_dept(dept_no IN NUMBER)
    RETURN INTEGER;
        
    FUNCTION query_dept(dept_no IN VARCHAR2)
    RETURN INTEGER;
END demo_pack1;
```

* 包体

```sql
CREATE OR REPLACE PACKAGE BODY demo_pack1
IS
    FUNCTION check_dept(dept_no NUMBER)
    RETURN INTEGER
    IS
        Flag INTEGER;
    BEGIN
        SELECT COUNT(*) INTO flag FROM dept WHERE deptno=dept_no;
        IF flag > 0 THEN
            RETURN 1;
        ELSE
            RETURN 0;
        END IF;
    END check_dept;
        
        
    FUNCTION check_dept(dept_no VARCHAR2)
    RETURN INTEGER
    IS
        Flag INTEGER;
    BEGIN
        SELECT COUNT(*) INTO flag FROM dept WHERE deptno=dept_no;
        IF flag > 0 THEN
            RETURN 1;
        ELSE
            RETURN 0;
        END IF;
    END check_dept;
        
        
    FUNCTION query_dept(dept_no IN NUMBER)
    RETURN INTEGER
    IS
    BEGIN
        IF check_dept(dept_no) =1 THEN
            SELECT * INTO DeptRec FROM dept WHERE deptno=dept_no;
            RETURN 1;
        ELSE
            RETURN 0;
        END IF;
    END query_dept;
    
        
    FUNCTION query_dept(dept_no IN VARCHAR2)
    RETURN INTEGER
    IS
    BEGIN
        IF check_dept(dept_no) =1 THEN
            SELECT * INTO DeptRec FROM dept WHERE deptno=dept_no;
            RETURN 1;
        ELSE
            RETURN 0;
        END IF;
    END query_dept;
END demo_pack1;
```

* 调用

## 删除包

> 可以使用 DROP PACKAGE 命令对不需要的包进行删除

```sql
DROP PACKAGE [BODY] [user.]package_name;
DROP PACKAGE demo_pack;
DROP PACKAGE demo_pack1;
DROP PACKAGE emp_mgmt;
DROP PACKAGE emp_package;
```

## 包的管理

DBA_SOURCE, USER_SOURCE, USER_ERRORS, DBA-OBJECTS
