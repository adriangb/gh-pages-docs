var base_url = "file:///Users/adrian.badaracco/Documents/GitHub/gh-pages-docs/";

var current = window.location.href;
var rest = current.replace(base_url, "");

var target_version;

$.getJSON("./versions.json", function (versions) {
    if (versions.hasOwnProperty("stable")) {
        target_version = stable;
        return;
    }
    if (versions.hasOwnProperty("latest")) {
        target_version = stable;
        return;
    }
});

if (!(rest.startsWith("refs"))) {
    // redirect
    window.location.replace(base_url + target_version + "/" + rest);
};