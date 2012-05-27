function startEngines() {
         
    var mainframe = document.createElement('iframe');
    mainframe.setAttribute('width', '100%');
    mainframe.setAttribute('height', '100%');
    mainframe.setAttribute('frameborder', '0');
    mainframe.setAttribute('id', 'mainframe');
    //document.addEventListener('click', function(event) {remember(mainframe.src);}, false);
    mainframe.setAttribute('src', 'http://mobile.hojoki.com');
    //console.log(hojoki.mobile.pages.stream.a);

    console.log('ALEX   ***   ' + chrome.extension.getURL('bg.html'));

    
    /*
    if (localStorage.lastRead) {
    	console.log("ALEX: lastread= " + localStorage.lastRead);
        mainframe.setAttribute('src', localStorage.lastRead);
        mainframe.setAttribute('src', "http://mobile.hojoki.com/");
    } else {
    	console.log("ALEX: virgin source");
    	mainframe.setAttribute('src', "http://mobile.hojoki.com/");
    	localStorage.lastRead = "http://mobile.hojoki.com/";
    	console.log(localStorage.lastRead);
*/
    //console.log('hi' + chrome.extension.getBackgroundPage().document.getElementById('bgFrame'));
    //document.body.appendChild(chrome.extension.getBackgroundPage().document.getElementById('bgFrame'));
    document.body.appendChild(mainframe);
    //window = chrome.extension.getBackgroundPage().document.getElementById('frame');
    
    window.onbeforeunload = body.html();
/*
    try {
    	console.log('ALEX   ' + document.getElementById('mainframe').location.href);
    } catch (e) {
    	console.log('ALEX  error ' + e);
    }
*/
    bookmark();
    console.log(chrome.extension.getURL('bg.html'));
}

function remember(){
	var site =  document.getElementById('mainframe').src;
	console.log('remember... ' + site);
	localStorage.lastRead = site;
}

function bookmark() {
	console.log("ALEX: called the bookmark 1 " + document.getElementById('mainframe').id);
	console.log("ALEX: called the bookmark 2 " + document.getElementById('mainframe').location.href);
	remember();
	setTimeout(bookmark, 2000);
}