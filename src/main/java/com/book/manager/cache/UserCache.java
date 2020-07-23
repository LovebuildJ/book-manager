package com.book.manager.cache;

import java.util.HashMap;

/**
 * @Description 用户缓存, new: 现已使用SpringSecurity , 弃用此类
 * <p>
 *     摒弃Session, 自己在服务器端维护一个会话
 *     1. 记录用户信息
 *     2. 用户URL地址拦截
 *     3. 方便多个使用同一个账户
 *
 *     注意, 负载, 分布式情况下不适用, 可使用redis实现会话信息共享
 * </p>
 * @Date 2020/7/21 11:52
 * @Author by 尘心
 */
public class UserCache{

    private static HashMap<String,Object> userMap = new HashMap<>();

    /**
     * 用户登录时 放入缓存
     * @param username  用户名
     * @param password  密码
     */
    public static void login(String username, String password) {
        userMap.put(username,password);
    }

    /**
     * 用户登出时 清除缓存
     * @param username  用户名
     */
    public static void logout(String username) {
        userMap.remove(username);
    }

    /**
     * 获取用户信息
     * @param key 键
     * @return
     */
    public static Object get(String key) {
        return userMap.get(key);
    }

    /**
     * key 是否存在
     * @param key key
     * @return
     */
    public static boolean isExist(String key) {
        return userMap.containsKey(key);
    }
}
