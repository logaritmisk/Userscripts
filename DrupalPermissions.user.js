// ==UserScript==
// @name        DrupalPermissions
// @namespace   drupal
// @include     */admin/people/permissions
// @version     0.0.1
// @grant       none
// @require     http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js
// ==/UserScript==


(function($) {

  DEFAULT_CSS = {
	  'font-weight': 'normal',
	  'font-size': '0.9em',
	  'margin-left': 5,
	  'color': '#444444',
	}

  $('table#permissions td.module').each(function(i, e) {
		var name = $('<span>')
  		.css(DEFAULT_CSS)
		  .html(':' + $(e).attr('id').substr(7));

		$(e).append(name);
  });

	$('table#permissions td.permission').each(function(i, e) {
		var name = $('<span>')
      .css(DEFAULT_CSS)
      .html(';' + $('input', $(e).next()).attr('value'));

		$(e).append(name);
	});

})(jQuery);
