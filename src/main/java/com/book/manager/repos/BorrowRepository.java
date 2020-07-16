package com.book.manager.repos;

import com.book.manager.entity.Borrow;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * @Description 借阅管理 jpa查询
 * @Date 2020/7/14 16:14
 * @Author by 尘心
 */
@Repository
public interface BorrowRepository extends JpaRepository<Borrow,Integer>{

    /**
     * 查询借阅信息
     * @param userId 用户id
     * @return
     */
    List<Borrow> findBorrowByUserId(Integer userId);
}
