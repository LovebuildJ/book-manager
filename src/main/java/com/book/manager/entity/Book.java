package com.book.manager.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

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

    private Integer type;

    private Date publishTime;
}
