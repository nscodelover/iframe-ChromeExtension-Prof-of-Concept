
window.onload = function() {

  var url = document.getElementById("frametest").src;

  getHTML( url, function (response) {
	    var userInfo = response.querySelector('#user_key').value;
      console.log(userInfo);
      chrome.runtime.sendMessage({userInfo: userInfo}, function() {});
	});
}

var getHTML = function ( url, callback ) {

    // Feature detection
    if ( !window.XMLHttpRequest ) return;

    // Create new request
    var xhr = new XMLHttpRequest();

    // Setup callback
    xhr.onload = function() {
        if ( callback && typeof( callback ) === 'function' ) {
            callback( this.responseXML );
        }
    }

    // Get the HTML
    xhr.open( 'GET', url );
    xhr.responseType = 'document';
    xhr.send();

};
