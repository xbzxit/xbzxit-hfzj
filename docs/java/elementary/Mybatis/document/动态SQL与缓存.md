# 动态SQL与缓存

## 动态SQL

> 动态SQL 常用标签
>
> if
>
> choose(when,otherwise)
>
> trim(where,set)
>
> foreach

### if标签的应用

> if 判断中的 and 可以用 && 代替，但是需要转义 &amp ;  但不推荐使用
>
> "" 号用 转义字符 &quot ;  但不推荐使用

* mapper.java

```java
public List<Employee> getEmpsByConditionByIf(Employee emp);
```

* mapper.xml

```xml
<select id="getEmpsByConditionByIf" resultType="com.xbzxit.mybatis.mapper.Employee">
    select * from emp where 
    <if test="id != null">
      id = #{id}
    </if>
  
    <if test="lastName != null and lastName.trim() != ''">
      and last_name = #{lastName}
    </if>
</select>
```

### where

> 当ID 为空时也会正常执行，<where 标签会帮忙把一个条件的 and 去掉

* mapper.java

```java
public List<Employee> getEmpsByConditionByWhere(Employee emp);
```

* mapper.xml

```xml
<select id="getEmpsByConditionByWhere" resultType="com.xbzxit.mybatis.mapper.Employee">
    select * from emp
    <where>
        <if test="id != null">
          id = #{id}
        </if>
  
        <if test="lastName != null and lastName.trim() != ''">
          and last_name = #{lastName}
        </if>
    </where> 
   
</select>
```

### trim

> 开发中不用的，了解即可

* mapper.java

```java
public List<Employee> getEmpsByConditionByTrim(Employee emp);
```

* mapper.xml

```xml
<select id="getEmpsByConditionByTrim" resultType="com.xbzxit.mybatis.mapper.Employee">
    select * from emp
    <trim prefix="where" prefixOverrides="" suffix="" suffixOverrides="and">
        <if test="id != null">
          id = #{id}  and
        </if>
  
        <if test="lastName != null and lastName.trim() != ''">
          last_name = #{lastName}
        </if>
    </trim> 
   
</select>
```

### choose

> 类似java的 swtich-case
>
> 只会匹配一个，如果多个条件匹配， 只会按顺序匹配第一个

* mapper.java

```java
public List<Employee> getEmpsByConditionByChoose(Employee emp);
```

* mapper.xml

```xml
<select id="getEmpsByConditionByChoose" resultType="com.xbzxit.mybatis.mapper.Employee">
    select * from emp
    <where>
        <choose>
             <when test="id != null">
               id = #{id}
             </when>
             <when test="lastName != null and lastName.trim() != ''">
                last_name = #{lastName}
             </when>
             <otherwise>
                gender = 0 
             </otherwise>
        </choose>
  
    </where> 
   
</select>
```

### set

> set 标签可以去除多余的逗号 ，

* mapper.java

```java
public void updateEmp(Employee emp);
```

* mapper.xml

```xml
<update id="updateEmp">
   update employee
   <set>
        <if test="id != null">
          id = #{id},
        </if>
  
        <if test="lastName != null and lastName.trim() != ''">
          last_name = #{lastName},
        </if>
    </set>

</update>
```

### foreach

> collection: 指定要遍历的集合， list类型的参数会做特殊处理封装到map中， map的key是list,通过key可以获取到list  集合
>
> item:  遍历的元素赋值个指定的变量
>
> separator: 每个元素之间的分隔符
>
> open: 遍历所有的元素时先拼接一个开始的字符
>
> close: 遍历完所有的元素时拼接一个结束的字符
>
> index:
>
> - 遍历list，index就是索引，item就是当前值
> - 遍历map，index就是map的可以，item就是map的值

* mapper.java

```java
public List<Employee> getEmpsByConditionByForeach(Employee emp);
```

* mapper.xml

```xml
<select id="getEmpsByConditionByForeach" resultType="com.xbzxit.mybatis.mapper.Employee">
    select * from emp where id in (
       <foreach collection="ids" item="item_id" separator=",">
         #{item_id}
       </foreach>
     )
</select>



<select id="getEmpsByConditionByForeach" resultType="com.xbzxit.mybatis.mapper.Employee">
    select * from emp where id in
    <foreach collection="ids" item="item_id" separator="," open="(" close=")" index="">
      #{item_id}
    </foreach>
</select>


<select id="getEmpsByConditionByForeach" resultType="com.xbzxit.mybatis.mapper.Employee">
    select * from emp
    <foreach collection="ids" item="item_id" separator="," open="where id in (" close=")" index="">
      #{item_id}
    </foreach>
</select>
```

## 缓存
