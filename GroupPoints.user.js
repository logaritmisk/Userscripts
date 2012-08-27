// ==UserScript==
// @name        GroupPoints
// @namespace   activecollab.com
// @include     http://ac3.nodeone.se/*
// @version     1.0.0
// @grant       none
// @updateURL   https://github.com/Logaritmisk/Userscripts/raw/master/GroupPoints.user.js
// ==/UserScript==


var $ = unsafeWindow.jQuery;


$('div#tasks div.objects_list')
    .change(update_points)
    .change();


function update_points() {
    $('div#tasks div.object_list_group > div.object_list_group_head').each(function(i, e) {
	var $count = $('span.object_list_group_count', e);

	if ($count.length) {
	    var $points = 0;
	    var $pattern = /\[([0-9].*)p\]/i;

	    $('+ div.object_list_group_body .real_task_name', e).each(function(n, t) {
		var $point = $(t).text().match($pattern);

		if ($point) {
					$points += parseInt($point[1]);
		}
	    });

	    $count.text($count.text() + ', ' + $points + 'p');
	}
    });
}
