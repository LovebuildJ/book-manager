package com.book.manager.util.http;

/**
 * @Description TODO
 * @Date 2020/7/14 18:49
 * @Author by 尘心
 */
public enum CodeEnum {
    /** 请求成功 */
    SUCCESS(200,"成功!"),
    /** 找不到资源 */
    NOT_FOUND(404,"找不到资源!"),
    /** 请求参数错误 */
    PARAM_ERROR(444,"请求参数错误!"),
    /** 用户名或密码错误 */
    NAME_OR_PASS_ERROR(445,"用户名或密码错误!"),
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
