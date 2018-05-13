function modAlertClass(timer) {
	if (arguments.length < 1) {
		timer = 3000;
	}
	var lang = {
		success: 'Успешно',
		info:    'Информация',
		warning: 'Внимание',
		error:   'Ошибка'
	}
	this.setLang = function (custom_lang) {
		lang = $.extend(lang, custom_lang);
	}
	this.addAlert = function (text, method, title) {
		if ($('.modAlert').length < 1) {
			$('body').append('<div class="modAlert"/>');
		}
		if (arguments.length < 3) {
			title = lang[method];
		}
		var item = $('<div class="modAlert-item modAlert-' + method + '">'+
			'<div class="modAlert-icon"></div>'+
			'<div class="modAlert-title">' + title + '</div>'+
			'<div class="modAlert-text">' + text + '</div>'+
			'</div>');
		item.appendTo('.modAlert').slideDown(200);
		setTimeout(function(){
			hideItem(item);
		}, timer);
	}
	function hideItem(item) {
		item.animate({left: '-500px'}, 220, function() {
			$(this).remove();
			if ($('.modAlert-item').length < 1) {
				$('.modAlert').remove();
			}
		});
	}
	$(document).on('click', '.modAlert-item', function(){
		hideItem($(this));
	})
}
var modAlert = new modAlertClass();
