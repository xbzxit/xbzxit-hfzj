# Mybatis常见开发问题

## ResultMap继承

### java

```java
public class FykUser {

	private String id;

	private String loginName;
}



public class FykUserVo extends FykUser{

	private String orgId;

	private String orgName;
}


```

### mapper.xml

> extends="userMap"

```xml
<resultMap id="userMap" type="com.boco.fyk.basic.domain.FykUser">
	<id column="id" property="id" />
	<result column="login_name" property="loginName" />
</resultMap>


<resultMap type="com.boco.fyk.basic.vo.user.FykUserVo" id="userMapVo" extends="userMap">
	<result column ="org_id" property="orgId"/>
	<result column ="org_name" property="orgName"/>
</resultMap>


```
