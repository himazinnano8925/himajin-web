var osText = document.getElementById("os_text");
var browserText = document.getElementById("browser_text");
var ua = window.navigator.userAgent;

osDetermine(ua);
browserDetermine(ua);

function osDetermine(ua) {
  ua = ua.toLowerCase();
  
  if(ua.indexOf("windows nt") !== -1) {
    changeOSText("Microsoft Windowsです");
  } else if(ua.indexOf("android") !== -1) {
    changeOSText("Androidです");
  } else if(ua.indexOf("iphone") !== -1 || ua.indexOf("ipad") !== -1) {
    changeOSText("iOSです");
  } else if(ua.indexOf("mac os x") !== -1) {
    changeOSText("macOSです");
  } else {
    changeOSText("不明です");
  }
}

function browserDetermine(ua) {
  ua = ua.toLowerCase();
  
  if(ua.indexOf("edge") !== -1 || ua.indexOf("edga") !== -1 || ua.indexOf("edgios") !== -1) {
    changeBrowserText("Microsoft Edge");
  } else if (ua.indexOf("opera") !== -1 || ua.indexOf("opr") !== -1) {
    changeBrowserText("Opera");
  } else if (ua.indexOf("samsungbrowser") !== -1) {
    changeBrowserText("Samsung Internet Browser");
  } else if (ua.indexOf("ucbrowser") !== -1) {
    changeBrowserText("UC Browser");
  } else if(ua.indexOf("chrome") !== -1 || ua.indexOf("crios") !== -1) {
    changeBrowserText("Google Chrome");
  } else if(ua.indexOf("firefox") !== -1 || ua.indexOf("fxios") !== -1) {
    changeBrowserText("Firefox");
  } else if(ua.indexOf("safari") !== -1) {
    changeBrowserText("Safari");
  } else if (ua.indexOf("msie") !== -1 || ua.indexOf("trident") !== -1) {
    changeBrowserText("IE");
  } else {
    changeBrowserText("不明");
  }
}

function changeOSText(str) {
  osText.innerText = str;
}

function changeBrowserText(str) {
  browserText.innerText = str;
}