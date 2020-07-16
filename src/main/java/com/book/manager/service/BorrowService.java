package com.book.manager.service;

import com.book.manager.dao.BorrowMapper;
import com.book.manager.entity.Borrow;
import com.book.manager.repos.BorrowRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

/**
 * @Description 借阅管理
 * @Date 2020/7/15 16:46
 * @Author by 尘心
 */
@Service
public class BorrowService {

    @Autowired
    private BorrowRepository borrowRepository;

    @Autowired
    private BorrowMapper borrowMapper;

    /**
     * 添加
     */
    public Borrow addBorrow(Borrow borrow) {
        return borrowRepository.saveAndFlush(borrow);
    }

    /**
     * user id查询所有借阅信息
     */
    public List<Borrow> findAllBorrowByUserId(Integer userId) {
        return borrowRepository.findBorrowByUserId(userId);
    }

    /**
     * 详情
     */
    public Borrow findById(Integer id) {
        Optional<Borrow> optional = borrowRepository.findById(id);
        if (optional.isPresent()) {
            return optional.get();
        }
        return null;
    }

    /**
     * 编辑
     */
    public boolean updateBorrow(Borrow borrow) {
        return borrowMapper.updateBorrow(borrow)>0;
    }

    /**
     * s删除
     */
    public void deleteBorrow(Integer id) {
        borrowRepository.deleteById(id);
    }
}
