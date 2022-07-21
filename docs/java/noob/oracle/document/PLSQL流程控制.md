# PLSQL流程控制

## IF

### 基础定义

```sql
IF 条件1 THEN 执行内容1;
ELSIF 条件2 THEN 执行内容2;
ELSE
END IF
```


* Example

```sql
DECLARE

    V_SAL EMP.SAL%TYPE;

BEGIN
    SELECT SAL INTO V_SAL FROM EMP WHERE EMPNO = 7369;
  
    IF V_SAL >=5000 
      THEN 
        dbms_output.put_line('高收入');
    ELSIF V_SAL <= 1000 
      THEN
        dbms_output.put_line('低收入');
    ELSE
      dbms_output.put_line('正常收入');
    END IF;
END;
```


### 赋值

```sql
DECLARE
    V_SAL EMP.SAL%TYPE;
    V_TEMP VARCHAR2(30);
BEGIN
    SELECT SAL INTO V_SAL FROM EMP WHERE EMPNO = 7369;
  
    IF V_SAL >=10000 
      THEN 
        V_TEMP := 'V_SAL >=10000';
    ELSIF V_SAL <= 1000 
      THEN
        V_TEMP := 'V_SAL <= 1000';
    ELSE
      V_TEMP := '>= 1000   <= 10000';
    END IF;
  
    dbms_output.put_line(v_temp);
END;
```



## CASE

### 基础定义

```sql
--CASE
DECLARE
    V_SAL EMP.SAL%TYPE;
    V_TEMP VARCHAR2(30);
BEGIN
    SELECT SAL INTO V_SAL FROM EMP WHERE EMPNO = 7369;
    V_TEMP :=
    CASE TRUNC(V_SAL/5000) 
      WHEN 0 THEN 'V_SAL > 5000'
      WHEN 1 THEN 'V_SAL < 5000'
      ELSE 'V_SAL < 5000'
    END;
  
    dbms_output.put_line(v_temp);
END;

```


## LOOP

### 基础定义

```sql
DECLARE
    V_I NUMBER(5) := 1;
BEGIN
  LOOP
    dbms_output.put_line(v_i);
  
  EXIT WHEN V_I >= 100;
    V_I := V_I + 1;
  END LOOP;
END;
```


## WHILE

### 基础定义

```sql
--WHILE
DECLARE
    V_I NUMBER(5) := 1;
BEGIN
  WHILE V_I <= 100 LOOP
    dbms_output.put_line(v_i);
    V_I := V_I + 1;
  END LOOP;
END;

```


## FOR

### 基础定义

```sql
DECLARE
    V_I NUMBER(5) := 1;
BEGIN
  FOR C IN 1..100 LOOP
    dbms_output.put_line(C);
  END LOOP;
END;
```


### 反转

```sql
DECLARE
    V_I NUMBER(5) := 1;
BEGIN
  --reverse 反转
  FOR C IN REVERSE 1..100 LOOP
    dbms_output.put_line(C);
  END LOOP;
END;
```


### 练习

```sql
DECLARE

BEGIN
  FOR I IN 1..100 LOOP
    IF I = 50 THEN GOTO LABEL;
    END IF;
    dbms_output.put_line(i);
 END LOOP;
  <<label>>
    dbms_output.put_line('打印50');
END;
```
