
var versionData;
var baseURL = "https://www.adriangb.com/gh-pages-docs";
var versionURL = baseURL + "/versions.json";
$(document).ready(function () {
    var versionsSelect = document.getElementById('versions-select');
    var pathname = window.location.pathname;
    versionsSelect[0] = new Option("versions", "versions", true, true);
    $.getJSON(versionURL, function (data) {
        var i = 1;
        $.each(data, function (key, value) {
            if (pathname.includes(value)) {
                key = key + " (current)";
            };
            value = baseURL + "/" + value + "/";
            versionsSelect[i] = new Option(key, value);
            i = i + 1;
        });
    });
});
