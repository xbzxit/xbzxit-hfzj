# Python与MySql的整合

## helloworld

> 使用python连接mysql

```python
import mysql.connector

con=mysql.connector.connect(
 host="localhost",port="3306",
 user="root",password="root",
 database="python_mysql"
)

cursor=con.cursor()
sql="SELECT empmo,ename,hiredate FROM t_emp;"
cursor.execute(sql)
for one in cursor:
 print(one[0], one[1], one[2])
con.close()

```
