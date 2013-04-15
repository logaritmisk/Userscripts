// ==UserScript==
// @name        Patch
// @namespace   logaritmisk
// @include     *.patch
// @version     0.0.1
// @grant       none
// @require     http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js
// @require     http://yandex.st/highlightjs/7.3/highlight.min.js
// ==/UserScript==


(function($) {

  $('head').append('<link rel="stylesheet" href="http://yandex.st/highlightjs/7.3/styles/github.min.css">');
	
	$('pre').each(function(i, e) {
		$(this).addClass('diff');
		
		hljs.highlightBlock(e);
	});

})(jQuery);