SELECT * FROM A;
SELECT * FROM B;

/**
左链接(left join) 左外链接(left outer join)：
1.left join 左边的为左表， 右边的为右表
2.left join 查询的总记录数以左表为主
*/
SELECT * FROM A LEFT JOIN B ON A.CLSID = B.CLSID;
SELECT * FROM B LEFT JOIN A ON A.CLSID = B.CLSID;
SELECT * FROM A LEFT OUTER JOIN B ON A.CLSID = B.CLSID;
SELECT * FROM B LEFT OUTER JOIN A ON A.CLSID = B.CLSID;




/*
右链接(right join) 右外链接(right outer join)：
1.左边是左表 ，右边是右表
2.right join 查询的总记录数 以右表为主
3.(+) 在等号左表是右连接， 在右边是左连接
*/
SELECT * FROM A RIGHT JOIN B ON A.CLSID = B.CLSID; /* SELECT * FROM A,B WHERE A.CLSID(+) = B.CLSID;*/

SELECT * FROM B RIGHT JOIN A ON A.CLSID = B.CLSID;
SELECT * FROM A RIGHT OUTER JOIN B ON A.CLSID = B.CLSID;
SELECT * FROM B RIGHT OUTER JOIN A ON B.CLSID = A.CLSID;


/**
内连接：
1.只返回相匹配的数据
*/
SELECT * FROM B INNER JOIN A ON A.CLSID=B.CLSID;

/**
全连接：
1.查询所有数据，左边为主表
*/
SELECT * FROM A FULL JOIN B ON A.CLSID=B.CLSID;


/**
笛卡尔积：
1.两张表记录数的乘积
*/
SELECT * FROM A CROSS JOIN B;

/**
连接查询：
1.UNION会自动去除多个结果集合中的重复结果
2.UNION会对结果集进行默认规则的排序
*/
SELECT DEPTNO FROM EMP UNION SELECT DEPTNO FROM DEPT;

/**
全连接 （union all）：
1.查询多个表所有的数据,总记录数是多张表的和
2.列的个数，数据类型必须保持一致
3.按照SQL的顺序追加在数据的后面
4.UNION ALL则将所有的结果全部显示出来，不管是不是重复
5.UNION ALL则不会进行任何排序
*/
SELECT ENAME FROM EMP UNION ALL SELECT DNAME FROM DEPT;


/**
交集：
1.显示所有的公共的数据
*/
SELECT CLSID FROM A INTERSECT SELECT CLSID FROM B;

/**
集合相减：
1.显示主表中有，子表中没有的数据
*/
SELECT CLSID FROM A MINUS SELECT CLSID FROM B;
