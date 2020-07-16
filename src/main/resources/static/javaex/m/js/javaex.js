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
				isInit : false,	// 是否初始化调用回调函数
				type : "",		// 类型
				
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
				
				// 弹出层属性
				mask : true,	// 是否有遮罩
				content : "",	// 弹出层内容
				confirmName : "确定",	// 确定按钮名称
				cancelName : "取消",	// 取消按钮名称
				callback : function() {return true;},	// 回调函数
				menu : "",	// 菜单弹出层内容
				live : 2000,	// 存在多少毫秒。1000毫秒=1秒
				marginTop : "",	// 距离顶部的距离
				marginBottom : "",	// 距离底部的距离
				delay : 2000,	// 延迟多少毫秒。1000毫秒=1秒
				title : "",		// 自定义弹出层的标题
				fill : "auto",	// 自定义弹出层的填充范围
				isShowCloseBtn : true,	// 是否显示底部的关闭按钮
				scriptArr : [],	// 自定义弹出层需要加载的JS

				// 幻灯片属性
				isAutoPlay : true,	// 是否自动轮播
				focusCenter : false,	// 焦点区域是否自动居中
				startSlide : 1,		// 开始切换的位置（即从第几张图开始切换），从1开始计
				
				// 图片懒加载
				effect : null,		// 切换效果，默认为淡入淡出
				threshold : 100,	// 提前开始加载
				event : "scroll",	// 事件触发时才加载
				container : window,
				dataOriginal : "data-original",	// 图片延迟加载时，从该属性中获取真正的图片地址
				appear : null,
				load : null,
				placeholder : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC",
				
				// 上滑加载数据（分页）
				loadDataFunction : "",	// 请求数据的函数
				loadData : "<div class='load-data'> </div>",			// 加载提示
				noData : "<div class='no-data'> 没有更多内容了，亲～ </div>",	// 没有更多内容了提示
				
				// tab选项卡切换
				hasUnderline : true,	// 选中项是否含有下划线
				current : 1,		// 默认显示第几个标签，从1开始计

				// 日期选择属性
				date : ""	// 默认显示哪一天
			};
			return $.extend(defaults, args);
		}

		var info = {
			// 生成一个不重复的id
			getUUID : function() {
				return Date.now().toString(36) + Math.random().toString(36).substr(3, 3);
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
			
			// 幻灯片
			slide : function(args) {
				var settings = defaults(args);
				var id = settings.id;
				// 是否自动轮播
				var isAutoPlay = settings.isAutoPlay;
				// 开始切换的位置（即从第几张图开始切换），从1开始计
				var startSlide = parseInt(settings.startSlide);
				var index = startSlide-1;
				
				var diffLeftX = 0;
				
				var slide = document.getElementById(id);
				var focusBg = document.querySelector("#"+id+" .focus-bg");
				var imgLi = document.querySelectorAll("#"+id+" .focus-bg li");
				var imgLiWidth = focusBg.offsetWidth;
				
				// 设置幻灯片容器的高度
				slide.style.height = imgLi[0].offsetHeight + "px";
				// 设置大图容器的宽度百分比
				focusBg.style.width = imgLi.length*100 + "%";
				// 设置每一张图片所占的百分比
				for (var i=0; i<imgLi.length; i++) {
					imgLi[i].style.width = 1/imgLi.length * 100 + "%";
				};
				
				// 自动轮播间隔多少毫秒
				var delay = parseInt(settings.delay);
				if (delay==200) {
					delay = 2000;
				}
				// 定时器
				var time = null;
				
				var $slide =  $("#"+id);
				var $self = $slide.find(".focus-bg li").eq(index).find("img");
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

				if (settings.isInit) {
					settings.callback({
						"index": index
					});
				}
				
				var slideBg = $slide.find(".focus-bg");
				var slideLi = slideBg.find("li");
				var count = slideLi.length;

				// 默认从第几张开始切换
				$slide.find(".focus-bg li").each(function(i) {
					if (i==index) {
						diffLeftX = -index*slide.offsetWidth;

						var leftX = -index*slide.offsetWidth + "px";
						$("#"+id+" .focus-bg").css("transition", "all .5s");
						$("#"+id+" .focus-bg").css("transform", "translate("+leftX+", 0)");
					}
				});
				// 默认显示的标题
				if ($slide.find(".focus-title").length>0) {
					$slide.find(".focus-title li").each(function(i) {
						if (i==index) {
							$(this).show();
						} else {
							$(this).hide();
						}
					});
				}

				// 焦点是否自动居中
				if (settings.focusCenter) {
					var box = $slide.find(".focus-box");
					box.css("margin-left", -(box.width()/2)+"px");
				}

				// 默认高亮的焦点
				if ($slide.find(".focus-box").length>0) {
					// 如果缺省焦点，则自动补充
					if ($slide.find(".focus-box ul").length==0) {
						var html = '<ul>';
						for (var i=0; i<count; i++) {
							html += '<li></li>';
						}
						html += '</ul>';
						$slide.find(".focus-box").empty();
						$slide.find(".focus-box").append(html);
					}
					$slide.find(".focus-box li").eq(index).addClass("on");
				}

				// 点击下一张
				$slide.find(".slide-next").on("click", function() {
					var old = index;
					if (index >= (count-1)) {
						index = 0;
					} else {
						index++;
					}
					change.call(slide, index, old);
				});

				// 点击上一张
				$slide.find(".slide-prev").on("click", function() {
					var old = index;
					if (index <= 0) {
						index = count - 1;
					} else {
						index--;
					}
					change.call(slide, index, old);
				});
				
				// 自动轮播
				autoPlay();

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
				
				function change(show, hide) {
					diffLeftX = -show*slide.offsetWidth;
					// 背景大图
					var leftX = -show*slide.offsetWidth + "px";
					$("#"+id+" .focus-bg").css("transition", "all .5s");
					$("#"+id+" .focus-bg").css("transform", "translate("+leftX+", 0)");
					// 标题
					$slide.find(".focus-title li").eq(hide).hide();
					$slide.find(".focus-title li").eq(show).show();
					// 焦点
					$slide.find(".focus-box li").removeClass("on");
					$slide.find(".focus-box li").eq(show).addClass("on");

					// 触发图片懒加载
					var $self = $slide.find(".focus-bg li").eq(show).find("img");
					if ($self.length==0) {
						$self = $slide.find(".focus-bg li").eq(show).find("a");
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
				
				// 初始化手指坐标点
				var startPointX = 0;
				var startEle = 0;
				//手指按下
				slide.addEventListener("touchstart", function(e) {
					if (isAutoPlay) {
						clearInterval(time);
					}
					startPointX = e.changedTouches[0].pageX;
					startEle = diffLeftX;
				});
				//手指滑动
				slide.addEventListener("touchmove", function(e) {
					if (isAutoPlay) {
						clearInterval(time);
					}
					e.preventDefault();
					var curPointX = e.changedTouches[0].pageX;
					var diffX = curPointX - startPointX;
					var left = startEle + diffX;
					diffLeftX = left;
					
					var leftX = left + "px";
					$("#"+id+" .focus-bg").css("transition", "all .5s");
					$("#"+id+" .focus-bg").css("transform", "translate("+leftX+", 0)");
				});
				//当手指抬起的时候，判断图片滚动离左右的距离
				slide.addEventListener("touchend", function(e) {
					if (isAutoPlay) {
						autoPlay();
					}
					
					var left = diffLeftX;
					// 判断正在滚动的图片距离左右图片的远近，以及是否为最后一张或者第一张
					var curNum = Math.round(-left/imgLiWidth);
					curNum = curNum>=(imgLi.length-1) ? imgLi.length-1 : curNum;
					curNum = curNum<=0 ? 0 : curNum;
					
					var old = index;
					
					if (index==curNum) {
						change.call(slide, index, index);
					} else {
						if (index<curNum) {
							if (index >= (count-1)) {
								index = 0;
							} else {
								index++;
							}
						} else {
							if (index <= 0) {
								index = count - 1;
							} else {
								index--;
							}
						}
						
						change.call(slide, index, old);
					}
				});
				
				
			},
			
			// 超出屏幕的tab滑动
			tabbar : function(args) {
				var settings = defaults(args);
				var tabId = settings.id;
				
				$("#"+tabId+">a").click(function() {
					$(this).addClass("activate").siblings().removeClass("activate");
				});
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

			// 普通弹出层
			alert : function(args) {
				var settings = defaults(args);

				// 生成随机id
				var UUID = info.getUUID();
				
				// 弹出层代码
				var alertHtml = '<div id=' + UUID + ' class="mask">';
				alertHtml += '<div class="container">';
				alertHtml += '<div class="dialog dialog-radius animated zoomIn">';
				alertHtml += '<div class="dialog-content">';
				alertHtml += settings.content;
				alertHtml += '</div>';
				alertHtml += '<div class="dialog-button-container">';
				alertHtml += '<button class="button dialog-button confirm" onclick="if('+settings.callback+'!=false)javaex.close(\''+UUID+'\');">' + settings.confirmName + '</button>';
				alertHtml += '</div>';
				alertHtml += '</div>';
				alertHtml += '</div>';
				alertHtml += '</div>';
				$(document.body).append(alertHtml);
			},

			// 确认选择弹出层
			confirm : function(args) {
				var settings = defaults(args);

				// 生成随机id
				var UUID = info.getUUID();

				// 弹出层代码
				var confirmHtml = '<div id=' + UUID + ' class="mask">';
				confirmHtml += '<div class="container">';
				confirmHtml += '<div class="dialog dialog-radius animated zoomIn">';
				confirmHtml += '<div class="dialog-content">';
				confirmHtml += settings.content;
				confirmHtml += '</div>';
				confirmHtml += '<div class="dialog-button-container">';
				confirmHtml += '<button class="button dialog-button confirm" onclick="if('+settings.callback+'!=false)javaex.close(\''+UUID+'\');">'+settings.confirmName+'</button>';
				confirmHtml += '<button class="button dialog-button" onclick="javaex.close(\''+UUID+'\');" style="border-left: 1px solid #e5e5e5;">'+settings.cancelName+'</button>';
				confirmHtml += '</div>';
				confirmHtml += '</div>';
				confirmHtml += '</div>';
				confirmHtml += '</div>';
				$(document.body).append(confirmHtml);
			},
			
			// 提示层
			tip : function(args) {
				var settings = defaults(args);
				var type = settings.type;
				
				// 生成随机id
				var UUID = info.getUUID();
				
				// 弹出层代码
				var tipHtml = '';
				if (type=="loading") {
					tipHtml += '<div class="tip-mask">';
					tipHtml += '<div style="margin: auto;">';
					tipHtml += '<div class="loading">';
					tipHtml += '<i></i>';
					tipHtml += '<p>' + settings.content + '</p>';
					tipHtml += '</div>';
					tipHtml += '</div>';
				} else {
					if (settings.mask) {
						tipHtml += '<div id=' + UUID + ' class="tip mask">';
					} else {
						tipHtml += '<div id=' + UUID + ' class="tip" style="pointer-events:none;">';
					}
					if (!!settings.marginTop) {
						tipHtml += '<div class="container" style="margin-top: '+settings.marginTop+';">';
					} else if (!!settings.marginBottom) {
						tipHtml += '<div class="container" style="margin-bottom: '+settings.marginBottom+';">';
					} else {
						tipHtml += '<div class="container">';
					}
					tipHtml += '<div class="tip-content">';
					tipHtml += settings.content;
					tipHtml += '</div>';
					tipHtml += '</div>';
					tipHtml += '</div>';
				}
				
				$(".tip-mask").remove();
				$(".tip").remove();
				$(document.body).append(tipHtml);
				
				setTimeout(function() {
					$("#"+UUID).remove();
				}, settings.live);
			},
			
			// 加载层
			loading : function(args) {
				var settings = defaults(args);
				$(document.body).append('<div id="javaex-loading"><div class="loading-screen"></div></div>');
				
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
			},
			
			// 高级弹出层
			dialog : function(args) {
				var settings = defaults(args);
				var type = settings.type;
				
				// 生成随机id
				var UUID = info.getUUID();
				var dialogHtml = '';

				if (type=="menu") {
					// 生成菜单html代码
					var json = settings.menu;
					var menuHtml = '';
					for (var key in json) {
						menuHtml += '<li><button class="button dialog-button" onclick="javaex.close(\''+UUID+'\');'+json[key]+';">'+key+'</button></li>';
					}
					menuHtml += '<li style="margin-top:5px;border-bottom: none;"><button class="button dialog-button" onclick="javaex.closeTranslate(\''+UUID+'\');" style="color: #e61e1e;">关闭</button></li>';
					
					// 弹出层代码
					dialogHtml = '<div id=' + UUID + ' class="popup" style="display: none;">';
					dialogHtml += '<div class="dialog" style="background-color: transparent;">';
					dialogHtml += '<div class="vertical">';
					dialogHtml += '<ul>';
					dialogHtml += menuHtml;
					dialogHtml += '</ul>';
					dialogHtml += '</div>';
					dialogHtml += '</div>';
					dialogHtml += '</div>';
				} else if (type=="html") {
					var fill = settings.fill;
					var title = settings.title;
					var scriptArr = settings.scriptArr;
					
					// 弹出层代码
					dialogHtml += '<div id=' + UUID + ' class="popup" style="display: none;">';
					if (title!="") {
						dialogHtml += '<div class="dialog-title">' + settings.title + '</div>';
						dialogHtml += '<span class="icon-close" style="position: absolute;right: 10px;top: 0;line-height: 1.25rem;font-size: 0.6rem;color:#666;" onclick="javaex.close(\'' + UUID + '\');"></span>';
					}
					dialogHtml += '<div class="operation">' + settings.content + '</div>';
					if (settings.isShowCloseBtn) {
						dialogHtml += '<div class="button-cancel" onclick="javaex.close(\''+UUID+'\');">关闭</div>';
					}
					dialogHtml += '</div>';
					if (scriptArr.length>0) {
						for (var i=0; i<scriptArr.length; i++) {
							dialogHtml += '<script src='+scriptArr[i]+'></script>';
						}
					}
				}
				
				$(document.body).append(dialogHtml);
				
				if (type=="html") {
					// 设置高度
					if (fill=="auto") {
						
					} else if (fill=="100%") {
						if (title=="") {
							$(".popup .operation").css("height", $(document).height()-$(".button-cancel").height()-32 + "px");
						} else {
							$(".popup .operation").css("height", $(document).height()-$(".dialog-title").height()-$(".button-cancel").height()-32 + "px");
						}
					} else {
						if (title=="") {
							$(".popup .operation").css("height", $(document).height()-$(document).height()*parseInt(fill)/100-$(".button-cancel").height()-32 + "px");
						} else {
							$(".popup .operation").css("height", $(document).height()-$(document).height()*parseInt(fill)/100-$(".dialog-title").height()-$(".button-cancel").height()-32 + "px");
						}
					}
				}
				
				// 添加遮罩
				$("#"+UUID).before('<div class="mask"></div>');
				// 显示弹出层
				$("#"+UUID).show();
				$("#"+UUID).addClass("modal-in");
				
				// 点击遮罩隐藏
				$(".mask").click(function() {
					$(".mask").remove();
					$("#"+UUID).css("transform", "translateY(100%)");
					setTimeout(function() {
						info.close(UUID);
					}, 300);
				});
			},
			closeTranslate : function(UUID) {
				$(".mask").remove();
				$("#"+UUID).css("transform", "translateY(100%)");
				setTimeout(function() {
					info.close(UUID);
				}, 300);
			},
			
			// 关闭弹出层
			close : function(UUID) {
				if (!UUID) {
					$(".mask").remove();
				} else {
					$("#"+UUID).remove();
					$(".mask").remove();
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
							return;
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

			// 导航
			nav : function(args) {
				var settings = defaults(args);

				// 左侧滑动菜单
				if (settings.type=="slide") {
					// 判断是否存在底部功能栏
					if ($("#slide-bottom")!=null) {
						var height = $("#slide-bottom").height();
						// 重新设置导航菜单的高度
						$("#slide-list").css("height", "calc(100% - " + (160+height) + "px)");
					}

					// 添加遮罩
					$("#slide-nav").before('<div class="mask"></div>');
					// 显示导航
					$("#slide-nav").css("transform", "translateX(" + $("#slide-nav").width() + "px)");

					// 点击遮罩隐藏导航
					$(".mask").click(function() {
						$(".mask").remove();
						$("#slide-nav").css("transform", "translateX(0px)");
					});
				} else if (settings.type=="guide") {
					// 为子级 ul 添加和去除 active 属性
					if ($("#guide-nav > ul").hasClass("active")) {
						$("#guide-nav > ul").removeClass("active");
						$("#guide-nav ul").css("height", "1rem");
					} else {
						// 查询 li 的个数
						var liCount = $("#guide-nav > ul > li").length;
						// 判断可以分成几行 2.1表示视为3
						var row = Math.ceil((liCount+1)/5);
						$("#guide-nav > ul").addClass("active");
						// 设置高度
						$("#guide-nav ul.active").css("height", (row+0.2) + "rem");
					}
				}
			},

			// 滚动公告
			roll : function(args) {
				var settings = defaults(args);
				
				var fn = function() {
					$("#" + settings.id).find("ul:first").animate({
						"margin-top": "-0.5rem"
					}, 2000, function() {
						$(this).css("margin-top", 0).find("li:first").appendTo(this);
					});
				};

				// setInterval() 方法可按照指定的周期（以毫秒计）来调用函数或计算表达式。
				setInterval(fn, settings.delay);
			},

			// 以下这些属性相当于全局变量，用于重复赋值与使用
			loadDataFunction : "",	// 请求数据的函数
			isDataLoaded : false,	// 是否已滚动加载
			isOver : "",			// 哪一块内容区域已经没有更多数据了
			documentHeight : "",	// 文档高度
			loadDistance : 0,	// 滑到哪里开始触发加载
			windowHeight : "",	// 屏幕高度
			loadData : "",
			noData : "",
			setPageInit : function() {
				info.loadDataFunction = "";
				info.isDataLoaded = false;
				info.isOver = "";
				info.documentHeight = "";
				info.loadDistance = 0;
				info.windowHeight = "";
				info.loadData = "";
				info.noData = "";
			},
			// 上拉加载，相当于分页
			page : function(args) {
				var settings = defaults(args);
				var pageId = settings.id;
				
				info.loadDataFunction = settings.loadDataFunction;
				info.documentHeight = $(document).height();
				info.windowHeight = document.documentElement.clientHeight;
				info.loadData = settings.loadData;
				info.noData = settings.noData;
				
				init();

				function init() {
					// 事先在下方插入加载占位div
					var obj = document.getElementById("infinite-scroll-preloader-"+pageId);
					if (obj==null) {
						$("#"+pageId).after('<div id="infinite-scroll-preloader-'+pageId+'" class="infinite-scroll-preloader"></div>');
					}

					// 判断是否存在固定底部的footer
					var oFooter = document.getElementById("footer");
					if (oFooter!=null) {
						// 判断底部固定是否是可见的
						if ($("#footer").is(":visible")==true) {
							// 为站位加载区域添加下边距
							$("#infinite-scroll-preloader-"+pageId).css("margin-bottom", oFooter.offsetHeight + "px");
						}
					}
	
					// 滑到站位加载区2/3处时加载数据
					info.loadDistance = Math.floor($("#infinite-scroll-preloader-"+pageId).height()*(1/3));
					if (info.loadDistance==0) {
						info.loadDistance = 90;
					}
					// 加载下方数据
					$(window).on('scroll',function() {
						// 滚动页面触发加载数据
						if (!info.isDataLoaded
							&& info.isOver!=pageId
							&& (info.documentHeight-info.loadDistance) <= (info.windowHeight+$(window).scrollTop())) {
							info.loadDown(pageId);
						}
					});

					// 自动向下方加载数据，直至充满整个屏幕
					info.autoLoad(pageId);
				}
			},
			// 设置上滑加载已无数据
			over : function(pageId) {
				info.isOver = pageId;
			},
			// 如果文档高度不大于窗口高度，数据较少，自动向下方加载数据
			autoLoad : function(pageId) {
				if ((info.documentHeight-info.loadDistance) <= info.windowHeight) {
					info.loadDown(pageId);
				}
			},
			// 向下方加载数据
			loadDown : function(pageId) {
				$("#infinite-scroll-preloader-"+pageId).html(info.loadData);
				info.isDataLoaded = true;
				info.loadDataFunction();
			},
			// 重置上滑加载的一些属性
			resetLoad : function(pageId) {
				// 重新设置文档的高度
				info.documentHeight = $(document).height();
				
				info.isDataLoaded = false;
				if (info.isOver==pageId) {
					$("#infinite-scroll-preloader-"+pageId).html(info.noData);
				} else {
					info.autoLoad();
				}
			},

			// tab选项卡切换
			tab : function(args) {
				var settings = defaults(args);
				var tabId = settings.id;
				var current = settings.current;
				var type = settings.type;
				var hasUnderline = settings.hasUnderline;
				
				// 水平
				if (type=="" || type=="level") {
					// 添加下划线样式
					if (hasUnderline) {
						$("#" + tabId + " > ul").append('<b class="border"></b>');
					}

					// 判断当前有多少个选项卡
					var tabNum = $("#" + tabId + " > ul li").length;
					// 为每个选项卡设置宽度
					$("#" + tabId + " > ul li").css("width", (100/tabNum) + "%");
					// 为下划线设置宽度
					if (hasUnderline) {
						$("#" + tabId + " > ul .border").css("width", (100/tabNum) + "%");
					}

					// 为当前选中的选项卡添加选中属性
					$("#" + tabId + " > ul li").each(function(i) {
						if (i==(current-1)) {
							$(this).addClass("current");
							if (hasUnderline) {
								$("#" + tabId + " > ul .border").css("left", $(this).offset().left + "px");
							}
						}
					});
				} else {
					// 垂直
					// 为当前选中的选项卡添加选中属性
					$("#" + tabId + " > ul li").each(function(i) {
						if (i==(current-1)) {
							$(this).addClass("current");
						}
					});
				}
				
				// 显示当前选中的选项卡的内容，隐藏其他选项卡的内容
				$("#" + tabId).siblings(".tab-content").children("div").each(function(i) {
					if (i==(current-1)) {
						$(this).css("display", "block");
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
				
				// tab切换事件
				$("#" + tabId + " > ul li").click(function() {
					// 给标题添加样式
					$(this).addClass("current").siblings().removeClass("current");
					if (hasUnderline) {
						$("#" + tabId + " > ul .border").css("left", $(this).offset().left + "px");
					}
					$("#" + tabId).siblings(".tab-content").children("div:eq(" + $(this).index() + ")").show().siblings().hide();
					// 触发图片懒加载机制
					$(settings.container).trigger(settings.event);
					// 设置回调函数，返回选项卡的索引，从1开始计
					settings.callback({
						"index": $(this).index()+1
					});
				});
			},
			
			// 日期时间
			date : function(args) {
				var settings = defaults(args);
				var dateId = settings.id;

				// 创建数据
				var now = new Date();
				// 年
				var yearList = '';
				for (var i=1900; i<=parseInt(now.getFullYear()+50); i++) {
					yearList += '<li class="date-li date-show">'+i+'</li>';
				}
				// 月
				var monthList = '';
				for (var i=1; i<=12; i++) {
					if (i<10) {
						i = "0" + i;
					}
					monthList += '<li class="date-li date-show">'+i+'</li>';
				}
				// 日
				var dayList = '';
				for (var i=1; i<=31; i++) {
					if (i<10) {
						i = "0" + i;
					}
					dayList += '<li class="date-li date-show">'+i+'</li>';
				}

				// 日期选择器面板代码
				var dateHtml = '<div id="date-box-'+dateId+'" class="control-mask" style="display: none;">';
				dateHtml += '<div class="container">';
				dateHtml += '<div class="dialog animated fadeInUpSmall">';
				dateHtml += '<div id="final-date-text-'+dateId+'" style="margin:0.1rem 0;"></div>';
				dateHtml += '<input type="hidden" id="final-date-value-'+dateId+'" value="" />';
				dateHtml += '<div class="dialog-content">';
				dateHtml += '<table style="width:100%;">';
				dateHtml += '<thead>';
				dateHtml += '<tr>';
				dateHtml += '<th style="width:34%;">年</th>';
				dateHtml += '<th style="width:33%;">月</th>';
				dateHtml += '<th style="width:33%;">日</th>';
				dateHtml += '</tr>';
				dateHtml += '</thead>';
				dateHtml += '<tbody>';
				dateHtml += '<tr>';
				dateHtml += '<td style="width:34%;">';
				dateHtml += '<div id="year-'+dateId+'" style="position:relative;height:5rem;overflow:hidden;">';
				dateHtml += '<ul class="date-ul" style="transform: translate(0px, 0px);transition: all 0.4s;">';
				dateHtml += '</ul>';
				dateHtml += '</div>';
				dateHtml += '</td>';
				dateHtml += '<td style="width:33%;position:relative;overflow:hidden;">';
				dateHtml += '<div id="month-'+dateId+'" style="position:relative;height:5rem;overflow:hidden;">';
				dateHtml += '<ul class="date-ul" style="transform: translate(0px, 0px);transition: all 0.4s;">';
				dateHtml += '</ul>';
				dateHtml += '</div>';
				dateHtml += '</td>';
				dateHtml += '<td style="width:33%;position:relative;overflow:hidden;">';
				dateHtml += '<div id="day-'+dateId+'" style="position:relative;height:5rem;overflow:hidden;">';
				dateHtml += '<ul class="date-ul" style="transform: translate(0px, 0px);transition: all 0.4s;">';
				dateHtml += '</ul>';
				dateHtml += '</div>';
				dateHtml += '</td>';
				dateHtml += '</tr>';
				dateHtml += '</tbody>';
				dateHtml += '</table>';
				dateHtml += '</div>';
				dateHtml += '<div class="dialog-button-container">';
				dateHtml += '<button id="date-cancel-'+dateId+'" class="button dialog-button" style="border-right: 1px solid #e5e5e5;">取消</button>';
				dateHtml += '<button id="date-ok-'+dateId+'" class="button dialog-button confirm">确定</button>';
				dateHtml += '</div>';
				dateHtml += '</div>';
				dateHtml += '</div>';
				dateHtml += '</div>';

				$(document.body).append(dateHtml);
				// 添加遮罩
				$("#date-box-"+dateId+" table ul").after('<div class="mask-data"><div class="mask-up"></div><div class="mask-mid"></div><div class="mask-down"></div></div>');

				var isStart = true;
				var isMove = false;
				var isEnd = false;
				var startY = 0; // 当前触摸时的Y坐标
				var lastY = 0;	// 上一次触摸时的Y坐标
				var nowElement = null;	// 当前滚动的ul
				var liLength = 0;		// 当前滚动的ul下的li数量
				var nY = 0;
				var mY = 0;
				var endY = 0;
				var maxY = 0;
				var minY = 0;
				var nowY = 0;
				var liHeight = $(".mask-mid").height();
				
				var year = "";
				var month = "";
				var day = "";
				
				// 用于缓动的变量
				var lastMoveTime = 0;
				var lastMoveStart = 0;
				var totalDistance = 0;		// 移动总距离
				var stopInertiaMove = false;// 是否停止缓动

				init();
				if (settings.date=="" || settings.date==null || settings.date==undefined) {
				
				} else {
					// 关闭日期选择框，并把结果回显到输入框
					close(true);
				}
				
				// 绑定日期框的点击事件
				$("#"+dateId).bind("click", function() {
					init();
					// 显示日历
					$("#date-box-"+dateId).show();
					return;
				});

				// 日期选择确定按钮的点击事件
				$("#date-ok-"+dateId).bind("click", function() {
					close(true);
					// 设置回调函数，返回一个时间对象，包含所选日期
					settings.callback({
						"date": $("#final-date-text-"+dateId).text()
					});
					return;
				});
				// 日期选择关闭按钮的点击事件
				$("#date-cancel-"+dateId).bind("click", function() {
					close();
					return;
				});
				
				/**
				 * 日期选择初始化
				 */
				function init() {
					// 清空列表的内容
					$("#year-"+dateId+" ul").empty();
					$("#month-"+dateId+" ul").empty();
					$("#day-"+dateId+" ul").empty();
					// 为列表添加内容
					$("#year-"+dateId+" ul").html(yearList);
					$("#month-"+dateId+" ul").html(monthList);
					$("#day-"+dateId+" ul").html(dayList);
					
					// 判断是否已经选择过日期了
					var date = $("#final-date-value-"+dateId).val();
					if (date=="" || date==null || date==undefined) {
						// 判断用户是否自定义了日期
						if (settings.date=="" || settings.date==null || settings.date==undefined) {
							// 不变，默认显示系统日期
						} else {
							// 分割年月日
							var arr = settings.date.split("-");
							// 返回日期格式
							now = new Date(arr[0], arr[1]-1, arr[2]);
						}
					} else {
						// 分割年月日
						var arr = date.split("-");
						// 返回日期格式
						now = new Date(arr[0], arr[1]-1, arr[2]);
					}
					
					year = now.getFullYear();
					month = ((now.getMonth()+1)<10?"0":"")+(now.getMonth()+1);
					day = (now.getDate()<10?"0":"")+now.getDate();

					// 获取当前月应该有多少天
					var curMonthDays = new Date(year, month, 0).getDate();
					var dif = curMonthDays-31;
					// 隐藏多余的天数
					if (dif<0) {
						var moveY = getTranslateY($("#day-"+dateId+" .date-ul"));
						for (var i=0; i>dif; i--) {
							$("#day-"+dateId+" .date-ul > li:eq("+[31-1+i]+")").removeClass("date-show").addClass("date-hide");
						}
					}
					
					// 默认选择年月日
					$("#year-"+dateId+" .date-ul .date-li").each(function() {
						if (parseInt($(this).text())==parseInt(year)) {
							var positionY = -($(this).index()-2)*liHeight;
							$(this).parent().css("transform", "translate(0, "+positionY+"px)");
						}
					});
					$("#month-"+dateId+" .date-ul .date-li").each(function() {
						if (parseInt($(this).text())==parseInt(month)) {
							var positionY = -($(this).index()-2)*liHeight;
							$(this).parent().css("transform", "translate(0, "+positionY+"px)");
						}
					});
					$("#day-"+dateId+" .date-ul .date-li").each(function() {
						if (parseInt($(this).text())==parseInt(day)) {
							var positionY = -($(this).index()-2)*liHeight;
							$(this).parent().css("transform", "translate(0, "+positionY+"px)");
						}
					});
					// 填充日期
					$("#final-date-text-"+dateId).html(year+"-"+month+"-"+day);
				}

				// 绑定滚动事件
				var oScrollList = document.querySelectorAll("#date-box-"+dateId+" .mask-data");
				for (var i=0; i<oScrollList.length; i++) {
					// 当手指触摸屏幕时候触发，即使已经有一个手指放在屏幕上也会触发
					oScrollList[i].addEventListener("touchstart", function (event) {
						event.preventDefault();

						// 记录当前触摸时的Y坐标
						startY = event.touches[0].clientY;
						// 记录上一次触摸时的Y坐标
						lastY = startY;
						nowElement = $(this).prev(".date-ul");
						liLength = nowElement.find(".date-show").length;
						nY = getTranslateY(nowElement);
						if (!isMove && isEnd) {
							return false;
						}
						isStart = false;
						isMove = false;
						
						// 缓动代码
						lastMoveStart = lastY;
						lastMoveTime = new Date().getTime();
						stopInertiaMove = true;
					}, false);

					// 当手指在屏幕上滑动的时候连续地触发。在这个事件发生期间，调用preventDefault()事件可以阻止滚动
					oScrollList[i].addEventListener("touchmove", function (event) {
						event.preventDefault();

						mY = event.touches[0].clientY;
						if (!isStart) {
							isMove = true;
							isEnd = true;
						}
						if (isMove) {
							nowElement.css("transition", "none");
							nowElement.css("transform", "translate(0, "+-(nY-(mY-startY))+"px)");
						}
						
						// 缓动代码
						var nowTime = new Date().getTime();
						stopInertiaMove = true;
						if ((nowTime - lastMoveTime)>300) {
							lastMoveTime = nowTime;
							lastMoveStart = mY;
						}
					}, false);

					// 当手指从屏幕上离开的时候触发
					oScrollList[i].addEventListener("touchend", function (event) {
						event.preventDefault();

						endY = event.changedTouches[0].clientY;
						maxY = liHeight*2;
						minY = -(liLength-3)*liHeight;
						if (isEnd) {
							isMove = false;
							isEnd = false;
							isStart = true;
							nY = -(nY-(mY-startY));
							nowY = endY;

							// 修正位置
							if (nY>maxY) {
								nowElement.css("transition", "all .5s");
								nowElement.css("transform", "translate(0, "+maxY+"px)");
							} else if (nY<minY) {
								nowElement.css("transition", "all .5s");
								nowElement.css("transform", "translate(0, "+minY+"px)");
							} else {
								// 缓动代码
								var endTime = new Date().getTime();
								//最后一段时间手指划动速度
								var v = (nowY-lastMoveStart)/(endTime-lastMoveTime);
								stopInertiaMove = false;
								(function(v, lastMoveTime, contentY) {
									// 加速度方向
									var dir = v > 0 ? -1 : 1;
									// 减速率 0.0006 为减速时间
									var deceleration = dir*0.0006;
									function inertiaMove() {
										if (stopInertiaMove) {
											return;
										}
										var nowTime = new Date().getTime();
										var t = nowTime - lastMoveTime;
										// 当前速度
										var nowV = v + t * deceleration;
										var moveY = (v + nowV) / 2 * t;
										// 减速停止过程
										if (dir*nowV>0) {
											// 移动总距离大于最大值时，修正回弹
											if (totalDistance>maxY) {
												nowElement.css("transition", "all .5s");
												nowElement.css("transform", "translate(0, "+maxY+"px)");
											} else if (totalDistance<minY) {
												// 同上，修正回弹
												nowElement.css("transition", "all .5s");
												nowElement.css("transform", "translate(0, "+minY+"px)");
											} else {
												nowElement.css("transition", "all .5s");
												nowElement.css("transform", "translate(0, "+Math.round(totalDistance/liHeight)*liHeight+"px)");
											}
											// 获取并填充日期
											setTimeout(function() {
												fillDate(nowElement.parent().attr("id"));
											}, 500);
											return;
										}
										// 当前移动距离
										totalDistance = contentY + moveY;
										if (totalDistance>(maxY+(liHeight*2))) {
											nowElement.css("transition", "all .5s");
											nowElement.css("transform", "translate(0, "+maxY+"px)");
											return;
										} else if (totalDistance<(minY-(liHeight*2))) {
											nowElement.css("transition", "all .5s");
											nowElement.css("transform", "translate(0, "+minY+"px)");
											return;
										}
										nowElement.css("transform", "translate(0, "+totalDistance+"px)");
										// 获取并填充日期
										setTimeout(function() {
											fillDate();
										}, 500);
										setTimeout(inertiaMove, 10);
									}
									inertiaMove();
								})(v, endTime, nY);
							}

							// 获取并填充日期
							setTimeout(function() {
								fillDate();
							}, 500);
						}
					}, false);
				}

				/**
				 * 获取并填充日期
				 */
				function fillDate(id) {
					var currentY = 0;
					$("#date-box-"+dateId+" .date-ul").each(function(index) {
						currentY = getTranslateY(this);
						var value = "";
						if (currentY==0) {
							value = $($(this).find(".date-li")[2]).text();
						} else {
							value = $($(this).find(".date-li")[Math.round(currentY/liHeight)+2]).text();
						}
						if (index==0) {
							year = value;
						} else if (index==1) {
							month = value;
						} else if (index==2) {
							day = value;
						}
					});

					// 修改天数
					if (id!=undefined && id!=null) {
						if (id=="year-"+dateId || id=="month-"+dateId) {
							// 获取当前月应该有多少天
							var curMonthDays = new Date(year, month, 0).getDate();
							// 获取目前列表中的天数
							var curDays = $("#day-"+dateId+" .date-ul .date-show").length;
							var dif = curMonthDays-curDays;
							if (dif>0) {
								// 显示被隐藏的天数
								for (var i=0; i<dif; i++) {
									$("#day-"+dateId+" .date-ul > li:eq("+[curDays+i]+")").removeClass("date-hide").addClass("date-show");
								}
							} else if (dif<0) {
								var moveY = getTranslateY($("#day-"+dateId+" .date-ul"));
								// 隐藏多余的天数
								for (var i=0; i>dif; i--) {
									$("#day-"+dateId+" .date-ul > li:eq("+[curDays-1+i]+")").removeClass("date-show").addClass("date-hide");
								}

								// 自动重新滚动天数
								if (moveY>(curMonthDays-1-2)*liHeight) {
									$("#day-"+dateId+" .date-ul").css("transition", "all 0s");
									$("#day-"+dateId+" .date-ul").css("transform", "translate(0, "+-(curMonthDays-1-2)*liHeight+"px)");
									
									// 重新对日期赋值
									day = curMonthDays;
								}
							}
						}
					}
					
					// 将最终日期显示在头部
					$("#final-date-text-"+dateId).html(year+"-"+month+"-"+day);
					$("#final-date-value-"+dateId).val(year+"-"+month+"-"+day);
				}

				function getTranslateY(element) {
					var matrix = $(element).css("transform");
					var translateY = 0;
					if (matrix!="none") {
						var arr = matrix.split(",");
						translateY = -(arr[5].split(")")[0]);
					}
					return translateY;
				}
				
				/**
				 * 关闭日期选择框
				 * isOk : 判断是否是点击确定按钮关闭的 
				 */
				function close(isOk) {
					if (isOk) {
						$("#final-date-value-"+dateId).val(year+"-"+month+"-"+day);
						
						// 把时间显示到页面
						var obj = document.getElementById(dateId);
						if (obj && obj.tagName=="INPUT") {
							$("#"+dateId).val($("#final-date-text-"+dateId).text());
						} else {
							$("#"+dateId).html($("#final-date-text-"+dateId).text());
						}
					}
					// 隐藏日历框
					$("#date-box-"+dateId).css("display", "none");
				}
			},
			
			// select选择框
			firstIndex : 0,	// 第一个可见项的索引
			lastIndex  : 0,	// 最后一个可见项的索引
			isSearchInit : false,	// 是否搜索过后就没再次滚动
			select : function(args) {
				var settings = defaults(args);
				var selectId = settings.id;
				
				// 判断是否已经存在input元素
				var obj = document.getElementById("input-"+selectId);
				if (obj==null) {
					$("#"+selectId).before('<input id="input-'+selectId+'" type="text" placeholder="点击选择" value="" readonly />');
				}
				// 将select框隐藏起来
				$("#"+selectId).hide();
				
				// select选择框面板代码
				var selectHtml = '<div id="select-box-'+selectId+'" class="control-mask" style="display: none;">';
				selectHtml += '<div class="container">';
				selectHtml += '<div class="dialog animated fadeInUpSmall">';
				selectHtml += '<div class="search-input">';
				selectHtml += '<input type="text" id="search-'+selectId+'" placeholder="输入关键字...">';
				selectHtml += '<a href="javascript:;" class="icon" onclick="javaex.selectSearch(\''+selectId+'\')"><span class="icon-search"></span></a>';
				selectHtml += '</div>';
				selectHtml += '<div class="dialog-content">';
				selectHtml += '<div id="opt-select-'+selectId+'" style="position:relative;height:5rem;overflow:hidden;">';
				selectHtml += '<ul class="select-ul" style="transform: translate(0px, 0px);transition: all 0.4s;">';
				selectHtml += '</ul>';
				selectHtml += '</div>';
				selectHtml += '</div>';
				selectHtml += '<div class="dialog-button-container">';
				selectHtml += '<button id="select-cancel-'+selectId+'" class="button dialog-button" style="border-right: 1px solid #e5e5e5;">取消</button>';
				selectHtml += '<button id="select-ok-'+selectId+'" class="button dialog-button confirm">确定</button>';
				selectHtml += '</div>';
				selectHtml += '</div>';
				selectHtml += '</div>';
				selectHtml += '</div>';

				$(document.body).append(selectHtml);
				$("#select-box-"+selectId+" ul").after('<div id="mask-data-'+selectId+'" class="mask-data"><div class="mask-up"></div><div class="mask-mid"></div><div class="mask-down"></div></div>');
				
				var isStart = true;
				var isMove = false;
				var isEnd = false;
				var startY = 0; // 当前触摸时的Y坐标
				var lastY = 0;	// 上一次触摸时的Y坐标
				var nowElement = null;	// 当前滚动的ul
				var liLength = 0;		// 当前滚动的ul下的li数量
				var nY = 0;
				var mY = 0;
				var endY = 0;
				var maxY = 0;
				var minY = 0;
				var nowY = 0;
				var liHeight = $(".mask-mid").height();
				
				// 用于缓动的变量
				var lastMoveTime = 0;
				var lastMoveStart = 0;
				var totalDistance = 0;		// 移动总距离
				var stopInertiaMove = false;// 是否停止缓动
				
				// 判断select是否已有默认值
				var selectValue = $("#"+selectId).val();
				var selectName = "";
				
				init();
				close(true);
				
				// 绑定select选择框的点击事件
				$("#input-"+selectId).bind("click", function() {
					init();
					// 显示select选择框
					$("#select-box-"+selectId).show();
					return;
				});
				
				// select选择确定按钮的点击事件
				$("#select-ok-"+selectId).bind("click", function() {
					close(true);
					return;
				});
				// select选择关闭按钮的点击事件
				$("#select-cancel-"+selectId).bind("click", function() {
					close();
					return;
				});
				
				/**
				 * select选择初始化
				 */
				function init() {
					// 清空列表的内容
					$("#opt-select-"+selectId+" ul").empty();
					// 为列表添加内容
					$("#opt-select-"+selectId+" ul").html($("#"+selectId).html());
					// 添加属性
					$("#opt-select-"+selectId+" option").addClass("select-option option-show");
					// 选中默认值
					$("#opt-select-"+selectId+" option").each(function() {
						if ($(this).attr("value")==selectValue) {
							var positionY = -($(this).index()-2)*liHeight;
							$(this).parent().css("transform", "translate(0, "+positionY+"px)");
						}
					});
					// 关闭select选择框，并把结果回显到页面
					selectName =$("#"+selectId).find("option:selected").text();
					
					// 初始化第一个索引和最后一个索引
					info.firstIndex = 0;
					info.lastIndex = $("#opt-select-"+selectId+" ul option").length - 1;
				}
				
				// 绑定滚动事件
				var oScroll = document.getElementById("mask-data-"+selectId);
				// 当手指触摸屏幕时候触发，即使已经有一个手指放在屏幕上也会触发
				oScroll.addEventListener("touchstart", function (event) {
					event.preventDefault();

					// 记录当前触摸时的Y坐标
					startY = event.touches[0].clientY;
					// 记录上一次触摸时的Y坐标
					lastY = startY;
					nowElement = $(this).prev(".select-ul");
					liLength = nowElement.find(".option-show").length;
					nY = getTranslateY(nowElement);
					if (!isMove&&isEnd) {
						return false;
					}
					isStart = false;
					isMove = false;

					// 缓动代码
					lastMoveStart = lastY;
					lastMoveTime = new Date().getTime();
					stopInertiaMove = true;
				}, false);

				// 当手指在屏幕上滑动的时候连续地触发。在这个事件发生期间，调用preventDefault()事件可以阻止滚动
				oScroll.addEventListener("touchmove", function (event) {
					event.preventDefault();

					mY = event.touches[0].clientY;
					if (!isStart) {
						isMove = true;
						isEnd = true;
					}
					if (isMove) {
						nowElement.css("transition", "none");
						nowElement.css("transform", "translate(0, "+-(nY-(mY-startY))+"px)");
					}

					// 缓动代码
					var nowTime = new Date().getTime();
					stopInertiaMove = true;
					if ((nowTime - lastMoveTime)>300) {
						lastMoveTime = nowTime;
						lastMoveStart = mY;
					}
				}, false);

				// 当手指从屏幕上离开的时候触发
				oScroll.addEventListener("touchend", function (event) {
					event.preventDefault();

					endY = event.changedTouches[0].clientY;
					maxY = -(info.firstIndex-2)*liHeight;
					minY = -(info.lastIndex-2)*liHeight;
					if (isEnd) {
						isMove = false;
						isEnd = false;
						isStart = true;
						nY = -(nY-(mY-startY));
						nowY = endY;

						// 修正位置
						if (nY>maxY) {
							nowElement.css("transition", "all .5s");
							nowElement.css("transform", "translate(0, "+maxY+"px)");
						} else if (nY<minY) {
							nowElement.css("transition", "all .5s");
							nowElement.css("transform", "translate(0, "+minY+"px)");
						} else {
							// 缓动代码
							var endTime = new Date().getTime();
							//最后一段时间手指划动速度
							var v = (nowY-lastMoveStart)/(endTime-lastMoveTime);
							stopInertiaMove = false;
							(function(v, lastMoveTime, contentY) {
								// 加速度方向
								var dir = v > 0 ? -1 : 1;
								// 减速率 0.0006 为减速时间
								var deceleration = dir*0.0006;
								function inertiaMove() {
									if (stopInertiaMove) {
										return;
									}
									var nowTime = new Date().getTime();
									var t = nowTime - lastMoveTime;
									// 当前速度
									var nowV = v + t * deceleration;
									var moveY = (v + nowV) / 2 * t;
									// 减速停止过程
									if (dir*nowV>0) {
										// 移动总距离大于最大值时，修正回弹
										if (totalDistance>maxY) {
											nowElement.css("transition", "all .5s");
											nowElement.css("transform", "translate(0, "+maxY+"px)");
										} else if (totalDistance<minY) {
											// 同上，修正回弹
											nowElement.css("transition", "all .5s");
											nowElement.css("transform", "translate(0, "+minY+"px)");
										} else {
											nowElement.css("transition", "all .5s");
											nowElement.css("transform", "translate(0, "+Math.round(totalDistance/liHeight)*liHeight+"px)");
										}
										// 获取值
										setTimeout(function() {
											setSelectValue();
										}, 500);
										return;
									}
									// 当前移动距离
									totalDistance = contentY + moveY;
									if (totalDistance>(maxY+(liHeight*2))) {
										nowElement.css("transition", "all .5s");
										nowElement.css("transform", "translate(0, "+maxY+"px)");
										return;
									} else if (totalDistance<(minY-(liHeight*2))) {
										nowElement.css("transition", "all .5s");
										nowElement.css("transform", "translate(0, "+minY+"px)");
										return;
									}
									nowElement.css("transform", "translate(0, "+totalDistance+"px)");
									// 获取值
									setTimeout(function() {
										setSelectValue();
									}, 500);
									setTimeout(inertiaMove, 10);
								}
								inertiaMove();
							})(v, endTime, nY);
						}

						// 获取值
						setTimeout(function() {
							setSelectValue();
						}, 500);
					}
				}, false);
				
				function getTranslateY(element) {
					var matrix = $(element).css("transform");
					var translateY = 0;
					if (matrix!="none") {
						var arr = matrix.split(",");
						translateY = -(arr[5].split(")")[0]);
					}
					return translateY;
				}
				
				/**
				 * 获取值
				 */
				function setSelectValue() {
					var currentY = 0;
					$("#opt-select-"+selectId+" .select-ul").each(function(index) {
						currentY = getTranslateY(this);
						var value = "";
						var name = "";
						if (currentY==0) {
							value = $($(this).find(".select-option")[2]).attr("value");
							name = $($(this).find(".select-option")[2]).text();
						} else {
							value = $($(this).find(".select-option")[Math.round(currentY/liHeight)+2]).attr("value");
							name = $($(this).find(".select-option")[Math.round(currentY/liHeight)+2]).text();
						}
						if (index==0) {
							selectValue = value;
							selectName = name;
						}
						info.isSearchInit = false;
					});
				}

				/**
				 * 关闭select选择框
				 * isOk : 判断是否是点击确定按钮关闭的 
				 */
				function close(isOk) {
					if (isOk) {
						// 如果是检索过后就没再次滚动选择，就默认取第一条数据
						if (info.isSearchInit) {
							selectValue = $($("#opt-select-"+selectId+" .select-ul").find(".select-option")[info.firstIndex]).attr("value");
							selectName = $($("#opt-select-"+selectId+" .select-ul").find(".select-option")[info.firstIndex]).text();
						}
						// 把值显示到页面
						$("#"+selectId).val(selectValue);
						if (selectValue=="") {
							$("#input-"+selectId).val("");
						} else {
							$("#input-"+selectId).val(selectName);
						}
						
						// 回调函数
						settings.callback({
							"selectValue": selectValue,
							"selectName" : selectName
						});
					}
					// 隐藏select框
					$("#select-box-"+selectId).css("display", "none");
				}
			},
			selectSearch : function(selectId) {
				var keyword = $("#search-"+selectId).val();
				var count = 0;
				var indexArr = new Array();	// 记录符合检索条件的索引
				
				// 如果检索内容为空
				keyword = keyword.replace(/(^\s*)|(\s*$)/g, "");
				if (keyword=="") {
					// 则显示所有选项
					$("#opt-select-"+selectId+" ul option").removeClass("option-hide").addClass("option-show");
				} else {
					// 遍历匹配每一个选项
					$("#opt-select-"+selectId+" ul option").each(function(i) {
						// 因为indexOf()方法对大小写敏感，所以这里强制转化为小写后再匹配
						// 如果当前选项不匹配
						if ($(this).text().toLowerCase().indexOf(keyword.toLowerCase())==-1) {
							$(this).removeClass("option-show").addClass("option-hide");
							count++;
						} else {
							$(this).removeClass("option-hide").addClass("option-show");
							// 记录下当前的索引
							indexArr.push(i);
						}
					});

					// 重新滚动
					if (indexArr!="" && indexArr!=null) {
						$("#opt-select-"+selectId+" .select-ul").css("transition", "all 0s");
						var positionY = 0;
						var liHeight = $(".mask-mid").height();
						info.firstIndex = indexArr[0];	// 第一条被检索到的索引
						info.lastIndex = indexArr[indexArr.length-1];	// 最后一条被检索到的索引
						$("#opt-select-"+selectId+" .select-ul").css("transform", "translate(0, "+-(info.firstIndex-2)*liHeight+"px)");
						info.isSearchInit = true;
					}
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