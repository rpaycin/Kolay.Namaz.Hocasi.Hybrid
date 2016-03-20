//cihaz ready, pause ve resume eventleri
$(function () {
    document.addEventListener('deviceready', onDeviceReady.bind(this), false);

    function onDeviceReady() {
        document.addEventListener('pause', onPause.bind(this), false);
        document.addEventListener('resume', onResume.bind(this), false);
    };

    function onPause() {
    };

    function onResume() {
    };
});

$(document).on("pageinit", function () {
    jQuery.support.cors = true;
    $.mobile.allowCrossDomainPages = true;
});
