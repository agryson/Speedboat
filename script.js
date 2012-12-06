document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('clear').addEventListener('click', clearField);
  document.getElementById('save').addEventListener('click', cleanUp);
  document.getElementById('settingsTitleContainer').addEventListener('click', settings);
  init();
});

/**
 * Onload, we check the localStorage to see if the user had saved anything, if not, we set a default value
 */
function init() {
    //console.log(localStorage.workspace);
    if(localStorage.workspace === null || localStorage.workspace === undefined) {
        document.getElementById('defaultWS').value = '';
        startEngines('all');
    } else {
        document.getElementById('defaultWS').value = localStorage.workspace;
        startEngines(localStorage.workspace);
    }
}

/**
 * Loads up the appropriate page in the iFrame
 * @param  {string} workspace The workspace ID to load
 */
function startEngines(workspace) {
    var destination = 'http://mobile.hojoki.com/#stream/' + workspace;
    var mainframe = document.getElementById('mainframe');
    mainframe.setAttribute('src', destination);
    mainframe.setAttribute('width', '100%');
    mainframe.setAttribute('height', '461px');
    mainframe.setAttribute('frameborder', '0');
}

/**
 * Brings up the settings slider
 */
function settings() {
    var mainframe = document.getElementById('mainframe');
    if (parseInt(mainframe.height, 10) < 300){
        mainframe.height = 461 + 'px';
    } else {
        mainframe.height = 47 + 'px';
    }
}

/**
 * Upon closing, makes sure everything is saved and tidied away
 */
function cleanUp(){
    var val = '';
    var input = document.getElementById('defaultWS').value;
    var character;
    for (var i = 0; i < document.getElementById('defaultWS').value.length; i++) {
        character = isNaN(input.charAt(i));
        if(!character  && input.charAt(i) >= 0 && input.charAt(i) <= 9){
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

/**
 * Clears the input field and associated localStorage
 */
function clearField() {
    document.getElementById('defaultWS').value = '';
    document.getElementById('defaultWS').placeholder = "Workspace ID";
    document.getElementById('mainframe').setAttribute('src', 'http://mobile.hojoki.com/#stream/mycloud');
    delete localStorage['workspace'];
}