// ==UserScript==
// @name           ModuleName
// @namespace      http://drupal.org/
// @version        1.1.0
// @updateURL      https://github.com/Logaritmisk/Userscripts/raw/master/ModuleName.user.js
// @include        http://*/?q=admin/modules
// @include        http://*/admin/modules
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

    $('#system-modules :checkbox').each(function(i, e) {
        var name = $('<div>')
            .addClass('admin-requirements')
            .html(':' + $(e).attr('name').split('][', 3)[1]);

        $('label', $(e).parents('tr'))
            .parent()
            .append(name);
    });

});
