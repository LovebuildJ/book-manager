package com.book.manager.service;

import com.book.manager.dao.BookMapper;
import com.book.manager.dao.BorrowMapper;
import com.book.manager.dao.UsersMapper;
import com.book.manager.entity.Book;
import com.book.manager.entity.Borrow;
import com.book.manager.entity.Users;
import com.book.manager.repos.BookRepository;
import com.book.manager.repos.BorrowRepository;
import com.book.manager.util.consts.Constants;
import com.book.manager.util.vo.BookOut;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

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

    @Autowired
    private BookService bookService;

    @Autowired
    private UserService userService;

    /**
     * 添加
     * （添加事物）
     */
    @Transactional
    public Integer addBorrow(Borrow borrow) {
        Book book = bookService.findBook(borrow.getBookId());
        Users users = userService.findUserById(borrow.getUserId());

        // 查询是否已经借阅过该图书
        Borrow bor = findBorrowByUserIdAndBookId(users.getId(),book.getId());
        if (bor!=null) {
            Integer ret = bor.getRet();
            if (ret!=null) {
                // 已借阅, 未归还 不可再借
                if (ret == Constants.NO) {
                    return Constants.BOOK_BORROWED;
                }
            }
        }

        // 库存数量减一
        int size = book.getSize();
        if (size>0) {
            size--;
            book.setSize(size);
            bookService.updateBook(book);
        }else {
            return Constants.BOOK_SIZE_NOT_ENOUGH;
        }

        // 用户可借数量减一
        int userSize = users.getSize();
        if (userSize>0) {
            userSize --;
            users.setSize(userSize);
            userService.updateUser(users);
        }else {
            return Constants.USER_SIZE_NOT_ENOUGH;
        }

        // 添加借阅信息
        borrowRepository.saveAndFlush(borrow);

        // 一切正常
        return Constants.OK;
    }

    /**
     * user id查询所有借阅信息
     */
    public List<Borrow> findAllBorrowByUserId(Integer userId) {
        return borrowRepository.findBorrowByUserId(userId);
    }

    /**
     * user id查询所有 已借阅信息
     */
    public List<Borrow> findBorrowsByUserIdAndRet(Integer userId, Integer ret) {
        return borrowRepository.findBorrowsByUserIdAndRet(userId,ret);
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

    /**
     * 查询用户某一条借阅信息
     * @param userId 用户id
     * @param bookId 图书id
     */
    public Borrow findBorrowByUserIdAndBookId(int userId,int bookId) {
        return borrowMapper.findBorrowByUserIdAndBookId(userId,bookId);
    }
}
