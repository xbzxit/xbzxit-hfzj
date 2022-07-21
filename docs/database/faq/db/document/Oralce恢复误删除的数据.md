# 恢复删除的数据

## 删除表中数据的三种方式

delete （删除一条记录）

drop

truncate 删除表格中数据

## delete误删解决办法一

> 原理：利用oracle提供的闪回方法，如果在删除数据后还没做大量的操作（只要保证被删除数据的块没被覆写），就可以利用闪回方式直接找回删除的数据

**确定删除数据的时间（删除数据之前的时间就行，最好是删除数据的时间点）**

```sql
select * from 表名 as of timestamp to_timestamp('删除时间点','yyyy-mm-dd hh24:mi:ss')
```

**把删除的数据重新插入原表**

```sql
insert into 表名 (select * from 表名 as of timestamp to_timestamp('删除时间点','yyyy-mm-dd hh24:mi:ss'));
```

<font color='red'>注意保证主键不重复</font>

## delete误删解决办法二

> 如果表结构没有发生改变，还可以直接使用闪回整个表的方式来恢复数据。

**表闪回要求用户必须要有flash any table权限,开启行移动功能**

```sql
alter table 表名 enable row movement
```

**恢复表数据**

```sql
flashback table 表名 to timestamp to_timestamp('删除时间点','yyyy-mm-dd hh24:mi:ss')
```

**关闭行移动功能（切记）**

```sql
alter table 表名 disable row movement
```

## drop误删解决办法

> 原理：由于oracle在删除表时，没有直接清空表所占的块,oracle把这些已删除的表的信息放到了一个虚拟容器“回收站”中，
>
> 而只是对该表的数据块做了可以被覆写的标志，所以在块未被重新使用前还可以恢复。

查询这个"回收站"或者查询suer_table视图来查找已经被删除的表

```sql
select table_name,dropped from user_tables
select object_name,original_name,type,droptime from user_recyclebin
```

<font color = 'red'>在以上信息中，表名都是被重命名过的，字段table_name或者object_name就是删除后在回收站中的存放表名</font>


**如果还记得表名，则用该语句直接恢复**

```sql
flashback table 原表名 to before drop
```

> 如果记不住了，也可以直接使用回收站的表名进行恢复，然后再重命名，参照以下语句：

```sql
flashback table "回收站中的表名(如：Bin$DSbdfd4rdfdfdfegdfsf==$0)" to before drop rename to 新表名
```

> oracle的闪回功能除了以上基本功能外，还可以闪回整个数据库：
> 使用数据库闪回功能，可以使数据库回到过去某一状态, 语法如下：

```sql
alter database flashback on

flashback database to scn SCNNO;

flashback database to timestamp to_timestamp('2007-2-12 12:00:00','yyyy-mm-dd hh24:mi:ss');
```

## 总结

>oracle提供以上机制保证了安全操作，但同时也代来了另外一个问题，就是空间占用，由于以上机制的运行，使用drop一个表或者delete数据后，空间不会自
动回收，对于一些确定不使用的表，删除时要同时回收空间，可以有以下2种方式：

采用truncate方式进行截断。（但不能进行数据回恢复了）

在drop时加上purge选项：drop table 表名 purge

  该选项还有以下用途：也可以通过删除recyclebin区域来永久性删除表 ,原始删除表drop table emp cascade constraints
 
  ```sql
   purge table emp;
  ```

  删除当前用户的回收站:

  ```sql
  purge recyclebin;
  ```
  删除全体用户在回收站的数据:

  ```sql
  purge dba_recyclebin
  ```