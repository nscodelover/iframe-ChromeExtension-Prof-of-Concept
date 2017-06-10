
var userInfo = "";

chrome.runtime.onMessage.addListener(
function(request, sender, sendResponse) {
    if (request.userInfo) {
      userInfo = request.userInfo;
      setTimeout(function(){ alert("user_key = " + userInfo); }, 2000);
    }

    return true;
});
