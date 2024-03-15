# SpringBoot自动装配

## @SpringBootConfiguration

类似spring的xml配置文件

```java
@Target({ElementType.TYPE})
@Retention(RetentionPolicy.RUNTIME)
@Documented
@Configuration
public @interface SpringBootConfiguration {
}

```

## @ComponentScan

> 自动扫描

## @EnableAutoConfiguration

> AutoConfigurationImportSelector.selectImports

```java
@Target(ElementType.TYPE)
@Retention(RetentionPolicy.RUNTIME)
@Documented
@Inherited
@AutoConfigurationPackage
@Import(AutoConfigurationImportSelector.class)
public @interface EnableAutoConfiguration {
```

## spring.factories
> spring-boot-autoconfigure-2.1.5/META-INF/spring.factories
