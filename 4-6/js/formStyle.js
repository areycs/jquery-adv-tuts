(function($) {
	$.fn.formStyle = function(options) {

		var setOptions = $.extend({
			isEmpty: false,
			borderRadius: '0'
		}, options);

		// Style the form fields

		this
		.addClass('formStyle')
		.css("borderRadius", setOptions.borderRadius);

		//  Style as an active form field

		this.on("focus", function(){
			$(this).addClass('activeInput');
		})

		// Style as inactive

		this.on("focus", function(){
			$(this).removeClass('activeInput');
		})

		// Check if form fields are empty

		if(setOptions.isEmpty) {
			this.on("keyup", function(){
				if($(this).val() != '') {
					$(this).addClass("filledInput");
				} else {
					$(this).removeClass('filledInput');
				}
			});
		}

		return this;



	}
}(jQuery))