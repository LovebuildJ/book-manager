package com.book.manager.service;

import cn.hutool.core.bean.BeanUtil;
import cn.hutool.core.util.StrUtil;
import com.book.manager.dao.UsersMapper;
import com.book.manager.entity.Users;
import com.book.manager.repos.UsersRepository;
import com.book.manager.util.vo.PageIn;
import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import org.apache.catalina.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

/**
 * @Description 用户业务类
 * @Date 2020/7/14 16:31
 * @Author by 尘心
 */
@Service
public class UserService {

    @Autowired
    private UsersRepository usersRepository;

    @Autowired
    private UsersMapper usersMapper;

    /**
     * 获取所有用户, 分页
     * @param pageable 分页对象
     */
    public Page<Users> getUsers(String keyword,Pageable pageable) {
        return usersRepository.findByUsernameLike(keyword,pageable);
    }

    public Users login(String username,String password) {
       return usersRepository.findByUsernameAndPassword(username,password);
    }


    /**
     * 添加用户
     * @param users 用户
     * @return 返回添加的用户
     */
    public Users addUser(Users users) {
        return usersRepository.saveAndFlush(users);
    }

    /**
     * 编辑用户
     * @param users 用户对象
     * @return true or false
     */
    public boolean updateUser(Users users) {
        return usersMapper.updateUsers(BeanUtil.beanToMap(users))>0;
    }

    /**
     * 用户详情
     * @param id 主键
     * @return 用户详情
     */
    public Users findUserById(Integer id) {
        Optional<Users> optional = usersRepository.findById(id);
        if (optional.isPresent()) {
            return optional.get();
        }
        return null;
    }

    /**
     * 删除用户
     * @param id 主键
     * @return true or false
     */
    public void deleteUser(Integer id) {
        usersRepository.deleteById(id);
    }


    /**
     * 用户搜索查询(mybatis 分页)
     * @param pageIn
     * @return
     */
    public PageInfo<Users> getUserList(PageIn pageIn) {

        PageHelper.startPage(pageIn.getCurrPage(),pageIn.getPageSize());
        List<Users> listByLike = usersMapper.findListByLike(pageIn.getKeyword());
        return new PageInfo<>(listByLike);
    }


}
