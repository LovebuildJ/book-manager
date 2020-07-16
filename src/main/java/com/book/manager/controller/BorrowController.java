package com.book.manager.controller;

import com.book.manager.entity.Book;
import com.book.manager.entity.Borrow;
import com.book.manager.entity.Users;
import com.book.manager.service.BookService;
import com.book.manager.service.BorrowService;
import com.book.manager.util.R;
import com.book.manager.util.http.CodeEnum;
import com.book.manager.util.po.PageOut;
import com.book.manager.util.vo.PageIn;
import com.github.pagehelper.PageInfo;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

/**
 * @Description 用户管理
 * @Date 2020/7/14 16:35
 * @Author by 尘心
 */
@Api(tags = "借阅管理")
@Controller
@RequestMapping("/borrow")
public class BorrowController {

    @Autowired
    private BorrowService borrowService;

    @ApiOperation("借阅列表")
    @ResponseBody
    @GetMapping("/list")
    public R getBorrowList(Integer userId) {
        return R.success(CodeEnum.SUCCESS,borrowService.findAllBorrowByUserId(userId));
    }

    @ApiOperation("借阅图书")
    @ResponseBody
    @PostMapping("/add")
    public R addBorrow(@RequestBody Borrow borrow) {
        return R.success(CodeEnum.SUCCESS,borrowService.addBorrow(borrow));
    }

    @ApiOperation("编辑借阅")
    @ResponseBody
    @PostMapping("/update")
    public R modifyBorrow(@RequestBody Borrow borrow) {
        return R.success(CodeEnum.SUCCESS,borrowService.updateBorrow(borrow));
    }


    @ApiOperation("借阅详情")
    @ResponseBody
    @GetMapping("/detail")
    public R borrowDetail(Integer id) {
        return R.success(CodeEnum.SUCCESS,borrowService.findById(id));
    }

    @ApiOperation("归还图书")
    @ResponseBody
    @GetMapping("/delete")
    public R delBorrow(Integer id) {
        borrowService.deleteBorrow(id);
        return R.success(CodeEnum.SUCCESS);
    }

}
