// //获取当前时间
// var d = new Date();
// var t = d.toLocaleTimeString();
// //alert(t);

// 一加载插件，就默认设置
chrome.runtime.onInstalled.addListener(function (reason) {
  setRestEyeNotification(35, "放松一下眼睛吧!");
});

let alarmSet = new Set();

function setRestEyeNotification(interval, tip) {
	  // interval 用户设定提醒间隔时间/分钟
	  // tip 需要提示的消息
	  var st = new Date().getTime() + 60 * 1000 * interval;
	  chrome.alarms.clearAll();
	  //when：触发alarm的时间，单位ms
	  //periodInMinutes:非null表示alarm周期性执行的时间间隔，单位minute
	  chrome.alarms.create("restEyeNotification", {when: st,periodInMinutes: interval});
	  alert("设置成功，多放松眼睛噢");
		
	  //监听
	  chrome.alarms.onAlarm.addListener(function(alarm) {
			//如果定时的名称不是restEyeNotification
	      if (alarm.name != "restEyeNotification") {return;}
	      
	       //如果定时设置已经包含有间隔时间
	      if (alarmSet.has(alarm.scheduledTime)) {return;}
	    
	      var notifOptions = {
	        type: "basic",
	        iconUrl: "images/yufengicon64.png",
	        title: "护眼小助手",
	        message: tip,
	        requireInteraction: true,
	      };
	      chrome.notifications.create("limitNotif", notifOptions);
	      
	      alarmSet.clear();
	      alarmSet.add(alarm.scheduledTime);
	      console.log("*******Got an alarm!*********", alarm);
	  });
	  
	 //  chrome.alarms.onAlarm.addListener((alarm) => {
	 //  });

	  var message = {'interval':interval,'tips':tip}
	   //alert("设置缓存成功！");
	  chrome.storage.sync.set({'message':message},function(items) {
	  			console.log('保存成功！');
	  });
}

	//移除提示
	function removeReminder() {
	  chrome.alarms.clearAll();
	  alert("移除消息提醒成功，有缘再见！");
	};


	//百度搜词功能（选中后右键）
	chrome.contextMenus.create({
		title: '御风：使用百度搜索：%s', // %s表示选中的文字
		contexts: ['selection'], // 只有当选中文字时才会出现此右键菜单
		onclick: function(params)
		{
			// 注意不能使用location.href，因为location是属于background的window对象
			chrome.tabs.create({url: 'https://www.baidu.com/s?ie=utf-8&wd=' + encodeURI(params.selectionText)});
		}
	});
	
	

