---
title: SpringSecurity
---
# SpringSecurity
## 安全管理框架
1. 认证  验证当前访问系统是不是本系统的用户，并且要确定具体是哪个用户
2. 授权 经过认证后判断当前用户是否有权限进行某个操作

```xml
  <parent>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-parent</artifactId>
    <version>2.5.0</version>
  </parent>
  
  <dependencies>
    <dependency>
      <groupId>org.springframework.boot</groupId>
      <artifactId>spring-boot-starter-web</artifactId>
    </dependency>
    <dependency>
              <groupId>org.springframework.boot</groupId>
              <artifactId>spring-boot-starter-security</artifactId>
    </dependency>
    <dependency>
      <groupId>org.projectlombok</groupId>
      <artifactId>lombok</artifactId>
      <version>1.18.26</version>
      <optional>true</optional>
    </dependency>
  </dependencies>
```

![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1710866584103-b9d08777-4563-4ea5-9f8c-ff9f6a2a47c2.png)

## 原理
1. 过滤器链

![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1710867379790-b3fc1a48-1121-4f86-8e2d-3406ac374565.png)

1. 用户名密码过滤器
2. 异常过滤器
3. 权限校验过滤器

![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1710867605049-c057d746-092d-434e-995f-e4f7015c6724.png)

```xml
run.getBean(DefaultSecurityFilterChain.class)
```

![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1710927022664-16c10a7a-e26b-494c-97ca-36c931fca0dc.png)  1. Authentication 用户接口  用户相关信息

2. AuthenticationManager 接口      认证Authentication的方法
3. UserDetailService 查询用户信息的方法
4. UserDetails接口 提供核心用户信息  把用户信息封装成UserDetails对象返回，封装到Authentication中

![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1710943984782-12c078bf-3f3f-4ed3-b738-aeaf4f24562a.png)

![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1710944130137-35c194ab-dd47-4a22-b045-f4d41f9da7ce.png)

登录：

1. 自定义登录接口   ProviderManager ，如果认证通过，生成jwt，把用户存入redis中
2. 自定义UserDetailsService  在这个实现类中查询数据库

校验:

1. 定义jwt认证过滤器    获取token，解析token，获取其中的userId，从redis获取用户信息，存入SecurityContextHolder
2. 实际项目中我们不会把密码明文存储在数据库中。
3. 默认使用的PasswordEncoder要求数据库中的密码格式为：{id}password 。它会根据id去判断密码的加密方式。但是我们一般不会采用这种方式。所以就需要替换PasswordEncoder。
4. 我们一般使用SpringSecurity为我们提供的BCryptPasswordEncoder。
5. 我们只需要使用把BCryptPasswordEncoder对象注入Spring容器中，SpringSecurity就会使用该PasswordEncoder来进行密码校验。
6. 我们可以定义一个SpringSecurity的配置类，SpringSecurity要求这个配置类要继承WebSecurityConfigurerAdapter。



7.  接下我们需要自定义登陆接口，然后让SpringSecurity对这个接口放行,让所有用户访问这个接口的时候不用登录也能访问。
8. 在此登录接口中我们通过AuthenticationManager的authenticate()方法来进行用户认证,所以需要在SecurityConfig中配置把AuthenticationManager注入容器。
9. 认证成功的话要生成一个jwt，放入响应中返回前端页面。并且为了让用户下回请求时能通过jwt识别出具体的是哪个用户，我们需要把用户信息存入redis，可以把用户id作为key。

![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1711030694048-b01363f1-b590-4c2a-96ea-f04b8de6d3aa.png)

### 不同的用户可以使用不同的功能
10. 在SpringSecurity中，会使用默认的FilterSecurityInterceptor来进行权限校验。在FilterSecurityInterceptor中会从SecurityContextHolder获取其中的Authentication，然后获取其中的权限信息。当前用户是否拥有访问当前资源所需的权限。
11. 所以我们在项目中只需要把当前登录用户的权限信息也存入Authentication即可。
12. 然后在代码中设置我们的资源所需要的权限即可（可使用权限注解）。



## RBAC权限模型
角色的权限控制

![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1711038479356-d1069047-14a5-4bb8-904c-c2f3997964fe.png)

![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1711038514511-7bbb7d4e-3365-42e2-ad5e-3f52f21f36f8.png)![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1711038614316-9b94c700-a716-48c1-900b-41dbdcd81b60.png)

