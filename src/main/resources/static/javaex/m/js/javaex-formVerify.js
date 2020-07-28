/**
 * 作者：陈霓清
 * 官网：http://www.javaex.cn
 */
// 自定义验证类型	必填项：页面中直接写 data-type="必填" 即可，不需要为其定义正则表达式
var regJson = {
	"金额" : "/(^[1-9]([0-9]+)?(\.[0-9]{1,2})?$)|(^(0){1}$)|(^[0-9]\.[0-9]([0-9])?$)/",	// 0 + 正整数 + 最多2位小数(正数)
	"整数" : "/^-?\\d+$/",
	"正整数" : "/^[0-9]*[1-9][0-9]*$/",
	"负整数" : "/^-[0-9]*[1-9][0-9]*$/",
	"非负整数" : "/^\\d+$/",	// 正整数 + 0
	"非正整数" : "/^((-\\d+)|(0+))$/",	// 负整数 + 0
	"正小数" : "/^(([0-9]+\\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\\.[0-9]+)|([0-9]*[1-9][0-9]*))$/",
	"负小数" : "/^(-(([0-9]+\\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\\.[0-9]+)|([0-9]*[1-9][0-9]*)))$/",
	"非负小数" : "/^\\d+(\\.\\d+)?$/",	// 0 + 正小数
	"非正小数" : "/^((-\\d+(\\.\\d+)?)|(0+(\\.0+)?))$/",	// 0 + 负小数
	"邮箱" : "/^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/",
	"手机号" : "/^(1)\\d{10}$/",
	"身份证号" : "/(^\\d{15}$)|(^\\d{18}$)|(^\\d{17}(\\d|X|x)$)/",
	"中文" : "/^[\u4e00-\u9fa5]+$/",
	"英文字母" : "/^[a-zA-Z]+$/",
	"英文字母或数字" : "/^[0-9a-zA-Z]+$/",
	"QQ" : "/^[1-9][0-9]{4,9}$/",
	"车牌号" : "/^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-Z0-9]{4}[A-Z0-9挂学警港澳]{1}$/",
	"登录名" : "/^[a-zA-Z]{1}([a-zA-Z0-9]){4,9}$/",		// 只能输入5-10个以字母开头，可带数字的字符串
	"密码" : "/^[a-zA-Z0-9]{6,16}$/",		// 6到16位字母或数字或它们的组合
	"密码强" : "/^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^~&*]).*$/"	// 字符+数字+特殊字符组合，长度需要自己判断
};

/**
 * javaex表单验证插件入口
 */
function javaexVerify() {
	var result = false;
	// 遍历当前页面所有input元素
	$("input, textarea, select").each(function() {
		var dataTypeAll = $(this).attr("data-type");
		// 判断该输入框是否需要进行验证
		if (!!dataTypeAll) {
			result = formVerify($(this), dataTypeAll);
			if (!result) {
				return result;
			}
		}
	});

	return result;
}

/**
 * 正则表达式验证函数
 * obj : jquery对象
 * dataTypeAll : 需要验证哪些类型（集合）
 */
function formVerify(obj, dataTypeAll) {
	// 判断内容去除左右两边空格后是否为空
	if ($.trim(obj.val()).length==0) {
		var errorMsg = "不能为空";
		// 获取标签内容
		var label = obj.attr("error-label");
		if (!!label) {
			errorMsg = label + "：" + errorMsg;
		}
		// 添加错误状态
		addErrorMsg(errorMsg);
		return false;
	}

	// 判断验证类型是否是 必填 
	if (dataTypeAll.indexOf("必填")>=0) {
		return true;
	}

	// 遍历这些验证类型并验证
	var dataTypeArr = dataTypeAll.split("|");
	var regArr = new Array();
	for (var i=0; i<dataTypeArr.length; i++) {
		var reg = eval(regJson[dataTypeArr[i]]);
		if (!!reg) {
			regArr.push(reg);
		}
	}
	if (regArr.length>0) {
		// 定义一个标识，默认验证失败
		var flag = false;
		for (var i=0; i<regArr.length; i++) {
			// 验证成功时，直接返回return true;
			if (regArr[i].test(obj.val())) {
				return true;
			}
		}
		// 全部验证失败时，返回错误信息
		if (!flag) {
			// 获取当前节点的错误信息
			var errorMsg = obj.attr("error-msg");
			if (!errorMsg) {
				errorMsg = "验证失败";
			}
			// 获取标签内容
			var label = obj.attr("error-label");
			if (!!label) {
				errorMsg = label + "：" + errorMsg;
			}
			// 添加错误状态
			addErrorMsg(errorMsg);
			return false;
		}
	}

	return false;
}

/**
 * 添加错误状态
 */
function addErrorMsg(errorMsg) {
	javaex.tip({
		content : errorMsg,
		mask : false,
		marginBottom : "30%"
	});
}