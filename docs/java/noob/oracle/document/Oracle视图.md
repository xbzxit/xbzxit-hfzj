# Oracle视图


## 创建视图

## 简单视图

```sql
CREATE VIEW V_EMP AS SELECT ENAME,JOB FROM EMP;
```


## 只读视图

```sql
CREATE VIEW V_EMP1 AS SELECT ENAME,JOB FROM EMP WITH READ ONLY;
```
