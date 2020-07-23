package com.book.manager.util.vo;

import lombok.Data;

/**
 * 图书出参对象
 */
@Data
public class BookOut {
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
    private String publishTime;
}
