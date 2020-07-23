package com.book.manager.entity;

import io.swagger.annotations.ApiModelProperty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;
import java.util.Date;

/**
 * @Description 图书实体类
 * @Date 2020/7/14 15:58
 * @Author by 尘心
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
@DynamicUpdate
@DynamicInsert
@Entity
@Table(name = "book")
public class Book {

    @ApiModelProperty("主键")
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @ApiModelProperty("图书ISBN编码")
    private String isbn;

    @ApiModelProperty("图书名称")
    private String name;

    @ApiModelProperty("图书作者")
    private String author;

    @ApiModelProperty("图书页数")
    private Integer pages;

    @ApiModelProperty("翻译")
    private String translate;

    @ApiModelProperty("出版社")
    private String publish;

    @ApiModelProperty("单价")
    private Double price;

    @ApiModelProperty("库存")
    private Integer size;

    @ApiModelProperty("分类")
    private String type;

    @ApiModelProperty("出版时间")
    private Date publishTime;

    // json字符串： {"isbn":"isbn","name":"name","author":"author","pages":"pages","translate":"translate","publish":"publish","price":"price","size":"size","type":"type","publishTime":"publishTime"}
}
