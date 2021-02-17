var base_url = "https://www.adriangb.com/gh-pages-docs/";

var current = window.location.href;
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
        window.location.href = base_url.concat(target_version, "/", rest);
    }
}
setTimeout(maybeRedirect, 75);
