window.onload = function(){
	//alert("这是notification。js")
	//获取书签
	// chrome.bookmarks.getTree((res) => {
	// 	console.log(res);
	// })
	 // 保存用户输入的时间间隔和提示到chrome缓存中
	 chrome.storage.sync.get(['message'], function(res) {
		 if(res != ''){
				$("#interval").val(res.message.interval);
				$("#tips").val(res.message.tips)
		 }	
	 });
}

// var minute = $("#interval").val();
// var tips = $("#tips").val();
let minute = document.getElementById('interval');
let tips = document.getElementById('tips');


//设置提示
$("#setRemindButton").click(function () {
	if(minute.value ==''){
		minute.value = 35
	}
	if(tips.value ==''){
		tips.value = "放松一下眼睛吧!";
	}
	 
	  var bg = chrome.extension.getBackgroundPage();
	  bg.setRestEyeNotification(parseInt(minute.value), tips.value);
	  
});


//移除提示
$("#removeRemindButton").click(function () {
	  var bg = chrome.extension.getBackgroundPage();
	  bg.removeReminder();
})

