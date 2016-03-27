$(document).on("pagebeforecreate", function (event) {
    $.get("../views/startupHeader.html", function (data) {
        $(data).insertAfter("head");
    });

    $.get("../views/startupLeftMenuAbdest.html", function (data) {
        $("#navLeftMenuAbdest").append(data);
    });

    $.get("../views/startupLeftMenuNamaz.html", function (data) {
        $("#navLeftMenuNamaz").append(data);
    });

    $.get("../views/startupLeftMenuDualar.html", function (data) {
        $("#navLeftMenuDualar").append(data);
    });
});