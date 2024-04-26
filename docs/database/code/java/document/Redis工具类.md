# Redis工具类

> ```java
> @Component
> public class RedisOperator {
>
>     @Autowired
>     private StringRedisTemplate redisTemplate;
> ```

## Key的常见操作

* **判断Key是否存在**

```java
public boolean keyIsExist(String key) {
    return redisTemplate.hasKey(key);
}
```

</br></br>

* **TTL key**

> 实现命令：TTL key，以秒为单位，返回给定 key的剩余生存时间(TTL, time to live)。

```java
public long ttl(String key) {
    return redisTemplate.getExpire(key);
}
```

</br></br>

* **expire**

> 实现命令：expire 设置过期时间，单位秒

```java
public void expire(String key, long timeout) {
    redisTemplate.expire(key, timeout, TimeUnit.SECONDS);
}
```

</br></br>

* **increment key**

> 实现命令：increment key，增加key一次

```java
public long increment(String key, long delta) {
    return redisTemplate.opsForValue().increment(key, delta);
}
```

</br></br>

* **decrement key**

> 实现命令：decrement key，减少key一次

```java
public long decrement(String key, long delta) {
    return redisTemplate.opsForValue().decrement(key, delta);
}
```

</br></br>

* **KEYS pattern**

> 实现命令：KEYS pattern，查找所有符合给定模式 pattern的 key

```java
public Set<String> keys(String pattern) {
    return redisTemplate.keys(pattern);
}
```

</br></br>

* **DEL key**

> 实现命令：DEL key，删除一个key

```java
public void del(String key) {
    redisTemplate.delete(key);
}
```

## String操作

* **SET key value**
> 实现命令：SET key value，设置一个key-value（将字符串值 value关联到 key）
```java
public void set(String key, String value) {
    redisTemplate.opsForValue().set(key, value);
}
```

* **SET key value EX seconds**
> 实现命令：SET key value EX seconds，设置key-value和超时时间（秒）
```java
public void set(String key, String value, long timeout) {
        redisTemplate.opsForValue().set(key, value, timeout, TimeUnit.SECONDS);
    }
```

* **如果key不存在，则设置，如果存在，则报错**
> 如果key不存在，则设置，如果存在，则报错
```java
public void setnx60s(String key, String value) {
    redisTemplate.opsForValue().setIfAbsent(key, value, 60, TimeUnit.SECONDS);
}

public void setnx(String key, String value) {
    redisTemplate.opsForValue().setIfAbsent(key, value);
}
```
* **GET key**
> 实现命令：GET key，返回 key所关联的字符串值。
```java
public String get(String key) {
    return (String)redisTemplate.opsForValue().get(key);
}
```

> 批量查询，对应mget
```java
public List<String> mget(List<String> keys) {
    return redisTemplate.opsForValue().multiGet(keys);
}
```
 
> 批量查询，管道pipeline
```java
public List<Object> batchGet(List<String> keys) {
    List<Object> result = redisTemplate.executePipelined(new RedisCallback<String>() {
        @Override
        public String doInRedis(RedisConnection connection) throws DataAccessException {
            StringRedisConnection src = (StringRedisConnection)connection;

            for (String k : keys) {
                src.get(k);
            }
            return null;
        }
    });

    return result;
}
```

## Hash（哈希表）

* **HSET key field value**
> 实现命令：HSET key field value，将哈希表 key中的域 field的值设为 value

```java
public void hset(String key, String field, Object value) {
    redisTemplate.opsForHash().put(key, field, value);
}

```

* **HGET key field**
> 实现命令：HGET key field，返回哈希表 key中给定域 field的值
```java
public String hget(String key, String field) {
    return (String) redisTemplate.opsForHash().get(key, field);
}
```

* **HDEL key field [field ...]**
> 实现命令：HDEL key field [field ...]，删除哈希表 key 中的一个或多个指定域，不存在的域将被忽略。
```java
public void hdel(String key, Object... fields) {
    redisTemplate.opsForHash().delete(key, fields);
}
```


* **HGETALL key**
> 实现命令：HGETALL key，返回哈希表 key中，所有的域和值。
```java
public Map<Object, Object> hgetall(String key) {
    return redisTemplate.opsForHash().entries(key);
}
```


## List（列表）

* **LPUSH key value**

> 实现命令：LPUSH key value，将一个值 value插入到列表 key的表头

```java
public long lpush(String key, String value) {
    return redisTemplate.opsForList().leftPush(key, value);
}
```

* **LPOP key**

> 实现命令：LPOP key，移除并返回列表 key的头元素。

```java
public String lpop(String key) {
    return (String)redisTemplate.opsForList().leftPop(key);
}
```

* **RPUSH key value**

> 实现命令：RPUSH key value，将一个值 value插入到列表 key的表尾(最右边)。

```java
public long rpush(String key, String value) {
    return redisTemplate.opsForList().rightPush(key, value);
}
```
