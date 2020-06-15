let ID;
let githubURL = 'https://github.com/Kinghonga/yufeng';
window.onload = function(){
	//获取当前扩展的ID
	ID = chrome.runtime.id
	console.log(ID)

		//query tabs
		chrome.tabs.query({}, tabs => console.log(tabs));
}

//打开Github页面
$("#githubBt").click(function(){
	chrome.tabs.create({url : githubURL}, function(tab) {
	    // chrome.tabs.executeScript(tab.id, {file: 'src/contentScript2'});
	  });
})


//打开护眼助手页面
$("#eyeNotificationBt").click(function () {
	  chrome.tabs.create({url : 'chrome-extension://'+ID+'/notificationSetting.html'}, function(tab) { 
	      // chrome.tabs.executeScript(tab.id, {file: 'src/contentScript2'});
	    });
})
//打开百度搜词页面
$("#baiduSearchBt").click(function () {
	  chrome.tabs.create({url : 'chrome-extension://'+ID+'/options.html'}, function(tab) { 
	      // chrome.tabs.executeScript(tab.id, {file: 'src/contentScript2'});
	    });
})
//打开天气助手页面
$("#weatherHelperBt").click(function () {
	  chrome.tabs.create({url : 'chrome-extension://'+ID+'/weather.html'}, function(tab) { 
	      // chrome.tabs.executeScript(tab.id, {file: 'src/contentScript2'});
	    });
})
//打开一键摸鱼页面
$("#moyuBt").click(function () {
	chrome.tabs.create({url : 'chrome-extension://'+ID+'/options.html'}, function(tab) { 
		// chrome.tabs.executeScript(tab.id, {file: 'src/contentScript2'});
	  });
})
//打开设置页面
$("#settingBt").click(function () {
	  chrome.tabs.create({url : 'chrome-extension://'+ID+'/options.html'}, function(tab) { 
	      // chrome.tabs.executeScript(tab.id, {file: 'src/contentScript2'});
	    });
})
//打开反馈页面
$("#feedbackBt").click(function () {
	  chrome.tabs.create({url : 'chrome-extension://'+ID+'/index.html'}, function(tab) { 
	      // chrome.tabs.executeScript(tab.id, {file: 'src/contentScript2'});
	    });
})