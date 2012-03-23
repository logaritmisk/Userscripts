// ==UserScript==
// @name           TableCommit
// @namespace      http://drupalcode.org/
// @version        1.1.0
// @updateURL      https://github.com/Logaritmisk/Userscripts/raw/master/TableCommit.user.js
// @include        http://drupalcode.org/*
// ==/UserScript==


function $(callback) {
	var script = document.createElement("script");

	script.setAttribute("src", "http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js");
	script.addEventListener('load', function() {
		var script = document.createElement("script");

		script.textContent = "(" + callback.toString() + ")();";

		document.body.appendChild(script);
	}, false);

	document.body.appendChild(script);
}

$(function() {

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