13. 我们还希望在认证失败或者是授权失败的情况下也能和我们的自定义的controller接口一样返回相同结构的json，这样可以让前端能对响应进行统一的处理。要实现这个功能我们需要知道SpringSecurity的异常处理机制。
14. 在SpringSecurity中，如果我们在认证或者授权的过程中出现了异常会被ExceptionTranslationFilter捕获到。在ExceptionTranslationFilter中会去判断是认证失败还是授权失败出现的异常。
15. - 如果是认证过程中出现的异常会被封装成AuthenticationException然后调用AuthenticationEntryPoint对象的方法去进行异常处理。
16. - 如果是授权过程中出现的异常会被封装成AccessDeniedException然后调用AccessDeniedHandler对象的方法去进行异常处理。
17. 所以如果我们需要自定义异常处理，我们只需要自定义AuthenticationEntryPoint和AccessDeniedHandler然后配置给SpringSecurity即可。

# 跨域
18. 浏览器出于安全的考虑，使用 XMLHttpRequest这个异步请求对象发起 HTTP请求时必须遵守同源策略，否则就是跨域的HTTP请求，默认情况下是被禁止的。 同源策略要求源相同才能正常进行通信，即协议、域名、端口号都完全一致。
19. 前后端分离项目，前端项目和后端项目一般都不是同源的，所以肯定会存在跨域请求的问题。
20. 所以我们就要处理一下，让前端能进行跨域请求。

<font style="color:rgb(0, 0, 0);background-color:rgb(245, 245, 245);">①先对SpringBoot配置，运行跨域请求</font>

## 权限
```sql
@PreAuthorize("hasAnyAuthority('admin','test','system:dept:list')")
public String hello(){
    return "hello";
}
```

```sql
  @PreAuthorize("hasRole('system:dept:list')")
    public String hello(){
        return "hello";
    }
```

```sql
  @PreAuthorize("hasAnyRole('admin','system:dept:list')")
    public String hello(){
        return "hello";
    }
```

## CSRF
21. CSRF是指跨站请求伪造（Cross-site request forgery），是web常见的攻击之一。
22. [https://blog.csdn.net/freeking101/article/details/86537087](https://blog.csdn.net/freeking101/article/details/86537087)
23. SpringSecurity去防止CSRF攻击的方式就是通过<font style="color:#DF2A3F;">csrf_token</font>。后端会生成一个csrf_token，前端发起请求的时候需要携带这个csrf_token,后端会有过滤器进行校验，如果没有携带或者是伪造的就不允许访问。
24. 我们可以发现CSRF攻击依靠的是cookie中所携带的认证信息。但是在前后端分离的项目中我们的认证信息其实是token，而token并不是存储中cookie中，并且需要前端代码去把token设置到请求头中才可以，所以CSRF攻击也就不用担心了。

![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1711077209259-855fbe23-2b3b-4f5b-9115-a8dea4b0b382.png)

实际上在UsernamePasswordAuthenticationFilter进行登录认证的时候，如果登录成功了是会调用AuthenticationSuccessHandler的方法进行认证成功后的处理的。AuthenticationSuccessHandler就是登录成功处理器。

```sql
@Component
public class SGFailureHandler implements AuthenticationFailureHandler {
    @Override
    public void onAuthenticationFailure(HttpServletRequest request, HttpServletResponse response, AuthenticationException exception) throws IOException, ServletException {
        System.out.println("认证失败了");
    }
}

@Configuration
public class SecurityConfig extends WebSecurityConfigurerAdapter {

    @Autowired
    private AuthenticationSuccessHandler successHandler;

    @Autowired
    private AuthenticationFailureHandler failureHandler;

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.formLogin()
//                配置认证成功处理器
                .successHandler(successHandler)
//                配置认证失败处理器
                .failureHandler(failureHandler);
        
        http.logout()
                //配置注销成功处理器
                .logoutSuccessHandler(logoutSuccessHandler);

        http.authorizeRequests().anyRequest().authenticated();
    }
}

@Component
public class SGLogoutSuccessHandler implements LogoutSuccessHandler {
    @Override
    public void onLogoutSuccess(HttpServletRequest request, HttpServletResponse response, Authentication authentication) throws IOException, ServletException {
        System.out.println("注销成功");
    }
}

```

