# book-manager

#### 介绍
图书管理系统

- 快速上手可看[Wiki](https://github.com/LovebuildJ/book-manager/wiki/%E5%BF%AB%E9%80%9F%E5%BC%80%E5%A7%8B)
- 详细使用可看[Wiki](https://gitee.com/Jason218/book-manager/wikis/%E4%BD%BF%E7%94%A8%E6%96%87%E6%A1%A3)
- 请勿忽略更新日志, 会有详细的版本更新说明！


#### 软件截图
- 在线API接口文档
![输入图片说明](https://images.gitee.com/uploads/images/2020/0728/222829_12c75a2b_1865362.png "swagger.png")

- 登录
![登录](https://images.gitee.com/uploads/images/2020/0728/220039_eac21a26_1865362.png "login.png")

- 首页轮播
![输入图片说明](https://images.gitee.com/uploads/images/2020/0728/220412_5849b2ba_1865362.png "index.png")

- 图书列表
![图书列表](https://images.gitee.com/uploads/images/2020/0728/220106_01690382_1865362.png "book-list.png")

- 图书上架
![图书上架](https://images.gitee.com/uploads/images/2020/0728/220142_f1321c49_1865362.png "book-add.png")

- 图书编辑
![图书编辑](https://images.gitee.com/uploads/images/2020/0728/220205_23718704_1865362.png "book-update.png")

- 图书删除
![图书删除](https://images.gitee.com/uploads/images/2020/0728/220325_868b4a18_1865362.png "book-del.png")

- 图书借阅
![图书借阅](https://images.gitee.com/uploads/images/2020/0728/220426_add9604e_1865362.png "borrow.png")

- 图书检索
![图书检索](https://images.gitee.com/uploads/images/2020/0728/220449_10ce9e23_1865362.png "book-search.png")

- 图书归还
![图书归还](https://images.gitee.com/uploads/images/2020/0728/220522_b028a938_1865362.png "return.png")

- 读者列表
![读者列表](https://images.gitee.com/uploads/images/2020/0728/220600_d9bbdad8_1865362.png "reader-list.png")

- 添加读者
![添加读者](https://images.gitee.com/uploads/images/2020/0728/220816_d382a217_1865362.png "reader-add.png")

- 用户列表
![用户列表](https://images.gitee.com/uploads/images/2020/0728/220837_7a6de75b_1865362.png "user-list.png")

- 操作提示
![操作提示](https://images.gitee.com/uploads/images/2020/0728/220858_61b0b289_1865362.png "success.png")

- 启动Banner

![启动Banner](https://images.gitee.com/uploads/images/2020/0807/113718_a4ea899d_1865362.png "banner.png")

- 网页标签栏logo

![logo](https://images.gitee.com/uploads/images/2020/0807/113802_afa0f855_1865362.png "logo.png")


#### 软件架构
软件架构说明:

##### 后端：
- 基础框架： SpringBoot
- 简单数据操作： Spring Data Jpa
- 复杂数据操作： Mybatis
- 安全框架： SpringSecurity
- 模板引擎： Thymeleaf
- API文档&测试： Swagger2
- API文档加强&美化： Swagger-Bootstrap-UI, 这个很好看, 而且功能强大,支持生成离线MD文档,但是版本兼容性会有问题, 我试了很多版本, 最终1.9.3可以正常使用
- hutool工具箱： Java各种工具封装, 爽的雅痞

##### 前端：
- javaEx, 其实就是对html,css,js的封装, 很简单, 10分钟就能上手。比较接近原生
修改起来比较方便, 所以就用了。想了解的, 百度JavaEx即可。

- jQuery , 讲真的jQuery用着还是很舒服, 突破各种前端框架的限制

- 这里真的要吹一波jQuery插件库,强大,耦合性低,加入即用, 非常适合本项目

#### 如果有定制需求, 可以联系作者
- 质量保证: 从高大上到原生, 你要的我都有
- 联系方式： amazingjava@163.com
- 有意向聊一聊也是可以的蛮, 或许我就是你要找的那个人呢?

#### 安装教程

建议看wiki
1.  本地搭建好java8环境,数据库MySQL5.5+, 克隆项目
2.  导入sql文件至数据库中
3.  配置maven, 等待依赖下载完成
4.  IDE安装好lombok插件
5.  启动访问http://localhost:8080 即可
6.  账号：【学生： stu/123】【教师： tea/123】【其他：other/123】【管理员：admin/123】
7.  swagger API在线文档, 启动访问：http://localhost:8080/doc.html
#### 使用说明

1.  本项目适用于大学生实训, 或者想要快速搭建一个后台管理类项目的朋友,或者个人学习使用
2.  不要说为啥这个项目这个东西没加, 哪个东西没加, 针对的层次不一样, 要求也不一样
3.  很多我也想加, 但是复杂起来了, 不适合目标人群使用
4.  为了方便大家使用, 并未对密码进行加密, 想要加密的：大家可以在插入用户的时候对密码加密, 在loadByUsername中去除密码加密即可
5.  如果想要前后端分离的, 只需要把web资源相关的去掉, 保留后端接口即可, 接口文档看swagger即可
#### 作者介绍
尘心, 英文名：Jason 

写此项目的初心： 管理项目大多大相径庭, 通过一个例子, 掌握之后, 其他管理项目自然信手拈来. 所以它不仅仅是一个图书管理项目,
它是给大家提供一种开发的范例, 在这个范例的基础上进行修改优化吸收变成自己的东西才是这个项目价值所在!

由于工作比较忙, 此项目也是比较仓促写成, 很多地方没有增加限制希望大家能够理解, 或者自己进行优化

#### GitHub地址
https://github.com/LovebuildJ/book-manager

#### Gitee地址
https://gitee.com/Jason218/book-manager

#### 参与贡献

1.  Fork 本仓库
2.  新建 Feat_xxx 分支
3.  提交代码
4.  新建 Pull Request
5.  等待审核

#### 更新日志
- 2020/8/7 2:00PM 增加权限菜单控制
> 1. v1.0.3版本之前的用户可以更新代码, 然后删除表结构重新导入sql。 或者将users表中不是管理员用户的is_admin字段的值设为1
> 2. v1.0.3版本, 非管理员用户, 则访问菜单受限。以下菜单不可见：添加图书, 添加读者, 管理用户, 添加管理员。 管理员用户则有所有菜单访问权限!
> 3. 只是做一个简单的控制, 复杂的RBAC后续可能会加上吧, 时间不定

- 2020/8/7日 10：00AM 优化一下问题：
> 1. 首页右上角动态显示用户昵称
> 2. 添加网站logo(浏览器标签页) 
> 3. 自定制启动banner(想要自己定制的可以去这里：https://www.bootschool.net/ascii-art/search)

#### 后续

1. 发现BUG或者已知问题会不定期修复
2. 加入图片上传下载等功能
3. 优化权限模块
4. 优化UI, 提示等用户体验
5. 加入docker部署
...
