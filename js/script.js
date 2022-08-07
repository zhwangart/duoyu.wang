document.onscroll = function() {
  var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  var headerShadow = document.getElementById("header");
  if (scrollTop > 10)
  // headerShadow.classList.add("header-fixed"); //增加
  // headerShadow.classList.remove("header-fixed"); //去除
  headerShadow.classList.replace("header-absolute","header-fixed"); //替换
  else
  headerShadow.classList.replace("header-fixed","header-absolute"); //替换
}

feather.replace()

var tesObj = document.getElementsByName("carousel");
	//设置 value 值为 0 选中
	for(var i=0; i < tesObj.length; i++){
		if (tesObj[i].value=="0"){
			tesObj[i].checked = true;
			break;
			}
	}

var showtime = function () {
  var nowtime = new Date(),  //获取当前时间
    endtime = new Date("2122/8/8");  //定义结束时间
  var lefttime = endtime.getTime() - nowtime.getTime(),  //距离结束时间的毫秒数
    leftd = Math.floor(lefttime/(1000*60*60*24)),  //计算天数
    lefth = Math.floor(lefttime/(1000*60*60)%24),  //计算小时数
    leftm = Math.floor(lefttime/(1000*60)%60),  //计算分钟数
    lefts = Math.floor(lefttime/1000%60);  //计算秒数
  return leftd + " 天 " + lefth + " 小时 " + leftm + " 分钟 " + lefts + " 秒 ";  //返回倒计时的字符串
}
var div = document.getElementById("count_down");
  setInterval (function () {
    div.innerHTML = showtime();
  }, 1000);  //反复执行函数本身
