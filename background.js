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
	  chrome.alarms.create("restEyeNotification", {when: st,periodInMinutes: interval,});
	  alert("设置成功，多放松眼睛噢");
	
	  //监听
	  chrome.alarms.onAlarm.addListener((alarm) => {
		if (alarm.name != "restEyeNotification") {
		  return;
		}
		
		//如果定时设置已经包含有间隔时间
		if (alarmSet.has(alarm.scheduledTime)) {
		  return;
		}
		
		var notifOptions = {
		  type: "basic",
		  iconUrl: "images/icon48.png",
		  title: "护眼小插件",
		  message: tip,
		  requireInteraction: true,
		};
		chrome.notifications.create("limitNotif", notifOptions);

		alarmSet.clear();
		alarmSet.add(alarm.scheduledTime);
		console.log("*******Got an alarm!*********", alarm);
	  });
}

//移除提示
function removeReminder() {
  chrome.alarms.clearAll();
  alert("移除消息提醒成功，有缘再见！");
};
