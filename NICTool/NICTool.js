//定义函数
var end = 0;						//是否结束运行
var searchTimes = 0;			//判断次数（系统参数）
var answerTimes = 0;		//答到次数（系统参数）
var waitTime = 5000;			//冷却时间（不建议更改）
function sleep(ms){			//冷却函数
	return new Promise(resolve => setTimeout(resolve, ms));
}
function fillZero(str) {			//补零函数
    var realNum;
    if (str < 10) {				//如果数值小于10
        realNum = "0" + str;	//补一个零
    } else {							//否则
        realNum = str;			//不做改动
    }
    return realNum;				//范湖数值
}

//主程序
console.log("===================网课答到助手==================== \n 欢迎使用网课答到助手。 \n 当前脚本版本:V0.3内测版。 \n Tips:  \n 输入命令 'end=1' 即可退出 \n==================================================");
for(;;){
	if(end == 1){
		break;
	}
	//判断是否已发起点名
	searchTimes++
	var search = document.getElementsByTagName("div");
	for(var i = 0;i < search.length;i++){
		if(search[i].className=="btn-primary btn-signin"){
			if(search[i].innerHTML=="答到"){
				//已发起点名
				answerTimes++
				//修改相关数据
				search[i].innerHTML = "答到成功";
				await sleep(200);
				$(".btn-primary").click();	//点击答到按钮
				//获取当前时间
				var myDate = new Date();
				var myHours = myDate.getHours();
				var myMinutes = myDate.getMinutes();
				var mySeconds = myDate.getSeconds();
				var nowTime = fillZero(myHours) + ":" + fillZero(myMinutes) +":"+ fillZero(mySeconds);
				console.log("=========网课答到助手========= \n 已在 " + nowTime + " 时成功为您答到。 \n=============================");
			}
		}
	}
	console.log("=======网课答到助手======== \n 已判断是否发起点名 "+searchTimes+" 次。 \n 已成功答到 "+answerTimes+" 次。 \n 当前冷却时间："+waitTime+"ms \n==========================");
	await sleep(waitTime);
}
console.log("=======网课答到助手======= \n 网课答到助手已退出。 \n 感谢您的使用。 \n=========================");
