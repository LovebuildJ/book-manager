/**
 * 作者：陈霓清
 * 官网：http://www.javaex.cn
 */
$(function() {
	// 栅格系统
	$('[class^="grid-"]').each(function() {
		// 判断含有多少个属性
		var classArr = $(this).attr("class").split(" ");
		for (var i=0; i<classArr.length; i++) {
			if (classArr[i].indexOf("grid-")>=0) {
				// 获取栅格布局
				var arr = classArr[i].split("-");
				// 计算一共需要分成多少份
				var sum = 0;
				for (var j=1; j<arr.length; j++) {
					sum = parseInt(sum) + parseInt(arr[j]);
				}
				// 为子级div设置宽度
				$(this).children("div").each(function(k) {
					$(this).css("width", (100/sum) * arr[k+1] + "%");
				});
			} else if (classArr[i].indexOf("spacing-")>=0) {
				// 获取栅格间距
				var spacing = classArr[i].split("-")[1];
				
				// 为子级div设置间距
				var width = "calc(100% + "+parseInt(spacing)+"px)";
				$(this).css("width", width);
				$(this).children("div").each(function(k) {
					$(this).css("margin-right", parseInt(spacing) + "px");
				});
			}
		}
	});

	// 等分系统
	$('[class^="equal-"]').each(function() {
		// 判断含有多少个属性
		var classArr = $(this).attr("class").split(" ");
		for (var i=0; i<classArr.length; i++) {
			if (classArr[i].indexOf("equal-")>=0) {
				// 获取等分布局的等分数
				var num = classArr[i].split("-")[1];
				// 为子级div设置宽度
				$(this).children("li").css("width", (100/num) + "%");
				break;
			}
		}
	});
	
	// 遍历含有指定类的单选框和复选框
	$(":radio, :checkbox").each(function() {
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
	
	// 监听复选框的点击事件
	$(":checkbox").click(function() {
		// 如果是原生的复选框，则直接返回
		if (!$(this).attr("class")) {
			return;
		}
		
		// 判断含有多少个属性
		var classArr = $(this).attr("class").split(" ");
		
		for (var i=0; i<classArr.length; i++) {
			var listen = classArr[i];
			// 如果该复选框需要监听
			if (listen.indexOf("listen-")>=0) {
				// 提取key
				var listenKey = listen.replace(listen.split("-")[0]+"-", "");
				var keyArr = listenKey.split("-");
				
				// 判断当前点击的复选框的选中状态
				if ($(this).is(":checked")) {
					// 当前级别的复选框的选中个数
					var num = 0;
					// 选中时
					$(":checkbox").each(function() {
						var classArr = $(this).attr("class").split(" ");
						for (var j=0; j<classArr.length; j++) {
							// 让子级复选框全部选中
							if (classArr[j].indexOf(listen)>=0 && classArr[j]!=listen) {
								// 跳过禁用的
								if (!$(this).attr("disabled")) {
									$(this).attr("checked", true);
									// 设置选择图标为对勾（树形菜单专用）
									$(this).next("span.icon-stop").removeClass("icon-stop").addClass("icon-check");
								}
							}
							if (classArr[j]==listen) {
								if ($(this).is(":checked") || $(this).attr("disabled")) {
									num++;
								}
							}
						}
					});
					
					// 判断当前级别的复选框是否已全部选中
					if (num==($("."+listen).length)) {
						// 自动选中父级
						var parentClass = listen.replace("-"+keyArr[keyArr.length-1], "");
						if (((parentClass.split("-")).length-1)==1) {
							// 遍历listen-X-?
							var flag = true;
							for (var i=1; i<=10; i++) {
								if ($("."+parentClass+"-"+i).length>0 && !$("."+parentClass+"-"+i).is(":checked")) {
									flag = false;
								}
							}
							if (flag) {
								$(":checkbox").each(function() {
									if ($(this).hasClass(parentClass)) {
										$(this).attr("checked", true);
									}
								});
							}
						} else {
							$(":checkbox").each(function() {
								if ($(this).hasClass(parentClass)) {
									$(this).attr("checked", true);
								}
							});
							
							parentClass = parentClass.substring(0, parentClass.length-2);
							var flag = true;
							for (var i=1; i<=10; i++) {
								if ($("."+parentClass+"-"+i).length>0 && !$("."+parentClass+"-"+i).is(":checked")) {
									flag = false;
								}
							}
							if (flag) {
								$(":checkbox").each(function() {
									if ($(this).hasClass(parentClass)) {
										$(this).attr("checked", true);
									}
								});
							}
						}
					}
				} else {
					// 未选中时
					$(":checkbox").each(function() {
						var classArr = $(this).attr("class").split(" ");
						for (var j=0; j<classArr.length; j++) {
							// 让子级复选框全部取消选中
							if (classArr[j].indexOf(listen)>=0 && classArr[j]!=listen) {
								$(this).attr("checked", false);
							}
							// 让父级复选框全部取消选中
							var parentClass = "listen";
							for (var k=0; k<keyArr.length; k++) {
								if (keyArr[k]!=keyArr[keyArr.length-1]) {
									parentClass += "-";
									parentClass += keyArr[k];
									if (classArr[j]==parentClass) {
										$(this).attr("checked", false);
									}
								}
							}
						}
					});
				}
			}
		}
	});
});
