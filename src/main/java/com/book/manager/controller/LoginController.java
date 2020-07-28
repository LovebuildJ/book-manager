package com.book.manager.controller;

import cn.hutool.core.util.StrUtil;
import com.book.manager.entity.Users;
import com.book.manager.service.UserService;
import com.book.manager.util.R;
import com.book.manager.util.http.CodeEnum;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

/**
 * @Description 用户登录
 * @Date 2020/7/16 15:50
 * @Author by 尘心
 */
@Controller
public class LoginController {

    @Autowired
    private UserService userService;

    /**
     * 登录, 使用SpringSecurity 无需自己编写登录接口
     */
//    @ResponseBody
//    @RequestMapping(method = RequestMethod.POST,value = "/user/login")
//    public R login(HttpServletRequest request, HttpServletResponse response) throws IOException {
//        String username = request.getParameter("username");
//        String password = request.getParameter("password");
//
//        if (StrUtil.isNotBlank(username)&&StrUtil.isNotBlank(password)) {
//            Users users = userService. login(username, password);
//            if (users!=null) {
//                request.getSession().setAttribute("username",username);
//                return R.success(CodeEnum.SUCCESS);
//            }
//        }
//
//        return R.fail(CodeEnum.NAME_OR_PASS_ERROR);
//    }
}
