var interval = 500; 
function ShowCountDown(year,month,day,divname) 
{ 
	var now = new Date(); 
	var endDate = new Date(year, month-1, day); 
	var leftTime=endDate.getTime()-now.getTime(); 
	var leftsecond = parseInt(leftTime/1000); 
	//var day1=parseInt(leftsecond/(24*60*60*6)); 
	var day1=Math.floor(leftsecond/(60*60*24)); 
	var hour=Math.floor((leftsecond-day1*24*60*60)/3600); 
	var minute=Math.floor((leftsecond-day1*24*60*60-hour*3600)/60); 
	var second=Math.floor(leftsecond-day1*24*60*60-hour*3600-minute*60); 
	var cc = document.getElementById(divname); 
	cc.innerHTML = "倒计时：<span class='s1'>"+day1+"天</span><span class='s2'>"+hour+"小时</span><span class='s3'>"+minute+"分</span><span class='s4'>"+second+"秒</span>"; 
} 
window.setInterval(function(){ShowCountDown(2016,1,9,'times');}, interval);