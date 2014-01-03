// ==UserScript==
// @name        ModuleName
// @namespace   http://drupal.org/
// @version     1.1.1
// @updateURL   https://github.com/Logaritmisk/Userscripts/raw/master/ModuleName.user.js
// @include     */?q=admin/modules
// @include     */admin/modules
// @grant       none
// ==/UserScript==

function loadZepto(callback) {
  var script = document.createElement("script");

  script.setAttribute("src", "http://zeptojs.com/zepto.min.js");
  script.addEventListener('load', function() {
    var script = document.createElement("script");
    script.textContent = "(" + callback.toString() + ")();";
    document.body.appendChild(script);
  }, false);

  document.body.appendChild(script);
}

loadZepto(function() {
  $('#system-modules input[type="checkbox"]').each(function(i, e) {
    var name = $('<div>')
      .addClass('admin-requirements')
      .html(':' + $(e).attr('name').split('][', 3)[1]);

    $('label', $(e).parents('tr'))
      .parent()
      .append(name);
  });
});
