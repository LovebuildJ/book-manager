package com.book.manager.repos;

import com.book.manager.entity.Users;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * @Description 用户jpa 查询
 * @Date 2020/7/14 16:06
 * @Author by 尘心
 */
@Repository
public interface UsersRepository extends JpaRepository<Users,Integer>{

    /**
     * 用户模糊查询 + 分页 用户信息
     * @param keyword 用户名
     * @param pageable 分页对象
     * @return Page<Users>
     */
    @Query(value="select * from users where username like CONCAT('%',:keyword,'%') limit  ",nativeQuery=true)
    Page<Users> findByUsernameLike(@Param(value = "keyword") String keyword,Pageable pageable);

    /**
     * 用户登录
     * @param username 用户名
     * @param password 密码
     */
    Users findByUsernameAndPassword(@Param("username") String username,@Param("password") String password);

    /**
     * 用户名查询
     * @param username
     * @return
     */
    Users findByUsername(@Param("username") String username);
}
