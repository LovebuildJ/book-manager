package com.book.manager.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;

import javax.persistence.*;
import java.util.Date;

/**
 * @Description 用户实体类
 * @Date 2020/7/14 15:39
 * @Author by 尘心
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
@DynamicUpdate
@DynamicInsert
@Entity
@Table(name = "users")
public class Users {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String avatar;

    private String nickname;

    private String username;

    private String password;

    private Date birthday;

    private Integer isAdmin;

    private String tel;

    private String email;

    private String address;

    private Integer size;

    private Integer identity;

}
