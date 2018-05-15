var ModAlert = {
	config: {
		timeout: 3000,
		autohide: true,
		showicon: true,
	},
	type: {
		success: 'Успешно',
		info:    'Информация',
		warning: 'Внимание!',
		error:   'Ошибка'
	},
	addAlert: function(param) {
		var self = this;
		if ($('.modAlert').length < 1) {
			$('body').append('<div class="modAlert"></div>');
		}
		var options = $.extend({}, this.config, param);
		if (!options.title) {
			if (this.type[options.type]) {
				options.title = this.type[options.type];
			} else if (options.type) {
				options.title = options.type;
			}
		}
		var item_class = ['modAlert-item'];
		if (options.type) {
			item_class.push('modAlert-' + options.type);
		}
		if (!options.showicon) {
			item_class.push('modAlert-noicon');
		}
		if (!options.title || !options.text) {
			item_class.push('modAlert-onerow');
		}
		var item = '<div class="' + item_class.join(' ') + '">';
		if (options.showicon) {
			item += '<div class="modAlert-icon"></div>';
		}
		if (options.title) {
			item += '<div class="modAlert-title">' + options.title + '</div>';
		}
		if (options.text) {
			item += '<div class="modAlert-text">' + options.text + '</div>';
		}
		item += '</div>';
		var $item = $(item);
		$item.appendTo('.modAlert').slideDown(200);
		$item.click(function(){
			self.hideItem($(this));
		})
		if (options.autohide && options.timeout > 0) {
			setTimeout(function(){
				self.hideItem($item);
			}, options.timeout);
		}
		return false;
	},
	hideItem: function (item) {
		item.animate({left: '-' + $('.modAlert').outerWidth()}, 220, function() {
			$(this).remove();
			if ($('.modAlert-item').length < 1) {
				$('.modAlert').remove();
			}
		});
	}
}
