package com.book.manager.util.ro;

import lombok.Data;

/**
 * @Description 分页对象
 * @Date 2020/7/14 16:51
 * @Author by 尘心
 */
@Data
public class PageIn {

    /** 搜索关键字 */
    private String keyword;
    /** 当前页 */
    private Integer currPage;
    /** 当前页条数 */
    private Integer pageSize;
}
