// This is a simple Cordova app starter template
document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    console.log('Cordova is ready!');
    console.log('Platform: ' + device.platform);
    console.log('Version: ' + device.version);
}

function onPause() {
    console.log('App paused');
}

function onResume() {
    console.log('App resumed');
}

document.addEventListener('pause', onPause, false);
document.addEventListener('resume', onResume, false);
document.addEventListener('backbutton', onBackButton, false);

cordova run android
