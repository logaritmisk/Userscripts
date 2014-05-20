// ==UserScript==
// @name        Patch
// @namespace   logaritmisk
// @include     *.patch
// @version     0.0.1
// @grant       none
// @require     https://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js
// @require     https://yandex.st/highlightjs/7.3/highlight.min.js
// ==/UserScript==


(function($) {

  $('head').append('<link rel="stylesheet" href="https://yandex.st/highlightjs/7.3/styles/github.min.css">');
	
	$('pre').each(function(i, e) {
		$(this).addClass('diff');
		
		hljs.highlightBlock(e);
	});

})(jQuery);
