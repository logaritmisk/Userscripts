// ==UserScript==
// @name        Highlight
// @namespace   logaritmisk
// @version     1.0.0
// @updateURL   https://github.com/Logaritmisk/Userscripts/raw/master/Highlight.user.js
// @include     *.module
// @include     *.inc
// @include     *.php
// @grant       none
// ==/UserScript==


function require(sources, callback) {
    counter = sources.length
    sources.forEach(function(source) {
        var script = document.createElement("script");

        script.setAttribute("src", src);
        script.addEventListener('load', function() {
            if (--counter == 0) {
                var script = document.createElement("script");
                script.textContent = "(" + callback.toString() + ")();";
                document.body.appendChild(script);
            }
        }, false);

        document.body.appendChild(script);
    });
}


require(['http://zeptojs.com/zepto.min.js', 'http://yandex.st/highlightjs/8.0/highlight.min.js'], function() {
    $('head').append('<link rel="stylesheet" href="http://yandex.st/highlightjs/7.3/styles/github.min.css">');

    $('pre').each(function(i, e) {
        hljs.highlightBlock(e);
    });
});
