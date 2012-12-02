document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('clear').addEventListener('click', clearField);
  document.getElementById('save').addEventListener('click', cleanUp);
  document.getElementById('settingsTitleContainer').addEventListener('click', settings);
  init();
});

function init() {
    console.log(localStorage.workspace);
    if(localStorage.workspace === null || localStorage.workspace === undefined) {
        document.getElementById('defaultWS').value = '';
        startEngines('all');
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
    mainframe.setAttribute('src', destination);
}

function settings() {
    var mainframe = document.getElementById('mainframe');
    if (parseInt(mainframe.height, 10) < 300){
        mainframe.height = 461 + 'px';
    } else {
        mainframe.height = 47 + 'px';
    }
}

function cleanUp(closing){
    var val = '';
    var input = document.getElementById('defaultWS').value;
    console.log('input is' + input);
    for (var i = 0; i < document.getElementById('defaultWS').value.length; i++) {
        if(input.charAt(i) !== NaN && input.charAt(i) >= 0 && input.charAt(i) <= 9){
            val += document.getElementById('defaultWS').value.charAt(i);
        }
    }
    if (val > 0) {
        localStorage.workspace = val;
        document.getElementById('defaultWS').value = localStorage.workspace;
        document.getElementById('mainframe').setAttribute('src', 'http://mobile.hojoki.com/#stream/' + val);
        settings();
    }
}

function clearField() {
    document.getElementById('defaultWS').value = '';
    document.getElementById('defaultWS').placeholder = "Workspace ID";
    document.getElementById('mainframe').setAttribute('src', 'http://mobile.hojoki.com/#stream/mycloud');
    delete localStorage['workspace'];
}