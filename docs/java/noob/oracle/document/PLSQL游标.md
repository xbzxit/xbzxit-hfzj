# PLSQL游标

## 游标属性

> %FOUND 布尔型属性，当最近一次读记录时成功返回，则值为TRUE;
>
> %NOTFOUND 布尔型属性，当最近一次没 读 记录时成功返回，则值为TRUE;
>
> %ISOPEN 布尔型属性，当游标已打开时返回TRUE;
>
> %ROWCOUNT 数字型属性，返回已从游标中读取的记录数



## 基础游标

```sql
DECLARE
  v_sal emp.sal%type;

  CURSOR c_emp_sal IS SELECT SAL FROM EMP WHERE DEPTNO = 20;
BEGIN
   
  --打开游标
  OPEN c_emp_sal;
  
  --提取游标
  FETCH c_emp_sal into v_sal;
  
  while c_emp_sal%found loop
    dbms_output.put_line('sal-' || v_sal);
    FETCH c_emp_sal into v_sal;
  end loop;
  CLOSE c_emp_sal;
END;
```


## 游标-记录类型-WHILE

```sql
declare
  type r_emp is record (
       v_sal emp.sal%type,
       v_empid emp.empno%type,
       v_hiredate emp.hiredate%type
  );
  
  v_emp_record r_emp;
  
  cursor c_sal_emp is select sal,empno,hiredate from emp where deptno = 20;
  
begin
  open c_sal_emp;
  
  fetch c_sal_emp into v_emp_record;
  
  while c_sal_emp%found loop
    dbms_output.put_line('empno-'|| v_emp_record.v_empid || '-sal-' || v_emp_record.v_sal || '-v_hiredate-' || v_emp_record.v_hiredate);
    fetch c_sal_emp into v_emp_record;
  end loop;
  close c_sal_emp;
end;

```


## 游标-记录类型-FOR

```sql
declare
  type r_emp is record (
       v_sal emp.sal%type,
       v_empid emp.empno%type,
       v_hiredate emp.hiredate%type
  );
  
  v_emp_record r_emp;
  
  cursor c_sal_emp is select sal,empno,hiredate from emp where deptno = 20;
  
begin
  for c in c_sal_emp loop
    dbms_output.put_line('empno-'|| c.empno || '-sal-' || c.sal || '-v_hiredate-' || c.hiredate);
  end loop;

end;

```
