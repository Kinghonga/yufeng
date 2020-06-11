
$("#githubBt").click(function(){
	chrome.tabs.create({url : 'https://github.com/Kinghonga/yufeng'}, function(tab) {
	    // chrome.tabs.executeScript(tab.id, {file: 'src/contentScript2'});
	  });
})


//打开其他页面
$("#eyeNotificationBt").click(function () {
	  chrome.tabs.create({url : 'chrome-extension://opcfhnlcdimgbhmfgjdnceagmnpjfink/notificationSetting.html'}, function(tab) { 
	      // chrome.tabs.executeScript(tab.id, {file: 'src/contentScript2'});
	    });
})
//打开其他页面
$("#baiduSearchBt").click(function () {
	  chrome.tabs.create({url : 'chrome-extension://opcfhnlcdimgbhmfgjdnceagmnpjfink/options.html'}, function(tab) { 
	      // chrome.tabs.executeScript(tab.id, {file: 'src/contentScript2'});
	    });
})
$("#settingBt").click(function () {
	  chrome.tabs.create({url : 'chrome-extension://opcfhnlcdimgbhmfgjdnceagmnpjfink/options.html'}, function(tab) { 
	      // chrome.tabs.executeScript(tab.id, {file: 'src/contentScript2'});
	    });
})
$("#feedbackBt").click(function () {
	  chrome.tabs.create({url : 'chrome-extension://opcfhnlcdimgbhmfgjdnceagmnpjfink/options.html'}, function(tab) { 
	      // chrome.tabs.executeScript(tab.id, {file: 'src/contentScript2'});
	    });
})