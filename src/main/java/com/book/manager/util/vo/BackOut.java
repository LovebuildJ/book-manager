package com.book.manager.util.vo;

import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

/**
 * @Description 归还 vo对象
 * @Date 2020/7/24 11:24
 * @Author by 尘心
 */
@Data
public class BackOut extends BookOut{

    @ApiModelProperty("借阅时间")
    private String borrowTime;

    @ApiModelProperty("应还时间")
    private String endTime;

    @ApiModelProperty("是否逾期")
    private String late;

}
