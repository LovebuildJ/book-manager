package com.book.manager.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.Date;

/**
 * @Description 借阅表
 * @Date 2020/7/14 16:01
 * @Author by 尘心
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "borrow")
public class Borrow {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private Integer userId;

    private Integer bookId;

    private Date createTime;

    private Date updateTime;
}
