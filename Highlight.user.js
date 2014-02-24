// ==UserScript==
// @name        Highlight
// @namespace   logaritmisk
// @version     1.0.1
// @updateURL   https://github.com/Logaritmisk/Userscripts/raw/master/Highlight.user.js
// @include     *.module
// @include     *.inc
// @include     *.php
// @include     https://drupal.org/files/*.patch
// @grant       none
// ==/UserScript==


function require(sources, callback) {
    counter = sources.length
    sources.forEach(function(source) {
        var script = document.createElement('script');

        script.setAttribute('src', source);
        script.addEventListener('load', function() {
            if (--counter == 0) {
                var script = document.createElement('script');
                script.textContent = '(' + callback.toString() + ')();';
                document.body.appendChild(script);
            }
        }, false);

        document.body.appendChild(script);
    });
}


require(['//cdnjs.cloudflare.com/ajax/libs/zepto/1.1.2/zepto.min.js', '//cdnjs.cloudflare.com/ajax/libs/highlight.js/8.0/highlight.min.js'], function() {
    $('head').append('<link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/8.0/styles/github.min.css">');

    $('pre').each(function(i, e) {
        hljs.highlightBlock(e);
    });
});
