// ==UserScript==
// @name           ModuleName
// @namespace      http://drupal.org/
// @version        1.0.1
// @updateURL      https://github.com/Logaritmisk/Userscripts/raw/master/ModuleName.user.js
// @include        http://*/?q=admin/modules
// @include        http://*/admin/modules
// ==/UserScript==


var $ = unsafeWindow.jQuery;


$('#system-modules :checkbox').each(function(i, e) {
    var name = $('<div>')
	.addClass('admin-requirements')
	.html(':' + $(e).attr('name').split('][', 3)[1]);

    $('label', $(e).parents('tr'))
	.parent()
	.append(name);
});
