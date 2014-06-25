// ==UserScript==
// @name        ModuleName
// @namespace   http://drupal.org/
// @version     1.1.2
// @updateURL   https://github.com/Logaritmisk/Userscripts/raw/master/ModuleName.user.js
// @include     */?q=admin/modules
// @include     */admin/modules
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


require(['//cdnjs.cloudflare.com/ajax/libs/zepto/1.1.3/zepto.min.js'], function() {
  $('#system-modules input[type="checkbox"]').each(function(i, e) {
    var name = $('<div>')
      .addClass('admin-requirements')
      .html(':' + $(e).attr('name').split('][', 3)[1]);

    $('label', $(e).parents('tr'))
      .parent()
      .append(name);
  });
});
