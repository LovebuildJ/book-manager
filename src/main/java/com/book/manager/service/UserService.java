package com.book.manager.service;

import cn.hutool.core.bean.BeanUtil;
import com.book.manager.dao.UsersMapper;
import com.book.manager.entity.Users;
import com.book.manager.repos.UsersRepository;
import com.book.manager.util.ro.PageIn;
import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

/**
 * @Description 用户业务类
 * @Date 2020/7/14 16:31
 * @Author by 尘心
 */
@Service
public class UserService implements UserDetailsService{

    @Autowired
    private UsersRepository usersRepository;

    @Autowired
    private UsersMapper usersMapper;

    @Autowired
    private PasswordEncoder passwordEncoder;

    /**
     * 获取所有用户, 分页(鉴于jpa分页过于繁琐, 已使用mybatis, page helper分页, 此方法弃用)
     * @param pageable 分页对象
     */
    public Page<Users> getUsers(String keyword,Pageable pageable) {
        return usersRepository.findByUsernameLike(keyword,pageable);
    }

    /**
     * 登录 (使用SpringSecurity 此方法弃用)
     * @param username 用户名
     * @param password 密码
     */
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
//    @Transactional(rollbackFor = Exception.class)
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

    /**
     * 用户鉴权
     * @param username 用户名
     * @throws UsernameNotFoundException
     */
    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        // 查找用户
        Users user = usersRepository.findByUsername(username);
        // 获得角色
        String role = String.valueOf(user.getIsAdmin());
        // 角色集合
        List<GrantedAuthority> authorities = new ArrayList<>();
        // 角色必须以`ROLE_`开头，数据库中没有，则在这里加
        authorities.add(new SimpleGrantedAuthority("ROLE_" + role));
        // 数据库密码是明文, 需要加密进行比对
        return new User(user.getUsername(), passwordEncoder.encode(user.getPassword()), authorities);
    }

    /**
     * 用户名查询用户信息
     * @param username 用户名
     */
    public Users findByUsername(String username) {
        return usersRepository.findByUsername(username);
    }
}
