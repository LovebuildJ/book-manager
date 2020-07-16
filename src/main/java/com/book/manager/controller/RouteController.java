package com.book.manager.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * @Description 路由
 * @Date 2020/7/16 9:25
 * @Author by 尘心
 */
@Controller
public class RouteController {

    /**
     * 跳转登录
     */
    @RequestMapping({"/login","/","logout"})
    public String toLogin() {
        return "login";
    }

    /**
     * 跳转首页
     */
    @RequestMapping({"/index"})
    public String toIndex() {
        return "index";
    }

    /**
     * 跳转欢迎页面
     */
    @RequestMapping({"/welcome"})
    public String toWelcome() {
        return "welcome";
    }

    /**
     * 一级路由跳转
     * @param name 映射名称
     */
    @RequestMapping("/{filename}/{name}")
    public String change(@PathVariable String filename,@PathVariable String name) {
        return filename+"/"+name;
    }
}
