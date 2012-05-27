function init() {
    if(localStorage.workspace === null || localStorage.workspace === undefined) {
        document.getElementById('defaultWS').value = '';
        startEngines('mycloud');
    } else {
        document.getElementById('defaultWS').value = localStorage.workspace;
        startEngines(localStorage.workspace);
    }
}


function startEngines(workspace) {
    var destination = 'http://mobile.hojoki.com/#stream/' + workspace; 
    var mainframe = document.getElementById('mainframe');
    mainframe.setAttribute('width', '100%');
    mainframe.setAttribute('height', '461px');
    mainframe.setAttribute('frameborder', '0');
    mainframe.setAttribute('id', 'mainframe');
    mainframe.setAttribute('src', destination);
}

function settings() {
    var mainframe = document.getElementById('mainframe');
    var settings = document.getElementById("settings");
    if (parseInt(mainframe.height) == 0){
        mainframe.height = 461 + 'px';
    } else {
        mainframe.height = 0;
    }
}

function cleanUp(){
    var val = '';
    var input = document.getElementById('defaultWS').value;
    for (var i = 0; i < document.getElementById('defaultWS').value.length; i++) {
        if(input.charAt(i) !== NaN && input.charAt(i) >= 0 && input.charAt(i) <= 9){
            val += document.getElementById('defaultWS').value.charAt(i);
        }
    };
    if (val > 0) {
        localStorage.workspace = val;
        document.getElementById('defaultWS').value = localStorage.workspace;
    } else {
        document.getElementById('defaultWS').value = '';
        delete localStorage['workspace'];
    }
}

function clearField() {
    document.getElementById('defaultWS').value = '';
    document.getElementById('defaultWS').placeholder = "Workspace ID";
    delete localStorage['workspace'];
}