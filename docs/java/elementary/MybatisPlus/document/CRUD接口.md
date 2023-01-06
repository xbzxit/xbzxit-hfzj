# CRUD接口

## 通用Service

### 自定义接口

> 必须继承 mybatisPlus IService

```java
public interface UserService extends IService<User> {

}
```

### 自定义实现类

> 必须继承 mybatisPlus的 ServiceImpl

```java
@Service
public class UserServiceImpl extends ServiceImpl<UserMapper, User> implements UserService {

}
```


## CURD基础用法

### 新增

```java


    /**
     * 插入
     */
    @Test //test 注解不要用错了 org.junit.jupiter.api.Test
    public void testInsert(){
      User user = new User(null, "张三", 23, "zhangsan@163.com");
      //INSERT INTO user ( id, name, age, email ) VALUES ( ?, ?, ?, ? )
      userService.save(user);

      //1610474690964901889
      System.out.println("id自动获取："+user.getId());
    }


    /**
     * 默认1000数据插入一次， 数据如果超过1000也是1000条插入 一次
     */
    @Test
    public void saveBatch() {
        List list = new ArrayList();
        for (int i=1; i< 1000; i++) {
            User user = new User(null,"zs"+i,i,null);
            list.add(user);
        }
        userService.saveBatch(list);
    }

    /**
     * 200条数据插入一次
     */
    @Test
    public void saveBatch2() {
        List list = new ArrayList();
        for (int i=1; i< 1000; i++) {
            User user = new User(null,"zs"+i,i,null);
            list.add(user);
        }
        userService.saveBatch(list,200);
    }

```


### 删除

```java

    /**
     * 通过id删除记录
     */
    @Test
    public void testDeleteById(){
      //通过id删除用户信息
      //DELETE FROM user WHERE id=?
      userService.removeById(1610474690964901889L);
    }


    /**
     * 通过id批量删除记录
     */
    @Test
    public void testDeleteBatchIds(){
      //通过多个id批量删除
      //DELETE FROM user WHERE id IN ( ? , ? , ? )
      List<Long> idList = Arrays.asList(1L, 2L, 3L);
      userService.removeByIds(idList);
    }


    /**
     * 通过map条件删除记录
     */
    @Test
    public void testDeleteByMap(){
      //根据map集合中所设置的条件删除记录
      //DELETE FROM user WHERE name = ? AND age = ?
      Map<String, Object> map = new HashMap<>();
      map.put("age", 23);
      map.put("name", "张三");
      userService.removeByMap(map);
    }


```


### 修改

```java

    /**
     * 修改
     */
    @Test
    public void testUpdateById(){
      User user = new User(4L, "admin", 22, null);
      //UPDATE user SET name=?, age=? WHERE id=?
      userService.updateById(user);
    }

```


### 查询

```java

    /**
     * 查询
     */
    @Test
    public void testSelectById(){
      //根据id查询用户信息
      //SELECT id,name,age,email FROM user WHERE id=?
      User user = userService.getById(4L);
      System.out.println(user);
    }

    /**
     * 根据多个id查询多个用户信息
     */
    @Test
    public void testSelectBatchIds(){
      //根据多个id查询多个用户信息
      //SELECT id,name,age,email FROM user WHERE id IN ( ? , ? )
      List<Long> idList = Arrays.asList(4L, 5L);
      List<User> list = userService.listByIds(idList);
      list.forEach(System.out::println);
    }

    /**
     * 通过map条件查询用户信息
     */
    @Test
    public void testSelectByMap(){
      //通过map条件查询用户信息
      //SELECT id,name,age,email FROM user WHERE name = ? AND age = ?
      Map<String, Object> map = new HashMap<>();
      map.put("age", 22);
      map.put("name", "admin");
      List<User> list = userService.listByMap(map);
      list.forEach(System.out::println);
    }

    /**
     * 查询所有数据
     */
    @Test
    public void testSelectList(){
      //查询所有用户信息
      //SELECT id,name,age,email FROM user
      List<User> list = userService.list(null);
      list.forEach(System.out::println);
    }
```
