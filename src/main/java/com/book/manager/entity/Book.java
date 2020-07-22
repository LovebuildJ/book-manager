package com.book.manager.entity;

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

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String isbn;

    private String name;

    private String author;

    private Integer pages;

    private String translate;

    private String publish;

    private Double price;

    private Integer size;

    private String type;

    private Date publishTime;

    // json字符串： {"isbn":"isbn","name":"name","author":"author","pages":"pages","translate":"translate","publish":"publish","price":"price","size":"size","type":"type","publishTime":"publishTime"}
}
