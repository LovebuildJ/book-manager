package com.book.manager.config;

import com.book.manager.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

import javax.sql.DataSource;

/**
 * @Description web security 安全配置
 * @Date 2020/7/21 15:19
 * @Author by 尘心
 */
@EnableWebSecurity
public class WebSecurityConfig extends WebSecurityConfigurerAdapter{


    @Autowired
    private UserService userService;

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        //授权
        http.formLogin()
                //自定义登陆页面
                .loginPage("/login")
                //如果URL为loginPage,则用SpringSecurity中自带的过滤器去处理该请求
                .successForwardUrl("/index")
                .loginProcessingUrl("/user/login")
                .and()
                //请求授权
                .authorizeRequests()
                //在访问我们的URL时，我们是不需要省份认证，可以立即访问
                .antMatchers("/javaex/**","/","/login","/user/login").permitAll()
                //所有请求都被拦截，都需认证
                .anyRequest().authenticated()
                .and()
                // 请求头允许X-ContentType-Options
                //.headers().contentTypeOptions().disable()
                //.and()
                // 请求头允许X-Frame-Options, 否则所有iframe将失效
                .headers().frameOptions().disable()
                // 注销, 回到首页
//                .logout().logoutSuccessUrl("/")
                //SpringSecurity保护机制
                .and()
                .csrf().disable();

        // 开启记住我功能
        http.rememberMe().rememberMeParameter("remember");
    }


    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        // 认证
        auth.userDetailsService(userService).passwordEncoder(passwordEncoder());
    }

    @Override
    public void configure(WebSecurity web) throws Exception {
        // swagger 资源放行
        web.ignoring().antMatchers("/webjars/**","/v2/**","/swagger-resources/**","/doc.html","/docs.html","swagger-ui.html");
    }

    /**
     * 指定加密方式
     */
    @Bean
    public PasswordEncoder passwordEncoder(){
        // 使用BCrypt加密密码
        return new BCryptPasswordEncoder();
    }
}
