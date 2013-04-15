// ==UserScript==
// @name        ModuleName
// @namespace   http://drupal.org/
// @version     1.1.0
// @updateURL   https://github.com/Logaritmisk/Userscripts/raw/master/ModuleName.user.js
// @include     */?q=admin/modules
// @include     */admin/modules
// @grant       none
// @require     http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js
// ==/UserScript==


(function($) {

  $('#system-modules :checkbox').each(function(i, e) {
    var name = $('<div>')
      .addClass('admin-requirements')
      .html(':' + $(e).attr('name').split('][', 3)[1]);

    $('label', $(e).parents('tr'))
      .parent()
      .append(name);
  });

})(jQuery);
