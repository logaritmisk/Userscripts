// ==UserScript==
// @name           TableCommit
// @namespace      http://drupalcode.org/
// @version        1.1.2
// @updateURL      https://github.com/Logaritmisk/Userscripts/raw/master/TableCommit.user.js
// @include        http://drupalcode.org/*.git
// @include        http://drupalcode.org/*.git/shortlog/*
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


require(['http://zeptojs.com/zepto.min.js'], function() {
    var DEFAULT_CSS = {
        'font-size': '9px',
        'margin-left': '10px',
        'color': '#aaa',
    }

    $('table.shortlog a.subject').each(function(i, e) {
        var commit = $('<span>')
                .css(DEFAULT_CSS)
                .text($(e).attr('href').substr(-40));

        $(e).parent().append(commit);
    });
});
