package com.book.manager.controller;

import cn.hutool.core.bean.BeanUtil;
import cn.hutool.core.util.StrUtil;
import com.book.manager.entity.Users;
import com.book.manager.service.UserService;
import com.book.manager.util.R;
import com.book.manager.util.http.CodeEnum;
import com.book.manager.util.vo.PageOut;
import com.book.manager.util.ro.PageIn;
import com.github.pagehelper.PageInfo;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

/**
 * @Description 用户管理
 * @Date 2020/7/14 16:35
 * @Author by 尘心
 */
@Api(tags = "用户管理")
@RestController
@RequestMapping("/user")
public class UsersController {

    @Autowired
    private UserService userService;

    @ApiOperation("用户列表")
    @PostMapping("/list")
    public R getUsers(@RequestBody PageIn pageIn) {
        if (pageIn == null) {
            return R.fail(CodeEnum.PARAM_ERROR);
        }
        // 封装分页出参对象
        PageInfo<Users> userList = userService.getUserList(pageIn);
        PageOut pageOut = new PageOut();
        pageOut.setCurrPage(userList.getPageNum());
        pageOut.setPageSize(userList.getPageSize());
        pageOut.setTotal((int) userList.getTotal());
        pageOut.setList(userList.getList());

        return R.success(CodeEnum.SUCCESS,pageOut);
    }

    @ApiOperation("添加用户")
    @PostMapping("/add")
    public R getUsers(@RequestBody Users users) {
        return R.success(CodeEnum.SUCCESS,userService.addUser(users));
    }

    @ApiOperation("编辑用户")
    @PostMapping("/update")
    public R modifyUsers(@RequestBody Users users) {
        return R.success(CodeEnum.SUCCESS,userService.updateUser(users));
    }


    @ApiOperation("用户详情")
    @GetMapping("/detail")
    public R userDetail(Integer id) {
        return R.success(CodeEnum.SUCCESS,userService.findUserById(id));
    }

    @ApiOperation("删除用户")
    @GetMapping("/delete")
    public R delUsers(Integer id) {
        userService.deleteUser(id);
        return R.success(CodeEnum.SUCCESS);
    }

    @ApiOperation("获取当前用户登陆信息")
    @GetMapping("/currUser")
    public R getCurrUser() {
        Object principal = SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        if (principal!=null) {
            Map<String,Object> map = BeanUtil.beanToMap(principal);
            String username = (String) map.get("username");
            if (StrUtil.isNotBlank(username)) {
                Users users = userService.findByUsername(username);
                return R.success(CodeEnum.SUCCESS,users);
            }
        }
        return R.fail(CodeEnum.USER_NOT_FOUND);
    }
}
