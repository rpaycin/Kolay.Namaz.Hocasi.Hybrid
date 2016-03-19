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

$(document).on("pagecontainershow", function () {
    ScaleContentToDevice();

    $(window).on("resize orientationchange", function () {
        ScaleContentToDevice();
    })
});

function ScaleContentToDevice() {
    scroll(0, 0);
    var content = $.mobile.getScreenHeight() - $(".ui-header").outerHeight() - $(".ui-footer").outerHeight() - $(".ui-content").outerHeight() + $(".ui-content").height();
    $(".ui-content").height(content);
}