/**
 * 作者：陈霓清
 * 官网：http://www.javaex.cn
 */
;(function() {
	var javaex = function() {
		// 默认属性
		function defaults(args) {
			var defaults = {
				id : "",	// 元素id
				type : "",	// 组件类型
				url : "",	// 请求地址
				isInit : false,	// 是否初始化自动调用回调函数
				
				// 伪单选和伪多选
				name : "",	// radio的name属性
				uncheckClass : "",	// 未选中时往label标签添加的class
				checkedClass : "",	// 选中时往label标签添加的class
				
				// 计时器获取验证码
				second : 45,	// 默认倒计时45秒
				text : "获取验证码",	// 文字显示
				color : "unset",	// 默认的文字颜色
				backgroundColor : "transparent",	// 默认的文字背景色
				downColor : "unset",	// 倒计时时的文字颜色
				downBackgroundColor : "transparent",	// 倒计时时的文字背景色
				
				// 树形菜单
				data : [],			// 菜单数据
				checkbox : true,	// 是否显示复选框
				isShowAllSelect : false,	// 是否显示全选
				isAllowJumpUrl : false,		// 点击菜单名称时，是否允许跳转链接
				icon : false,		// 是否显示图标
				withoutNodeArr : null,	// 获取复选框值时，排除的节点数组（从1开始），例如[1, 2]
				
				// 进度条属性
				percent : 0,	// 百分比
				isShowPercent : false,	// 是否显示百分比
				
				// 标签属性
				tags : "",		// 回显标签
				
				// 弹出层属性
				mask : true,			// 是否使用遮罩
				width : 300,			// 弹出层宽度，单位px
				maxHeight : "",			// 弹出层最大高度
				height : "",			// 弹出层高度
				top : "30%",			// 距离顶部距离，支持 200px 这种写法
				title : "温馨提示",		// 弹出层标题
				closeIcon : true,		// 是否显示右上角关闭 X
				content : "",			// 弹出层内容
				textAlign : "left",		// 内容位置：left；center；right
				confirmName : "确定",	// 确定按钮名称
				cancelName : "取消",	// 取消按钮名称
				callback : function() {return true;},	// 回调函数
				live : 2000,		// 操作提示存在时间
				timeout : 0,		// 超时时间（单位：毫秒）
				timeoutText : "连接超时，请重试",	// 超时提示
				selector : "",		// 图片数组选择器
				scrolling : "yes",	// 是否有滚动条
				offsetLeft : "0",	// 左偏移量
				hasBackground : false,	// 是否有加载图片
				isClickMaskClose : false,	// 是否允许点击遮罩关闭弹窗
				closeX : function() {return true;},	// 点击右上角X关闭弹出层时的回调函数
				
				// 左侧菜单属性
				isAutoSelected : false,	// 是否自动选中
				key : "key",			// 默认内容标识
				isShowFirst : false,	// 是否初始化显示第1个二级节点
				isShowAll : false,		// 是否初始化显示所有二级节点
				
				// 评分属性
				num : 10,				// 星星数量
				size : 24,				// 星星大小
				scoreArr : [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],	// 分数数组
				levelTextArr : ['1分', '2分', '3分', '4分', '5分', '6分', '7分', '8分', '9分', '10分'], // 文字提示数组
				score : "",				// 默认分数
				isReadOnly : false,		// 是否只读

				// Tab切换属性
				current : 1,			// 默认显示第几个标签，从1开始计
				mode : "mouseover",		// 切换模式。mouseover : 鼠标移动切换； click : 鼠标点击切换
				delay : 200,			// 鼠标移动切换时，延迟多少毫秒
				display : "block",		// div的display属性

				// 表格选择属性
				mergeColArr : [],		// 需要合并的列数组（从1开始），例如[1, 3]
				tree : 0,				// 第几列是树形（从1开始）
				isClose : false,		// 树形表格默认是否闭合
				dataArr : [],
				
				// select选择框属性
				maxNum : 6,			// 下拉列表最多显示多少项，超出会显示滚动条
				isSearch : false,	// 是否允许检索，true：允许；false：不允许
				hasInputName : false,	// input是否有name属性
				
				// 分页属性
				pageCount : null,	// 总页数
				currentPage : 1,	// 默认选中第几页
				perPageCount : null,	// 每页显示多少条，不填时，不显示该条数选择控件
				totalNum : null,		// 总条数，不填时，不显示
				position : "right",	// 分页显示位置。 left:居左；center:居中；right:居右
				isShowJumpPage : false,	// 是否显示跳页
				
				// 幻灯片
				isAutoPlay : true,	// 是否自动轮播
				focusCenter : false,	// 焦点区域是否自动居中
				startSlide : 1,		// 开始切换的位置（即从第几张图开始切换），从1开始计
				focusBoxMode : "mouseover",	// 焦点切换模式。mouseover：鼠标移动切换； click: 鼠标点击切换
				effect : null,		// 切换效果，默认为淡入淡出。slice：左右滑动;smooth：平滑
				
				// 日期选择属性
				// 单选日期
				date : "",
				// 日期范围
				startDate : "",	// 开始日期，默认今天
				endDate : "",	// 结束日期，默认今天
				alignment : "left",	// 日期选择框的对齐方式。left代表左对齐；right代表右对齐
				monthNum : 1,	// 展示的月份数，最大是2。 1代表选择单日；2代表选择范围
				splitLine : " - ",	// 两个日期之间的连接符
				minTime : "",		// 最小可选时间
				maxTime : "",		// 最大可选时间
				
				// 仅仅是时间选择
				time : "",	// 默认显示时间
				
				// 头像上传属性
				imgDivId : "image-box", // 本地上传的图片区域id
				cutBox : "cut-box",		// 裁剪区域id
				moveBox : "move-box",	// 背景区域id，可拖动
				dataUrl : "data-url",	// 最终将图片地址返回给哪个input存储
				
				// 图片懒加载
				threshold : 100,	// 提前开始加载
				event : "scroll",	// 事件触发时才加载
				container : window,
				dataOriginal : "data-original",	// 图片延迟加载时，从该属性中获取真正的图片地址
				appear : null,
				load : null,
				placeholder : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC",
				
				// 文件上传属性
				isShowOptTip : false,// 是否显示操作提示
				containerId : "",	// 图片容器id
				uploadText : "上传封面",	// 上传图片文字提示
				param : "file",		// 参数名称，SSM中与MultipartFile的参数名保持一致
				maxSize : "",		// 单张图片的大小上限，单位KB，0或空为不限制
				imgUrl : "",		// 图片回显地址
				dataType : "base64",	// 图片上传后的返回类型
				addImg : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAIBJREFUSA3tl7ENwCAMBN9RpkvFQsyUNGE9IpIs8P8FBUZy58PmkLAAxFXqdY8QcewqCPRDZ4HNgR02Czv2KDZVU7qc5FTt2KPY9VTHN2G8B59y/CZHm6I6Ap1v9idKPfsIdYMpJx7NZmH1ymguVdPKVCBVq+Zobj3Vxt8pmjNlHkcEEcpxsEklAAAAAElFTkSuQmCC",

				// 评论
				commentCount : 0,	// 评论条数
				list : null,
				commentMapping : null,	// 评论映射
				replyMapping : null,	// 回复映射
				avatar : "",		// 默认头像地址
				isChangeTimeText : false,	// 修改时间显示文本
				
				// 富文本编辑器属性
				fixedTop : -1,	// 工具栏距离顶部多少像素时，固定
				image : null
			};
			return $.extend(defaults, args);
		}

		var info = {
			// 生成一个不重复的id
			getUUID : function() {
				return Date.now().toString(36) + Math.random().toString(36).substr(3, 3);
			},
			
			// 伪单选
			fakeRadio : function(args) {
				var settings = defaults(args);
				var name = settings.name;
				var uncheckClass = settings.uncheckClass;
				var checkedClass = settings.checkedClass;
				
				$(':radio[name="'+name+'"]').each(function() {
					if ($(this).is(":checked")) {
						$(this).closest("label").addClass(checkedClass);
						if (settings.isInit) {
							settings.callback({
								"val" : $(this).val()
							});
						}
					} else {
						$(this).closest("label").addClass(uncheckClass);
					}
				});
				
				$(':radio[name="'+name+'"]').change(function() {
					$(':radio[name="'+name+'"]').each(function() {
						$(this).closest("label").removeClass(checkedClass).addClass(uncheckClass);
					});
					$(this).closest("label").removeClass(uncheckClass).addClass(checkedClass);
					settings.callback({
						"val" : $(this).val()
					});
				});
			},
			
			// 伪多选
			fakeCheckbox : function(args) {
				var settings = defaults(args);
				var name = settings.name;
				var uncheckClass = settings.uncheckClass;
				var checkedClass = settings.checkedClass;
				
				$(':checkbox[name="'+name+'"]').each(function() {
					if ($(this).is(":checked")) {
						$(this).parent("label").addClass(checkedClass);
						if (settings.isInit) {
							settings.callback({
								"val" : $(this).val()
							});
						}
					} else {
						$(this).parent("label").addClass(uncheckClass);
					}
				});

				$(':checkbox[name="'+name+'"]').change(function() {
					if ($(this).is(":checked")) {
						$(this).closest("label").removeClass(uncheckClass).addClass(checkedClass);
					} else {
						$(this).closest("label").removeClass(checkedClass).addClass(uncheckClass);
					}
				});
			},
			
			// 倒计时获取验证码
			timerId : null,
			code : function(args) {
				var settings = defaults(args);
				var id = settings.id;
				var second = parseInt(settings.second);
				
				if (settings.type=="reset") {
					// 解禁
					clearInterval(info.timerId);
					$("#"+id).css({
						"pointer-events" : "unset",
						"color" : settings.color,
						"background-color" : settings.backgroundColor
					});
					$("#"+id).text(settings.text);
					second = parseInt(settings.second);
				} else {
					setTimer();
					
					function setTimer() {
						// 设置禁用
						$("#"+id).css({
							"pointer-events" : "none",
							"color" : settings.downColor,
							"background-color" : settings.downBackgroundColor
						});
						// 启动定时器
						// 实时刷新时间单位为毫秒
						info.timerId = setInterval(function() {
							second = second - 1;
							if (second>0) {
								$("#"+id).text(second + "秒后重试");
							} else {
								// 解禁
								clearInterval(info.timerId);
								$("#"+id).css({
									"pointer-events" : "unset",
									"color" : settings.color,
									"background-color" : settings.backgroundColor
								});
								$("#"+id).text(settings.text);
								second = parseInt(settings.second);
							}
						}, 1000);
					}
				}
			},
			
			// 树形菜单
			tree : function(args) {
				var settings = defaults(args);
				var id = settings.id;
				var jsonData = settings.data;
				var checkbox = settings.checkbox;
				var icon = settings.icon;
				var withoutNodeArr = settings.withoutNodeArr;
				var flag = false;	// 自定义图标
				
				function tree(jsonData, nodeIndex) {
					if (jsonData.length>0) {
						if (!nodeIndex) {
							nodeIndex = 1;
						}
						html += '<ul style="overflow: hidden;">';
						$.each(jsonData, function(i, data) {
							if (!!data.childrenList && data.childrenList.length>0) {
								if (data.open) {
									html += '<li class="tree-parent-li" open="true">';
								} else {
									html += '<li class="tree-parent-li">';
								}
								html += '<span class="tree-icon icon-caret-right"></span>';
								if (checkbox) {
									if (data.checked) {
										html += '<input type="checkbox" class="fill listen-'+id+'1-2" node="'+nodeIndex+'" name="javaex-tree" value="'+data.id+'" checked/> ';
									} else {
										html += '<input type="checkbox" class="fill listen-'+id+'1-2" node="'+nodeIndex+'" name="javaex-tree" value="'+data.id+'" /> ';
									}
								}
								html += '<a href="javascript:;" node="'+nodeIndex+'" menu-id="'+data.id+'">';
								if (icon) {
									if (!!data.icon) {
										flag = true;
										html += '<span class="tree-icon '+data.icon+'"></span>';
									} else {
										html += '<span class="tree-icon icon-folder"></span>';
									}
								}
								html += data.name+'</a>';
								tree(data.childrenList, (nodeIndex+1));
							} else {
								html += '<li class="tree-child-li">';
								if (checkbox) {
									if (data.checked) {
										html += '<input type="checkbox" class="fill listen-'+id+'1-2" node="'+nodeIndex+'" name="javaex-tree" value="'+data.id+'" checked/> ';
									} else {
										html += '<input type="checkbox" class="fill listen-'+id+'1-2" node="'+nodeIndex+'" name="javaex-tree" value="'+data.id+'" /> ';
									}
								}
								if (!data.url || settings.isAllowJumpUrl==false) {
									html += '<a href="javascript:;" node="'+nodeIndex+'" menu-id="'+data.id+'">';
								} else {
									html += '<a href="'+data.url+'" node="'+nodeIndex+'" menu-id="'+data.id+'">';
								}
								if (icon) {
									if (!!data.icon) {
										flag = true;
										html += '<span class="tree-icon '+data.icon+'"></span>';
									} else {
										html += '<span class="tree-icon icon-folder"></span>';
									}
								}
								html += data.name+'</a>';
								html += '</li>';
							}
						});
						html += '</ul>';
					}
				}
				
				/**
				 * 如果采用第二种数据类型，则系统自动重新生成第一种数据结构
				 */
				function tree2(jsonData) {
					if (jsonData.length>0) {
						var jsonArr = new Array();
						$.each(jsonData, function(i, data) {
							if (parseInt(data.parentId)<1) {
								var childrenList = addChild(jsonData, data.id);
								data.childrenList = childrenList;
								jsonArr.push(data);
							}
						});
						tree(jsonArr);
					}
				}
				function addChild(jsonData, parentId) {
					var childArr = new Array();
					for (var i=0; i<jsonData.length; i++) {
						if (jsonData[i].parentId==parentId) {
							var childrenList = addChild(jsonData, jsonData[i].id);
							jsonData[i].childrenList = childrenList;
							childArr.push(jsonData[i]);
						}
					}
					return childArr;
				}
				
				var html = '';
				if (settings.isShowAllSelect) {
					html += '<input type="checkbox" name="javaex-all-select" class="fill listen-'+id+'1" /> 全选';
				}
				if (parseInt(settings.type)==1) {
					tree(jsonData);
				} else {
					tree2(jsonData);
				}
				$("#"+id).empty();
				$("#"+id).append(html);
				
				if (checkbox) {
					if (settings.isShowAllSelect) {
						$("script").each(function() {
							if (!!$(this).attr("src")) {
								if ($(this).attr("src").indexOf("common.js")>-1) {
									var jsSrc = $(this).attr("src");
									var script = document.createElement("script");
									script.src = jsSrc;
									$(document.body).append(script);
								}
							}
						});
						
						// 修改全选文字的样式
						$('#'+id+' input[name="javaex-all-select"]').parent().find(".fill-text").css({
							"vertical-align" : "text-bottom"
						});
						
						// 监听复选框全选点击事件
						$('#'+id+' :checkbox[name="javaex-all-select"]').click(function() {
							changeCheckBoxStatus($(this));
						});
						// 回调函数
						callback();
					} else {
						// 显示复选框
						$("#"+id+" :checkbox").each(function() {
							if ($(this).hasClass("fill")) {
								// 先获取input之后的文本，保存起来
								var text = $(this)[0].nextSibling.nodeValue;
								// 清空input之后的文本
								$(this)[0].nextSibling.nodeValue = "";
								// 为input创建父节点
								$(this).wrap('<label class="fill-label"></label>');
								if (!!text) {
									// 重新追加之前保存的input之后的文本
									text = text.replace(/(\s*$)/g, "");
									$(this).parent().append('<span>' + text + '</span>');
								}
								// 判断是否已存在span标签
								if ($(this).siblings().length==1) {
									$(this).after('<span class="fill-css icon-check" style="color: #fff;"></span>');
								}
							}
						});
					}
					
					// 初始化修改复选框状态
					$('#'+id+' :checkbox[name="javaex-tree"]:checked').each(function() {
						if ($(this).parent().parent("li").attr("class")=="tree-child-li") {
							changeCheckBoxStatus($(this));
						}
					});
					
					// 监听复选框的点击事件
					$('#'+id+' :checkbox[name="javaex-tree"]').click(function() {
						changeCheckBoxStatus($(this));
					});
				}
				
				/**
				 * 改变复选框的状态
				 * obj : 当前复选框对象
				 */
				function changeCheckBoxStatus(obj) {
					// 如果是原生的复选框，则直接返回
					if (!obj.attr("class")) {
						return;
					}

					// 判断是否是父节点（含有子节点）
					var parentLi = obj.parent().parent();
					if (parentLi.hasClass("tree-parent-li")) {
						// 获取当前兄弟li的个数（包括自身）
						var sibLen = parentLi.siblings().length + 1;
						var checkedNum = 0;
						obj.siblings("span.icon-stop").removeClass("icon-stop").addClass("icon-check");
						if (obj.is(":checked")) {
							checkedNum++;
							// 选中时，其下子节点全部选中
							parentLi.find("label").find("span.icon-stop").removeClass("icon-stop").addClass("icon-check");
							parentLi.find(":checkbox").attr("checked", true);
							// 添加背景色
							obj.parent().parent("li").addClass("checked");
						} else {
							// 未选中时，其下子节点全部取消选中
							parentLi.find(":checkbox").attr("checked", false);
							// 取消背景色
							obj.parent().parent("li").removeClass("checked");
						}
						// 遍历当前同一级别复选框选中个数
						parentLi.siblings("li").children("label").find(":checkbox").each(function() {
							if ($(this).is(":checked") && $(this).siblings("span.icon-check").length>0) {
								checkedNum++;
							}
						});

						var objLi = parentLi.parent().parent("li.tree-parent-li");
						if (objLi.length>0) {
							// 判断选中个数
							if (checkedNum==sibLen) {
								// 全部选中，让其父级也自动选中
								objLi.children("label").find("span.icon-stop").removeClass("icon-stop").addClass("icon-check");
								objLi.children("label").find(":checkbox").attr("checked", true);
								// 添加背景色
								objLi.addClass("checked");
							} else if (checkedNum==0) {
								// 全部未选中，让其父级也自动取消选中
								objLi.children("label").find(":checkbox").attr("checked", false);
								// 取消背景色
								objLi.removeClass("checked");
							} else {
								// 部分选中，让其父级呈现半选中状态
								objLi.children("label").find("span.icon-check").removeClass("icon-check").addClass("icon-stop");
								objLi.children("label").find(":checkbox").attr("checked", true);
								// 取消背景色
								objLi.removeClass("checked");
							}

							// 修改父级节点复选框的选中状态
							changeParentCheckBoxStatus(objLi);
						}
					} else {
						// 获取当前兄弟li的个数（包括自身）
						var sibLen = parentLi.siblings().length + 1;
						var checkedNum = 0;
						// 判断自身是否选中
						if (obj.is(":checked")) {
							checkedNum++;
							// 添加背景色
							obj.parent().parent("li").addClass("checked");
						} else {
							// 添加背景色
							obj.parent().parent("li").removeClass("checked");
						}
						// 遍历当前同一级别复选框选中个数
						parentLi.siblings("li").children("label").find(":checkbox").each(function() {
							if ($(this).is(":checked") && $(this).siblings("span.icon-check").length>0) {
								checkedNum++;
							}
						});

						var objLi = parentLi.parent().parent("li.tree-parent-li");
						if (objLi.length>0) {
							// 判断选中个数
							if (checkedNum==sibLen) {
								// 子级全部选中，让其父级也自动选中
								objLi.children("label").find("span.icon-stop").removeClass("icon-stop").addClass("icon-check");
								objLi.children("label").find(":checkbox").attr("checked", true);
								// 添加背景色
								objLi.addClass("checked");
							} else if (checkedNum==0) {
								// 子级全部未选中，让其父级也自动取消选中
								objLi.children("label").find(":checkbox").attr("checked", false);
								// 取消背景色
								objLi.removeClass("checked");
							} else {
								// 子级部分选中，让其父级呈现半选中状态
								objLi.children("label").find("span.icon-check").removeClass("icon-check").addClass("icon-stop");
								objLi.children("label").find(":checkbox").attr("checked", true);
								// 取消背景色
								objLi.removeClass("checked");
							}

							// 修改父级节点复选框的选中状态
							changeParentCheckBoxStatus(objLi);
						}
					}

					// 回调函数
					callback();
				}
				
				/**
				 * 改变父节点复选框的状态
				 * obj : 父节点li对象
				 */
				function changeParentCheckBoxStatus(obj) {
					// 标识是否存在半选中的，true代表有半选中的
					var flag = false;
					// 获取当前兄弟li的个数（包括自身）
					var sibLen = obj.siblings().length + 1;
					var checkedNum = 0;
					var thisCheckBox = obj.children("label").find(":checkbox");
					if (thisCheckBox.is(":checked")) {
						checkedNum++;
						if (thisCheckBox.siblings("span.icon-check").length==0) {
							flag = true;
						}
					} else {
						// 未选中时，其下子节点全部取消选中
						obj.find(":checkbox").attr("checked", false);
					}
					// 遍历当前同一级别复选框选中个数
					obj.siblings("li").children("label").find(":checkbox").each(function() {
						if ($(this).is(":checked")) {
							checkedNum++;
							if ($(this).siblings("span.icon-check").length==0) {
								flag = true;
							}
						}
					});

					var objLi = obj.parent().parent("li.tree-parent-li");
					if (objLi.length>0) {
						// 判断选中个数
						if (checkedNum==sibLen) {
							if (flag) {
								// 部分选中，让其父级呈现半选中状态
								objLi.children("label").find("span.icon-check").removeClass("icon-check").addClass("icon-stop");
								objLi.children("label").find(":checkbox").attr("checked", true);
							} else {
								// 全部选中，让其父级也自动选中
								objLi.children("label").find("span.icon-stop").removeClass("icon-stop").addClass("icon-check");
								objLi.children("label").find(":checkbox").attr("checked", true);
							}
						} else if (checkedNum==0) {
							// 全部未选中，让其父级也自动取消选中
							objLi.children("label").find(":checkbox").attr("checked", false);
							// 取消背景色
							objLi.removeClass("checked");
						} else {
							// 部分选中，让其父级呈现半选中状态
							objLi.children("label").find("span.icon-check").removeClass("icon-check").addClass("icon-stop");
							objLi.children("label").find(":checkbox").attr("checked", true);
						}
						// 递归
						changeParentCheckBoxStatus(objLi);
					}
				}
				
				/**
				 * 回调函数
				 */
				function callback() {
					// 获取所有选中的复选框的值
					var idArr = new Array();
					$('#'+id+' :checkbox[name="javaex-tree"]:checked').each(function() {
						if (withoutNodeArr==null || $.inArray(parseInt($(this).attr("node")), withoutNodeArr)==-1) {
							idArr.push($(this).val());
						}
					});
					settings.callback({
						"idArr" : idArr
					});
				}
				
				// 初始化全部闭合
				if (settings.isClose) {
					$("#"+id+" li.tree-parent-li").find(">ul>li").hide();
				} else {
					$("#"+id+" .tree-icon").addClass("icon-caret-down").removeClass("icon-caret-right");
				}
				
				// 添加图标
				if (icon && !flag) {
					$("#"+id+" li").each(function() {
						if ($(this).hasClass("tree-child-li")) {
							$(this).find(">a>span").addClass("icon-document-alt-fill").removeClass("icon-folder");
						}
					});
				}
				// 判断哪些默认开启
				$("#"+id+" li.tree-parent-li").each(function() {
					if ($(this).attr("open")) {
						$(this).children("span").addClass("icon-caret-down").removeClass("icon-caret-right");
						if (icon && !flag) {
							$(this).children("a").children("span").addClass("icon-folder-open").removeClass("icon-folder");
						}
						$(this).children("ul").find(">li").show();
					}
				});
				// 高亮点击的菜单
				$("#"+id+" li a").on("click", function(e) {
					$("#"+id+" li a").removeClass("on");
					$(this).addClass("on");
					
					// 回调函数
					settings.callback({
						"node" : $(this).attr("node"),
						"id" : $(this).attr("menu-id"),
						"name" : $(this).text()
					});
				});
				// 点击父节点（其下有子节点）事件
				$("#"+id+" li.tree-parent-li>span").on("click", function(e) {
					var children = $(this).siblings("ul").find(">li");
					// 判断是否闭合状态
					if (children.is(":hidden")) {
						$(this).addClass("icon-caret-down").removeClass("icon-caret-right");
						if (icon && !flag) {
							$(this).siblings("a").children("span").addClass("icon-folder-open").removeClass("icon-folder");
						}
						children.show("fast");
					} else {
						$(this).addClass("icon-caret-right").removeClass("icon-caret-down");
						if (icon && !flag) {
							$(this).siblings("a").children("span").addClass("icon-folder").removeClass("icon-folder-open");
						}
						children.hide("fast");
					}
					e.stopPropagation();
				});
			},
			
			// 进度条
			progress : function(args) {
				var settings = defaults(args);
				var percent = parseInt(settings.percent);
				var selector = settings.selector;
				
				if (settings.isShowPercent) {
					$(selector).html("<span>"+percent+"%</span>");
				} else {
					$(selector).html(" ");
				}
				
				if ($(selector).width()<1) {
					$(selector).css({
						"width" : percent+"%",
						"transition" : "width 0.8s 0.1s"
					});
				} else {
					$(selector).css({
						"width" : percent+"%"
					});
				}
			},
			
			// 图片懒加载
			lazyload : function(args) {
				var settings = defaults(args);
				var selector = settings.selector;
				var elements = $(selector);
				var effect = settings.effect;
				if (!effect) {
					effect = "fadeIn";
				}
				
				// 强制初始检查图像是否应显示
				$(document).ready(function() {
					$(settings.container).trigger(settings.event);
					checkImage();
				});
				// 窗口调整大小时重新检查
				$(window).bind("resize", function() {
					checkImage();
				});
				
				// 将容器缓存为jquery作为对象
				$container = (settings.container === undefined || settings.container === window) ? $(window) : $(settings.container);

				// 每个滚动触发一个滚动事件
				if (0 === settings.event.indexOf("scroll")) {
					$container.bind(settings.event, function() {
						return checkImage();
					});
				}
				
				elements.each(function() {
					var self = this;
					var $self = $(self);

					self.loaded = false;

					// 如果没有给定的src属性
					if (!$self.attr("src")) {
						if ($self.is("img")) {
							$self.attr("src", settings.placeholder);
						}
					}

					// 当触发显示时，加载原始图像
					$self.one("appear", function() {
						if (!this.loaded) {
							if (settings.appear) {
								var elements_left = elements.length;
								settings.appear.call(self, elements_left, settings);
							}
							$("<img />").bind("load", function() {
								var original = $self.attr(settings.dataOriginal);
								$self.hide();
								if ($self.is("img")) {
									$self.attr("src", original);
								} else {
									$self.css("background-image", "url('" + original + "')");
								}
								$self[effect](400);

								self.loaded = true;
								// 删除占位属性
								$self.removeAttr(settings.dataOriginal);

								// 从数组中删除图像，以便下次不循环
								var temp = $.grep(elements, function(element) {
									return !element.loaded;
								});
								elements = $(temp);

								if (settings.load) {
									var elements_left = elements.length;
									settings.load.call(self, elements_left, settings);
								}
							}).attr("src", $self.attr(settings.dataOriginal));
						}
					});
				});
				
				/**
				 * 检查图像是否应显示
				 */
				function checkImage() {
					var counter = 0;

					elements.each(function() {
						var $this = $(this);
						// 跳过隐藏图片
						if (!$this.is(":visible")) {
							return;
						}
						if ($.abovethetop(this, settings) || $.leftofbegin(this, settings)) {
								/* Nothing. */
						} else if (!$.belowthefold(this, settings) && !$.rightoffold(this, settings)) {
								$this.trigger("appear");
								// 如果找到要加载的图像，请重置计数器
								counter = 0;
						} else {
							if (++counter > 0) {
								return false;
							}
						}
					});
				}
			},
			
			// 得到系统时间
			getTime : function(param) {
				var date = new Date();
				var year = date.getFullYear();
				var month = date.getMonth() + 1;
				var day = date.getDate();
				
				if (!param) {
					// 无参时，直接返回系统时间，格式yyyy-MM-dd HH:mm:ss
					return year + "-" + add0(month) + "-" + add0(day) + " " + add0(date.getHours()) + ":" + add0(date.getMinutes()) + ":" + add0(date.getSeconds());
				} else {
					param = param.toLowerCase();
					if (param=="year") {
						return year;	// 返回当前年份
					}
					if (param=="month") {
						return month;	// 返回当前月份
					}
					if (param=="day") {
						return day;		// 返回当前日
					}
					if (param=="today") {
						return year + "-" + add0(month) + "-" + add0(day);	// 返回今日日期，yyyy-MM-dd
					}
					// 返回当日所属星期（1=周一，2=周二...7=周日）
					if (param=="week") {
						var week = date.getDay();
						if (week==0) {
							week = 7;
						}
						return week;
					}
				}
				
				/**
				 * 格式化
				 */
				function add0(num) {
					if (num>=1 && num<=9) {
						num = "0" + num;
					}
					return num;
				}
			},

			/* 
			 * 获得时间差
			 * startTime : 开始时间（时间格式为 yyyy-MM-dd HH:mm:ss 例如：2018-06-21 00:00:00）
			 * endTime : 结束时间（时间格式为 yyyy-MM-dd HH:mm:ss 例如：2018-06-21 00:00:00）
			 * type : 返回精度（second，minute，hour，day）
			 */
			getTimeDiff : function(startTime, endTime, type) {
				//将xxxx-xx-xx的时间格式，转换为 xxxx/xx/xx的格式
				startTime = startTime.replace(/\-/g, "/");
				endTime = endTime.replace(/\-/g, "/");
				//将计算间隔类性字符转换为小写
				type = type.toLowerCase();
				var sTime = new Date(startTime);//开始时间
				var eTime = new Date(endTime);	//结束时间

				// 作为除数的数字
				var divNum = 1;
				switch (type) {
					case "second":
						divNum = 1000;
						break;
					case "minute":
						divNum = 1000 * 60;
						break;
					case "hour":
						divNum = 1000 * 3600;
						break;
					case "day":
						divNum = 1000 * 3600 * 24;
						break;
					default:
						break;
				}
				return parseInt((eTime.getTime() - sTime.getTime()) / parseInt(divNum));
			},

			// 评论
			comment : function(args) {
				var settings = defaults(args);
				var id = settings.id;
				var list = settings.list;
				var url = settings.url;
				var commentMapping = settings.commentMapping;
				var replyMapping = settings.replyMapping;
				
				// 必须重新赋值，不然无法传递该参数
				attribute = args;
				
				var html = '';
				html += '<div class="comment-form"><div class="form-textwrap"><textarea wrap="virtual" class="comment-textarea original" placeholder="我来说两句..."></textarea></div>';
				html += '<div style="text-align:right;">';
				html += '<button class="button comment-submit" onclick="javaex.javaexComment(this, attribute)">发表评论</button>';
				html += '</div></div>';
				html += '<div style="height:40px;line-height: 40px;">';
				html += '<div class="comment-count-title">全部评论<span style="font-size: 16px;color: #999;">('+settings.commentCount+')</span></div>';
				html += '</div>';
				html += '<ul class="comment-ul">';
				for (var i=0; i<list.length; i++) {
					html += '<li id="'+list[i][commentMapping.commentId]+'">';
					html += '<div class="comment-left">';
					html += '<div class="avatar60">';
					if (!list[i][commentMapping.avatar]) {
						html += '<a href="'+url+list[i][commentMapping.userId]+'" target="_blank" style="display: block;"><img src="'+settings.avatar+'" class="face" /></a>';
					} else {
						html += '<a href="'+url+list[i][commentMapping.userId]+'" target="_blank" style="display: block;"><img src="'+list[i][commentMapping.avatar]+'" class="face" /></a>';
					}
					html += '</div>';
					html += '</div>';
					html += '<div class="comment-right">';
					html += '<div class="comment-title"><a class="comment-author" href="'+url+list[i][commentMapping.userId]+'" target="_blank">'+list[i][commentMapping.userName]+'</a><span class="comment-time change-time">'+list[i][commentMapping.time]+'</span><input type="hidden" value="'+list[i][commentMapping.userId]+'" /></div>';
					html += '<div class="comment-conent">'+list[i][commentMapping.content]+'</div>';
					html += '<div class="comment-bottom">';
					var replyList = list[i][commentMapping.replyList];
					if (replyList.length==0) {
						html += '<a href="javascript:;" class="right" onclick="javaex.javaexShowReplyTextarea1(this, attribute)">回复</a>';
					}
					html += '</div>';

					if (replyList.length>0) {
						html += '<div class="posrs">';
						html += '<ul class="clear">';
						var replyLen = replyList.length;
						for (var j=0; j<replyLen; j++) {
							html += '<li>';
							html += '<div class="comment-c-item">';
							html += '<div class="comment-left">';
							html += '<div class="avatar30">';
							if (!replyList[j][replyMapping.avatar]) {
								html += '<a href="'+url+replyList[j][replyMapping.userId]+'" target="_blank" style="display: block;"><img src="'+settings.avatar+'" class="face" /></a>';
							} else {
								html += '<a href="'+url+replyList[j][replyMapping.userId]+'" target="_blank" style="display: block;"><img src="'+replyList[j][replyMapping.avatar]+'" class="face" /></a>';
							}
							html += '</div>';
							html += '</div>';
							html += '<div class="comment-right l40">';
							html += '<div class="comment-c-conent"><a class="comment-c-replyer" href="'+url+replyList[j][replyMapping.userId]+'" target="_blank">'+replyList[j][replyMapping.userName]+'</a><input type="hidden" value="'+replyList[j][replyMapping.userId]+'" />';
							if (!!replyList[j][replyMapping.toUserId]) {
								html += '<span class="comment-c-reply">回复</span>';
								html += '<a class="comment-c-replyer2" href="'+url+replyList[j][replyMapping.toUserId]+'" target="_blank">'+replyList[j][replyMapping.toUserName]+'</a>';
							}
							html += '<span class="comment-c-text">：                    '+replyList[j][replyMapping.content]+'</span>';
							html += '</div>';
							html += '<div class="comment-replyer-time">';
							html += '<span class="change-time">'+replyList[j][replyMapping.time]+'</span>';
							html += '<a href="javascript:;" onclick="javaex.javaexShowReplyTextarea3(this, attribute)" style="position:absolute; right:0;">回复</a>';
							html += '</div>';
							html += '</div>';
							html += '</div>';
							html += '</li>';
						}
						html += '</ul>';
						html += '<div class="submit-part clear">';
//						html += '<a href="javascript:;" class="fold">查看更多回复<i class="icon-keyboard_arrow_right"></i></a>';
						html += '<a class="say-btn right" href="javascript:;" onclick="javaex.javaexShowReplyTextarea2(this, attribute)">我也说一句</a>';
						html += '</div>';
					}
					html += '</div>';
					html += '</div>';
					html += '</li>';
				}
				html += '</ul>';
				
				$("#"+id).empty();
				$("#"+id).append(html);
				
				// 修改时间显示
				if (settings.isChangeTimeText) {
					info.changeTimeTexts(".change-time");
				}
			},
			// 评论
			javaexComment : function(obj, args) {
				var settings = defaults(args);
				
				var content = $(obj).parent().parent().find("textarea").val().replace(/<(script)[\S\s]*?\1>|<\/?(a|img)[^>]*>/gi, "");
				content = content.replace(/(^\s*)|(\s*$)/g, "").replace(/\'/g, "\\'");
				if (content=="") {
					info.message({
						content : "评论内容不能为空",
						type : "error"
					});
					return;
				}
				
				settings.callback({
					"type" : "comment",
					"content" : content
				});
			},
			// 第一个直接回复层主
			javaexShowReplyTextarea1 : function(obj, args) {
				// 必须重新赋值，不然无法传递该参数
				attribute = args;
				
				var posrLength = $(obj).parent().parent().find(".posr").length;
				if (posrLength==0) {
					var html = '';
					html += '<div class="posr">';
					html += '<textarea wrap="virtual" class="comment-textarea comment-textarea-reply" placeholder="我来说两句..."></textarea>';
					html += '<div style="text-align:right;">';
					html += '<button class="button comment-submit" onclick="javaex.javaexReply1(this, attribute)">回复</button>';
					html += '</div>';
					html += '</div>';

					$(obj).parent().after(html);
				} else {
					$(obj).parent().parent().find(".posr").remove();
				}
			},
			javaexReply1 : function(obj, args) {
				var settings = defaults(args);
				
				var commentId = $(obj).parents("li").attr("id");
				var toUserId = $(obj).parent().parent().parent().children("div:first-child").children('input[type="hidden"]').val();
				var toUserName = $(obj).parent().parent().parent().children("div:first-child").children('a.comment-author').text().replace(/(^\s*)|(\s*$)/g, "");
				var content = $(obj).parent().parent().find("textarea").val().replace(/<(script)[\S\s]*?\1>|<\/?(a|img)[^>]*>/gi, "");
				content = content.replace(/(^\s*)|(\s*$)/g, "").replace(/\'/g, "\\'");
				if (content=="") {
					info.message({
						content : "评论内容不能为空",
						type : "error"
					});
					return;
				}
				
				settings.callback({
					"type" : "reply",
					"commentId" : commentId,
					"toUserId" : toUserId,
					"toUserName" : toUserName,
					"content" : content
				});
			},
			// 我也说一句回复层主
			javaexShowReplyTextarea2 : function(obj, args) {
				// 必须重新赋值，不然无法传递该参数
				attribute = args;
				
				var posrLength = $(obj).parent().parent().find(".posr").length;
				if (posrLength==0) {
					var html = '';
					html += '<div class="posr">';
					html += '<textarea wrap="virtual" class="comment-textarea comment-textarea-reply" placeholder="我来说两句..."></textarea>';
					html += '<div style="text-align:right;">';
					html += '<button class="button comment-submit" onclick="javaex.javaexReply2(this, attribute)">回复</button>';
					html += '</div>';
					html += '</div>';
					
					$(obj).parent().after(html);
				} else {
					$(obj).parent().parent().find(".posr").remove();
				}
			},
			javaexReply2 : function(obj, args) {
				var settings = defaults(args);
				
				var commentId = $(obj).parents("li").attr("id");
				var toUserId = $(obj).parent().parent().parent().parent().children("div:first-child").children('input[type="hidden"]').val();
				var toUserName = $(obj).parent().parent().parent().parent().children("div:first-child").children('a.comment-author').text().replace(/(^\s*)|(\s*$)/g, "");
				var content = $(obj).parent().parent().find("textarea").val().replace(/<(script)[\S\s]*?\1>|<\/?(a|img)[^>]*>/gi, "");
				content = content.replace(/(^\s*)|(\s*$)/g, "").replace(/\'/g, "\\'");
				if (content=="") {
					info.message({
						content : "评论内容不能为空",
						type : "error"
					});
					return;
				}
				
				settings.callback({
					"type" : "reply",
					"commentId" : commentId,
					"toUserId" : toUserId,
					"toUserName" : toUserName,
					"content" : content
				});
			},
			// 回复回复
			javaexShowReplyTextarea3 : function(obj, args) {
				// 必须重新赋值，不然无法传递该参数
				attribute = args;
				
				var posrLength = $(obj).parent().parent().find(".posr").length;
				if (posrLength==0) {
					var html = '';
					html += '<div class="posr">';
					html += '<textarea wrap="virtual" class="comment-textarea comment-textarea-reply" placeholder="我来说两句..."></textarea>';
					html += '<div style="text-align:right;">';
					html += '<button class="button comment-submit" onclick="javaex.javaexReply3(this, attribute)">回复</button>';
					html += '</div>';
					html += '</div>';

					$(obj).parent().after(html);
				} else {
					$(obj).parent().parent().find(".posr").remove();
				}
			},
			javaexReply3 : function(obj, args) {
				var settings = defaults(args);
				
				var commentId = $(obj).parents("li").parents("li").attr("id");
				var toUserId = $(obj).parent().parent().parent().children("div:first-child").children('input[type="hidden"]').val();
				var toUserName = $(obj).parent().parent().parent().children("div:first-child").children('a.comment-c-replyer').text().replace(/(^\s*)|(\s*$)/g, "");
				var content = $(obj).parent().parent().find("textarea").val().replace(/<(script)[\S\s]*?\1>|<\/?(a|img)[^>]*>/gi, "");
				content = content.replace(/(^\s*)|(\s*$)/g, "").replace(/\'/g, "\\'");
				if (content=="") {
					info.message({
						content : "评论内容不能为空",
						type : "error"
					});
					return;
				}
				
				settings.callback({
					"type" : "reply",
					"commentId" : commentId,
					"toUserId" : toUserId,
					"toUserName" : toUserName,
					"content" : content
				});
			},
			
			/* 
			 * 修改时间显示
			 * time : 传入的时间，格式yyyy-MM-dd HH:mm:ss
			 */
			changeTimeText : function(time) {
				var timeText = time;
				var now = info.getTime();
				var day = info.getTimeDiff(time, now, "day");
				if (day>6) {
					// 直接显示返回的时间，不改变
				} else if (day>0) {
					// 修改为几天前
					if (day==1) {
						timeText = "昨天 " + time.split(" ")[1];
					} else if (day==2) {
						timeText = "前天 " + time.split(" ")[1];
					} else {
						timeText = day + " 天前";
					}
				} else if (day==0) {
					var hour = info.getTimeDiff(time, now, "hour");
					if (hour>0) {
						timeText = hour+" 小时前";
					} else if (hour==0) {
						var minute = info.getTimeDiff(time, now, "minute");
						if (minute>0) {
							timeText = minute+" 分钟前";
						} else if (minute==0) {
							var second = info.getTimeDiff(time, now, "second");
							timeText = second+" 秒前";
						}
					}
				}
				
				return timeText;
			},
			
			/* 
			 * 修改时间显示
			 * selector : jquery选择器，例如    ".change-time"
			 */
			changeTimeTexts : function(selector) {
				// 当前系统时间
				var now = info.getTime();
				// 修改时间显示
				$(selector).each(function() {
					var day = info.getTimeDiff($(this).text(), now, "day");
					if (day>6) {
						// 直接显示返回的时间，不改变
					} else if (day>0) {
						// 修改为几天前
						if (day==1) {
							$(this).text("昨天 " + $(this).text().split(" ")[1]);
						} else if (day==2) {
							$(this).text("前天 " + $(this).text().split(" ")[1]);
						} else {
							$(this).text(day + " 天前");
						}
					} else if (day==0) {
						var hour = info.getTimeDiff($(this).text(), now, "hour");
						if (hour>0) {
							$(this).text(hour+" 小时前");
							$(this).addClass("highlight-color");
						} else if (hour==0) {
							var minute = info.getTimeDiff($(this).text(), now, "minute");
							if (minute>0) {
								$(this).text(minute+" 分钟前");
								$(this).addClass("highlight-color");
							} else if (minute==0) {
								var second = info.getTimeDiff($(this).text(), now, "second");
								$(this).text(second+" 秒前");
								$(this).addClass("highlight-color");
							}
						}
					}
				});
			},
			
			// 标签
			tag : function(args) {
				var settings = defaults(args);
				var id = settings.id;
				var maxNum = settings.maxNum;
				
				var html = '';
				html += '<div class="tagator" style="line-height: 20px;">';
				html += '<div class="tags" style="display: inline;"></div>';
				html += '<input class="tag-input" autocomplete="false" maxlength="20" placeholder="输入标签按回车保存" onkeydown="if(event.keyCode==13){javaex.saveTag(this.value, \''+id+'\', \''+maxNum+'\');}">';
				html += '</div>';
				
				$(".tagbox").append(html);

				// 回显标签
				var tagArr = settings.tags;
				if (tagArr!="" && tagArr!=null) {
					// 标签结果
					var tag = "";
					// 标签容器
					var tagHtml = '';
					
					for (var i=0; i<tagArr.length; i++) {
						if (i==0) {
							tag = tagArr[i];
						} else {
							tag += "," + tagArr[i];
						}
						
						tagHtml += '<div class="tag">';
						tagHtml += '<span>'+tagArr[i]+'</span>';
						tagHtml += '<div class="tag-remove" onclick="javascript:javaex.removeTag(this, \''+tagArr[i]+'\', \''+id+'\');">×</div><div style="clear: both;"></div>';
						tagHtml += '</div>';
					}
					// 标签结果
					$("#"+id).val(tag);
					// 标签容器
					$(".tags").append(tagHtml);
				}
			},
			saveTag : function(tag, id, maxNum) {
				// 长度判断
				if (tag.length>=20) {
					return false;
				}
				// 去除空格
				tag = tag.replace(/(^\s*)|(\s*$)/g, "");
				if (tag=="") {
					return false;
				}
				
				var result = $("#"+id).val();
				if (result=="") {
					// 第一次添加
					$("#"+id).val(tag);
				} else {
					var arr = result.split(",");
					// 判断是否已到上限
					if (arr.length>=parseInt(maxNum)) {
						return false;
					}
					
					// 判断是否是重复添加
					for (var i=0; i<arr.length; i++) {
						if (tag==arr[i]) {
							return false;
						}
					}
					$("#"+id).val(result + "," + tag);
				}
				
				var html = '';
				html += '<div class="tag">';
				html += '<span>'+tag+'</span>';
				html += '<div class="tag-remove" onclick="javascript:javaex.removeTag(this, \''+tag+'\', \''+id+'\');">×</div><div style="clear: both;"></div>';
				html += '</div>';
				$(".tag-input").val("");
				$(".tags").append(html);
			},
			removeTag : function (obj, tag, id) {
				obj.parentNode.remove();

				var result = $("#"+id).val();
				var index = result.indexOf(","+tag);
				if (index==-1) {
					// 该标签排第一位
					result = result.replace(tag+",", "");
					result = result.replace(tag, "");
				} else {
					result = result.replace(","+tag, "");
				}

				$("#"+id).val(result);
			},

			// 分类筛选
			filter : function(args) {
				var settings = defaults(args);
				var selector = settings.selector;
				
				// 如果没有一个选中的，则默认选中第一个
				$(selector).each(function() {
					if ($(this).children("li.on").length==0) {
						$(this).children("li").first().addClass("on");
					}
				});
				
				// 初始化返回回调函数
				if (settings.isInit) {
					callback();
				}
				
				$(selector+">li").click(function() {
					$(this).addClass("on").siblings().removeClass("on");
					
					var arr = new Array();
					$(selector).each(function() {
						var ulId = $(this).attr("id");
						var liValue = $(this).children("li.on").attr("val");
						arr.push(ulId + "=" + liValue);
					});
					settings.callback(arr);
				});
				
				function callback() {
					var arr = new Array();
					$(selector).each(function() {
						var ulId = $(this).attr("id");
						var liValue = $(this).children("li.on").attr("val");
						arr.push(ulId + "=" + liValue);
					});
					
					settings.callback(arr);
				}
			},

			// 评分
			score : function(args) {
				var settings = defaults(args);
				var id = settings.id;
				var num = parseInt(settings.num);
				var scoreArr = settings.scoreArr;
				var isReadOnly = settings.isReadOnly;
				var size = settings.size;

				// 填充代码
				var liHtml = '';
				for (var i=1; i<=num; i++) {
					liHtml += '<li index="'+i+'" score="'+scoreArr[i-1]+'"><i class="star icon-star_border" style="font-size:'+size+'px;"></i></li>';
				}
				liHtml += '<strong class="level-text"></strong>';
				$("#"+id).append(liHtml);
				
				// 评分等级改变函数
				scoreChange = function(elem, index) {
					return $(elem).each(function(i, scoreElem) {
						return $(scoreElem).find("i").each(function(i, item) {
							if (i<=index) {
								$(item).removeClass("icon-star_border");
								return $(item).addClass("icon-star");
							} else {
								$(item).removeClass("icon-star");
								return $(item).addClass("icon-star_border");
							}
						});
					});
				};

				// 默认分数
				var score = settings.score;
				if (score!="") {
					$("#"+id+" li").each(function() {
						if ($(this).attr("score")==score) {
							$("#"+id).addClass("active");
							
							var index = $(this).attr("index");

							index--;
							// 显示文字提示
							$(this).parent().find(".level-text").html(settings.levelTextArr[index]);
						
							scoreChange($("#"+id), index);
							return false;
						}
					});
				}

				// 判断是否只读
				if (!isReadOnly) {
					// 鼠标滑过时
					$("#"+id+" li").hover(function() {
						var index = $(this).attr("index") | 0;
						if (parseInt(index)<=0) {
							return;
						}
						
						index--;

						// 显示文字提示
						$(this).parent().find(".level-text").html(settings.levelTextArr[index]);
						
						return scoreChange($(this).parent(), index);
					});
					
					// 当鼠标指针离开元素时
					$("#"+id).mouseleave(function() {
						$(this).addClass("active");

						var index = $(this).attr("active") | 0;
						index--;

						// 清空文字提示
						if (!isReadOnly) {
							$(this).parent().find(".level-text").html("");
						}
						
						return scoreChange(this, index);
					});
					
					// 点击评分
					$("#"+id+" li").click(function() {
						var index = $(this).attr("index") | 0;
						if (parseInt(index)<=0) {
							return;
						}

						$("#"+id).attr("active", index);
						scoreChange($("#"+id), index-1);
						
						settings.callback({
							"index" : index,
							"score" : $(this).attr("score")
						});
					});
				}
			},

			// 返回顶部
			goTopBtn : function(args) {
				var settings = defaults(args);
				var id = settings.id;
				
				$("#"+id).css("display", "none");
				
				// 回到顶部
				$("#"+id).click(function() {
					$("body, html").animate({scrollTop:0}, 500);
				});
				
				$(window).scroll(function() {
					var sc = $(window).scrollTop();
					if (sc>300) {
						$("#"+id).css("display", "block");
					} else {
						$("#"+id).css("display", "none");
					}
				});
			},
			
			// 普通确认框
			alert : function(args) {
				var settings = defaults(args);
				var width = parseInt(settings.width);
				var maxHeight = "";
				if (settings.maxHeight!="") {
					maxHeight = parseInt(settings.maxHeight);
				}
				
				$(".ex-opt-tip").remove();
				
				// 添加遮罩
				if (settings.mask==true || settings.mask=="true") {
					info.addMask();
				}

				// 生成随机id
				var UUID = info.getUUID();
				// 判断是否指定了id
				if (settings.id!="") {
					UUID = settings.id;
				}
				
				// 弹出层代码
				var alertHtml = '<div id='+UUID +' class="ex-dialog animated zoomIn" style="width:'+width+'px;top:'+settings.top+';left:'+(document.documentElement.clientWidth-width)/2+'px;">';
				alertHtml += '<div id="dialog-top-'+UUID+'" class="dialog-top">';
				alertHtml += '<div class="dialog-title">'+settings.title+'</div>';
				if (settings.closeIcon==true || settings.closeIcon=="true") {
					alertHtml += '<div class="dialog-close-icon" onclick="javaex.close(\''+UUID+'\');"><span class="dialog-opt close"><span></div>';
				}
				alertHtml += '</div>';
				if (!!maxHeight) {
					alertHtml += '<div class="dialog-content" style="overflow: auto;max-height:'+maxHeight+'px;text-align:'+settings.textAlign+';">';
				} else {
					alertHtml += '<div class="dialog-content" style="text-align:'+settings.textAlign+';">';
				}
				alertHtml += settings.content;
				alertHtml += '</div>';
				alertHtml += '<div class="dialog-footer">';
				alertHtml += '<div class="dialog-btn-container">';
				alertHtml += '<button class="dialog-btn dialog-btn-true" onclick="if('+settings.callback+'!=false)javaex.close(\''+UUID+'\');">'+settings.confirmName+'</button>';
				alertHtml += '</div>';
				alertHtml += '</div>';
				alertHtml += '</div>';
				$(document.body).append(alertHtml);

				// 弹出层拖拽
				var oDialog = document.getElementById(UUID);
				var oDrag = document.getElementById("dialog-top-" + UUID);
				info.drag(oDialog, oDrag);
			},

			// 确定、取消框
			confirm : function(args) {
				var settings = defaults(args);
				var width = parseInt(settings.width);
				
				$(".ex-opt-tip").remove();
				
				// 添加遮罩
				if (settings.mask==true || settings.mask=="true") {
					info.addMask();
				}

				// 生成随机id
				var UUID = info.getUUID();

				// 弹出层代码
				var confirmHtml = '<div id=' + UUID + ' class="ex-dialog animated zoomIn" style="width:' + width + 'px;top:' + settings.top + ';left:' + (document.documentElement.clientWidth-width)/2 + 'px;">';
				confirmHtml += '<div id="dialog-top-' + UUID + '" class="dialog-top">';
				confirmHtml += '<div class="dialog-title">' + settings.title + '</div>';
				if (settings.closeIcon==true || settings.closeIcon=="true") {
					confirmHtml += '<div class="dialog-close-icon" onclick="javaex.close(\'' + UUID + '\');"><span class="dialog-opt close"><span></div>';
				}
				confirmHtml += '</div>';
				confirmHtml += '<div class="dialog-content" style="text-align:'+settings.textAlign+';">';
				confirmHtml += settings.content;
				confirmHtml += '</div>';
				confirmHtml += '<div class="dialog-footer">';
				confirmHtml += '<div class="dialog-btn-container">';
				confirmHtml += '<button class="dialog-btn dialog-btn-true" onclick="if('+settings.callback+'!=false)javaex.close(\'' + UUID + '\');">' + settings.confirmName + '</button>';
				confirmHtml += '<button class="dialog-btn dialog-btn-false" onclick="javaex.close(\''+UUID+'\');">'+settings.cancelName+'</button>';
				confirmHtml += '</div>';
				confirmHtml += '</div>';
				confirmHtml += '</div>';
				$(document.body).append(confirmHtml);

				// 弹出层拖拽
				var oDialog = document.getElementById(UUID);
				var oDrag = document.getElementById("dialog-top-" + UUID);
				info.drag(oDialog, oDrag);
			},

			// 列表删除弹出层
			deleteDialog : function(obj, args) {
				// 删除追随弹出层，防止二次弹出
				$(".ex-danger-dialog").remove();

				var settings = defaults(args);

				var left = obj.getBoundingClientRect().left + document.documentElement.scrollLeft;
				var top = obj.getBoundingClientRect().top + document.documentElement.scrollTop;

				// 生成随机id
				var UUID = info.getUUID();
				
				// 弹出层代码
				var html = '<div id='+UUID+' class="ex-danger-dialog win animated fadeInUpSmall" style="left:'+parseInt(left-186+(obj.offsetWidth/2)+30)+'px;top:'+parseInt(top+obj.offsetHeight-50)+'px;">';
				html += '<button class="button red" onclick="if('+settings.callback+'!=false)javaex.close(\'' + UUID + '\');"><span class="icon icon-check_circle"></span> '+settings.confirmName+'</button>';
				html += '<button class="button indigo" onclick="javaex.close(\''+UUID+'\');"><span class="icon icon-cancel"></span> '+settings.cancelName+'</button>';
				html += '</div>';
				
				var contentHtml = '<div class="win win-hint animated fadeInUpSmall" style="top:-45px;">';
				contentHtml += '<div class="error-text" onclick="javaex.close(\''+UUID+'\');">';
				contentHtml += settings.content;
				contentHtml += '</div>';
				contentHtml += '<div class="tail top"></div>';
				contentHtml += '</div>';
				
				$(document.body).append(html);
				setTimeout(function() {
					$("#"+UUID).append(contentHtml);
				}, 300);
				
			},

			// 定位弹出层
			followDialog : function(obj, args) {
				$(".ex-panel").remove();
				
				var settings = defaults(args);
				var width = parseInt(settings.width);
				var type = settings.type;
				var position = settings.position;
				
				var left = obj.getBoundingClientRect().left + document.documentElement.scrollLeft;
				var top = obj.getBoundingClientRect().top + document.documentElement.scrollTop;

				// 弹出层代码
				var followHtml = '';
				// 判断方位
				if (position=="down") {
					// 下
					// 判断是否有箭头
					if (type=="arrow") {
						if (settings.alignment=="left") {
							followHtml += '<div class="ex-panel alignment-left" style="left:' + (left-30-9+(obj.offsetWidth/2)) + 'px;top:' + (top+obj.offsetHeight+3) + 'px;width:'+width+'px;">';
						} else {
							followHtml += '<div class="ex-panel alignment-right" style="left:' + (left+(obj.offsetWidth/2)-width+30+9) + 'px;top:' + (top+obj.offsetHeight+3) + 'px;width:'+width+'px;">';
						}
					} else {
						if (settings.alignment=="left") {
							followHtml += '<div class="ex-panel" style="left:' + left + 'px;top:' + (top+obj.offsetHeight+3) + 'px;width:'+width+'px;">';
						} else {
							followHtml += '<div class="ex-panel" style="left:' + (left+obj.offsetWidth-width) + 'px;top:' + (top+obj.offsetHeight+3) + 'px;width:'+width+'px;">';
						}
					}
				} else if (position=="right") {
					followHtml += '<div class="ex-panel arrow-left" style="left:' + (left+obj.offsetWidth+3) + 'px;width:'+width+'px;">';
				}
				
				followHtml += settings.content;
				followHtml += '</div>';
				$(document.body).append(followHtml);
				
				// 修正位置
				if (position=="right") {
					$(".ex-panel").css("top", (top+obj.offsetHeight/2-$(".ex-panel").height()/2) + "px");
					$('head').append('<style>.ex-panel.arrow-left:before{left:-8px;top:'+($(".ex-panel").height()/2-9)+'px;}</style>');
				}
				
				// 点击空白处隐藏弹出层
				$(document).mouseup(function(event) {
					// 设置目标区域
					var obj = $(".ex-panel");
					if (!obj.is(event.target) && obj.has(event.target).length==0) {
						$(".ex-panel").remove();
					}
				});
			},
			
			// 操作提示
			timeoutId : null,
			optTip : function(args) {
				var settings = defaults(args);
				var type = settings.type;
				var timeout = settings.timeout;
				
				var html = '';
				if (type=="submit") {
					if (!!timeout) {
						timeout = parseInt(timeout);
					} else {
						timeout = 0;
					}
					
					$(".ex-opt-tip").remove();
					
					html += '<div class="mask" style="background:none;"></div>';
					html += '<div class="ex-opt-tip animated fadeInDown" style="top: 40px; left: 50%;">';
					html += '<div style="display: flex;">';
					html += '<span class="tip-icon tip-icon-loading"></span>';
					html += '<span class="tip-msg">' + settings.content + '</span>';
					html += '</div>';
					html += '</div>';
					
					// 启动定时器
					if (timeout>0) {
						// 实时刷新时间单位为毫秒
						info.timeoutId = setInterval(function() {
							info.optTip({
								content : settings.timeoutText,
								type : "error"
							});
							clearInterval(info.timeoutId);
						}, timeout);
					}
				}
				else if (type=="success" || type=="") {
					clearInterval(info.timeoutId);
					// 判断是否已存在提交提示
					if ($(".tip-icon-loading").length>0) {
						// 存在
						// 直接修改样式
						$(".ex-opt-tip").css("background-color", "#79c37b");
						$(".ex-opt-tip .tip-icon").removeClass("tip-icon-loading");
						$(".ex-opt-tip .tip-icon").addClass("icon-check");
						$(".ex-opt-tip .tip-icon").css({
							"font-size" : "16px",
							"font-weight" : "bold"
						});
						// 修改文字
						$(".ex-opt-tip .tip-msg").text(settings.content);
					} else {
						$(".ex-opt-tip").remove();
						
						html += '<div class="ex-opt-tip animated fadeInDown" style="top: 40px; left: 50%; background-color:#79c37b;">';
						html += '<div style="display: flex;">';
						html += '<span class="tip-icon icon-check" style="font-size:16px; font-weight:bold;"></span>';
						html += '<span class="tip-msg">' + settings.content + '</span>';
						html += '</div>';
						html += '</div>';
					}
				}
				else if (type=="error") {
					clearInterval(info.timeoutId);
					// 判断是否已存在提交提示
					if ($(".tip-icon-loading").length>0) {
						// 存在
						// 直接修改样式
						$(".ex-opt-tip").css("background-color", "#ff6e6e");
						$(".ex-opt-tip .tip-icon").removeClass("tip-icon-loading");
						$(".ex-opt-tip .tip-icon").addClass("icon-close");
						$(".ex-opt-tip .tip-icon").css({
							"font-size" : "16px",
							"font-weight" : "bold"
						});
						// 修改文字
						$(".ex-opt-tip .tip-msg").text(settings.content);
					} else {
						$(".ex-opt-tip").remove();
						
						html += '<div class="ex-opt-tip animated fadeInDown" style="top: 40px; left: 50%; background-color:#ff6e6e;">';
						html += '<div style="display: flex;">';
						html += '<span class="tip-icon icon-close" style="font-size:16px; font-weight:bold;"></span>';
						html += '<span class="tip-msg">' + settings.content + '</span>';
						html += '</div>';
						html += '</div>';
					}
					$(".mask").remove();
				}
				$(document.body).append(html);
				
				var tipWidth = $(".ex-opt-tip").width();
				$(".ex-opt-tip").css("margin-left", -(tipWidth/2)+"px");

				if (type=="success" || type=="error") {
					setTimeout(function() {
						$(".ex-opt-tip").remove();
						$(".mask").remove();
					}, settings.live);
				}
			},
			
			// 消息反馈提示
			message : function(args) {
				var settings = defaults(args);
				var type = settings.type;
				var timeout = settings.timeout;
				
				$(".mask").remove();
				$(".ex-opt-tip").remove();
				
				var html = '';
				if (type=="submit") {
					if (!!timeout) {
						timeout = parseInt(timeout);
					} else {
						timeout = 0;
					}
					
					$(".message-feedback").remove();
					
					html += '<div class="mask" style="background:none;"></div>';
					html += '<div class="message-feedback animated zoomIn">';
					html += '<div class="message-feedback-icons submit">';
					html += '<span class="message-feedback-icon icon-submited"></span>';
					html += '<span class="message-feedback-text">'+settings.content+'</span>';
					html += '</div>';
					html += '</div>';
					
					// 启动定时器
					if (timeout>0) {
						// 实时刷新时间单位为毫秒
						info.timeoutId = setInterval(function() {
							info.message({
								content : settings.timeoutText,
								type : "error"
							});
							clearInterval(info.timeoutId);
						}, timeout);
					}
				}
				else if (type=="success") {
					clearInterval(info.timeoutId);
					$(".message-feedback").remove();
					
					html += '<div class="message-feedback animated zoomIn">';
					html += '<div class="message-feedback-icons succeed">';
					html += '<span class="message-feedback-icon icon-succeed"></span>';
					html += '<span class="message-feedback-text">'+settings.content+'</span>';
					html += '</div>';
					html += '</div>';
				}
				else if (type=="error") {
					clearInterval(info.timeoutId);
					$(".message-feedback").remove();
					
					html += '<div class="message-feedback animated zoomIn">';
					html += '<div class="message-feedback-icons failed">';
					html += '<span class="message-feedback-icon icon-failed"></span>';
					html += '<span class="message-feedback-text">'+settings.content+'</span>';
					html += '</div>';
					html += '</div>';
					
					$(".mask").remove();
				}
				
				$(document.body).append(html);
				var messageWidth = $(".message-feedback").width();
				$(".message-feedback").css("margin-left", -(messageWidth/2));
				
				if (type=="success" || type=="error") {
					setTimeout(function() {
						$(".message-feedback").remove();
						$(".mask").remove();
					}, settings.live);
				}
			},
			
			// 页面预加载
			loading : function(args) {
				var settings = defaults(args);
				var containerId = settings.containerId;
				var id = settings.id;
				var type = settings.type;
				var content = settings.content;
				if (!content) {
					content = "正在读取数据，请稍候...";
				}
				var top = settings.top;
				
				if (!type) {
					// 页面预加载
					$(document.body).append('<div id="javaex-loading" class="javaex-loading">'+content+'</div>');
					
					// 判断页面是否加载完毕
					document.onreadystatechange = subSomething;
					function subSomething() {
						if (document.readyState=="complete") {
							var oLoading = document.getElementById("javaex-loading");
							if (oLoading!=null) {
								oLoading.remove();
								settings.callback({
									"code": "000000"
								});
							}
						}
					}
				} else if (type=="close") {
					// 手动关闭
					if (containerId!="") {
						$("#"+containerId).css({
							"min-height" : ""
						});
					}
					if (id=="") {
						$(".javaex-process").remove();
					} else {
						$("#"+id).remove();
					}
				} else if (type=="open") {
					// 手动打开
					if (containerId=="") {
						// 位于整个页面
						if (id=="") {
							$(document.body).append('<div class="javaex-process"></div>');
						} else {
							$(document.body).append('<div id="'+id+'" class="javaex-process"></div>');
						}
					} else {
						// 指定区域
						var tempHeight = $("#"+containerId).height();
						if (tempHeight<140) {
							$("#"+containerId).css({
								"min-height" : "140px"
							});
						}
						if (id=="") {
							$("#"+containerId).append('<div class="javaex-process" style="top:'+top+';"></div>');
						} else {
							$("#"+containerId).append('<div id="'+id+'" class="javaex-process" style="top:'+top+';"></div>');
						}
					}
				}
			},

			// 高级弹出层
			num : 0,	// 代表第几张图片切换
			dialog : function(args) {
				var settings = defaults(args);
				var width = parseInt(settings.width);
				var offsetLeft = parseInt(settings.offsetLeft);
				var height = settings.height;
				if (height!="") {
					height = parseInt(height);
				}
				var hasBackground = settings.hasBackground;
				var type = settings.type;
				
				// 必须重新赋值，不然无法传递该参数
				attribute = args;
				
				// 生成随机id
				var UUID = info.getUUID();
				// 判断是否指定了id
				if (settings.id!="") {
					UUID = settings.id;
				}
				
				// 弹出层代码
				var dialogHtml = '';
				// 判断弹出层样式
				if (type=="image") {
					// 添加遮罩
					info.addMask();
					
					// 创建对象
					var image = new Image();
					// 改变图片的src
					image.src = settings.url;
					var maxWidth = document.documentElement.clientWidth - 120;
					var maxHeight = document.documentElement.clientHeight - 120;
					
					var arr = info.autoWidthHeight(image.width, image.height, maxWidth, maxHeight);
					width = arr[0]+40;
					height = arr[1]+40;
					
					dialogHtml = '<div id='+UUID+' class="ex-dialog animated zoomIn" style="width:'+width+'px;height:'+height+'px;left:'+(maxWidth-width+120)/2+'px;">';
					dialogHtml += '<div class="dialog-content" style="padding: 0;">';
					dialogHtml += '<img src="'+settings.url+'" />';
					dialogHtml += '</div>';
					dialogHtml += '<a class="close2" href="javascript:;" onclick="javaex.close(\''+UUID+'\');"></a>';
					dialogHtml += '</div>';
				} else if (type=="images") {
					// 遍历图片
					var selector = settings.selector;
					var placeholder = settings.placeholder;
					var original = settings.dataOriginal;
					
					$(selector).each(function(i) {
						// 判断当前点击的是第几张图片
						if ($(this).attr("src")==settings.url) {
							info.num = i;
						}
					});
					
					// 创建对象
					var image = new Image();
					// 改变图片的src
					image.src = settings.url;
					var maxWidth = document.documentElement.clientWidth - 120;
					var maxHeight = document.documentElement.clientHeight - 120;
					
					var arr = info.autoWidthHeight(image.width, image.height, maxWidth, maxHeight);
					width = arr[0];
					height = arr[1];
					
					dialogHtml = '<div class="ex-allcover"></div>';
					dialogHtml += '<div id="'+UUID+'" class="ex-area-window">';
					dialogHtml += '<div id="ex-box-image-manga" style="width:'+width+'px;height:'+height+'px;left:'+(maxWidth-width+120)/2+'px;top:'+(maxHeight-height+120)/2+'px;">';
					dialogHtml += '<img id="img-'+UUID+'" src="'+settings.url+'" style="opacity: 1;">';
					dialogHtml += '</div>';
					dialogHtml += '<div class="prev-image" title="上一张" onclick="javaex.lastImg(\''+UUID+'\', \''+selector+'\', \''+placeholder+'\', \''+original+'\');">';
					dialogHtml += '<i class="icon icon-chevron-circle-left"></i>';
					dialogHtml += '</div>';
					dialogHtml += '<div class="next-image" title="下一张" onclick="javaex.nextImg(\''+UUID+'\', \''+selector+'\', \''+placeholder+'\', \''+original+'\');">';
					dialogHtml += '<i class="icon icon-chevron-circle-right"></i>';
					dialogHtml += '</div>';
					dialogHtml += '<div class="area-tool-image">';
					dialogHtml += '<a id="ex-btn-quit-image" class="button red" href="javascript:;" onclick="javaex.close(\''+UUID+'\');">';
					dialogHtml += '<i class="icon icon-cancel" style="vertical-align: middle;height: 30px;line-height: 28px;font-size: 16px;"></i>退出读图模式';
					dialogHtml += '</a>';
					dialogHtml += '</div>';
					dialogHtml += '</div>';
				} else if (type=="dialog" || type=="login") {
					info.addMask();
					dialogHtml = '<div id=' + UUID + ' class="ex-dialog animated zoomIn" style="box-shadow: none;width:' + width + 'px;left:' + ((document.documentElement.clientWidth-width)/2-offsetLeft) + 'px;">';
					dialogHtml += '<div id="dialog-content-' + UUID + '" class="dialog-content" style="padding:0;height:' + height + 'px;">';
					dialogHtml += '<iframe src="' + settings.url + '" width="100%" height="100%" frameborder="0" scrolling="no" style="overflow: visible;border: 0;"></iframe>';
					dialogHtml += '</div>';
					dialogHtml += '<a class="dialog-close icon-close" href="javascript:;" onclick="javaex.close(\''+UUID+'\');"></a>';
					dialogHtml += '</div>';
				} else if (type=="window") {
					// 高级弹出层
					// 添加遮罩
					if (settings.mask==true || settings.mask=="true") {
						info.addMask();
					}
					
					dialogHtml = '<div id=' + UUID + ' class="ex-dialog animated zoomIn" style="width:'+width+'px;top:'+(document.documentElement.clientHeight-height)/2+'px;left:'+((document.documentElement.clientWidth-width)/2-offsetLeft)+'px;height:'+height+'px;">';
					dialogHtml += '<div class="dialog-top">';
					dialogHtml += '<div id="dialog-title-' + UUID + '" class="dialog-title">' + settings.title + '</div>';
					dialogHtml += '<div id="dialog-min-' + UUID + '" class="dialog-min-icon" onclick="javaex.min(\''+UUID+'\');"><span class="dialog-opt min"><span></div>';
					dialogHtml += '<div id="dialog-max-' + UUID + '" class="dialog-max-icon" onclick="javaex.max(\''+UUID+'\');"><span class="dialog-opt max"><span></div>';
					dialogHtml += '<div id="dialog-revert-' + UUID + '" style="display:none;" class="dialog-revert-icon" onclick="javaex.revert(\''+UUID+'\', attribute);"><span class="dialog-opt revert"><span></div>';
					dialogHtml += '<div class="dialog-close-icon" onclick="if('+settings.closeX+'!=false)javaex.close(\''+UUID+'\');"><span class="dialog-opt close"><span></div>';
					dialogHtml += '</div>';
					if (hasBackground) {
						dialogHtml += '<div id="dialog-content-'+UUID+'" class="dialog-content full" style="height:'+(height-40)+'px;overflow-y:hidden;">';
					} else {
						dialogHtml += '<div id="dialog-content-'+UUID+'" class="dialog-content" style="height:'+(height-40)+'px;overflow-y:hidden;">';
					}
					dialogHtml += '<iframe src="'+settings.url+'" width="100%" height="100%" frameborder="0" scrolling="'+settings.scrolling+'" style="overflow: visible;border: 0;"></iframe>';
					dialogHtml += '</div>';
					dialogHtml += '<div id="dialog-resize-'+UUID+'" class="resize" onmousemove="javaex.resize(\''+UUID+'\', attribute);"></div>';
					dialogHtml += '</div>';
				}
				$(document.body).append(dialogHtml);

				var oDialog = document.getElementById(UUID);
				// 弹出层垂直居中
				if (type=="login" || type=="dialog") {
					var heightDifference = document.documentElement.clientHeight - oDialog.offsetHeight;
					oDialog.style.top = (heightDifference/2) + "px";

					// 判断是否允许点击遮罩关闭弹窗
					if (settings.isClickMaskClose) {
						$(".mask").click(function() {
							info.close(UUID);
						});
					}
				} else if (type=="image") {
					var heightDifference = document.documentElement.clientHeight - oDialog.offsetHeight;
					oDialog.style.top = (heightDifference/2) + "px";
					
					$(".mask").click(function() {
						info.close(UUID);
					});
				} else if (type=="window") {
					// 弹出层拖拽
					var oDrag = document.getElementById("dialog-title-" + UUID);
					info.drag(oDialog, oDrag);
					
					// 判断是否允许点击遮罩关闭弹窗
					if (settings.isClickMaskClose) {
						$(".mask").click(function() {
							info.close(UUID);
						});
					}
				}
			},

			// 自动调节图片宽高
			autoWidthHeight : function(width, height, maxWidth, maxHeight) {
				if (width<maxWidth && height<maxHeight) {
					// 当图片比图片框小时，不做任何改变 
				} else {
					if (maxWidth/maxHeight <= width/height) {
						// 原图片宽高比例 大于 图片框宽高比例
						width = maxWidth;	// 以框的宽度为标准
						height = maxWidth * (height/width);
					} else {
						// 原图片宽高比例 小于 图片框宽高比例
						width = maxHeight * (width/height);
						height = maxHeight;	// 以框的高度为标准
					}
				}
				var arr = new Array(width, height);
				return arr;
			},
			
			// 切换上一张图片
			lastImg : function(UUID, selector, placeholder, original) {
				info.num--;
				if (info.num>=0) {
					$("#img-"+UUID).css({
						"opacity" : 0,
						"transition" : "opacity 200ms ease 0s"
					});
					
					setTimeout(function() {
						// 创建对象
						var image = new Image();
						// 改变图片的src
						image.src = $(selector).eq(info.num).attr("src");
						var maxWidth = document.documentElement.clientWidth-120;
						var maxHeight = document.documentElement.clientHeight-120;
						
						var arr = info.autoWidthHeight(image.width, image.height, maxWidth, maxHeight);
						width = arr[0];
						height = arr[1];
						$("#ex-box-image-manga").css({
							"width" : width + "px",
							"height" : height + "px",
							"left" : (maxWidth-width+120)/2 + "px",
							"top" : (maxHeight-height+120)/2 + "px"
						});
						$("#img-"+UUID).attr("src", image.src);
						$("#img-"+UUID).css({
							"opacity" : 1,
							"transition" : ""
						});
					}, 200);
				} else {
					info.num = $(selector).length-2;
					info.nextImg(UUID, selector, placeholder, original);
				}
			},
			
			// 切换下一张图片
			nextImg : function(UUID, selector, placeholder, original) {
				info.num++;
				if (info.num<$(selector).length) {
					$("#img-"+UUID).css({
						"opacity" : 0,
						"transition" : "opacity 200ms ease 0s"
					});
					
					setTimeout(function() {
						// 创建对象
						var image = new Image();
						// 改变图片的src
						var imgSrc = $(selector).eq(info.num).attr("src");
						if (imgSrc.indexOf(placeholder)!=-1) {
							// 说明是延迟加载的图片
							imgSrc = $(selector).eq(info.num).attr(original);
						}
						
						image.src = imgSrc;
						var maxWidth = document.documentElement.clientWidth-120;
						var maxHeight = document.documentElement.clientHeight-120;
						
						var arr = info.autoWidthHeight(image.width, image.height, maxWidth, maxHeight);
						width = arr[0];
						height = arr[1];
						$("#ex-box-image-manga").css({
							"width" : width + "px",
							"height" : height + "px",
							"left" : (maxWidth-width+120)/2 + "px",
							"top" : (maxHeight-height+120)/2 + "px"
						});
						$("#img-"+UUID).attr("src", image.src);
						$("#img-"+UUID).css({
							"opacity" : 1,
							"transition" : ""
						});
					}, 200);
				} else {
					info.num = -1;
					info.nextImg(UUID, selector, placeholder, original);
				}
			},

			// 改变弹出层大小
			resize : function(UUID, args) {
				var settings = defaults(args);
				
				// 弹出层的最小宽度和高度
				var dragMinWidth = parseInt(settings.width);
				var dragMinHeight = parseInt(settings.height);

				var oDialog = document.getElementById(UUID);
				var oResize = document.getElementById("dialog-resize-" + UUID);

				oResize.onmousedown = function (event) {
					var oEvent = event || window.event;
					var absX = oEvent.clientX - oResize.offsetLeft;
					var absY = oEvent.clientY - oResize.offsetTop;	

					document.onmousemove = function (eve) {
						var oEve = eve || window.event;

						var offsetLeft = oEve.clientX - absX;
						var offsetTop = oEve.clientY - absY;
						var maxWidth = document.documentElement.clientWidth - oDialog.offsetLeft - 2;
						var maxHeight = document.documentElement.clientHeight - oDialog.offsetTop - 2;			
						var offsetWidth = oResize.offsetWidth + offsetLeft;
						var offsetHeight = oResize.offsetHeight + offsetTop;

						if (offsetWidth<dragMinWidth) {
							offsetWidth = dragMinWidth;
						}
						if (offsetWidth>maxWidth) {
							offsetWidth = maxWidth;
						}
						oDialog.style.width = offsetWidth + "px";

						if (offsetHeight<dragMinHeight) {
							offsetHeight = dragMinHeight;
						}
						if (offsetHeight>maxHeight) {
							offsetHeight = maxHeight;
						}
						oDialog.style.height = offsetHeight + "px";
						document.getElementById("dialog-content-" + UUID).style.height = (offsetHeight-40) + "px";
						
						return false;
					};
					document.onmouseup = function() {
						document.onmousemove = null;
						document.onmouseup = null;
					};
					return false;
				};
			},

			// 弹出层最小化
			min : function(UUID) {
				// 最小化图标隐藏
				var oMin = document.getElementById("dialog-min-" + UUID);
				oMin.style.display = "none";
				// 右下角拖放图标隐藏
				var oResize = document.getElementById("dialog-resize-" + UUID);
				oResize.style.display = "none";
				// 最大化图标隐藏
				var oMax = document.getElementById("dialog-max-" + UUID);
				oMax.style.display = "none";
				// 还原图标显示
				var oRevert = document.getElementById("dialog-revert-" + UUID);
				oRevert.style.display = "block";

				// 隐藏该弹出层内容区域
				var oContent = document.getElementById("dialog-content-" + UUID);
				oContent.style.display = "none";

				// 重新设置该弹出层的一些属性
				var oDialog = document.getElementById(UUID);
				oDialog.style.left = "0";
				oDialog.style.width = "260px";
				oDialog.style.height = "40px";
				offsetTop = document.documentElement.clientHeight - oDialog.offsetHeight;
				oDialog.style.top = offsetTop + "px";
			},

			// 弹出层最大化
			max : function(UUID) {
				// 最大化图标隐藏
				var oMax = document.getElementById("dialog-max-" + UUID);
				oMax.style.display = "none";
				// 右下角拖放图标显示
				var oResize = document.getElementById("dialog-resize-" + UUID);
				oResize.style.display = "none";
				// 最小化图标显示
				var oMin = document.getElementById("dialog-min-" + UUID);
				oMin.style.display = "block";
				// 还原图标显示
				var oRevert = document.getElementById("dialog-revert-" + UUID);
				oRevert.style.display = "block";

				// 重新设置该弹出层的一些属性
				var oDialog = document.getElementById(UUID);
				oDialog.style.top = "0";
				oDialog.style.left = "0";
				oDialog.style.width = document.documentElement.clientWidth - 2 + "px";
				oDialog.style.height = document.documentElement.clientHeight - 2 + "px";

				// 重新设置该弹出层内容区域的高度
				var oContent = document.getElementById("dialog-content-" + UUID);
				oContent.style.display = "block";
				oContent.style.height = document.documentElement.clientHeight - 2 - 40 + "px";
			},

			// 弹出层大小还原
			revert : function(UUID, args) {
				var settings = defaults(args);
				var width = parseInt(settings.width);
				var height = parseInt(settings.height);
				
				// 最小化图标显示
				var oMin = document.getElementById("dialog-min-" + UUID);
				oMin.style.display = "block";
				// 还原图标隐藏
				var oRevert = document.getElementById("dialog-revert-" + UUID);
				oRevert.style.display = "none";
				// 最大化图标显示
				var oMax = document.getElementById("dialog-max-" + UUID);
				oMax.style.display = "block";
				// 右下角拖放图标显示
				var oResize = document.getElementById("dialog-resize-" + UUID);
				oResize.style.display = "block";

				// 还原该弹出层的属性
				var oDialog = document.getElementById(UUID);
				oDialog.style.top = settings.top;
				oDialog.style.left = (document.documentElement.clientWidth-width)/2 + "px";
				oDialog.style.width = width + "px";
				oDialog.style.height = height + "px";
				oDialog.style.top = (document.documentElement.clientHeight-height)/2+"px";

				// 还原该弹出层内容区域的高度
				var oContent = document.getElementById("dialog-content-" + UUID);
				oContent.style.display = "block";
				oContent.style.height = (height-40) + "px";
			},

			// 关闭弹出层
			close : function(UUID) {
				if (!UUID) {
					$(".ex-dialog").removeClass("zoomIn");
					$(".ex-dialog").addClass("zoomOut");
					// 删除遮罩
					$(".mask").remove();

					// 删除弹出层
					setTimeout(function() {
						$(".ex-dialog").remove();
					}, 300);
				} else {
					if ($("#"+UUID).hasClass("ex-area-window")) {
						$("#"+UUID).remove();
						$(".ex-allcover").remove();
					} else if ($("#"+UUID).hasClass("ex-danger-dialog")) {
						$("#"+UUID).removeClass("fadeInUpSmall");
						$("#"+UUID).addClass("zoomOut");
						// 删除弹出层
						setTimeout(function() {
							$("#"+UUID).remove();
						}, 300);
					} else {
						$("#"+UUID).removeClass("zoomIn");
						$("#"+UUID).addClass("zoomOut");
						$(".mask").remove();
						// 删除弹出层
						setTimeout(function() {
							$("#"+UUID).remove();
						}, 300);
					}
				}
			},

			// 添加遮罩背景
			addMask : function() {
				$(document.body).append('<div class="mask"></div>');
			},
			// 添加遮罩背景（无色）
			addMask2 : function() {
				$(document.body).append('<div class="mask" style="background:none;"></div>');
			},

			// 拖拽事件
			drag : function(oDialog, oDrag) {
				oDrag.onmousedown = function(event) {
					var oEvent = event || window.event;
					var absX = oEvent.clientX - oDialog.offsetLeft;
					var absY = oEvent.clientY - oDialog.offsetTop;

					document.onmousemove = function(eve) {
						var oEve = eve || window.event;
						var offsetLeft = oEve.clientX - absX;
						var offsetTop = oEve.clientY - absY;

						// 防止拖动溢出
						if (offsetLeft<=0) {
							offsetLeft = 0;
						} else if (offsetLeft>=(document.documentElement.clientWidth-oDialog.offsetWidth)) {
							offsetLeft = document.documentElement.clientWidth - oDialog.offsetWidth;
						}

						if (offsetTop<=0) {
							offsetTop = 0;
						} else if (offsetTop>=(document.documentElement.clientHeight-oDialog.offsetHeight)) {
							offsetTop = document.documentElement.clientHeight - oDialog.offsetHeight;
						}

						// 修改属性
						oDialog.style.left = offsetLeft + "px";
						oDialog.style.top = offsetTop + "px";
					};
					document.onmouseup = function() {
						document.onmousemove = null;
						document.onmouseup = null;
					};
				};
			},

			// 突进式渲染
			popin : function(id) {
				if (!!id) {
					$("#"+id+" .pop-in").each(function() {
						$(this).css("animation-delay", Math.random()+"s");
					});
				} else {
					$(".pop-in").each(function() {
						$(this).css("animation-delay", Math.random()+"s");
					});
				}
			},
			
			// 重新渲染
			render : function(args) {
				var settings = defaults(args);
				var id = settings.id;
				var type = settings.type;
				
				if (!!id) {
					if (!!type) {
						// 等分系统
						if (type=="equal") {
							// 判断含有多少个属性
							var classArr = $('#'+id).attr("class").split(" ");
							
							for (var i=0; i<classArr.length; i++) {
								if (classArr[i].indexOf("equal-")>=0) {
									// 获取等分布局的等分数
									var num = classArr[i].split("-")[1];
									// 为子级div设置宽度
									$('#'+id).children("li").css("width", (100/num) + "%");
								}
							}
							return;
						}
						
						// 栅格系统
						if (type=="grid") {
							// 判断含有多少个属性
							var classArr = $('#'+id).attr("class").split(" ");
							
							for (var i=0; i<classArr.length; i++) {
								if (classArr[i].indexOf("grid-")>=0) {
									// 获取栅格布局
									var arr = classArr[i].split("-");
									// 计算一共需要分成多少份
									var sum = 0;
									for (var j in arr) {
										if (j>0) {
											sum = parseInt(sum) + parseInt(arr[j]);
										}
									}
									// 为子级div设置宽度
									$('#'+id).children("div").each(function(k) {
										$(this).css("width", (100/sum) * arr[k+1] + "%");
									});
								} else if (classArr[i].indexOf("spacing-")>=0) {
									// 获取栅格间距
									var spacing = classArr[i].split("-")[1];
									
									// 为子级div设置间距
									var width = "calc(100% + "+parseInt(spacing)+"px)";
									$('#'+id).css("width", width);
									$('#'+id).children("div").each(function(k) {
										$(this).css("margin-right", parseInt(spacing) + "px");
									});
								}
							}
						}
					}
				} else {
					$("script").each(function() {
						if (!!$(this).attr("src")) {
							if ($(this).attr("src").indexOf("common.js")>-1) {
								var jsSrc = $(this).attr("src");
								var script = document.createElement("script");
								script.src = jsSrc;
								$(document.body).append(script);
							}
							if ($(this).attr("src").indexOf("javaex-formVerify.js")>-1) {
								var jsSrc = $(this).attr("src");
								var script = document.createElement("script");
								script.src = jsSrc;
								$(document.body).append(script);
							}
						}
					});
				}
			},
			
			// 左侧菜单
			menu : function(args) {
				var settings = defaults(args);
				var menuId = settings.id;
				
				// 初始化显示所有节点
				if (settings.isShowAll) {
					$("#"+menuId+" .menu-item").addClass("menu-show");
					$("#"+menuId+" .menu-item>ul").css("display", "block");
				}
				
				// 左侧菜单 —— 展开/收起
				$("#"+menuId+" .menu-item>a").on("click", function() {
					if ($(this).next().css("display")=="none") {
						if (!settings.isShowAll) {
							$("#"+menuId+" .menu-item").children("ul").slideUp(300);
						}
						$(this).next("ul").slideDown(300);
						if (settings.isShowAll) {
							$(this).parent("li").addClass("menu-show");
						} else {
							$(this).parent("li").addClass("menu-show").siblings("li").removeClass("menu-show");
						}
					} else {
						if ($(this).next("ul").length==0) {
							// 没有子级菜单
							$("#"+menuId+" .menu-item.menu-show ul").slideUp(300);
						} else {
							// 有子级菜单
							$(this).next("ul").slideUp(300);
						}
						if (settings.isShowAll) {
							$(this).parent("li").removeClass("menu-show");
						} else {
							$("#"+menuId+" .menu-item.menu-show").removeClass("menu-show");
						}
					}
				});

				var menuFlag = 0;
				// 选中菜单高亮
				$("#"+menuId+" li.menu-item>a").click(function() {
					menuFlag = 1;
					addHover($(this).parent());
				});
				$("#"+menuId+" li.menu-item ul li>a").click(function() {
					menuFlag = 2;
					addHover($(this).parent());
				});
				
				/**
				 * 为选中菜单添加高亮
				 */
				function addHover(obj) {
					// 清除所有菜单项的高亮
					if (menuFlag==1) {
						$("#"+menuId+" li.menu-item").removeClass("hover");
					} else if (menuFlag==2) {
						$("#"+menuId+" li.menu-item ul li").removeClass("hover");
					} else {
						$("#"+menuId+" li.menu-item").removeClass("hover");
						$("#"+menuId+" li.menu-item ul li").removeClass("hover");
					}
					
					// 为当前点击菜单添加高亮
					obj.addClass("hover");
				}
				
				// 是否自动选中高亮
				if (settings.isAutoSelected) {
					// 获取当前页面的url
					var url = window.location.href;
					// 自动高亮菜单，flag标识有没有找到匹配的链接
					var flag = menuSelected(url);
					// 未找到匹配的链接时，从cookie中取上一次获取的链接，并高亮该链接
					if (flag==false) {
						// 判断是否需要高亮默认链接
						if (!settings.key) {
							delCookie("adminMenuUrl");
							menuSelected(settings.url);
						} else {
							// 判断是不是首页根链接
							var host = window.location.host;
							
							if (url==("http://"+host+"/") || url==("https://"+host+"/")
								|| url==("http://"+host) || url==("https://"+host)) {
								// 是的话，清除cookie
								delCookie("adminMenuUrl");
							} else {
								var url = getCookie("adminMenuUrl");
								// 自动高亮菜单
								menuSelected(url);
							}
						}
					}
				}
				
				/**
				 * 设置菜单自动选中
				 */
				function menuSelected(url) {
					var url2 = url.replace(window.location.host, "").replace("http://", "").replace("https://", "");
					
					// 标识有没有找到匹配的链接
					var flag = false;
					// 遍历菜单
					// 先使用完全匹配
					var menuFlag = false;
					$("#"+menuId+" li").each(function() {
						var href = $(this).children().first().attr("href");
						if (href.indexOf("javascript:page")>=0) {
							href = href.replace(/"/g, "'");
							href = href.replace("javascript:page('", "").replace("');", "").replace("')", "");
						}
						
						if (url2==href) {
							// 完全匹配成功
							menuFlag = true;
							// 找到匹配的链接时，设置cookie
							flag = true;
							setCookie("adminMenuUrl", url);
							
							// 判断该菜单是不是展开菜单
							if ($(this).hasClass("menu-item")) {
								// 没有展开菜单时，其本身高亮
								// 清除所有菜单项的高亮
								$("#menu li.menu-item").removeClass("hover");
								$("#menu li.menu-item ul li").removeClass("hover");
								// 为当前点击菜单添加高亮
								$(this).addClass("hover");
							} else {
								$(this).addClass("hover").siblings().removeClass("hover");
								$(this).parent().parent().addClass("menu-show");
							}
							return;
						}
					});
					
					// 如果完全匹配失败，再使用关键词匹配
					if (!menuFlag) {
						$("#"+menuId+" li").each(function() {
							var href = $(this).children().first().attr("href");
							if (url.indexOf(href)>=0) {
								// 找到匹配的链接时，设置cookie
								flag = true;
								setCookie("adminMenuUrl", url);
								
								// 判断该菜单是不是展开菜单
								if ($(this).hasClass("menu-item")) {
									// 没有展开菜单时，其本身高亮
									// 清除所有菜单项的高亮
									$("#menu li.menu-item").removeClass("hover");
									$("#menu li.menu-item ul li").removeClass("hover");
									// 为当前点击菜单添加高亮
									$(this).addClass("hover");
								} else {
									$(this).addClass("hover").siblings().removeClass("hover");
									$(this).parent().parent().addClass("menu-show");
								}
								return;
							}
						});
					}
					
					return flag;
				}
				
				/**
				 * 设置cookie
				 */
				function setCookie(key, value) {
					document.cookie = key+"="+value+"; path=/; expires=-1";
				}
				
				/**
				 * 获取cookie
				 */
				function getCookie(key) {
					var keyName = key + "=";
					var arr = document.cookie.split("; ");
					for (var i=0; i<arr.length; i++) {
						var cookieName = arr[i].trim();
						if (cookieName.indexOf(keyName)==0) {
							return cookieName.substring(keyName.length, cookieName.length);
						}
					}
					return "";
				}
				
				/**
				 * 删除cookie
				 */
				function delCookie(key) {
					var exp = new Date();
					exp.setTime(exp.getTime() - 1);
					var cval = getCookie(key);
					if (cval!=null) {
						document.cookie = key + "=" + cval + ";expires=" + exp.toGMTString();
					}
				}
			},

			// Tab切换
			tab : function(args) {
				var settings = defaults(args);
				var tabId = settings.id;
				var current = parseInt(settings.current);
				var mode = settings.mode;
				var display = settings.display;

				// 为当前选中的选项卡添加样式
				$("#" + tabId + " .tab-title ul li").each(function(i) {
					if (i==(current-1)) {
						$(this).addClass("current");
					}
				});

				// 显示当前选中的选项卡的内容，隐藏其他选项卡的内容
				$("#" + tabId + " .tab-content>div").each(function(i) {
					if (i==(current-1)) {
						$(this).css("display", display);
					} else {
						$(this).css("display", "none");
					}
				});

				// 初始化返回回调函数，返回选项卡的索引，从1开始计
				if (settings.isInit) {
					settings.callback({
						"index": current
					});
				}
				
				// 判断鼠标移动切换还是鼠标点击切换
				if (mode=="mouseover") {
					$("#" + tabId + " .tab-title ul li").mouseover(function() {
						$this = $(this);
						setTimeout(function() {
							$this.addClass("current").siblings().removeClass("current");
							$("#" + tabId + " .tab-content>div:eq(" + $this.index() + ")").show().siblings().hide();
							// 触发图片懒加载机制
							$(settings.container).trigger(settings.event);
							// 设置回调函数，返回选项卡的索引，从1开始计
							settings.callback({
								"index": $this.index()+1
							});
						}, settings.delay);
					});
				} else if (mode=="click") {
					$("#" + tabId + " .tab-title ul li").click(function() {
						$(this).addClass("current").siblings().removeClass("current");
						$("#" + tabId + " .tab-content>div:eq(" + $(this).index() + ")").show().siblings().hide();
						// 触发图片懒加载机制
						$(settings.container).trigger(settings.event);
						// 设置回调函数，返回选项卡的索引，从1开始计
						settings.callback({
							"index": $(this).index()+1
						});
					});
				}
			},

			// 表格
			table : function(args) {
				var settings = defaults(args);
				var tableId = settings.id;
				var mergeColArr = settings.mergeColArr;
				var tree = settings.tree;
				
				// 表格根据内容自动合并
				if (mergeColArr.length>0) {
					for (var i=0; i<mergeColArr.length; i++) {
						// mergeColArr[i]-1是因为数组从0开始计算，而页面默认第一行或第一列从1开始计算
						tableMerge($("#"+tableId), mergeColArr[i]-1);
					}
					
					// 清理数据：removeData() 方法移除之前通过 data() 方法设置的数据
					$("#"+tableId).removeData();
				}
				
				// 树形列
				if (parseInt(tree)>0) {
					$("#"+tableId+" tbody tr").each(function() {
						setPaddingLeft($(this));
					});

					$("#"+tableId+" .icon-caret-down, "+"#"+tableId+" icon-caret-right").on("click", function(e) {
						if ($(this).hasClass("icon-caret-down")) {
							$(this).addClass("icon-caret-right").removeClass("icon-caret-down");
						} else {
							$(this).addClass("icon-caret-down").removeClass("icon-caret-right");
						}
						var flag = false;
						var objTr = $(this).closest("tr");
						// 判断是否闭合状态
						objTr.nextAll("tr").each(function() {
							var parentId = $(this).attr("parentId");
							if (parentId==objTr.attr("id")) {
								if ($(this).is(":hidden")) {
									flag = true;
									$(this).show();
								}
							}
						});

						if (!flag) {
							hideTr(objTr);
						}

						e.stopPropagation();
					});
					
					// 是否默认闭合
					if (settings.isClose) {
						$("#"+tableId+" .icon-caret-down").each(function() {
							if ($(this).closest("tr").is(":visible")) {
								$(this).click();
							}
						});
					}
				}
				
				/**
				 * 自动添加展开图标
				 */
				function setPaddingLeft(objTr) {
					var flag = false;
					var id = objTr.attr("id");
					objTr.nextAll("tr").each(function() {
						if ($(this).attr("parentId")==id) {
							flag = true;
							if (objTr.children("td:eq("+(tree-1)+")").children("span.icon-caret-down").length==0) {
								objTr.children("td:eq("+(tree-1)+")").prepend('<span class="tree-icon icon-caret-down" style="font-size: 16px;"></span>');
							}
							var paddingLeft = parseInt($(this).children("td:eq("+(tree-1)+")").css("padding-left"));
							$(this).children("td:eq("+(tree-1)+")").css("padding-left", (paddingLeft+16)+"px");
							setPaddingLeft($(this));
						}
					});
					if (!flag) {
						var objTd = objTr.children("td:eq("+(tree-1)+")");
						objTd.children("span.icon-caret-down").remove();
						// 查询其上一个符合条件的tr的td的padding-feft
						objTr.prevAll().each(function() {
							if ($(this).children("td:eq("+(tree-1)+")").children("span.icon-caret-down").length>0) {
								var paddingLeft = parseInt($(this).children("td:eq("+(tree-1)+")").css("padding-left"));
								
								if (objTd.closest("tr").attr("parentId")==$(this).attr("id")) {
									objTd.css("padding-left", (paddingLeft+40)+"px");
								} else {
									objTd.css("padding-left", (paddingLeft+16)+"px");
								}
								
								return false;
							}
						});
					}
				}
				
				/**
				 * 隐藏tr行
				 */
				function hideTr(objTr) {
					var id = objTr.attr("id");
					objTr.nextAll("tr").each(function() {
						if ($(this).attr("parentId")==id) {
							if ($(this).children("td:eq("+(tree-1)+")").children("span.icon-caret-down").length>0) {
								$(this).children("td:eq("+(tree-1)+")").children("span.icon-caret-down").addClass("icon-caret-right").removeClass("icon-caret-down");
							}
							$(this).hide();
							hideTr($(this));
						}
					});
				}
				
				/**
				 * 表格根据内容自动合并
				 */
				function tableMerge(obj, colIndex) {
					 // 存放单元格内容
					obj.data("content", "");
					// 默认为1，即不跨行
					obj.data("rowspan", 1);
					// 与上一行比较结果不同的td, 默认一个"空"的jquery对象
					// 例如合并前3行，则表示第4行的td
					obj.data("td", $());
					// 表格的总行数，用于最后一行做特殊处理时进行判断之用
					obj.data("trNum", $("#"+tableId+" tbody tr").length);
					// 遍历每一行的数据，关键是定位td, 和其对应的rowspan
					$("tbody tr", obj).each(function(index) {
						var $tr = $(this);
						// :eq() 选择器选取带有指定 index 值的元素。td:eq中的colIndex即列索引
						var $td = $("td:eq(" + colIndex + ")", $tr);
						var currentContent = $td.html();

						// 根据内容自动合并
						if (obj.data("content")=="") {
							obj.data("content", currentContent);
							obj.data("td", $td);
						} else {
							// 当前行的内容与上一行相同时
							if (obj.data("content")==currentContent) {
								// rowspan累加
								addRowspan();
							} else {
								// 重新指定一个新的rowspan
								newRowspan();
							}
						}

						/**
						 * rowspan累加
						 */
						function addRowspan() {
							var rowspan = obj.data("rowspan") + 1;
							obj.data("rowspan", rowspan);
							$td.hide();
							// 最后一行的情况比较特殊一点
							// 比如最后2行 td中的内容是一样的, 那么到最后一行就应该把此时的td里保存的td设置rowspan
							if (++index == obj.data("trNum")) {
								obj.data("td").attr("rowspan", obj.data("rowspan"));
							}
						}

						/**
						 * 重新指定一个新的rowspan
						 */
						function newRowspan() {
							// rowspan默认为1，如果统计出的rowspan没有变化，则不处理
							if (obj.data("rowspan")!=1) {
								obj.data("td").attr("rowspan", obj.data("rowspan"));
							}
							// 保存第一次出现不同内容的td, 和其内容, 重置rowspan
							obj.data("td", $td);
							obj.data("content", $td.html());
							obj.data("rowspan", 1);
						}
					});
				}
			},
			
			// select下拉选择框
			select : function(args) {
				var settings = defaults(args);
				var selectId = settings.id;
				var hasInputName = settings.hasInputName;
				
				$("#span-"+selectId).remove();
				
				// 先隐藏页面的select元素
				$("#"+selectId).css("display", "none");
				
				// 生成样式代码
				var selectHtml = '<span id="span-'+selectId+'" style="position: relative;">';
				if (settings.isSearch) {
					if (hasInputName) {
						selectHtml += '<input id="input-'+selectId+'" name="input-'+selectId+'" type="text" class="select" oninput="javaex.selectSearch(\''+selectId+'\', this.value)" />';
					} else {
						selectHtml += '<input id="input-'+selectId+'" type="text" class="select" oninput="javaex.selectSearch(\''+selectId+'\', this.value)" />';
					}
				} else {
					if (hasInputName) {
						selectHtml += '<input id="input-'+selectId+'" name="input-'+selectId+'" type="text" class="select" readonly />';
					} else {
						selectHtml += '<input id="input-'+selectId+'" type="text" class="select" readonly />';
					}
				}
				selectHtml += '<span id="icon-'+selectId+'" class="icon-expand_more"></span>';
				selectHtml += '<ul id="ul-'+selectId+'" class="select-ul">';
				selectHtml += '</ul>';
				selectHtml += '</span>';
				$("#"+selectId).before(selectHtml);

				// 判断是否禁用
				if ($("#"+selectId).prop("disabled")) {
					$("#input-"+selectId).addClass("disabled");
				}
				
				// 设置箭头样式
				$("#icon-"+selectId).css({
					"position" : "absolute",
					"right" : "6px",
					"font-size" : "20px",
					"color" : "#999",
					"top" : "0"
				});
				
				// 改变样式大小
				var zoom = $("#"+selectId).attr("zoom");
				if (zoom!=null) {
					$("#span-"+selectId).css("zoom", zoom);
				}
				
				// 设置宽度
				// 获取选项最大宽度
				var width = $("#"+selectId).width();
				if (width<140) {
					width = 140;
				}
				$("#input-"+selectId).css("width", width+"px");
				
				// 清空列表的内容
				$("#ul-"+selectId).empty();
				// 为列表添加内容
				$("#ul-"+selectId).html($("#"+selectId).html());
				// 添加属性
				$("#ul-"+selectId+" option").addClass("select-ul-item");
				// 选中默认值
				$("#ul-"+selectId+" option").each(function() {
					if ($(this).val()==$("#"+selectId).val()) {
						$(this).addClass("select-ul-item-selected");
						$("#input-"+selectId).val($(this).text());
						if (settings.isInit) {
							// 回调函数
							settings.callback({
								"selectValue": $(this).val(),
								"selectName" : $(this).text()
							});
						}
						return false;
					}
				});
				
				// 设置下拉列表最大高度
				$("#ul-"+selectId).css("max-height", 28*parseInt(settings.maxNum)+2+"px");
				
				// 绑定select选择框的点击事件
				$("#span-"+selectId).click(function(event) {
					// 判断是否已禁用
					if ($("#"+selectId).prop("disabled")) {
						event.preventDefault();
					} else {
						// 删除属性
						$("#ul-"+selectId+" option").removeClass("select-ul-item-selected");
						$("#ul-"+selectId+" option").each(function() {
							if ($(this).val()==$("#"+selectId).val()) {
								$(this).addClass("select-ul-item-selected");
								return false;
							}
						});
						// 显示每一项（因为检索过后，很多项都被隐藏了）
						$("#ul-"+selectId+" option").css("display", "block");
						// 显示ul
						$(this).find("ul").css({
							"width" : $(this).find("input").width()+22,
							"display" :"block"
						});
						// 该方法将停止事件的传播，阻止它被分派到其他 Document 节点。
						// 因为涉及到点击空白处隐藏select框，这里必须加这个方法
						event.stopPropagation();
					}
				});
				
				// 选中某一项
				$("#ul-"+selectId+" option").on("click", function(event) {
					var selectValue = $(this).val();
					var selectName = $(this).text();
					
					// 设置元素select的值
					$("#"+selectId).val(selectValue);
					// 将文本回显到input框
					$("#input-"+selectId).val($(this).text());
					// 隐藏选择列表
					$("#ul-"+selectId).css("display", "none");
					
					if ($(this).parent().parent().parent().hasClass("error-parent")) {
						$(this).parent().parent().parent().removeClass("error-parent");
						$(this).parent().parent().parent().find(".win-hint").remove();
					}
					
					// 回调函数
					settings.callback({
						"selectValue": selectValue,
						"selectName" : selectName
					});
					
					// 如果有onchange属性，则手动触发onchange事件
					if (!!$("#"+selectId).attr("onchange")) {
						$("#"+selectId).trigger("change");
					}
					
					event.stopPropagation();
				});
				
				// 点击空白处隐藏select框
				$(document).click(function() {
					$("#ul-"+selectId).css("display", "none");
				});
			},
			selectSearch : function(selectId, keyword) {
				var count = 0;
				// 如果检索内容为空
				keyword = keyword.replace(/(^\s*)|(\s*$)/g, "");
				if (keyword=="") {
					// 则显示所有选项
					$("#ul-"+selectId+" option").show();
				} else {
					// 遍历匹配每一个选项
					$("#ul-"+selectId+" option").each(function(i) {
						// 因为indexOf()方法对大小写敏感，所以这里强制转化为小写后再匹配
						// 如果当前选项不匹配
						if ($(this).text().toLowerCase().indexOf(keyword.toLowerCase())==-1) {
							$(this).css("display", "none");
							count++;
						} else {
							$(this).css("display", "block");
						}
					});
				}
			},
			
			// page分页
			page : function(args) {
				var settings = defaults(args);
				var pageId = settings.id;
				// 获取总页数
				var pageCount = settings.pageCount;
				if (pageCount==null) {
					return false;
				}
				pageCount = parseInt(pageCount);
				
				// 获取默认选中页
				var currentPage = parseInt(settings.currentPage);
				if (currentPage<1 || currentPage>pageCount) {
					currentPage = 1;
				}
				var goPageNum = currentPage;

				// 每页条数
				var perPageCount = null;
				if (!!settings.perPageCount) {
					perPageCount = parseInt(settings.perPageCount);
				}
				
				// 总条数
				var totalNum = null;
				if (!!settings.totalNum) {
					totalNum = settings.totalNum;
				}
				
				// 是否显示跳页
				var isShowJumpPage = settings.isShowJumpPage;
				
				// 获取显示位置
				var position = settings.position;
				if (position=="left") {
					$("#"+pageId).parent().css("text-align", "left");
				} else if (position=="center") {
					$("#"+pageId).parent().css("text-align", "center");
				} else if (position=="right") {
					$("#"+pageId).parent().css("text-align", "right");
				}
				
				// 判断总页数数量
				if (pageCount<=1) {
					$("#"+pageId).append('');
					return;
				} else if (pageCount<7) {
					var perPageCountHtml = '';
					if (!!perPageCount) {
						perPageCountHtml += '<span class="hint"><select id="javaex-perPageCount-'+pageId+'" class="select">';
						for (var i=1; i<10; i++) {
							if (i*10==perPageCount) {
								perPageCountHtml += '<option value="'+i+'0" selected>'+i+'0 条/页</option>';
							} else {
								perPageCountHtml += '<option value="'+i+'0">'+i+'0 条/页</option>';
							}
						}
						perPageCountHtml += '</select></span>';
					}
					
					var html = '<li><a>上一页</a></li>';
					for (var i=1; i<=pageCount; i++) {
						if (i==currentPage) {
							html += '<li class="active" page="'+i+'"><a>'+i+'</a></li>';
						} else {
							html += '<li page="'+i+'"><a>'+i+'</a></li>';
						}
					}
					html += '<li><a>下一页</a></li>';

					$("#"+pageId).append(perPageCountHtml);
					$("#"+pageId).append(html);
					init(pageId);
				} else {
					newPages(pageId, "jump", currentPage);
				}

				/**
				 * 初始化
				 */
				function init(pageId) {
					// 监听跳页事件
					$("#javaex-button-mini-"+pageId).click(function() {
						var goPageNum = $("#javaex-pager-"+pageId).val();
						goPageNum = parseInt(goPageNum);
						if (isNaN(goPageNum)) {
							goPageNum = 1;
						} else {
							if (goPageNum<1) {
								goPageNum = 1;
							} else if (goPageNum>pageCount) {
								goPageNum = pageCount;
							}
						}
						currentPage = goPageNum;
						newPages(pageId, "jump", goPageNum);
						
						settings.callback({
							"pageNum": goPageNum,
							"perPageCount" : perPageCount
						});
					});
					
					// 监听选择每页显示条数事件
					$("#javaex-perPageCount-"+pageId).change(function() {
						currentPage = activePage(pageId, $("#"+pageId).children("li.active"));
						if (!!perPageCount) {
							perPageCount = $("#javaex-perPageCount-"+pageId).val();
						}
						
						settings.callback({
							"pageNum": currentPage,
							"perPageCount" : perPageCount
						});
					});

					// 监听点击分页事件
					$("#"+pageId).children("li").click(function() {
						// 当前点击对象（点击非数字时，需要改变）
						var element = $(this);
						// 当前点击的是第几页
						var pageText = $(this).children("a").text();
						// 当前页
						var currentPage = "";
						// 上一页
						var lastPage = $("#"+pageId).children("li.active").attr("page");
						// 判断点击的是数字页还是上一页、下一页之类的
						if (isNaN(pageText)) {
							switch (pageText) {
								case "上一页":
									if (lastPage=="1") {
										return;
									}
									if (lastPage>=(pageCount-1) || lastPage<=3 || pageCount<7) {
										element = $("#"+pageId).children("li.active").prev();
									} else {
										newPages(pageId, "prev", (parseInt(lastPage)-1));
										element = $("#"+pageId).children("li.active");
									}
									break;
								case "下一页":
									if (lastPage==pageCount) {
										return;
									}
									if (lastPage>=(pageCount-2) || lastPage<3 || pageCount<7) {
										element = $("#"+pageId).children("li.active").next();
									} else {
										newPages(pageId, "next", (parseInt(lastPage)+1));
										element = $("#"+pageId).children("li.active");
									}
									break;
								case "...":
									return;
							}
						} else {
							if (pageCount>6) {
								if (pageText<=3 || pageText>=(pageCount-3)) {
									newPages(pageId, "jump", pageText);
								}
							}
						}

						currentPage = activePage(pageId, element);
						if (currentPage!="" && currentPage!=lastPage) {
							// 跳页显示
							$("#javaex-pager-"+pageId).val(currentPage);
							// 条数选择
							if (!!perPageCount) {
								perPageCount = $("#javaex-perPageCount-"+pageId).val();
							}
							
							settings.callback({
								"pageNum": currentPage,
								"perPageCount" : perPageCount
							});
						}
					});
				}

				/**
				 * 激活页
				 */
				function activePage(pageId, element) {
					element.addClass("active").siblings().removeClass("active");
					return $("#"+pageId).children("li.active").text();
				}

				function newPages(pageId, type, i) {
					var htmlLeft = "";
					var htmlRight = "";
					var htmlC = "";
					var HL = '<li><a>...</a></li>';
					var html = '<li><a>上一页</a></li>';
					for (var n=0; n<3; n++) {
						htmlC += '<li '+((n-1)==0?'class="active"':'')+' page="'+(i+n-1)+'"><a>'+(i+n-1)+'</a></li>';
						htmlLeft += '<li '+((n+2)==i?'class="active"':'')+' page="'+(n+2)+'"><a>'+(n+2)+'</a></li>';
						htmlRight += '<li '+((pageCount+n-3)==i?'class="active"':'')+' page="'+(pageCount+n-3)+'"><a>'+(pageCount+n-3)+'</a></li>';
					}

					switch (type) {
						case "next":
							if (i<=4) {
								html += '<li page="1"><a>1</a></li>' + htmlLeft + HL + '<li page="'+pageCount+'"><a>' + pageCount + '</a></li>';
							} else if (i>=(pageCount-3)) {
								html += '<li page="1"><a>1</a></li>' + HL + htmlRight + '<li page="'+pageCount+'"><a>' + pageCount + '</a></li>';
							} else {
								html += '<li page="1"><a>1</a></li>' + HL + htmlC + HL + '<li page="'+pageCount+'"><a>' + pageCount+'</a></li>';
							}
							break;
						case "prev":
							if (i<=4) {
								html += '<li page="1"><a>1</a></li>' + htmlLeft + HL + '<li page="'+pageCount+'"><a>'+pageCount+'</a></li>';
							} else if (i>=(pageCount-3)) {
								html += '<li page="1"><a>1</a></li>' + HL + htmlRight + '<li page="'+pageCount+'"><a>' + pageCount + '</a></li>';
							} else {
								html += '<li page="1"><a>1</a></li>' + HL + htmlC + HL + '<li page="'+pageCount+'"><a>' + pageCount + '</a></li>';
							}
							break;
						case "jump":
							if (i<=4) {
								if (i==1) {
									html += '<li class="active" page="1"><a>1</a></li>' + htmlLeft + HL + '<li page="' + pageCount + '"><a>' + pageCount + '</a></li>';
								} else {
									html += '<li page="1"><a>1</a></li>' + htmlLeft + HL + '<li page="' + pageCount + '"><a>' + pageCount + '</a></li>';
								}
							} else if((i>=pageCount-3) && (pageCount>=7)) {
								if (i==pageCount) {
									html += '<li page="1"><a>1</a></li>' + HL + htmlRight + '<li class="active" page="' + pageCount + '"><a>' + pageCount + '</a></li>';
								}else{
									html += '<li page="1"><a>1</a></li>' + HL + htmlRight + '<li page="' + pageCount + '"><a>' + pageCount + '</a></li>';
								}
							} else {
								html += '<li page="1"><a>1</a></li>' + HL + htmlC + HL + '<li page="' + pageCount + '"><a>' + pageCount + '</a></li>';
							}
					}
					html += '<li><a>下一页</a></li>';
					if (pageCount> 5 || pageCount< 3) {
						var perPageCountHtml = '';
						if (!!perPageCount) {
							perPageCountHtml += '<span class="hint"><select id="javaex-perPageCount-'+pageId+'" class="select">';
							for (var i=1; i<10; i++) {
								if (i*10==perPageCount) {
									perPageCountHtml += '<option value="'+i+'0" selected>'+i+'0 条/页</option>';
								} else {
									perPageCountHtml += '<option value="'+i+'0">'+i+'0 条/页</option>';
								}
							}
							perPageCountHtml += '</select></span>';
						}
						$("#"+pageId).empty();
						$("#"+pageId).append(perPageCountHtml);
						$("#"+pageId).append(html);
						var number = '';
						if (!!totalNum || isShowJumpPage) {
							number += '<span class="hint">当前位置：';
							// 是否显示跳页
							if (isShowJumpPage) {
								number += '<input id="javaex-pager-'+pageId+'" class="input-pager" type="number" value="'+currentPage+'"><button id="javaex-button-mini-'+pageId+'" class="button-mini">跳页</button>';
							}
							// 是否显示总条数
							if (totalNum!=null) {
								number += '  共'+totalNum+'条';
							}
							number += '</span>';
						}
						
						$("#"+pageId).append(number);
						
						init(pageId);
					}
				}
			},
			
			// 流加载
			loadDataFunction : "",
			isOver : "",	// 哪一块内容区域已经没有更多数据了
			flow : function(args) {
				var settings = defaults(args);
				var pageId = settings.id;
				info.loadDataFunction = settings.loadDataFunction;
				
				var bottomH = 50;//距离底部多少像素开始加载
				
				init();
				
				function init() {
					// 事先在下方插入加载占位div
					var obj = document.getElementById("flow-loading-"+pageId);
					if (obj==null) {
						$("#"+pageId).after('<div id="flow-loading-'+pageId+'" class="flow-loading" style="display: none;"></div>');
					}
					
					$(window).scroll(function() {
						var totalheight = parseFloat($(window).height()) + parseFloat($(window).scrollTop()+bottomH);
						if (($(document).height() <= totalheight) && (info.isOver!=pageId)) {
							$(".flow-loading").show();
							info.loadDown(pageId);
						} else {
							$(".flow-loading").hide();
						}
					});
				}
			},
			// 设置已无加载数据
			over : function(pageId) {
				info.isOver = pageId;
			},
			// 向下方加载数据
			loadDown : function(pageId) {
//				$("#infinite-scroll-preloader-"+pageId).html(info.loadData);
				info.loadDataFunction();
			},
			
			// 幻灯片
			slide : function(args) {
				var settings = defaults(args);
				var id = settings.id;
				var slide = $("#"+id);
				// 是否自动轮播
				var isAutoPlay = settings.isAutoPlay;
				// 切换效果
				var effect = settings.effect;
				// 开始切换的位置（即从第几张图开始切换），从1开始计
				var startSlide = parseInt(settings.startSlide);
				var index = startSlide-1;
				
				// 触发图片懒加载
				var $self = slide.find(".focus-bg li").eq(index).find("img");
				if ($self.length==0) {
					$self = slide.find(".focus-bg li").eq(index).find("a");
				}
				var original = $self.attr(settings.dataOriginal);
				if (!!original) {
					if ($self.is("img")) {
						$self.attr("src", original);
					} else {
						$self.css("background-image", "url('" + original + "')");
					}
					$self.removeAttr(settings.dataOriginal);
				}
				settings.callback({
					"index": index
				});
				
				// 自动轮播间隔多少毫秒
				var delay = parseInt(settings.delay);
				if (delay==200) {
					delay = 2000;
				}
				// 定时器
				var time = null;
				
				var slideBg = slide.find(".focus-bg");
				var slideLi = slideBg.find("li");
				var count = slideLi.length;
				
				// 切换模式
				switch (effect) {
					case "slice":	// 左右滑动
						settings["width"] = slide.width();
						slideBg.css({
							"width": count * settings["width"] + "px"
						});
						slideLi.css({
							"float" : "left",
							"position": "relative"
						});
						slideLi.show();
						break;
				}
				
				// 默认从第几张开始切换
				slide.find(".focus-bg li").each(function(i) {
					if (effect=="slice") {
						if (i==index) {
							var sliceWidth = index * slide.width();
							slide.find(".focus-bg").css({
								"margin-left" : -sliceWidth + "px"
							});
						}
					} else if (effect=="smooth") {
						if (i==index) {
							$(this).show();
						} else {
							$(this).hide();
						}
					} else {
						if (i==index) {
							$(this).css("opacity", 1);
							$(this).show();
						} else {
							$(this).css("opacity", 0);
							$(this).hide();
						}
					}
				});
				// 默认显示的标题
				if (slide.find(".focus-title").length>0) {
					slide.find(".focus-title li").each(function(i) {
						if (i==index) {
							$(this).show();
						} else {
							$(this).hide();
						}
					});
				}
				// 默认高亮的焦点
				if (slide.find(".focus-box").length>0) {
					// 如果缺省焦点，则自动补充
					if (slide.find(".focus-box ul").length==0) {
						var html = '<ul>';
						for (var i=0; i<count; i++) {
							html += '<li></li>';
						}
						html += '</ul>';
						slide.find(".focus-box").empty();
						slide.find(".focus-box").append(html);
					}
					slide.find(".focus-box li").eq(index).addClass("on");
				}
				
				// 自动轮播
				autoPlay();
				
				// 点击下一张
				slide.find(".slide-next").on("click", function() {
					var old = index;
					if (index >= (count-1)) {
						index = 0;
					} else {
						index++;
					}
					change.call(slide, index, old);
				});

				// 点击上一张
				slide.find(".slide-prev").on("click", function() {
					var old = index;
					if (index <= 0) {
						index = count - 1;
					} else {
						index--;
					}
					change.call(slide, index, old);
				});
				
				// 焦点
				slide.find(".focus-box li").each(function(i) {
					if (settings.focusBoxMode=="mouseover") {
						$(this).on("mouseover.slidebox", function() {
							change.call(slide, i, index);
							index = i;
						});
					} else {
						$(this).on("click.slidebox", function() {
							change.call(slide, i, index);
							index = i;
						});
					}
				});

				// 鼠标移到大图时，暂停自动轮播
				slide.on("mouseover", function() {
					if (isAutoPlay) {
						clearInterval(time);
					}
					$(this).find(".slide-prev-next>div").css({
						"opacity" : 1,
						"visibility" : "visible"
					});
				});

				// 鼠标移开大图时，重新开始自动轮播
				slide.on("mouseleave", function() {
					if (isAutoPlay) {
						autoPlay();
					}
					$(this).find(".slide-prev-next>div").css({
						"opacity" : 0,
						"visibility" : "hidden"
					});
				});
				
				/**
				 * 自动轮播
				 */
				function autoPlay() {
					if (isAutoPlay) {
						time = setInterval(function() {
							var old = index;
							if (index >= (count-1)) {
								index = 0;
							} else {
								index++;
							}
							change.call(slide, index, old);
						},
						delay);
					}
				}
				
				// 焦点是否自动居中
				if (settings.focusCenter) {
					var box = slide.find(".focus-box");
					box.css("margin-left", -(box.width()/2)+"px");
				}
				
				function change(show, hide) {
					// 背景大图
					if (effect=="slice") {
						// 左右滑动
						var sliceWidth = show * settings["width"];
						slide.find(".focus-bg").stop().animate({
							"margin-left" : -sliceWidth + "px"
						});
					} else if (effect=="smooth") {
						// 平滑
						slide.find(".focus-bg li").eq(hide).css({
							"display" : "none"
						});
						slide.find(".focus-bg li").eq(show).css({
							"display" : "list-item"
						});
					} else {
						// 默认，淡入淡出
						slide.find(".focus-bg li").eq(hide).css({
							"opacity" : 0,
							"display" : "none"
						});
						slide.find(".focus-bg li").eq(show).css({
							"display" : "list-item"
						}).stop().animate({
							"opacity" : 1
						});
					}
					// 标题
					slide.find(".focus-title li").eq(hide).hide();
					slide.find(".focus-title li").eq(show).show();
					// 焦点
					slide.find(".focus-box li").removeClass("on");
					slide.find(".focus-box li").eq(show).addClass("on");
					
					// 触发图片懒加载
					var $self = slide.find(".focus-bg li").eq(show).find("img");
					if ($self.length==0) {
						$self = slide.find(".focus-bg li").eq(show).find("a");
					}
					var original = $self.attr(settings.dataOriginal);
					if (!!original) {
						if ($self.is("img")) {
							$self.attr("src", original);
						} else {
							$self.css("background-image", "url('" + original + "')");
						}
						$self.removeAttr(settings.dataOriginal);
					}
					
					// 回调函数
					settings.callback({
						"index": show
					});
				}
			},
			
			// 日期选择
			date : function(args) {
				var settings = defaults(args);
				var dateId = settings.id;
				// 控件类型
				var type = settings.type;
				if (type=="") {
					type = "yyyy-MM-dd";
				}
				// 是否显示时分秒
				var isTime = false;
				if (type!="yyyy-MM-dd") {
					isTime = true;
				}
				
				// 是否清空
				var isClear = false;
				// 记录初始值，以此来控制取消按钮事件
				var initDate = "";
				var initHMS = "";
				var initStart = "";
				var initEnd = "";
				// 开始日期和结束日期的中间日期
				var hideMidDate = 0;

				// 默认日历参数最大是2
				var monthNum = Math.min(parseInt(settings.monthNum), 2);
				
				if (monthNum==1 && isTime) {
					if (!settings.date.split(" ")[1]) {
						settings.date = settings.date + " " + "00:00:00";
					}
				}
				
				// 初始化日期选择器面板的HTML代码
				var dateHtml = '<div id="date-box-' + dateId + '" class="date-main date-ui" style="display: none;">';
				dateHtml += '<div class="date-body date-ui" id="date-list-' + dateId + '">';
				dateHtml += '</div>';
				dateHtml += '<div class="date-foot date-ui">';
				dateHtml += '<div class="form-msg" style="display:none;">';
				dateHtml += '<input type="text" id="hide-start-' + dateId + '" value="' + settings.startDate + '" readonly />';
				dateHtml += '<span> - </span>';
				dateHtml += '<input type="text" id="hide-end-' + dateId + '" value="' + settings.endDate + '" readonly />';
				dateHtml += '<input type="text" id="hide-date-' + dateId + '" value="' + settings.date.split(" ")[0] + '" readonly />';
				if (monthNum==1 && isTime) {
					dateHtml += '<input type="text" id="hide-HMS-'+dateId+'" value="'+settings.date.split(" ")[1]+'" readonly />';
				}
				dateHtml += '</div>';
				dateHtml += '<div class="form-btn">';
				dateHtml += '<button class="button gray btn-left" id="date-clear-' + dateId + '">清空</button>';
				dateHtml += '<button class="button wathet btn-left" id="date-cancel-' + dateId + '">取消</button>';
				dateHtml += '<button class="button blue btn-right" id="date-ok-' + dateId + '">确定</button>';
				dateHtml += '</div>';
				dateHtml += '</div>';
				dateHtml += '</div>';
				$(document.body).append(dateHtml);

				// 初始化
				init();
				// 关闭日期选择框，并把结果回显到输入框
				close(true);

				// 日期框的点击事件
				$("#"+dateId).bind("click", function() {
					if (monthNum==1) {
						initDate = document.getElementById("hide-date-"+dateId).value;
						if (isTime) {
							initHMS = document.getElementById("hide-HMS-"+dateId).value;
						}
					} else {
						initStart = document.getElementById("hide-start-"+dateId).value;
						initEnd = document.getElementById("hide-end-"+dateId).value;
						
						// 获取开始日期和结束日期的中间日期
						if (initStart!="" && initEnd!="") {
							var hideStartDate = str2date(initStart).getTime();
							var hideEndDate = str2date(initEnd).getTime();
							hideMidDate = hideStartDate + (hideEndDate - hideStartDate)/2;
						}
					}

					init();
					show();
					return;
				});
				// 日期选择确定按钮的点击事件
				$("#date-ok-"+dateId).bind("click", function() {
					close(true);
					
					// 设置回调函数，返回一个时间对象，包含开始和结束时间
					if (monthNum==1 && isTime) {
						var str = "";
						var date = $("#hide-date-"+dateId).val();
						if (date=="") {
							str = "";
						} else {
							str = date + " " + getHMStime();
						}
						settings.callback({
							"date": str
						});
					} else {
						settings.callback({
							"startDate": $("#hide-start-"+dateId).val(), 
							"endDate": $("#hide-end-"+dateId).val(),
							"date": $("#hide-date-"+dateId).val()
						});
					}
					return;
				});
				// 日期选择取消按钮的点击事件
				$("#date-cancel-"+dateId).bind("click", function() {
					// 重新赋值
					if (monthNum==1) {
						document.getElementById("hide-date-"+dateId).value = initDate;
						if (isTime) {
							document.getElementById("hide-HMS-"+dateId).value = initHMS;
						}
					} else {
						document.getElementById("hide-start-"+dateId).value = initStart;
						document.getElementById("hide-end-"+dateId).value = initEnd;
					}

					close();

					isClear = false;
					return;
				});
				// 日期选择清空按钮的点击事件
				$("#date-clear-"+dateId).bind("click", function() {
					var date = document.getElementById("hide-date-"+dateId).value;
					var start = document.getElementById("hide-start-"+dateId).value;
					var end = document.getElementById("hide-end-"+dateId).value;

					// 先清除样式
					if (monthNum==1) {
						document.getElementById("hide-date-"+dateId).value = "";
						if (isTime) {
							document.getElementById("hide-HMS-"+dateId).value = "";
							$("#date-hour-"+dateId+" li").removeClass("current");
							$("#date-minute-"+dateId+" li").removeClass("current");
							$("#date-second-"+dateId+" li").removeClass("current");
						}
					} else {
						document.getElementById("hide-start-"+dateId).value = "";
						document.getElementById("hide-end-"+dateId).value = "";
					}
					removeCSS();

					isClear = true;
					return;
				});

				/**
				 * 日期选择器初始化
				 */
				function init() {
					var exDate = this;
					// 清空日期列表的内容
					$("#date-list-"+dateId).empty();

					// 如果结束日期为空，则取当天的日期为结束日期
					var endDate = "";
					if (settings.endDate=="") {
						if (settings.date=="") {
							endDate = new Date();
						} else {
							endDate = str2date(settings.date.split(" ")[0]);
						}
					} else {
						endDate = str2date(settings.endDate);
					}
					
					// 日历结束时间
					this.calendarEndDate = new Date(endDate.getFullYear(), endDate.getMonth()+1, 0);

					// 计算并显示以 endDate 为结尾的最近几个月的日期列表
					if (monthNum==1 && isTime) {
						for (var i=0; i<monthNum; i++) {
							var td = "";
							td = fillDate(endDate.getFullYear(), endDate.getMonth(), i);
							if (0==i) {
								$("#date-list-"+dateId).append(td);
							} else {
								var firstTd = $("#date-list-"+dateId).find("table").get(0);
								$(firstTd).before(td);
							}
							endDate.setMonth(endDate.getMonth()-1, 1);
						}
						var timeHtml = '';
						timeHtml += '<table>';
						timeHtml += '<caption>时间选择</caption>';
						timeHtml += '<thead>';
						timeHtml += '<tr>';
						timeHtml += '<th>小时</th>';
						timeHtml += '<th>分钟</th>';
						timeHtml += '<th>秒数</th>';
						timeHtml += '</tr>';
						timeHtml += '</thead>';
						timeHtml += '<tbody>';
						timeHtml += '<tr>';
						
						var hourHtml = '';
						hourHtml += '<td style="padding: 0;">';
						hourHtml += '<ul id="date-hour-'+dateId+'" style="height: 180px; overflow: auto;">';
						for (var n=0; n<24; n++) {
							if (n<10) {
								hourHtml += '<li>0'+n+'</li>';
							} else {
								hourHtml += '<li>'+n+'</li>';
							}
						}
						hourHtml += '</ul>';
						hourHtml += '</td>';
						timeHtml += hourHtml;
						
						var minuteHtml = '';
						minuteHtml += '<td style="padding: 0;">';
						minuteHtml += '<ul id="date-minute-'+dateId+'" style="height: 180px; overflow: auto;">';
						for (var n=0; n<60; n++) {
							if (n<10) {
								minuteHtml += '<li>0'+n+'</li>';
							} else {
								minuteHtml += '<li>'+n+'</li>';
							}
						}
						minuteHtml += '</ul>';
						minuteHtml += '</td>';
						timeHtml += minuteHtml;
						
						var secondHtml = '';
						secondHtml += '<td style="padding: 0;">';
						secondHtml += '<ul id="date-second-'+dateId+'" style="height: 180px; overflow: auto;">';
						for (var n=0; n<60; n++) {
							if (n<10) {
								secondHtml += '<li>0'+n+'</li>';
							} else {
								secondHtml += '<li>'+n+'</li>';
							}
						}
						secondHtml += '</ul>';
						secondHtml += '</td>';
						timeHtml += secondHtml;

						timeHtml += '</tr>';
						timeHtml += '</tbody>';
						timeHtml += '</table>';
						$("#date-list-"+dateId).append(timeHtml);
					} else {
						for (var i=0; i<monthNum; i++) {
							var td = "";
							td = fillDate(endDate.getFullYear(), endDate.getMonth(), i);
							if (0==i) {
								$("#date-list-"+dateId).append(td);
							} else {
								var firstTd = $("#date-list-"+dateId).find("table").get(0);
								$(firstTd).before(td);
							}
							endDate.setMonth(endDate.getMonth()-1, 1);
						}
					}
					
					// 日历开始时间
					this.calendarStartDate = new Date(endDate.getFullYear(), endDate.getMonth()+1, 1);

					// 上一年
					$("#last-year-"+dateId).bind("click", function() {
						exDate.calendarEndDate.setFullYear(exDate.calendarEndDate.getFullYear()-1, exDate.calendarEndDate.getMonth(), 1);
						settings.endDate = date2ymd(exDate.calendarEndDate).join("-");
						init();
						return;
					});
					// 上一个月
					$("#last-month-"+dateId).bind("click", function() {
						exDate.calendarEndDate.setMonth(exDate.calendarEndDate.getMonth()-1, 1);
						settings.endDate = date2ymd(exDate.calendarEndDate).join("-");
						init();
						return;
					});
					// 下一个月
					$("#next-month-"+dateId).bind("click", function() {
						exDate.calendarEndDate.setMonth(exDate.calendarEndDate.getMonth()+1, 1);
						settings.endDate = date2ymd(exDate.calendarEndDate).join("-");
						init();
						return;
					});
					// 下一年
					$("#next-year-"+dateId).bind("click", function() {
						exDate.calendarEndDate.setFullYear(exDate.calendarEndDate.getFullYear()+1, exDate.calendarEndDate.getMonth(), 1);
						settings.endDate = date2ymd(exDate.calendarEndDate).join("-");
						init();
						return;
					});
					// 小时
					$("#date-hour-"+dateId+" li").bind("click", function() {
						$(this).addClass("current").siblings().removeClass("current");
						setHMStime();
						return;
					});
					// 分钟
					$("#date-minute-"+dateId+" li").bind("click", function() {
						$(this).addClass("current").siblings().removeClass("current");
						setHMStime();
						return;
					});
					// 秒数
					$("#date-second-"+dateId+" li").bind("click", function() {
						$(this).addClass("current").siblings().removeClass("current");
						setHMStime();
						return;
					});
					
					// 添加样式
					addCSS();
				}

				/**
				 * 重复对时分秒赋值
				 */
				function setHMStime() {
					var hour = $("#date-hour-"+dateId+" li.current").text();
					var minute = $("#date-minute-"+dateId+" li.current").text();
					var second = $("#date-second-"+dateId+" li.current").text();
					$("#hide-HMS-"+dateId).val(hour+":"+minute+":"+second);
				}
				
				/**
				 * 移除日历的样式
				 */
				function removeCSS() {
					// 整个日期列表的开始日期
					var csd = this.calendarStartDate;
					var ced = this.calendarEndDate;

					var bDate = new Date(csd.getFullYear(), csd.getMonth(), csd.getDate());
					var choice = "";
					// 从开始日期循环到结束日期
					for (var d=new Date(bDate); d.getTime()<=ced.getTime(); d.setDate(d.getDate()+1)) {
						// 移除日期样式
						choice = "choice-style";
						// 移除指定样式
						$("#"+dateId+"_date_" + date2ymd(d).join("-")).removeClass(choice);
						$("#"+dateId+"_date_" + date2ymd(d).join("-")).removeClass("started").removeClass("ended").removeClass("selected");
					}
				}

				/**
				 * 为选中的日期添加样式
				 */
				function addCSS() {
					// 展示的月份数为1时，视为单选日期
					if (monthNum==1) {
						// 获得选中日期
						var date = str2date($("#hide-date-"+dateId).val());
						// 为选中日期添加特殊样式
						$("#"+dateId+"_date_" + date2ymd(new Date(date)).join("-")).removeClass().addClass("ended");
						
						// 需要时分秒
						if (isTime) {
							var HMS = $("#hide-HMS-"+dateId).val();
							var arr = HMS.split(":");
							$("#date-hour-"+dateId+" li").each(function() {
								if ($(this).text()==arr[0]) {
									$(this).addClass("current").siblings().removeClass("current");
									return;
								}
							});
							$("#date-minute-"+dateId+" li").each(function() {
								if ($(this).text()==arr[1]) {
									$(this).addClass("current").siblings().removeClass("current");
									return;
								}
							});
							$("#date-second-"+dateId+" li").each(function() {
								if ($(this).text()==arr[2]) {
									$(this).addClass("current").siblings().removeClass("current");
									return;
								}
							});
						}
						return;
					}

					// 获得开始、结束日期
					var startDate = str2date($("#hide-start-"+dateId).val());
					var endDate = str2date($("#hide-end-"+dateId).val());

					var choice = "";
					for (var d=new Date(startDate); d.getTime()<=endDate.getTime(); d.setDate(d.getDate()+1)) {
						// 添加日期样式
						choice = "choice-style";
						$("#"+dateId+"_date_" + date2ymd(d).join("-")).removeClass("started").removeClass("ended").removeClass("selected");
						$("#"+dateId+"_date_" + date2ymd(d).join("-")).removeClass(choice);
						$("#"+dateId+"_date_" + date2ymd(d).join("-")).attr("class", choice);
					}

					// 为开始、结束日期添加特殊样式
					$("#"+dateId+"_date_" + date2ymd(new Date(startDate)).join("-")).removeClass().addClass("started");
					$("#"+dateId+"_date_" + date2ymd(new Date(endDate)).join("-")).removeClass().addClass("ended");
				}

				/**
				 * 选择日期
				 * ymd : 时间字符串
				 */
				function selectDate(ymd) {
					isClear = false;

					// 格式化日期
					var ymdFormat = formatDate(ymd);

					// 如果是单选日期
					if (this.dateInput==("hide-date-" + dateId)) {
						// 移除样式
						removeCSS();
						// 为当前点添加样式
						$("#"+dateId+"_date_" + ymd).attr("class", "selected");
						// 更改对应输入框的值
						$("#" + this.dateInput).val(ymdFormat);
						return;
					}
					
					// 如果是范围日期
					// 如果没有选择日期
					if ($("#" + this.dateInput).val()=="") {
						// start、end input切换
						if (this.dateInput==("hide-start-" + dateId)) {
							// 移除样式
							removeCSS();
							// 为当前点添加样式
							$("#"+dateId+"_date_" + ymd).attr("class", "selected");
							// 更改对应输入框的值
							$("#" + this.dateInput).val(ymdFormat);
							this.dateInput = "hide-end-" + dateId;
						} else if (this.dateInput==("hide-end-" + dateId)) {
							// 如果开始时间未选
							if ($("#hide-start-"+dateId).val()=="") {
								this.dateInput = "hide-start-" + dateId;
								selectDate(ymd);
								return;
							}
							// 更改对应输入框的值
							$("#" + this.dateInput).val(ymdFormat);
							// 切换输入框焦点
							this.dateInput = "hide-start-" + dateId;
							
							// 如果endDateTime小于hideStartDate，则相互交换
							var hideStartDate = str2date($("#hide-start-"+dateId).val()).getTime();
							var hideEndDate = str2date($("#hide-end-"+dateId).val()).getTime();
							if (hideEndDate<hideStartDate) {
								var tmp = $("#hide-start-"+dateId).val();
								$("#hide-start-"+dateId).val($("#hide-end-"+dateId).val());
								$("#hide-end-"+dateId).val(tmp);
							}
							
							removeCSS();
							addCSS();
						}
					} else {
						var nowClickDate = str2date(ymdFormat).getTime();
						
						// 如果此次点击的日期比中间日期小
						if (nowClickDate<hideMidDate) {
							// 变更开始日期，结束日期不变
							$("#hide-start-"+dateId).val(ymdFormat);
						} else {
							// 如果此次点击的日期大于等于中间日期
							// 变更结束日期，开始日期不变
							$("#hide-end-"+dateId).val(ymdFormat);
						}
						removeCSS();
						addCSS();
						var hideStartDate = str2date($("#hide-start-"+dateId).val()).getTime();
						var hideEndDate = str2date($("#hide-end-"+dateId).val()).getTime();
						hideMidDate = hideStartDate + (hideEndDate - hideStartDate)/2;
					}
				}

				/**
				 * 显示日历
				 */
				function show() {
					var pos = $("#"+dateId).offset();
					var left = pos.left;
					if (settings.alignment=="right") {
						var width = $("#"+dateId).width();
						left = left + width - ($("#date-box-"+dateId).width()+20);
					}
					$("#date-box-"+dateId).css("display", "block");
					$("#date-box-"+dateId).css("left", left+"px");
					$("#date-box-"+dateId).css("top", pos.top+$("#"+dateId).height()+4+"px");
					// 展示的月份数为1时，视为单选日期
					if (monthNum==1) {
						this.dateInput = "hide-date-" + dateId;
						
						if (isTime) {
							var diffH = $("#date-hour-"+dateId+" li.current").position().top;
							if (diffH>220) {
								diffH = diffH-83+"px";
								$("#date-hour-"+dateId).animate({"scrollTop": diffH}, 500);
							}
							var diffM = $("#date-minute-"+dateId+" li.current").position().top;
							if (diffM>220) {
								diffM = diffM-83+"px";
								$("#date-minute-"+dateId).animate({"scrollTop": diffM}, 500);
							}
							var diffS = $("#date-second-"+dateId+" li.current").position().top;
							if (diffS>220) {
								diffS = diffS-83+"px";
								$("#date-second-"+dateId).animate({"scrollTop": diffS}, 500);
							}
						}
					} else {
						this.dateInput = "hide-start-" + dateId;
					}
				}

				/**
				 * 关闭日期选择框
				 * isOk : 判断是否是点击确定按钮关闭的 
				 */
				function close(isOk) {
					if (isOk) {
						var str = "";
						// 判断此前是否按了清空按钮
						if (isClear) {
							if (monthNum==1) {
								document.getElementById("hide-date-"+dateId).value = "";
								if (isTime) {
									document.getElementById("hide-HMS-"+dateId).value = "";
									$("#date-hour-"+dateId+" li").removeClass("current");
									$("#date-minute-"+dateId+" li").removeClass("current");
									$("#date-second-"+dateId+" li").removeClass("current");
								}
							} else {
								document.getElementById("hide-start-"+dateId).value = "";
								document.getElementById("hide-end-"+dateId).value = "";
							}
						} else {
							// 展示的月份数为1时，视为单选日期
							if (monthNum==1) {
								// 需要显示时分秒
								if (isTime) {
									$("#"+dateId).val($("#hide-date-"+dateId).val() + " " + getHMStime());
								} else {
									$("#"+dateId).val($("#hide-date-"+dateId).val());
								}
							} else {
								if ($("#hide-end-"+dateId).val()=="") {
									$("#"+dateId).val($("#hide-start-"+dateId).val());
								} else {
									$("#"+dateId).val($("#hide-start-"+dateId).val() + settings.splitLine + $("#hide-end-"+dateId).val());
								}
							}

							// 展示的月份数为1时，视为单选日期
							if (monthNum==1) {
								var date = $("#hide-date-"+dateId).val();
								// 需要显示时分秒
								if (isTime) {
									if (date=="") {
										str = "";
									} else {
										str = date + " " + getHMStime();
									}
								} else {
									str = date;
								}
							} else {
								// 否则为日期范围
								// 只选了开始日期时。默认结束日期和开始日期为同一天
								if ($("#hide-end-"+dateId).val()=="") {
									$("#hide-end-"+dateId).val($("#hide-start-"+dateId).val())
								}
								str = $("#hide-start-"+dateId).val() + settings.splitLine + $("#hide-end-"+dateId).val();
								if (str==settings.splitLine) {
									str = "";
								}
							}
						}

						// 把时间显示到页面
						var obj = document.getElementById(dateId);
						if (obj && obj.tagName=="INPUT") {
							$("#"+dateId).val(str);
						} else {
							$("#"+dateId).html(str);
						}
						
						isClear = false;
					}
					// 隐藏日历框
					$("#date-box-"+dateId).css("display", "none");
				}

				/**
				 * 日期填充函数
				 * year : 年
				 * month : 月
				 */ 
				function fillDate(year, month, index) {
					var exDate = this;
					// 当月第一天
					var firstDayOfMonth = new Date(year, month, 1);
					var dateBegin = new Date(year, month, 1);
					var w = dateBegin.getDay();
					// 计算应该开始的日期
					dateBegin.setDate(1 - w);

					// 当月最后一天
					var lastDayOfMonth = new Date(year, month + 1, 0);
					var dateEnd = new Date(year, month + 1, 0);
					w = dateEnd.getDay();
					// 计算应该结束的日期
					dateEnd.setDate(dateEnd.getDate() + 6 - w);

					var today = new Date();
					var table = document.createElement("table");
					// 判断是否显示时分秒
					if (monthNum==1 && isTime) {
						$(table).css("position", "relative");
					}
					cap = document.createElement("caption");

					$(cap).append(year + "年" + (month + 1) + "月");
					$(table).append(cap);
					thead = document.createElement("thead");
					tr = document.createElement("tr");
					var days = ["日", "一", "二", "三", "四", "五", "六"];
					for (var i=0; i<7; i++) {
						th = document.createElement("th");
						$(th).append(days[i]);
						$(tr).append(th);
					}
					$(thead).append(tr);
					$(table).append(thead);

					tr = document.createElement("tr");
					td = document.createElement("td");
					// 如果是最后一个月的日期，则加上下一个月和下一年的链接
					if (index==0) {
						// 判断是否显示时分秒
						if (monthNum==1 && isTime) {
							$(td).append('<a href="javascript:;" id="next-month-'+dateId+'"><span class="icon-chevron-right" style="position: absolute;top: 10px;right: 22px;color: #555;font-size: 14px;"></span></a>');
							$(td).append('<a href="javascript:;" id="next-year-'+dateId+'"><span class="icon-step-forward" style="position: absolute;top: 8px;right: 2px;color: #555;font-size: 16px;"></span></a>');
						} else {
							$(td).append('<a href="javascript:;" id="next-month-'+dateId+'"><span class="icon-chevron-right" style="position: absolute;top: 10px;right: 30px;color: #555;font-size: 14px;"></span></a>');
							$(td).append('<a href="javascript:;" id="next-year-'+dateId+'"><span class="icon-step-forward" style="position: absolute;top: 8px;right: 12px;color: #555;font-size: 16px;"></span></a>');
						}
					}

					// 如果是第一个月的日期，则加上上一个月和上一年的链接
					if((index+1)==monthNum) {
						// 判断是否显示时分秒
						if (monthNum==1 && isTime) {
							$(td).append('<a href="javascript:;" id="last-year-'+dateId+'"><span class="icon-step-backward" style="position: absolute;top: 8px;left: 2px;color: #555;font-size: 16px;"></span></a>');
							$(td).append('<a href="javascript:;" id="last-month-'+dateId+'"><span class="icon-chevron-left" style="position: absolute;top: 10px;left: 22px;color: #555;font-size: 14px;"></span></a>');
						} else {
							$(td).append('<a href="javascript:;" id="last-year-'+dateId+'"><span class="icon-step-backward" style="position: absolute;top: 8px;left: 12px;color: #555;font-size: 16px;"></span></a>');
							$(td).append('<a href="javascript:;" id="last-month-'+dateId+'"><span class="icon-chevron-left" style="position: absolute;top: 10px;left: 30px;color: #555;font-size: 14px;"></span></a>');
						}
					}

					$(td).attr("colSpan", 7);
					$(td).css("text-align", "center");
					$(tr).append(td);
					var tbody = document.createElement("tbody");
					$(tbody).append(tr);

					// 当前月的所有日期(包括空白位置填充的日期)
					var tdClass = "";
					var deviation = 0;
					var ymd = "";
					var minTime = "";
					if (settings.minTime=="today") {
						minTime = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate());
					} else {
						minTime = str2date(settings.minTime);
					}
					var maxTime = "";
					if (settings.maxTime=="today") {
						maxTime = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate());
					} else {
						maxTime = str2date(settings.maxTime);
					}
					for (var d=dateBegin; d.getTime()<=dateEnd.getTime(); d.setDate(d.getDate()+1)) {
						// 当前月之前的日期
						if (d.getTime()<firstDayOfMonth.getTime()) {
							tdClass = "dateRangeGray";
							deviation = -1;
						} else if (settings.minTime!="" && d.getTime()<minTime.getTime()) {
							tdClass = "dateRangeGray";
							deviation = -2;
						} else if (d.getTime()>lastDayOfMonth.getTime()) {
							// 当前月之后的日期
							tdClass = "dateRangeGray";
							deviation = 1;
						} else if (settings.maxTime!="" && d.getTime()>maxTime.getTime()) {
							// 最大可选日期
							tdClass = "dateRangeGray";
							deviation = 2;
						} else {
							// 当前月日期
							deviation = 0;
							tdClass = "";
						}

						// 如果是周日
						if (d.getDay()==0) {
							tr = document.createElement("tr");
						}

						td = document.createElement("td");
						td.innerHTML = d.getDate();
						if (tdClass!="") {
							$(td).attr("class", tdClass);
						}

						// 只有当前月可以点击
						if (deviation==0) {
							ymd = d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate();
							$(td).attr("id", dateId + "_date_" + ymd);
							
							(function(ymd) {
								$(td).bind("click", ymd, function() {
									selectDate(ymd);
									return;
								});
							})(ymd);
						}
						$(td).addClass("riqi");
						$(tr).append(td);

						// 如果是周六
						if (d.getDay()==6) {
							$(tbody).append(tr);
						}
					}
					$(table).append(tbody);
					
					return table;
				}

				/**
				 * 把时间字串转成时间格式
				 * str : 时间字符串
				 */ 
				function str2date(str) {
					var arr = str.split("-");
					// 返回日期格式
					return new Date(arr[0], arr[1]-1, arr[2]);
				}

				/**
				 * 把时间格式转成对象
				 * date : 时间
				 */ 
				function date2ymd(date) {
					return [date.getFullYear(), (date.getMonth() + 1), date.getDate()];
				}

				/**
				 * 日期格式化，前面加0
				 */ 
				function formatDate(ymd) {
					return ymd.replace(/(\d{4})\-(\d{1,2})\-(\d{1,2})/g, function(ymdFormatDate, y, m, d) {
						if (m<10) {
							m = "0" + m;
						}
						if (d<10) {
							d = "0" + d;
						}
						return y + "-" + m + "-" + d;
					});
				}
				
				/**
				 * 返回时分秒
				 */
				function getHMStime() {
					var hour = "";
					var minute = "";
					var second = "";
					if ($("#date-hour-"+dateId+" li.current").length>0) {
						hour = $("#date-hour-"+dateId+" li.current").text();
					}
					if ($("#date-minute-"+dateId+" li.current").length>0) {
						minute = $("#date-minute-"+dateId+" li.current").text();
					}
					if ($("#date-second-"+dateId+" li.current").length>0) {
						second = $("#date-second-"+dateId+" li.current").text();
					}

					var time = "";
					if (hour!="" && minute!="" && second!="") {
						time = hour + ":" + minute + ":" + second;
					}

					return time;
				}
			},
			
			// 时间选择
			time : function(args) {
				var settings = defaults(args);
				var timeId = settings.id;
				var time = settings.time;
				var initHMS = "";
				var isClear = false;
				
				// 初始化时间选择器面板的HTML代码
				var timeHtml = '<div id="date-box-' + timeId + '" class="date-main date-ui" style="display: none;">';
				timeHtml += '<div class="date-body date-ui" id="date-list-' + timeId + '">';
				timeHtml += '<table class="tableTime" style="width:90%;">';
				timeHtml += '<caption>时间选择</caption>';
				timeHtml += '<thead>';
				timeHtml += '<tr>';
				timeHtml += '<th style="text-align: center;">小时</th>';
				timeHtml += '<th style="text-align: center;">分钟</th>';
				timeHtml += '<th style="text-align: center;">秒数</th>';
				timeHtml += '</tr>';
				timeHtml += '</thead>';
				timeHtml += '<tbody>';
				timeHtml += '<tr>';

				var hourHtml = '';
				hourHtml += '<td style="padding: 0;">';
				hourHtml += '<ul id="date-hour-'+timeId+'" style="height: 180px; overflow: auto;">';
				for (var n=0; n<24; n++) {
					if (n<10) {
						hourHtml += '<li>0'+n+'</li>';
					} else {
						hourHtml += '<li>'+n+'</li>';
					}
				}
				hourHtml += '</ul>';
				hourHtml += '</td>';
				timeHtml += hourHtml;

				var minuteHtml = '';
				minuteHtml += '<td style="padding: 0;">';
				minuteHtml += '<ul id="date-minute-'+timeId+'" style="height: 180px; overflow: auto;">';
				for (var n=0; n<60; n++) {
					if (n<10) {
						minuteHtml += '<li>0'+n+'</li>';
					} else {
						minuteHtml += '<li>'+n+'</li>';
					}
				}
				minuteHtml += '</ul>';
				minuteHtml += '</td>';
				timeHtml += minuteHtml;

				var secondHtml = '';
				secondHtml += '<td style="padding: 0;">';
				secondHtml += '<ul id="date-second-'+timeId+'" style="height: 180px; overflow: auto;">';
				for (var n=0; n<60; n++) {
					if (n<10) {
						secondHtml += '<li>0'+n+'</li>';
					} else {
						secondHtml += '<li>'+n+'</li>';
					}
				}
				secondHtml += '</ul>';
				secondHtml += '</td>';
				timeHtml += secondHtml;

				timeHtml += '</tr>';
				timeHtml += '</tbody>';
				timeHtml += '</table>';
				timeHtml += '</div>';
				timeHtml += '<div class="date-foot date-ui" style="padding: 0;border-top: none;">';
				timeHtml += '<div class="form-msg" style="display:none;">';
				timeHtml += '<input type="text" id="hide-HMS-'+timeId+'" value="'+time+'" readonly />';
				timeHtml += '</div>';
				timeHtml += '<div class="form-btn">';
				timeHtml += '<button class="button gray btn-left" id="date-clear-' + timeId + '">清空</button>';
				timeHtml += '<button class="button wathet btn-left" id="date-cancel-' + timeId + '">取消</button>';
				timeHtml += '<button class="button blue btn-right" id="date-ok-' + timeId + '">确定</button>';
				timeHtml += '</div>';
				timeHtml += '</div>';
				timeHtml += '</div>';
				$(document.body).append(timeHtml);
				
				// 添加样式
				addCSS();
				// 显示时间选择器面板
				show();
				// 关闭时间选择框，并把结果回显到输入框
				close(true);
				
				// 时间选择框的点击事件
				$("#"+timeId).bind("click", function() {
					initHMS = document.getElementById("hide-HMS-"+timeId).value;

					addCSS();
					show();
					return;
				});
				
				// 时间选择确定按钮的点击事件
				$("#date-ok-"+timeId).bind("click", function() {
					close(true);

					settings.callback({
						"time": getHMStime()
					});
					return;
				});
				
				// 时间选择取消按钮的点击事件
				$("#date-cancel-"+timeId).bind("click", function() {
					// 重新赋值
					document.getElementById("hide-HMS-"+timeId).value = initHMS;

					close();

					isClear = false;
					return;
				});
				
				// 时间选择清空按钮的点击事件
				$("#date-clear-"+timeId).bind("click", function() {
					// 清除样式
					document.getElementById("hide-HMS-"+timeId).value = "";
					$("#date-hour-"+timeId+" li").removeClass("current");
					$("#date-minute-"+timeId+" li").removeClass("current");
					$("#date-second-"+timeId+" li").removeClass("current");

					isClear = true;
					return;
				});
				
				// 小时
				$("#date-hour-"+timeId+" li").bind("click", function() {
					$(this).addClass("current").siblings().removeClass("current");
					setHMStime();
					return;
				});
				// 分钟
				$("#date-minute-"+timeId+" li").bind("click", function() {
					$(this).addClass("current").siblings().removeClass("current");
					setHMStime();
					return;
				});
				// 秒数
				$("#date-second-"+timeId+" li").bind("click", function() {
					$(this).addClass("current").siblings().removeClass("current");
					setHMStime();
					return;
				});
				
				/**
				 * 为选中的时间添加样式
				 */
				function addCSS() {
					var HMS = $("#hide-HMS-"+timeId).val();
					var arr = HMS.split(":");
					$("#date-hour-"+timeId+" li").each(function() {
						if ($(this).text()==arr[0]) {
							$(this).addClass("current").siblings().removeClass("current");
							return;
						}
					});
					$("#date-minute-"+timeId+" li").each(function() {
						if ($(this).text()==arr[1]) {
							$(this).addClass("current").siblings().removeClass("current");
							return;
						}
					});
					$("#date-second-"+timeId+" li").each(function() {
						if ($(this).text()==arr[2]) {
							$(this).addClass("current").siblings().removeClass("current");
							return;
						}
					});
				}
				
				/**
				 * 返回时分秒
				 */
				function getHMStime() {
					var hour = "";
					var minute = "";
					var second = "";
					if ($("#date-hour-"+timeId+" li.current").length>0) {
						hour = $("#date-hour-"+timeId+" li.current").text();
					}
					if ($("#date-minute-"+timeId+" li.current").length>0) {
						minute = $("#date-minute-"+timeId+" li.current").text();
					}
					if ($("#date-second-"+timeId+" li.current").length>0) {
						second = $("#date-second-"+timeId+" li.current").text();
					}

					var time = "";
					if (hour!="" && minute!="" && second!="") {
						time = hour + ":" + minute + ":" + second;
					}

					return time;
				}
				
				/**
				 * 重复对时分秒赋值
				 */
				function setHMStime() {
					var hour = $("#date-hour-"+timeId+" li.current").text();
					var minute = $("#date-minute-"+timeId+" li.current").text();
					var second = $("#date-second-"+timeId+" li.current").text();
					$("#hide-HMS-"+timeId).val(hour+":"+minute+":"+second);
				}
				
				/**
				 * 显示显示时间选择器面板
				 */
				function show() {
					var pos = $("#"+timeId).offset();
					var left = pos.left;
					$("#date-box-"+timeId).css("display", "block");
					$("#date-box-"+timeId).css("left", left+"px");
					$("#date-box-"+timeId).css("top", pos.top+$("#"+timeId).height()+4+"px");

					if ($("#date-hour-"+timeId+" li.current").length>0) {
						var diffH = $("#date-hour-"+timeId+" li.current").position().top;
						if (diffH>220) {
							diffH = diffH-83+"px";
							$("#date-hour-"+timeId).animate({"scrollTop": diffH}, 500);
						}
					}
					if ($("#date-minute-"+timeId+" li.current").length>0) {
						var diffM = $("#date-minute-"+timeId+" li.current").position().top;
						if (diffM>220) {
							diffM = diffM-83+"px";
							$("#date-minute-"+timeId).animate({"scrollTop": diffM}, 500);
						}
					}
					if ($("#date-second-"+timeId+" li.current").length>0) {
						var diffS = $("#date-second-"+timeId+" li.current").position().top;
						if (diffS>220) {
							diffS = diffS-83+"px";
							$("#date-second-"+timeId).animate({"scrollTop": diffS}, 500);
						}
					}
				}

				/**
				 * 关闭日期选择框
				 * isOk : 判断是否是点击确定按钮关闭的 
				 */
				function close(isOk) {
					if (isOk) {
						var str = "";
						// 判断此前是否按了清空按钮
						if (isClear) {
							document.getElementById("hide-HMS-"+timeId).value = "";
							$("#date-hour-"+timeId+" li").removeClass("current");
							$("#date-minute-"+timeId+" li").removeClass("current");
							$("#date-second-"+timeId+" li").removeClass("current");
						} else {
							$("#"+timeId).val(getHMStime());

							str = getHMStime();
						}

						// 把时间显示到页面
						var obj = document.getElementById(timeId);
						if (obj && obj.tagName=="INPUT") {
							$("#"+timeId).val(str);
						} else {
							$("#"+timeId).html(str);
						}

						isClear = false;
					}
					
					// 隐藏时间框
					$("#date-box-"+timeId).css("display", "none");
				}
			},
			
			// 排序
			dragging : $(),
			placeholders : $(),
			
			// 文件上传
			upload : function(args) {
				var settings = defaults(args);
				
				var type = settings.type;	// 上传类型
				var url = settings.url;		// 请求路径
				var inputId = settings.id;	// <input type="file" />的id
				var isShowOptTip = settings.isShowOptTip;// 是否显示操作提示
				var containerId = settings.containerId;	// 图片容器id
				var uploadText = settings.uploadText;	// 上传图片文字提示
				var addImg = settings.addImg;	// 默认添加图片
				var maxNum = parseInt(settings.maxNum);	// 文件上传数量上限
				var maxSize = parseInt(settings.maxSize);	// 单张图片的大小上限，单位KB，0或空为不限制
				var param = settings.param;
				var imgUrl = settings.imgUrl;	// 图片回显地址
				var dataType = settings.dataType;// 图片上传后的返回类型
				
				if (type=="editImage") {
					// 点击上传
					$("#"+inputId).change(function() {
						// 得到上传图片按钮的图像文件
						var imageFile = $("#"+inputId)[0].files[0];

						// 校验图片类型
						if (!/\.(gif|jpg|jpeg|png|GIF|JPG|PNG)$/.test(imageFile.name)) {
							info.optTip({
								content : "图片类型必须是.gif,jpeg,jpg,png中的一种",
								type : "error"
							});
							return false;
						}
						
						// 校验图片大小
						if (maxSize=="" || maxSize==0 || maxSize=="0") {
							// 不校验
						} else {
							if (imageFile.size>(maxSize*1024)) {
								info.optTip({
									content : "图片过大，单张图片上限 "+maxSize+"KB",
									type : "error"
								});
								return false;
							}
						}
						
						if (dataType=="base64") {
							// 创建FileReader对象
							var reader = new FileReader();

							if (imageFile) {
								// onload表示文件读取完成并成功时，触发回调函数
								reader.onload = function (event) {
									// 得到图片的base64编码
									var base64Img = event.target.result;
									// 回调函数，返回图片的base64
									settings.callback(base64Img);
								};
							}
							// 使用FileReader对象的readAsDataURL方法来读取图像文件
							reader.readAsDataURL(imageFile);
						} else if (dataType=="url") {
							// 创建FormData对象
							var data = new FormData();
							// 为FormData对象添加数据
							data.append(param, imageFile);
							
							if (isShowOptTip) {
								info.optTip({
									content : "文件上传中，请稍候...",
									type : "submit",
									timeout : 0
								});
							}
							
							// 发送数据
							$.ajax({
								url : url,
								type : "post",
								data : data,
								dataType : "json",
								cache : false,
								contentType : false,
								processData : false,
								success : function(rtn) {
									clearInterval(info.timeoutId);
									$(".ex-opt-tip").remove();
									$(".mask").remove();
									settings.callback(rtn);
								},
								error : function() {
									info.optTip({
										content : "上传失败，请稍后重试",
										type : "error"
									});
								}
							});
						}
						
						$("#"+inputId).val("");
					});
				} else if (type=="image") {
					var imageSrc = $("#"+containerId+" .cover").find("img").attr("src");
					if (!imageSrc) {
						// 没有回显图片
						$("#"+containerId+" .cover img").attr("src", addImg);
						$("#"+containerId+" .cover img").after('<div class="cover-text">'+uploadText+'</div>');
					} else {
						// 有回显图片
						$("#"+containerId+" .cover img").addClass("upload-img").removeClass("upload-img-cover");
					}

					// 点击上传
					$("#"+inputId).change(function() {
						// 得到上传图片按钮的图像文件
						var imageFile = $("#"+inputId)[0].files[0];

						// 校验图片类型
						if (!/\.(gif|jpg|jpeg|png|GIF|JPG|PNG)$/.test(imageFile.name)) {
							info.optTip({
								content : "图片类型必须是.gif,jpeg,jpg,png中的一种",
								type : "error"
							});
							return false;
						}
						
						// 校验图片大小
						if (maxSize=="" || maxSize==0) {
							// 不校验
						} else {
							if (imageFile.size>(maxSize*1024)) {
								info.optTip({
									content : "图片过大，单张图片上限 "+maxSize+"KB",
									type : "error"
								});
								return false;
							}
						}
						
						if (dataType=="base64") {
							// 创建FileReader对象
							var reader = new FileReader();

							if (imageFile) {
								// onload表示文件读取完成并成功时，触发回调函数
								reader.onload = function (event) {
									// 得到图片的base64编码
									var base64Img = event.target.result;
									
									$("#"+containerId+" .cover img").addClass("upload-img").removeClass("upload-img-cover");
									$("#"+containerId+" .cover-text").remove();

									// 回调函数，返回图片的base64
									settings.callback(base64Img);
								};
							}
							// 使用FileReader对象的readAsDataURL方法来读取图像文件
							reader.readAsDataURL(imageFile);
						} else if (dataType=="url") {
							// 创建FormData对象
							var data = new FormData();
							// 为FormData对象添加数据
							data.append(param, imageFile);
							
							if (isShowOptTip) {
								info.optTip({
									content : "图片上传中，请稍候...",
									type : "submit",
									timeout : 0
								});
							}
							
							// 发送数据
							$.ajax({
								url : url,
								type : "post",
								data : data,
								dataType : "json",
								cache : false,
								contentType : false,
								processData : false,
								success : function(rtn) {
									clearInterval(info.timeoutId);
									$(".ex-opt-tip").remove();
									$(".mask").remove();
									
									$("#"+containerId+" .cover img").addClass("upload-img").removeClass("upload-img-cover");
									$("#"+containerId+" .cover-text").remove();
									
									settings.callback(rtn);
								},
								error : function() {
									info.optTip({
										content : "上传失败，请稍后重试",
										type : "error"
									});
								}
							});
						}
						
						$("#"+inputId).val("");
					});
				} else if (type=="images") {
					// 回显图片
					if (!!imgUrl) {
						// 定义一个数组，用来存储UUID
						var uuidArr = new Array();
						
						for (var i=0; i<imgUrl.length; i++) {
							// 生成随机id
							var UUID = info.getUUID();
							uuidArr.push(UUID);
							
							var imgHtml = '<li id='+UUID+' class="upload-images-thumbnail" style="width:'+settings.width+'px;height:'+settings.height+'px;">';
							imgHtml += '<div class="img-trash"><span class="icon-trash-o"></span></div>';
							imgHtml += '<img src="'+imgUrl[i]+'" />';
							imgHtml += '</li>';
							$("#"+containerId).append(imgHtml);
						}
						
						// 为每一张图片绑定事件
						imgBindEvent(uuidArr);

						// 初始化返回数据
						var imgUrlArr = new Array();
						$("#"+containerId+" img").each(function() {
							imgUrlArr.push($(this).attr("src"));
						});
						
						// 回调函数
						settings.callback(imgUrlArr);
					}
					
					// 点击上传
					$("#"+inputId).change(function() {
						// 判断上传数量是否已达上限
						if ($("#"+containerId+" img").length>(parseInt(maxNum)-1)) {
							info.optTip({
								content : "最多上传"+maxNum+"张图片",
								type : "error"
							});
							return false;
						}
						
						if (dataType=="base64") {
							// 定义一个数组，用来存储UUID
							var uuidArr = new Array();
							var count = 0;
							var fileLength = $("#"+inputId)[0].files.length;
							
							// 当前已经存在的图片数量
							var nowNum = $("#"+containerId+" img").length;
							// 遍历得到上传的图片
							$.each($("#"+inputId)[0].files, function(i) {
								if ((nowNum+i)<maxNum) {
									// 生成随机id
									var UUID = info.getUUID();
									uuidArr.push(UUID);
									// 获取图片
									var imageFile = $("#"+inputId)[0].files[i];
									
									// 校验图片类型
									if (!/\.(gif|jpg|jpeg|png|GIF|JPG|PNG)$/.test(imageFile.name)) {
										info.optTip({
											content : "图片类型必须是.gif,jpeg,jpg,png中的一种",
											type : "error"
										});
										return false;
									}
									
									// 校验图片大小
									if (maxSize=="" || maxSize==0) {
										// 不校验
									} else {
										if (imageFile.size>(maxSize*1024)) {
											info.optTip({
												content : "图片过大，单张图片上限 "+maxSize+"KB",
												type : "error"
											});
											return false;
										}
									}
									
									// 创建FileReader对象
									var reader = new FileReader();
									// onload表示文件读取完成并成功时，触发回调函数
									reader.onload = function(event) {
										// 得到图片的base64编码
										var base64Img = event.target.result;
										
										var imgHtml = '<li id='+UUID+' class="upload-images-thumbnail" style="width:'+settings.width+'px;height:'+settings.height+'px;">';
										imgHtml += '<div class="img-trash"><span class="icon-trash-o"></span></div>';
										imgHtml += '<img src="'+base64Img+'" />';
										imgHtml += '</li>';
										$("#"+containerId).append(imgHtml);
										
										// 为图片绑定事件
										imgBindEvent(UUID);
										
										count++;
										if ((count==fileLength) || (nowNum+i)==(parseInt(maxNum)-1)) {
											var imgUrlArr = new Array();
											$("#"+containerId+" img").each(function() {
												imgUrlArr.push($(this).attr("src"));
											});
											
											// 回调函数
											settings.callback(imgUrlArr);
											
											// 图片排序
											imgSort(containerId);
										}
									};
									// 使用FileReader对象的readAsDataURL方法来读取图像文件
									reader.readAsDataURL(imageFile);
								}
							});
						} else if (dataType=="url") {
							var image = settings.image;
							// 定义一个数组，用来存储UUID
							var uuidArr = new Array();
							var count = 0;
							var fileLength = $("#"+inputId)[0].files.length;
							// 当前已经存在的图片数量
							var nowNum = $("#"+containerId+" img").length;
							
							for (var i=0; i<fileLength; i++) {
								if ((nowNum+i)<maxNum) {
									var UUID = info.getUUID();
									uuidArr.push(UUID);
									
									var imgHtml = '<li id='+UUID+' class="upload-images-thumbnail" style="width:'+settings.width+'px;height:'+settings.height+'px;">';
									imgHtml += '<div class="img-trash"><span class="icon-trash-o"></span></div>';
									imgHtml += '<img src="'+settings.placeholder+'" />';
									imgHtml += '</li>';
									$("#"+containerId).append(imgHtml);
								}
							}
							
							// 遍历得到上传的图片
							$.each($("#"+inputId)[0].files, function(i) {
								if ((nowNum+i)<maxNum) {
									var UUID = uuidArr[i];
									// 获取图片
									var imageFile = $("#"+inputId)[0].files[i];
									
									// 校验图片类型
									if (!/\.(gif|jpg|jpeg|png|GIF|JPG|PNG)$/.test(imageFile.name)) {
										info.optTip({
											content : "图片类型必须是.gif,jpeg,jpg,png中的一种",
											type : "error"
										});
										return false;
									}
									
									// 校验图片大小
									if (maxSize=="" || maxSize==0) {
										// 不校验
									} else {
										if (imageFile.size>(maxSize*1024)) {
											info.optTip({
												content : "图片过大，单张图片上限 "+maxSize+"KB",
												type : "error"
											});
											return false;
										}
									}
									
									// 创建FormData对象
									var data = new FormData();
									// 为FormData对象添加数据
									data.append(param, imageFile);
									
									// 发送数据
									$.ajax({
										url : image.url,
										type : "post",
										data : data,
										dataType : "json",
										cache : false,
										contentType : false,
										processData : false,
										success : function(rtn) {
											image.rtnData = rtn;
											var imgSrc = "";
											if (!image.prefix) {
												if (image.imgUrl.split(".").length==2) {
													imgSrc = image.rtnData[image.imgUrl.split(".")[0]][image.imgUrl.split(".")[1]];
												} else {
													imgSrc = image.rtnData[image.imgUrl];
												}
											} else {
												if (image.imgUrl.split(".").length==2) {
													imgSrc = image.prefix+image.rtnData[image.imgUrl.split(".")[0]][image.imgUrl.split(".")[1]];
												} else {
													imgSrc = image.prefix+image.rtnData[image.imgUrl];
												}
											}
											
											$("#"+UUID).find("img").attr("src", imgSrc);
											
											// 为图片绑定事件
											imgBindEvent(UUID);
											
											count++;
											if ((count==fileLength) || (nowNum+i)==(maxNum-1)) {
												var imgUrlArr = new Array();
												$("#"+containerId+" img").each(function() {
													imgUrlArr.push($(this).attr("src"));
												});
												
												// 回调函数
												settings.callback(imgUrlArr);
												
												// 图片排序
												imgSort(containerId);
											}
										},
										error : function() {
											info.optTip({
												content : "上传失败，请稍后重试",
												type : "error"
											});
										}
									});
								}
							});
						}
						
						$("#"+inputId).val("");
					});
					
					/**
					 * 为图片绑定事件
					 */
					function imgBindEvent(UUID) {
						// 绑定鼠标移入事件
						$("#"+UUID).on("mouseenter", {index:i}, function(event) {
							var i = event.data.index;
							$("#"+UUID+" .img-trash").stop().animate({height:"30px"});
						});
						// 绑定鼠标移出事件
						$("#"+UUID).on("mouseleave", {index:i}, function(event) {
							var i = event.data.index;
							$("#"+UUID+" .img-trash").stop().animate({height:0});
						});
						// 绑定删除图片事件
						$("#"+UUID+" .img-trash span").on("click", {index:i}, function(event) {
							var i = event.data.index;
							$("#"+UUID).remove();
							
							var imgUrlArr = new Array();
							$("#"+containerId+" img").each(function() {
								imgUrlArr.push($(this).attr("src"));
							});
							
							// 回调函数
							settings.callback(imgUrlArr);
						});
					}
					
					/**
					 * 图片排序事件
					 */
					function imgSort(containerId) {
						options = $.extend({}, null);
						return $("#"+containerId).each(function() {
							var isHandle, index, items = $(this).children(options.items);
							var placeholder = $('<' + (/^ul|ol$/i.test(this.tagName) ? 'li' : 'div') + ' class="javaex-sort-placeholder">');
							
							items.find(options.handle).mousedown(function() {
								isHandle = true;
							}).mouseup(function() {
								isHandle = false;
							});
							$(this).data('items', options.items);
							info.placeholders = info.placeholders.add(placeholder);
							items.attr('draggable', 'true').on('dragstart.h5s', function(e) {
								if (options.handle && !isHandle) {
									return false;
								}
								isHandle = false;
								var dt = e.originalEvent.dataTransfer;
								dt.effectAllowed = 'move';
								dt.setData('Text', 'dummy');
								index = (info.dragging = $(this)).addClass('javaex-sort-dragging').index();
							}).on('dragend.h5s', function() {
								(info.dragging = $(this)).removeClass('javaex-sort-dragging').show();
								info.placeholders.detach();
								if (index != (info.dragging = $(this)).index()) {
									items.parent().trigger('sortupdate', {item: info.dragging});
									
									var imgUrlArr = new Array();
									$("#"+containerId+" img").each(function() {
										imgUrlArr.push($(this).attr("src"));
									});
									
									// 回调函数
									settings.callback(imgUrlArr);
								}
								info.dragging = null;
							}).not('a[href], img').on('selectstart.h5s', function() {
								this.dragDrop && this.dragDrop();
								return false;
							}).end().add([this, placeholder]).on('dragover.h5s dragenter.h5s drop.h5s', function(e) {
								if (!items.is(info.dragging) && options.connectWith !== $(info.dragging).parent().data('connectWith')) {
									return true;
								}
								if (e.type == 'drop') {
									e.stopPropagation();
									info.placeholders.filter(':visible').after(info.dragging);
									return false;
								}
								e.preventDefault();
								e.originalEvent.dataTransfer.dropEffect = 'move';
								if (items.is(this)) {
									if (options.forcePlaceholderSize) {
										placeholder.height(info.dragging.outerHeight());
									}
									info.dragging.hide();
									$(this)[placeholder.index() < $(this).index() ? 'after' : 'before'](placeholder);
									info.placeholders.not(placeholder).detach();
								} else if (!info.placeholders.is(this) && !$(this).children(options.items).length) {
									info.placeholders.detach();
									$(this).append(placeholder);
								}
								return false;
							});
						});
					}
				} else if (type=="file") {
					// 点击上传
					$("#"+inputId).change(function() {
						// 得到上传按钮的文件
						var imageFile = $("#"+inputId)[0].files[0];

						// 校验文件大小
						if (maxSize=="" || maxSize==0 || maxSize=="0") {
							// 不校验
						} else {
							if (imageFile.size>(maxSize*1024*1024)) {
								info.optTip({
									content : "文件过大，单个文件上限 "+maxSize+"M",
									type : "error"
								});
								return false;
							}
						}
						
						// 创建FormData对象
						var data = new FormData();
						// 为FormData对象添加数据
						data.append(param, imageFile);
						
						if (isShowOptTip) {
							info.optTip({
								content : "文件上传中，请稍候...",
								type : "submit",
								timeout : 0
							});
						}
						
						// 发送数据
						$.ajax({
							url : url,
							type : "post",
							data : data,
							dataType : "json",
							cache : false,
							contentType : false,
							processData : false,
							success : function(rtn) {
								clearInterval(info.timeoutId);
								$(".ex-opt-tip").remove();
								$(".mask").remove();
								settings.callback(rtn);
							},
							error : function() {
								info.optTip({
									content : "上传失败，请稍后重试",
									type : "error"
								});
							}
						});
					});
				}
			},
			
			// 头像上传
			// 下列几个属性是为了防止属性值初始化，相当于全局变量
			ratio : 1,	// 初始化比例，缩放时会用到。没有特别需要，请勿更改
			dragAble : false,	// 图片是否可拖动（只有鼠标左键按在图片上时，才可以拖动）
			mouseX : 0,	// 鼠标按下时的X坐标
			mouseY : 0,	// 鼠标按下时的Y坐标
			imgDivId : "", // 本地上传的图片区域
			cutBox : "",	// 裁剪区域
			moveBox : "",	// 背景区域，可拖动
			dataUrl : "",	// 最终将图片地址返回给哪个input存储
			imgSrc : "",	// 裁剪后的图片的地址
			image : new Image(),
			uploadAvatar : function(obj, args) {
				var settings = defaults(args);
				info.imgDivId = settings.imgDivId;
				info.moveBox = settings.moveBox;
				info.cutBox = settings.cutBox;
				info.dataUrl = settings.dataUrl;
				
				// 创建FileReader对象
				var reader = new FileReader();
				// 得到上传图片按钮的图像文件
				var imageFile = obj.files[0];
				if (imageFile) {
					// onload表示文件读取完成并成功时，触发回调函数
					reader.onload = function (event) { 
						// 得到图片的base64编码
						info.imgSrc = event.target.result;
						// 图片预加载
						info.image.src = info.imgSrc;
						info.image.onload = function() {
							$("#"+settings.moveBox).hide();
							// 设置图片显示
							info.setBackgroundImage();
							// 头像预览
							info.headPreview();
							
							// 为图片div区域绑定鼠标滚动缩放事件
							$("#"+info.imgDivId).bind("mousewheel DOMMouseScroll", info.imageZoom);
							// 为图片div区域绑定鼠标左键按下事件
							$("#"+info.imgDivId).bind("mousedown", info.mouseDown);
							// 为图片div区域绑定鼠标拖动图片事件
							$("#"+info.imgDivId).bind("mousemove", info.imageDrag);
							// 为整个窗口绑定鼠标左键弹起事件
							$(window).bind("mouseup", info.mouseUp);

							// 缩小
							$("#narrow").on("click", function() {
								info.narrow();
							});
							// 放大
							$("#enlarge").on("click", function() {
								info.enlarge();
							});
						};
					};
				}
				// 使用FileReader对象的readAsDataURL方法来读取图像文件
				reader.readAsDataURL(imageFile);
			},
			// 放大
			enlarge: function() {
				this.ratio = this.ratio * 1.1;
				info.setBackgroundImage();
			},
			// 缩小
			narrow: function() {
				this.ratio = this.ratio * 0.9;
				info.setBackgroundImage();
			},
			// 在图片div区域显示图片
			setBackgroundImage : function() {
				// 缩放后的图片宽、高
				var zoomImgWidth = parseInt(info.image.width) * info.ratio;
				var zoomImgHeight = parseInt(info.image.height) * info.ratio;
				// 缩放后的图片左上角，距离背景层左上角的距离：x、y
				var posX = ($("#"+info.imgDivId).width() - zoomImgWidth) / 2;
				var posY = ($("#"+info.imgDivId).height() - zoomImgHeight) / 2;
				// 为图片div添加样式
				$("#"+info.imgDivId).css({
					"background-image" : "url(" + info.image.src + ")",
					"background-repeat" : "no-repeat",
					"background-size" : zoomImgWidth + "px " + zoomImgHeight + "px",
					"background-position" : posX + "px " + posY + "px"
				});
			},
			// 鼠标滚轮滚动实现图片缩放
			imageZoom : function(event) {
				if (event.originalEvent.wheelDelta>0 || event.originalEvent.detail<0) {
					info.ratio = info.ratio * 1.1;
				} else {
					info.ratio = info.ratio * 0.9;
				}
				info.setBackgroundImage();
				info.headPreview();
				event.preventDefault();
			},
			// 鼠标左键按下
			mouseDown : function(event) {
				event.stopImmediatePropagation();

				// 设置图片可以被拖动
				info.dragAble = true;
				// 设置鼠标此刻所在的坐标
				info.mouseX = event.clientX;
				info.mouseY = event.clientY;
			},
			// 拖动图片
			imageDrag : function(event) {
				event.stopImmediatePropagation();

				// 只有鼠标左键按在图片上时，才可以拖动
				if (info.dragAble) {
					// 计算图片被拖动后，此时鼠标所在的坐标与拖动前所在的坐标之差
					var diffX = event.clientX - info.mouseX;
					var diffY = event.clientY - info.mouseY;

					// 分割图片左上角距离背景层左上角的距离：x、y
					var arr = $("#"+info.imgDivId).css("background-position").split(" ");

					// 得到新的图片左上角距离背景层左上角的距离：x、y
					var posX = diffX + parseInt(arr[0]);
					var posY = diffY + parseInt(arr[1]);

					// 重新设置图片div区域的属性
					$("#"+info.imgDivId).css("background-position", posX + "px " + posY + "px");

					// 重新记录鼠标所在的坐标
					info.mouseX = event.clientX;
					info.mouseY = event.clientY;
				}
			},
			// 鼠标左键弹起
			mouseUp : function(event) {
				event.stopImmediatePropagation();
				info.dragAble = false;
				info.headPreview();
			},
			// 头像预览
			headPreview : function() {
				var cutBoxWidth = $("#"+info.cutBox).width();
				var cutBoxHeight = $("#"+info.cutBox).height();

				var canvas = document.createElement("canvas");
				var posArr = $("#"+info.imgDivId).css("background-position").split(" ");
				var sizeArr = $("#"+info.imgDivId).css("background-size").split(" ");
				var swidth = parseInt(info.image.width);	// 被剪切图像的宽度
				var sheight = parseInt(info.image.height);	// 被剪切图像的高度
				var x = parseInt(posArr[0]) - $("#"+info.imgDivId).width()/2 + cutBoxWidth/2;	// 在画布上放置图像的 x 坐标位置
				var y = parseInt(posArr[1]) - $("#"+info.imgDivId).height()/2 + cutBoxHeight/2;	// 在画布上放置图像的 y 坐标位置
				var width = parseInt(sizeArr[0]);	// 要使用的图像的宽度。（伸展或缩小图像）
				var height = parseInt(sizeArr[1]);	// 要使用的图像的高度。（伸展或缩小图像）

				canvas.width = cutBoxWidth;
				canvas.height = cutBoxHeight;
				// 当前，唯一支持的是 "2d",它返回一个 CanvasRenderingContext2D 对象，使用它可以绘制到 Canvas 元素中。
				var context = canvas.getContext("2d");
				context.drawImage(info.image, 0, 0, swidth, sheight, x, y, width, height);
				// 用canvas的toDataURL()将图片转为dataURL(base64)
				var avatarPreviewImageSrc = canvas.toDataURL('image/png');

				// 填充预览头像
				$(".avatar180").html('');
				$(".avatar50").html('');
				$(".avatar30").html('');
				$(".avatar180").append('<img src="'+avatarPreviewImageSrc+'" align="absmiddle" style="width:180px;border-radius:180px;">');
				$(".avatar50").append('<img src="'+avatarPreviewImageSrc+'" align="absmiddle" style="width:50px;border-radius:50px;">');
				$(".avatar30").append('<img src="'+avatarPreviewImageSrc+'" align="absmiddle" style="width:30px;border-radius:30px;">');

				// 自动返回裁剪后的图片地址
				$("#"+info.dataUrl).val(avatarPreviewImageSrc);
			},

			// 富文本编辑器
			curRange : "",	// 当前范围
			edit : function(args) {
				var settings = defaults(args);
				var editId = settings.id;
				var content = $("#"+editId).html();// settings.content;
				$("#"+editId).empty();
				var fixedTop = parseInt(settings.fixedTop);
				// 生成随机id
				var UUID = info.getUUID();
				
				var editHtml = '';
				editHtml += '<div class="edit-toolbar">';
				editHtml += '<div class="edit-btn-toolbar clear">';
				// 字体
				editHtml += '<div class="javaex-edit-family edit-btn edit-btn-name-fontsize edit-combobox">';
				editHtml += '<span tip="字体" class="edit-button-label"><i>arial</i><span class="icon-caret-down"></span></span>';
				editHtml += '<ul class="javaex-edit-family-select dropdown-menu edit-combobox-menu edit-combobox-paragraph" style="z-index: 2;display:none;">';
				editHtml += '<li class="edit-combobox-item edit-combobox-checked"><label class="edit-combobox-item-label">arial</label></li>';
				editHtml += '<li class="edit-combobox-item"><label class="edit-combobox-item-label">宋体</label></li>';
				editHtml += '<li class="edit-combobox-item"><label class="edit-combobox-item-label">微软雅黑</label></li>';
				editHtml += '<li class="edit-combobox-item"><label class="edit-combobox-item-label">楷体</label></li>';
				editHtml += '<li class="edit-combobox-item"><label class="edit-combobox-item-label">黑体</label></li>';
				editHtml += '<li class="edit-combobox-item"><label class="edit-combobox-item-label">隶书</label></li>';
				editHtml += '<li class="edit-combobox-item"><label class="edit-combobox-item-label">Consolas</label></li>';
				editHtml += '</ul>';
				editHtml += '</div>';
				// 字体大小
				editHtml += '<div class="javaex-edit-size edit-btn edit-btn-name-fontsize edit-combobox">';
				editHtml += '<span tip="字号" class="edit-button-label"><i>16</i><span class="icon-caret-down"></span></span>';
				editHtml += '<ul class="javaex-edit-size-select dropdown-menu edit-combobox-menu edit-combobox-paragraph" style="z-index: 2;display:none;">';
				editHtml += '<li class="edit-combobox-item edit-combobox-item-7"><label class="edit-combobox-item-label">12</label></li>';
				editHtml += '<li class="edit-combobox-item edit-combobox-item-6"><label class="edit-combobox-item-label">14</label></li>';
				editHtml += '<li class="edit-combobox-item edit-combobox-item-5 edit-combobox-checked"><label class="edit-combobox-item-label">16</label></li>';
				editHtml += '<li class="edit-combobox-item edit-combobox-item-4"><label class="edit-combobox-item-label">18</label></li>';
				editHtml += '<li class="edit-combobox-item edit-combobox-item-3"><label class="edit-combobox-item-label">24</label></li>';
				editHtml += '<li class="edit-combobox-item edit-combobox-item-2"><label class="edit-combobox-item-label">32</label></li>';
				editHtml += '<li class="edit-combobox-item edit-combobox-item-1"><label class="edit-combobox-item-label">48</label></li>';
				editHtml += '</ul>';
				editHtml += '</div>';
				// 段落格式
				editHtml += '<div class="javaex-edit-format edit-btn edit-btn-name-fontsize edit-combobox">';
				editHtml += '<span tip="段落格式" class="edit-button-label"><i>p</i><span class="icon-caret-down"></span></span>';
				editHtml += '<ul class="javaex-edit-format-select dropdown-menu edit-combobox-menu edit-combobox-paragraph" style="z-index: 2;display:none;">';
				editHtml += '<li class="edit-combobox-item edit-combobox-item-7 edit-combobox-checked"><label class="edit-combobox-item-label">p</label></li>';
				editHtml += '<li class="edit-combobox-item edit-combobox-item-6"><label class="edit-combobox-item-label">H6</label></li>';
				editHtml += '<li class="edit-combobox-item edit-combobox-item-5"><label class="edit-combobox-item-label">H5</label></li>';
				editHtml += '<li class="edit-combobox-item edit-combobox-item-4"><label class="edit-combobox-item-label">H4</label></li>';
				editHtml += '<li class="edit-combobox-item edit-combobox-item-3"><label class="edit-combobox-item-label">H3</label></li>';
				editHtml += '<li class="edit-combobox-item edit-combobox-item-2"><label class="edit-combobox-item-label">H2</label></li>';
				editHtml += '<li class="edit-combobox-item edit-combobox-item-1"><label class="edit-combobox-item-label">H1</label></li>';
				editHtml += '</ul>';
				editHtml += '</div>';
				editHtml += '<span class="separator-line"></span>';
				// 上传图片
				editHtml += '<a class="edit-btn" tip="本地图片"><div class="icon icon-photo"><label for="'+UUID+'" style="display: inline-block; width:100%;height:100%;position: absolute;top: 0;left: 0;"></label></div>';
				editHtml += '<input type="file" style="display:none;" id="'+UUID+'" accept="image/gif, image/jpeg, image/jpg, image/png" /></a>';
				// 外链音乐
				editHtml += '<a class="edit-btn edit-btn-music" tip="外链音乐"><div class="icon icon-audiotrack"></div></a>';
				// 外链视频
				editHtml += '<a class="edit-btn edit-btn-video" tip="外链视频"><div class="icon icon-video"></div></a>';
				// 超链接
				editHtml += '<a class="edit-btn edit-btn-href" tip="超链接"><div class="icon icon-chain"></div></a>';
				// 去除超链接
				editHtml += '<a class="edit-btn edit-btn-unlink" tip="去除超链接"><div class="icon icon-chain-broken"></div></a>';
				editHtml += '<span class="separator-line"></span>';
				// 加粗
				editHtml += '<a class="edit-btn edit-btn-bold" tip="加粗"><div class="icon icon-format_bold"></div></a>';
				// 斜体
				editHtml += '<a class="edit-btn edit-btn-italic" tip="斜体"><div class="icon icon-format_italic"></div></a>';
				// 下划线
				editHtml += '<a class="edit-btn edit-btn-underline" tip="下划线"><div class="icon icon-format_underlined"></div></a>';
				// 删除线
				editHtml += '<a class="edit-btn edit-btn-strikethrough" tip="删除线"><div class="icon icon-strikethrough_s"></div></a>';
				// 字体颜色
				editHtml += '<span class="edit-btn-foreColor"><a class="edit-btn" tip="字体颜色"><div class="icon icon-format_color_text"></div></a></span>';
				// 背景颜色
				editHtml += '<span class="edit-btn-backColor"><a class="edit-btn" tip="背景颜色"><div class="icon icon-font_download"></div></a></span>';
				editHtml += '<span class="separator-line"></span>';
				// 上标
				editHtml += '<a class="edit-btn edit-btn-superscript" tip="上标"><div class="icon icon-superscript"></div></a>';
				// 下标
				editHtml += '<a class="edit-btn edit-btn-subscript" tip="下标"><div class="icon icon-subscript"></div></a>';
				// 分隔线
				editHtml += '<a class="edit-btn edit-btn-insertHorizontalRule" tip="分隔线"><div class="icon icon-line"></div></a>';
				// 全选
				editHtml += '<a class="edit-btn edit-btn-selectAll" tip="全选"><div class="icon icon-select_all"></div></a>';
				// 清除格式
				editHtml += '<a class="edit-btn edit-btn-removeFormat" tip="清除格式"><div class="icon icon-format_clear"></div></a>';
				editHtml += '<span class="separator-line"></span>';
				// 增加缩进
				editHtml += '<a class="edit-btn edit-btn-indent" tip="增加缩进"><div class="icon icon-format_indent_increase"></div></a>';
				// 减少缩进
				editHtml += '<a class="edit-btn edit-btn-outdent" tip="减少缩进"><div class="icon icon-format_indent_decrease"></div></a>';
				// 居左对齐
				editHtml += '<a class="edit-btn edit-btn-justifyleft" tip="居左对齐"><div class="icon icon-format_align_left"></div></a>';
				// 居中对齐
				editHtml += '<a class="edit-btn edit-btn-justifycenter" tip="居中对齐"><div class="icon icon-format_align_center"></div></a>';
				// 居右对齐
				editHtml += '<a class="edit-btn edit-btn-justifyright" tip="居右对齐"><div class="icon icon-format_align_right"></div></a>';
				editHtml += '<span class="separator-line"></span>';
				// 有序列表
				editHtml += '<a class="edit-btn edit-btn-insertOrderedList" tip="有序列表"><div class="icon icon-format_list_numbered"></div></a>';
				// 无序列表
				editHtml += '<a class="edit-btn edit-btn-insertUnorderedList" tip="无序列表"><div class="icon icon-format_list_bulleted"></div></a>';
				// 表格
				editHtml += '<a class="edit-btn edit-btn-table" tip="表格"><div class="icon icon-table"></div></a>';
				// 添加引用文字
				editHtml += '<a class="edit-btn edit-btn-quote" tip="添加引用文字"><div class="icon icon-format_quote"></div></a>';
				// 添加代码
				editHtml += '<a class="edit-btn edit-btn-code" tip="添加代码"><div class="icon icon-code"></div></a>';
				editHtml += '</div>';
				editHtml += '</div>';
				editHtml += '<div class="edit-editor-body">';
				editHtml += '<div class="edit-body-container" contenteditable="true">';
				if (content=="") {
					editHtml += '<p><br /></p>';
				} else {
					editHtml += content;
				}
				editHtml += '</div>';
				editHtml += '</div>';
				$("#"+editId).append(editHtml);
				
				// 初始化返回回调函数
				if (settings.isInit) {
					callback();
				}
				
				// 固定工具栏
				if (fixedTop>=0) {
					var toolbarWidth = $("#"+editId+" .edit-toolbar").width();
					$(window).scroll(function() {
						var distanceFromTop = $("#"+editId).offset().top - document.documentElement.scrollTop;
						if (distanceFromTop<fixedTop) {
							$("#"+editId+" .edit-toolbar").css({
								"position" : "fixed",
								"top" : fixedTop + "px",
								"width" : toolbarWidth+"px",
								"z-index" : "900"
							});
						} else {
							$("#"+editId+" .edit-toolbar").css({
								"position" : "relative",
								"top" : "unset",
								"width" : "auto",
								"z-index" : "900"
							});
						}
					});
				}
				
				// 编辑器内容区域光标发生变化时，保存selection
				$("#"+editId+" .edit-body-container").bind("mouseup keyup", function() {
					// 保存当前范围
					saveCurRange();
					
					// 回调函数，返回完整html代码内容和纯文字内容
					callback();
				});
				
				// 图片上传
				var image = settings.image;
				if (image==null || image.dataType=="base64") {
					info.upload({
						type : "editImage",
						id : UUID,
						dataType : "base64",
						callback : function (rtn) {
							// 还原selection
							restoreSelection();
							// 插入图片
							execCommand("insertimage", false, rtn);
						}
					});
				} else {
					var isShowOptTip = image.isShowOptTip;
					if (!isShowOptTip) {
						isShowOptTip = false;
					}
					info.upload({
						type : "editImage",
						url : image.url,
						id : UUID,
						param : image.param,
						dataType : "url",
						isShowOptTip : isShowOptTip,
						callback : function (rtn) {
							$(".ex-opt-tip").remove();
							$(".mask").remove();
							// 还原selection
							restoreSelection();
							// 插入图片
							image.rtnData = rtn;
							if (!image.prefix) {
								if (image.imgUrl.split(".").length==2) {
									execCommand("insertimage", false, image.rtnData[image.imgUrl.split(".")[0]][image.imgUrl.split(".")[1]]);
								} else {
									execCommand("insertimage", false, image.rtnData[image.imgUrl]);
								}
							} else {
								if (image.imgUrl.split(".").length==2) {
									execCommand("insertimage", false, image.prefix+image.rtnData[image.imgUrl.split(".")[0]][image.imgUrl.split(".")[1]]);
								} else {
									execCommand("insertimage", false, image.prefix+image.rtnData[image.imgUrl]);
								}
							}
						}
					});
				}
				
				// 加粗
				var isBold = false;
				$("#"+editId+" .edit-btn-bold").bind("click", function() {
					var selection = restoreSelection();
					if (selection==null || selection.type!="Range") {
						info.curRange = null;
					}
					execCommand("bold", false, null);
					if (isBold) {
						isBold = false;
						$(this).removeClass("edit-active");
					} else {
						isBold = true;
						$(this).addClass("edit-active");
					}
					return false;
				});
				// 斜体
				var isItalic = false;
				$("#"+editId+" .edit-btn-italic").bind("click", function() {
					var selection = restoreSelection();
					if (selection==null || selection.type!="Range") {
						info.curRange = null;
					}
					execCommand("italic", false, null);
					if (isItalic) {
						isItalic = false;
						$(this).removeClass("edit-active");
					} else {
						isItalic = true;
						$(this).addClass("edit-active");
					}
					return false;
				});
				// 增加缩进
				$("#"+editId+" .edit-btn-indent").bind("click", function() {
					execCommand("indent", false, null);
					return false;
				});
				// 减少缩进
				$("#"+editId+" .edit-btn-outdent").bind("click", function() {
					execCommand("outdent", false, null);
					return false;
				});
				// 居左对齐
				$("#"+editId+" .edit-btn-justifyleft").bind("click", function() {
					execCommand("justifyLeft", false, null);
					return false;
				});
				// 居中对齐
				$("#"+editId+" .edit-btn-justifycenter").bind("click", function() {
					execCommand("justifyCenter", false, null);
					return false;
				});
				// 居右对齐
				$("#"+editId+" .edit-btn-justifyright").bind("click", function() {
					execCommand("justifyRight", false, null);
					return false;
				});
				// 外链音乐
				$("#"+editId+" .edit-btn-music").bind("click", function() {
					var html = '<div style="margin:-20px;">';
					html += '<div class="unit clear">';
					html += '<div class="left"><p class="subtitle">链接地址</p></div>';
					html += '<div class="right" style="width: auto;"><input type="text" class="text" style="width: 380px;" id="javaex-edit-music-href" autocomplete="off"/></div>';
					html += '</div>';
					html += '<div class="unit clear">';
					html += '<div class="left"><p class="subtitle">播放器宽高</p></div>';
					html += '<div class="right">';
					html += '<input type="text" class="text" id="javaex-edit-music-width" value="330" style="width: auto;" placeholder="宽" />';
					html += '<input type="text" class="text" id="javaex-edit-music-height" value="86" style="margin-left: 30px;width: auto;" placeholder="高" />';
					html += '</div>';
					html += '</div>';
					html += '</div>';
					
					info.alert({
						content : html,
						title : "外链音乐",
						width: "500px",
						callback : "javaex.musicCallback()"
					});
					
					return false;
				});
				// 外链视频
				$("#"+editId+" .edit-btn-video").bind("click", function() {
					var html = '<div style="margin:-20px;">';
					html += '<div class="unit clear">';
					html += '<div class="left"><p class="subtitle">链接地址</p></div>';
					html += '<div class="right" style="width: auto;"><input type="text" class="text" style="width: 380px;" id="javaex-edit-video-href" placeholder="支持优酷、bilibili" autocomplete="off"/></div>';
					html += '</div>';
					html += '<div class="unit clear">';
					html += '<div class="left"><p class="subtitle">播放器宽高</p></div>';
					html += '<div class="right">';
					html += '<input type="text" class="text" id="javaex-edit-video-width" value="640" style="width: auto;" placeholder="宽" />';
					html += '<input type="text" class="text" id="javaex-edit-video-height" value="400" style="margin-left: 30px;width: auto;" placeholder="高" />';
					html += '</div>';
					html += '</div>';
					html += '</div>';
					
					info.alert({
						content : html,
						title : "外链视频",
						width: "500px",
						callback : "javaex.videoCallback()"
					});
					
					return false;
				});
				// 超链接
				$("#"+editId+" .edit-btn-href").bind("click", function() {
					var html = '<div style="margin:-20px;">';
					html += '<div class="unit clear">';
					html += '	<div class="left"><p class="subtitle">链接地址</p></div>';
					html += '	<div class="right" style="width: auto;"><input type="text" class="text" style="width: 380px;" id="javaex-edit-href" autocomplete="off"/></div>';
					html += '</div>';
					html += '<div class="unit clear">';
					html += '	<div class="left"><p class="subtitle">标题</p></div>';
					html += '	<div class="right" style="width: auto;"><input type="text" class="text" style="width: 380px;" id="javaex-edit-hrefText" autocomplete="off"/></div>';
					html += '</div>';
					html += '<div class="unit clear">';
					html += '	<div class="left"><p class="subtitle">新标签</p></div>';
					html += '	<div class="right" style="width: auto;"><input type="checkbox" class="fill" name="javaex-href_blank" value="1" checked/>新标签打开</div>';
					html += '</div>';
					html += '</div>';
					info.alert({
						content : html,
						title : "超链接",
						width: "500px",
						callback : "javaex.hrefCallback()"
					});
					
					$(':checkbox[name="javaex-href_blank"]').each(function() {
						if ($(this).hasClass("fill")) {
							// 判断用户是否自己包裹了一层LABEL
							if ($(this).parent()[0].tagName=="LABEL") {
								$(this).parent().addClass("fill-label");
								// 先获取input之后的文本，保存起来
								var text = $(this)[0].nextSibling.nodeValue;
								// 清空input之后的文本
								$(this)[0].nextSibling.nodeValue = "";
							} else {
								// 先获取input之后的文本，保存起来
								var text = $(this)[0].nextSibling.nodeValue;
								// 清空input之后的文本
								$(this)[0].nextSibling.nodeValue = "";
								// 为input创建父节点
								$(this).wrap('<label class="fill-label"></label>');
							}
							
							if (!!text) {
								// 重新追加之前保存的input之后的文本
								text = text.replace(/(\s*$)/g, "");
								if (text.length==0) {
									$(this).parent().append('<span></span>');
								} else {
									$(this).parent().append('<span class="fill-text">' + text + '</span>');
								}
							}
							// 判断是否已存在span标签
							if ($(this).siblings().length==1) {
								$(this).after('<span class="fill-css icon-check" style="color: #fff;"></span>');
							}
						}
					});
					return false;
				});
				// 去除超链接
				$("#"+editId+" .edit-btn-unlink").bind("click", function() {
					execCommand("unlink", false, null);
					return false;
				});
				// 下划线
				var isUnderline = false;
				$("#"+editId+" .edit-btn-underline").bind("click", function() {
					var selection = restoreSelection();
					if (selection==null || selection.type!="Range") {
						info.curRange = null;
					}
					execCommand("underline", false, null);
					if (isUnderline) {
						isUnderline = false;
						$(this).removeClass("edit-active");
					} else {
						isUnderline = true;
						$(this).addClass("edit-active");
					}
					return false;
				});
				// 删除线
				var isStrikethrough = false;
				$("#"+editId+" .edit-btn-strikethrough").bind("click", function() {
					var selection = restoreSelection();
					if (selection==null || selection.type!="Range") {
						info.curRange = null;
					}
					execCommand("strikethrough", false, null);
					if (isStrikethrough) {
						isStrikethrough = false;
						$(this).removeClass("edit-active");
					} else {
						isStrikethrough = true;
						$(this).addClass("edit-active");
					}
					return false;
				});
				// 上标
				var isSuperscript = false;
				$("#"+editId+" .edit-btn-superscript").bind("click", function() {
					var selection = restoreSelection();
					if (selection==null || selection.type!="Range") {
						info.curRange = null;
					}
					execCommand("superscript", false, null);
					if (isSuperscript) {
						isSuperscript = false;
						$(this).removeClass("edit-active");
					} else {
						isSuperscript = true;
						$(this).addClass("edit-active");
					}
					return false;
				});
				// 下标
				var isSubscript = false;
				$("#"+editId+" .edit-btn-subscript").bind("click", function() {
					var selection = restoreSelection();
					if (selection==null || selection.type!="Range") {
						info.curRange = null;
					}
					execCommand("subscript", false, null);
					if (isSubscript) {
						isSubscript = false;
						$(this).removeClass("edit-active");
					} else {
						isSubscript = true;
						$(this).addClass("edit-active");
					}
					return false;
				});
				// 有序列表
				var isInsertOrderedList = false;
				$("#"+editId+" .edit-btn-insertOrderedList").bind("click", function() {
					execCommand("insertOrderedList", false, null);
					if (isInsertOrderedList) {
						isInsertOrderedList = false;
						$(this).removeClass("edit-active");
					} else {
						isInsertOrderedList = true;
						$("#"+editId+" .edit-btn-insertUnorderedList").removeClass("edit-active");
						$(this).addClass("edit-active");
					}
					return false;
				});
				// 无序列表
				var isInsertUnorderedList = false;
				$("#"+editId+" .edit-btn-insertUnorderedList").bind("click", function() {
					execCommand("insertUnorderedList", false, null);
					if (isInsertUnorderedList) {
						isInsertUnorderedList = false;
						$(this).removeClass("edit-active");
					} else {
						isInsertUnorderedList = true;
						$("#"+editId+" .edit-btn-insertOrderedList").removeClass("edit-active");
						$(this).addClass("edit-active");
					}
					return false;
				});
				// 分隔线
				$("#"+editId+" .edit-btn-insertHorizontalRule").bind("click", function() {
					execCommand("insertHTML", false, '<hr /><br />');
					return false;
				});
				// 全选
				$("#"+editId+" .edit-btn-selectAll").bind("click", function() {
					execCommand("selectAll", false, null);
					return false;
				});
				// 清除格式
				$("#"+editId+" .edit-btn-removeFormat").bind("click", function() {
					execCommand("removeFormat", false, null);
					return false;
				});
				// 字体颜色
				var isForeColor = false;
				$("#"+editId+" .edit-btn-foreColor").bind("click", function() {
					$(this).addClass("edit-active");
					$("#"+editId+" .edit-btn-backColor .edit-color-menu").hide();
					if ($("#"+editId+" .edit-btn-foreColor .edit-color-menu").length==0) {
						$(this).append(editColorMenu());
					} else {
						if ($("#"+editId+" .edit-btn-foreColor .edit-color-menu").is(':hidden')) {
							$("#"+editId+" .edit-btn-foreColor .edit-color-menu").show();
						}
					}
					$("#"+editId+" .edit-btn-foreColor .edit-color-menu input").bind("click", function(e) {
						$(this).parent().css("display", "none");
						var color = $(this).attr("color-val");
						execCommand("foreColor", false, color);
						e.stopPropagation();
						if (color=="Black") {
							$("#"+editId+" .edit-btn-foreColor .icon-format_color_text").css("color", "unset");
							$("#"+editId+" .edit-btn-foreColor").removeClass("edit-active");
						} else {
							$("#"+editId+" .edit-btn-foreColor .icon-format_color_text").css("color", color);
						}
					});
					return false;
				});
				// 背景颜色
				var isBackColor = false;
				$("#"+editId+" .edit-btn-backColor").bind("click", function() {
					$(this).addClass("edit-active");
					$("#"+editId+" .edit-btn-foreColor .edit-color-menu").hide();
					if ($("#"+editId+" .edit-btn-backColor .edit-color-menu").length==0) {
						$(this).append(editColorMenu());
					} else {
						if ($("#"+editId+" .edit-btn-backColor .edit-color-menu").is(':hidden')) {
							$("#"+editId+" .edit-btn-backColor .edit-color-menu").show();
						}
					}
					$("#"+editId+" .edit-btn-backColor .edit-color-menu input").bind("click", function(e) {
						$(this).parent().css("display", "none");
						var color = $(this).attr("color-val");
						execCommand("backColor", false, color);
						e.stopPropagation();
						if (color=="White") {
							$("#"+editId+" .edit-btn-backColor .icon-font_download").css("color", "unset");
							$("#"+editId+" .edit-btn-backColor").removeClass("edit-active");
						} else {
							$("#"+editId+" .edit-btn-backColor .icon-font_download").css("color", color);
						}
					});
					return false;
				});
				// 表格
				$("#"+editId+" .edit-btn-table").bind("click", function() {
					var html = '表格行数：<input type="text" class="text" id="javaex-edit-table-row-num" style="width:60px;" value="2" autocomplete="off"/>';
					html += '   表格列数：<input type="text" class="text" id="javaex-edit-table-col-num" style="width:60px;" value="2" autocomplete="off"/>';

					info.alert({
						content : html,
						title : "添加表格",
						width: "360px",
						callback : "javaex.tableCallback()"
					});
					return false;
				});
				
				// 点击空白处隐藏字体、字体大小、段落格式选择框
				$(document).click(function() {
					$("#"+editId+" .javaex-edit-family-select").hide();
					$("#"+editId+" .javaex-edit-size-select").hide();
					$("#"+editId+" .javaex-edit-format-select").hide();
					$("#"+editId+" .edit-color-menu").hide();
				});
				// 字体选择
				$("#"+editId+" .javaex-edit-family").bind("click", function() {
					restoreSelection();
					$("#"+editId+" .javaex-edit-size-select").hide();
					$("#"+editId+" .javaex-edit-format-select").hide();
					$("#"+editId+" .javaex-edit-family-select").show();
					event.stopPropagation();
				});
				$("#"+editId+" .javaex-edit-family-select > li").bind("click", function() {
					$(this).closest(".javaex-edit-family").find("i").text($(this).text());
					$(this).addClass("edit-combobox-checked").siblings().removeClass("edit-combobox-checked");
					$("#"+editId+" .javaex-edit-family-select").fadeOut();
					var selection = restoreSelection();
					if (selection==null || selection.type!="Range") {
						info.curRange = null;
					}
					execCommand("fontName", false, $(this).text());
				});
				// 字体大小
				$("#"+editId+" .javaex-edit-size").bind("click", function() {
					restoreSelection();
					$("#"+editId+" .javaex-edit-family-select").hide();
					$("#"+editId+" .javaex-edit-format-select").hide();
					$("#"+editId+" .javaex-edit-size-select").show();
					event.stopPropagation();
				});
				$("#"+editId+" .javaex-edit-size-select > li").bind("click", function() {
					var fontSize = $(this).text();
					var fontSizeText = "14px";
					switch (fontSize) {
						case "48":
							fontSize = 7;
							fontSizeText = "48px";
							break;
						case "32":
							fontSize = 6;
							fontSizeText = "32px";
							break;
						case "24":
							fontSize = 5;
							fontSizeText = "24px";
							break;
						case "18":
							fontSize = 4;
							fontSizeText = "18px";
							break;
						case "16":
							fontSize = 3;
							fontSizeText = "16px";
							break;
						case "14":
							fontSize = 2;
							fontSizeText = "14px";
							break;
						case "12":
							fontSize = 1;
							fontSizeText = "12px";
							break;
						default:
							fontSize = 3;
							fontSizeText = "16px";
							break;
					}
					$(this).closest(".javaex-edit-size").find("i").text($(this).text());
					$(this).addClass("edit-combobox-checked").siblings().removeClass("edit-combobox-checked");
					$("#"+editId+" .javaex-edit-size-select").fadeOut();
					var selection = restoreSelection();
					if (selection==null || selection.type!="Range") {
						info.curRange = null;
					}
					execCommand("fontSize", false, fontSize);
				});
				// 段落格式
				$("#"+editId+" .javaex-edit-format").bind("click", function() {
					restoreSelection();
					$("#"+editId+" .javaex-edit-family-select").hide();
					$("#"+editId+" .javaex-edit-size-select").hide();
					$("#"+editId+" .javaex-edit-format-select").show();
					event.stopPropagation();
				});
				$("#"+editId+" .javaex-edit-format-select > li").bind("click", function() {
					$(this).closest(".javaex-edit-format").find("i").text($(this).text());
					$(this).addClass("edit-combobox-checked").siblings().removeClass("edit-combobox-checked");
					$("#"+editId+" .javaex-edit-format-select").fadeOut();
					var selection = restoreSelection();
					if (selection==null || selection.type!="Range") {
						info.curRange = null;
					}
					execCommand("removeFormat", false, null);
					execCommand("formatBlock", false, $(this).text());
				});
				// 添加引用文字
				$("#"+editId+" .edit-btn-quote").bind("click", function() {
					info.alert({
						content : '<textarea id="javaex-edit-quote" wrap="hard" class="desc" style="height: 160px;"></textarea>',
						title : "请输入引用内容",
						width: "500px",
						callback : "javaex.quoteCallback()"
					});
					return false;
				});
				// 添加代码
				$("#"+editId+" .edit-btn-code").bind("click", function() {
					restoreSelection();
					execCommand("insertHTML", false, '<pre><code><br /></code></pre><p><br />');
				});
				
				/**
				 * 调色板
				 */
				function editColorMenu() {
					return '<div class="edit-color-menu"><input type="button" style="background-color: Black" title="黑色" color-val="Black"><input type="button" style="background-color: Sienna" color-val="Sienna" title="赭色"><input type="button" style="background-color: DarkOliveGreen" color-val="DarkOliveGreen" title="暗橄榄绿色"><input type="button" style="background-color: DarkGreen" color-val="DarkGreen" title="暗绿色"><input type="button" style="background-color: DarkSlateBlue" color-val="DarkSlateBlue" title="暗灰蓝色"><input type="button" style="background-color: Navy" color-val="Navy" title="海军色"><input type="button" style="background-color: Indigo" color-val="Indigo" title="靛青色"><input type="button" style="background-color: DarkSlateGray" color-val="DarkSlateGray" title="墨绿色"><input type="button" style="background-color: DarkRed" color-val="DarkRed" title="暗红色"><input type="button" style="background-color: DarkOrange" color-val="DarkOrange" title="暗桔黄色"><input type="button" style="background-color: Olive" color-val="Olive" title="橄榄色"><input type="button" style="background-color: Green" color-val="Green" title="绿色"><input type="button" style="background-color: Teal" color-val="Teal" title="水鸭色"><input type="button" style="background-color: Blue" color-val="Blue" title="蓝色"><input type="button" style="background-color: SlateGray" color-val="SlateGray" title="灰石色"><input type="button" style="background-color: DimGray" color-val="DimGray" title="暗灰色"><input type="button" style="background-color: Red" color-val="Red" title="红色"><input type="button" style="background-color: SandyBrown" color-val="SandyBrown" title="沙褐色"><input type="button" style="background-color: YellowGreen" color-val="YellowGreen" title="黄绿色"><input type="button" style="background-color: SeaGreen" color-val="SeaGreen" title="海绿色"><input type="button" style="background-color: MediumTurquoise" color-val="MediumTurquoise" title="间绿宝石"><input type="button" style="background-color: RoyalBlue" color-val="RoyalBlue" title="皇家蓝"><input type="button" style="background-color: Purple" color-val="Purple" title="紫色"><input type="button" style="background-color: Gray" color-val="Gray" title="灰色"><input type="button" style="background-color: Magenta" color-val="Magenta" title="红紫色"><input type="button" style="background-color: Orange" color-val="Orange" title="橙色"><input type="button" style="background-color: Yellow" color-val="Yellow" title="黄色"><input type="button" style="background-color: Lime" color-val="Lime" title="酸橙色"><input type="button" style="background-color: Cyan" color-val="Cyan" title="青色"><input type="button" style="background-color: DeepSkyBlue" color-val="DeepSkyBlue" title="深天蓝色"><input type="button" style="background-color: DarkOrchid" color-val="DarkOrchid" title="暗紫色"><input type="button" style="background-color: Silver" color-val="Silver" title="银色"><input type="button" style="background-color: Pink" color-val="Pink" title="粉色"><input type="button" style="background-color: Wheat" color-val="Wheat" title="浅黄色"><input type="button" style="background-color: LemonChiffon" color-val="LemonChiffon" title="柠檬绸色"><input type="button" style="background-color: White" color-val="White" title="白色"></div>';
				}

				/**
				 * 获取当前的范围
				 */
				function getCurRange() {
					var selection = null;
					var range = null;
					var parentElement = null;
					var oEditArea = $("#"+editId+" .edit-body-container")[0];
					//获取选中区域
					selection = window.document.getSelection();
					if (selection.getRangeAt && selection.rangeCount) {
						range = window.document.getSelection().getRangeAt(0);
						parentElement = range.commonAncestorContainer;
					}
					// 判断选中区域是否在编辑区域
					if (parentElement && (parentElement.id==oEditArea.id || window.jQuery.contains(oEditArea, parentElement))) {
						return range;
					}
				}
				
				/**
				 * 保存当前的范围
				 */
				function saveCurRange() {
					info.curRange = getCurRange();
				}
				
				/**
				 * 还原selection
				 */
				function restoreSelection() {
					var selection = null;
					if (!!info.curRange) {
						selection = window.document.getSelection();
						selection.removeAllRanges();
						selection.addRange(info.curRange);
					}
					return selection;
				}
				
				/**
				 * 插入数据
				 * command ： 指令
				 * mode ： 交互方式
				 * data ： 数据
				 */
				function execCommand(command, mode, data) {
					// 执行指令
					document.execCommand(command, mode, data);

					// 回调函数，返回完整html代码内容和纯文字内容
					callback();
				}
				
				/**
				 * 回调函数：返回完整html代码内容和纯文字内容
				 */
				function callback() {
					settings.callback({
						"html": $("#"+editId+" .edit-body-container").html().replace(/<(script)[\S\s]*?\1>/gi, "").replace(/\r\n/g, "<br/>").replace(/\n/g,"<br/>"),
						"text" : $("#"+editId+" .edit-body-container").text().replace(/<(script)[\S\s]*?\1>|<\/?(a|img)[^>]*>/gi, "").replace(/\r\n/g, "").replace(/\n/g, "").replace(/\<|\>|\&/g, "")
					});
				}
			},
			// 超链接回调
			hrefCallback : function() {
				var href = $("#javaex-edit-href").val();			// 超链接地址
				var hrefText = $("#javaex-edit-hrefText").val();	// 超链接显示文本
				var _blank = "0";									// 是否新标签打开
				if (!!href) {
					if (!hrefText) {
						hrefText = href;
					}
					if ($(':checkbox[name="javaex-href_blank"]').is(":checked")) {
						_blank = "1";
					}
					
					if (!!info.curRange) {
						var selection = null;
						selection = window.document.getSelection();
						selection.removeAllRanges();
						selection.addRange(info.curRange);
					}
					var hrefHtml = '<a href="'+href+'">'+hrefText+'</a>';
					if (_blank=="1") {
						hrefHtml = '<a href="'+href+'" target="_blank">'+hrefText+'</a>';
					}
					document.execCommand('insertHTML', false, hrefHtml);
				}
			},
			// 添加引用文字回调
			quoteCallback : function() {
				var quote = $("#javaex-edit-quote").val();
				if (!quote) {
					quote = "<br/>";
				}
				if (!!info.curRange) {
					var selection = null;
					selection = window.document.getSelection();
					selection.removeAllRanges();
					selection.addRange(info.curRange);
				}
				var quoteHtml = '<div class="javaex-edit-quote"><blockquote>'+quote+'</blockquote></div><br/>';
				document.execCommand('insertHTML', false, quoteHtml);
			},
			// 添加表格
			tableCallback : function() {
				var rowNum = $("#javaex-edit-table-row-num").val();
				var colNum = $("#javaex-edit-table-col-num").val();
				var html = '';
				html += '<table class="table unhover edit-table">';
				html += '	<tbody>';
				for (var row=0; row<rowNum; row++) {
					html += '	<tr>';
					for (var col=0; col<colNum; col++) {
						html += '	<td></td>';
					}
					html += '	</tr>';
				}
				html += '	</tbody>';
				html += '</table>';
				html += '<br/>';
				if (!!info.curRange) {
					var selection = null;
					selection = window.document.getSelection();
					selection.removeAllRanges();
					selection.addRange(info.curRange);
				}
				document.execCommand('insertHTML', false, html);
			},
			// 添加外链音乐
			musicCallback : function() {
				var href = $("#javaex-edit-music-href").val();
				var width = $("#javaex-edit-music-width").val();
				var height = $("#javaex-edit-music-height").val();
				
				if (!!href && !!width && !!height) {
					if (href.indexOf("http")<0) {
						href = "http:" + href;
					}
					var html = '<iframe frameborder="no" border="0" marginwidth="0" marginheight="0" width='+width+' height='+height+' src="'+href+'"></iframe>';
					
					if (!!info.curRange) {
						var selection = null;
						selection = window.document.getSelection();
						selection.removeAllRanges();
						selection.addRange(info.curRange);
					}
					document.execCommand('insertHTML', false, html);
				}
			},
			// 添加外链视频
			videoCallback : function() {
				var href = $("#javaex-edit-video-href").val();
				var width = $("#javaex-edit-video-width").val();
				var height = $("#javaex-edit-video-height").val();
				
				if (!!href && !!width && !!height) {
					// bilibili
					if (href.indexOf("bilibili")>=0) {
						href = href.replace("?", "\/");
						var substr = href.match(/av(\S*)\//);
						if (!!substr) {
							substr = substr[1];
						}
						href = "https://player.bilibili.com/player.html?aid=" + substr;
					}
					// youku
					else if (href.indexOf("youku")>=0) {
						var substr = href.match(/id_(\S*).html/);
						if (!!substr) {
							substr = substr[1];
						}
						href = "http://player.youku.com/embed/" + substr;
					}
					
					var html = '<iframe frameborder="no" border="0" marginwidth="0" marginheight="0" width='+width+' height='+height+' src="'+href+'"></iframe>';
					
					if (!!info.curRange) {
						var selection = null;
						selection = window.document.getSelection();
						selection.removeAllRanges();
						selection.addRange(info.curRange);
					}
					document.execCommand('insertHTML', false, html);
				}
			}
		};

		return info;
	};
	
	// 在窗口下方
	$.belowthefold = function(element, settings) {
		var fold;

		if (settings.container === undefined || settings.container === window) {
			fold = (window.innerHeight ? window.innerHeight : $(window).height()) + $(window).scrollTop();
		} else {
			fold = $(settings.container).offset().top + $(settings.container).height();
		}

		return fold <= $(element).offset().top - settings.threshold;
	};
	// 在窗口右方
	$.rightoffold = function(element, settings) {
		var fold;

		if (settings.container === undefined || settings.container === window) {
			fold = $(window).width() + $(window).scrollLeft();
		} else {
			fold = $(settings.container).offset().left + $(settings.container).width();
		}

		return fold <= $(element).offset().left - settings.threshold;
	};
	// 在窗口上方
	$.abovethetop = function(element, settings) {
		var fold;

		if (settings.container === undefined || settings.container === window) {
			fold = $(window).scrollTop();
		} else {
			fold = $(settings.container).offset().top;
		}

		return fold >= $(element).offset().top + settings.threshold  + $(element).height();
	};
	// 在窗口左方
	$.leftofbegin = function(element, settings) {
		var fold;

		if (settings.container === undefined || settings.container === window) {
			fold = $(window).scrollLeft();
		} else {
			fold = $(settings.container).offset().left;
		}

		return fold >= $(element).offset().left + settings.threshold + $(element).width();
	};
	
	window.javaex = javaex();
})();
