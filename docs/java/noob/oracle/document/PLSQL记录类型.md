# PLSQL记录类型

## 定义记录类型

### 方式一

* 语法

```sql
TYPE 记录类型名 IS RECORD (
   变量名  类型,
   变量名2  类型2
）;
```

* Example
  ```sql

  ```

```sql
DECLARE
  type emp_record is record (
       v_sal emp.sal%type,
       v_job varchar2(20),
       v_hire_date date
  );
  v_emp_record emp_record;
BEGIN
  SELECT SAL, JOB, HIREDATE INTO v_emp_record from emp WHERE EMP.EMPNO = 7369;
  
  dbms_output.put_line('SAL-' || v_emp_record.v_sal || '-JOB-' || v_emp_record.v_job || '-HIREDATE-' || v_emp_record.V_HIRE_DATE);
END;
```

### 方式二

* 语法

```sql
记录类型名  表名%rowtype;
```

* Example

```sql
DECLARE
  --声明行记录类型
  v_emp_record emp%rowtype;
  v_emp_id number(8);
BEGIN
  v_emp_id := 7369;
  SELECT * INTO v_emp_record from emp WHERE EMP.EMPNO = v_emp_id;
  
  dbms_output.put_line('SAL-' || v_emp_record.sal || '-JOB-' || v_emp_record.job || '-HIREDATE-' || v_emp_record.HIREDATE);
END;
```


### 记录类型赋值

```sql
DECLARE
  type emp_record is record (
       v_sal emp.sal%type,
       v_job varchar2(20),
       v_hire_date date
  );
  v_emp_record emp_record;
BEGIN
  --给记录类型赋值
  v_emp_record.v_sal := 1000;
  v_emp_record.v_job := 'HR';
  v_emp_record.v_hire_date := sysdate;
  
  dbms_output.put_line('SAL-' || v_emp_record.v_sal || '-JOB-' || v_emp_record.v_job || '-HIREDATE-' || v_emp_record.V_HIRE_DATE);
END;

```
