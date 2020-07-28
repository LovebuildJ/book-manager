package com.book.manager.util;

import com.book.manager.util.http.CodeEnum;
import io.swagger.annotations.ApiModelProperty;

import java.io.Serializable;

/**
 * @Description 返回对象
 * @Date 2020/7/14 18:47
 * @Author by 尘心
 */
public class R implements Serializable{

    @ApiModelProperty("响应码")
    private Integer code;

    @ApiModelProperty("响应信息")
    private String msg;

    @ApiModelProperty("响应数据")
    private Object data;

    public R() {
    }

    public R(String msg, String data) {
        this.msg = msg;
        this.data = data;
    }

    public R(Integer code, String msg, String data) {
        this.code = code;
        this.msg = msg;
        this.data = data;
    }


    public R(CodeEnum codeEnum,Object data) {
        this.code = codeEnum.getCode();
        this.msg = codeEnum.getData();
        this.data = data;
    }

    public R(CodeEnum codeEnum) {
        this.code = codeEnum.getCode();
        this.msg = codeEnum.getData();
    }


    public static R success(CodeEnum codeEnum,Object data) {
        return new R(codeEnum,data);
    }

    public static R success(CodeEnum codeEnum) {
        return new R(codeEnum);
    }

    public static R fail(CodeEnum codeEnum) {
        return new R(codeEnum);
    }


    public Integer getCode() {
        return code;
    }

    public void setCode(Integer code) {
        this.code = code;
    }

    public String getMsg() {
        return msg;
    }

    public void setMsg(String msg) {
        this.msg = msg;
    }

    public Object getData() {
        return data;
    }

    public void setData(Object data) {
        this.data = data;
    }
}
