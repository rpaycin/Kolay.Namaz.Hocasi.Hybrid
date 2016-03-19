// place our admob ad unit id here
var admobid = {};
if (/(android)/i.test(navigator.userAgent)) {
    admobid = { // for Android
        banner: 'ca-app-pub-6022968583924753/6010156627'
    };
} else if (/(ipod|iphone|ipad)/i.test(navigator.userAgent)) {
    admobid = { // for iOS
        banner: 'ca-app-pub-6022968583924753/1440356223'
    };
} else {
    admobid = { // for Windows Phone
        banner: 'ca-app-pub-6869992474017983/8878394753'
    };
}

function onDeviceReady() {
    if (!AdMob) { alert('admob plugin not ready'); return; }

    initAd();

    // display a banner at startup
    createSelectedBanner();
}

function initAd() {
    AdMob.setOptions({
        // width: integer, // valid when set adSize 'CUSTOM'
        // height: integer, // valid when set adSize 'CUSTOM'
        position: AdMob.AD_POSITION.BOTTOM_CENTER,
        // offsetTopBar: false, // avoid overlapped by status bar, for iOS7+
        bgColor: 'black', // color name, or '#RRGGBB'
        // x: integer,    // valid when set position to 0 / POS_XY
        // y: integer,    // valid when set position to 0 / POS_XY
        isTesting: false, // set to true, to receiving test ad for testing purpose
        // autoShow: true // auto show interstitial ad when loaded, set to false if prepare/show
    });

    // new events, with variable to differentiate: adNetwork, adType, adEvent
    $(document).on('onAdFailLoad', function (data) {
        //alert('error: ' + data.error +
        //    ', reason: ' + data.reason +
        //    ', adNetwork:' + data.adNetwork +
        //    ', adType:' + data.adType +
        //    ', adEvent:' + data.adEvent); // adType: 'banner', 'interstitial', etc.
    });
    $(document).on('onAdLoaded', function (data) { });
    $(document).on('onAdPresent', function (data) { });
    $(document).on('onAdLeaveApp', function (data) { });
    $(document).on('onAdDismiss', function (data) { });

    function createSelectedBanner() {
        AdMob.createBanner({
            adId: admobid.banner
        });
    }

    // create a banner on startup
    createSelectedBanner();

    $(document).on('backbutton', function () {
        if (window.confirm('Uygulamadan çıkmak istediğinize emin misiniz?')) navigator.app.exitApp();
    });

    $(document).on('resume', function () {
        AdMob.showInterstitial(); //BURAYI KONTROL ET
    });
}

$(document).ready(function () {
    // on mobile device, we must wait the 'deviceready' event fired by cordova
    if (/(ipad|iphone|ipod|android|windows phone)/i.test(navigator.userAgent)) {
        document.addEventListener('deviceready', onDeviceReady, false);
    } else {
        //onDeviceReady();
    }
});