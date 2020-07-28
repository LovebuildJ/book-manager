package com.book.manager.util.http;

/**
 * @Description 响应状态码枚举类
 * @Date 2020/7/14 18:49
 * @Author by 尘心
 */
public enum CodeEnum {
    /** 请求成功 */
    SUCCESS(200,"成功!"),
    /** 您已借阅过该图书, 且未归还 */
    BOOK_BORROWED(300,"您已借阅过该图书, 且未归还!"),
    /** 图书库存不够,无法借阅! */
    BOOK_NOT_ENOUGH(301,"图书库存不够,无法借阅!"),
    /** 用户可借数量不够,无法借阅! */
    USER_NOT_ENOUGH(302,"用户可借数量不够,无法借阅!"),
    /** 找不到资源 */
    NOT_FOUND(404,"找不到资源!"),
    /** 请求参数错误 */
    PARAM_ERROR(444,"请求参数错误!"),
    /** 用户名或密码错误 */
    NAME_OR_PASS_ERROR(445,"用户名或密码错误!"),
    /** 找不到用户 */
    USER_NOT_FOUND(446,"找不到用户!"),
    /** 服务器发生异常 */
    FAIL(500,"服务器发生异常!");

    CodeEnum(int code, String data) {
        this.code = code;
        this.data = data;
    }

    private int code;
    private String data;

    public int getCode() {
        return code;
    }

    public void setCode(int code) {
        this.code = code;
    }

    public String getData() {
        return data;
    }

    public void setData(String data) {
        this.data = data;
    }
}
