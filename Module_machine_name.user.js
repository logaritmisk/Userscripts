// ==UserScript==
// @name           Module machine_name
// @namespace      Drupal-7.x
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
