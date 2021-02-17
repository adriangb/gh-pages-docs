var base_url = "https://www.adriangb.com/gh-pages-docs/";

var current = "https://www.adriangb.com/gh-pages-docs/test.html";
var rest = current.replace(base_url, "");

var target_version = null;

$.getJSON(base_url + "versions.json", function (versions) {
    if (versions.hasOwnProperty("stable")) {
        target_version = versions.stable;
        return;
    }
    if (versions.hasOwnProperty("latest")) {
        target_version = versions.latest;
        return;
    }
});

function maybeRedirect() {
    if (((target_version !== null) && !(rest.startsWith("refs")))) {
        // redirect
        window.location.replace(base_url.concat(target_version, "/", rest));
    }
}

window.addEventListener('load', function () { setTimeout(maybeRedirect, 25); }, false);
