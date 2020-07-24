package com.book.manager.util.ro;

import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

/**
 * @Description 图书归还 ro 对象
 * @Date 2020/7/24 15:09
 * @Author by 尘心
 */
@Data
public class RetBookIn {

    @ApiModelProperty("用户ID")
    private Integer userId;

    @ApiModelProperty("图书ID")
    private Integer bookId;
}
