package com.book.manager.controller;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * @Description 路由
 * @Date 2020/7/16 9:25
 * @Author by 尘心
 */
@Api(tags = "路由")
@Controller
public class RouteController {

    /**
     * 跳转登录
     */
    @ApiOperation("跳转登录页")
    @GetMapping({"/login","/","logout"})
    public String toLogin() {
        return "login";
    }

    /**
     * 跳转首页
     */
    @ApiOperation("跳转首页")
    @RequestMapping({"/index"})
    public String toIndex() {
        return "index";
    }

    /**
     * 跳转欢迎页面
     */
    @ApiOperation("跳转欢迎页面")
    @RequestMapping({"/welcome"})
    public String toWelcome() {
        return "welcome";
    }

    /**
     * 二级路由跳转
     * @param name 映射名称
     */
    @ApiOperation("二级路由跳转")
    @RequestMapping("/{filename}/{name}")
    public String change(@PathVariable String filename,@PathVariable String name) {
        return filename+"/"+name;
    }
}
