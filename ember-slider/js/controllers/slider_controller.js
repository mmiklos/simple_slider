Slider.SliderController = Ember.ObjectController.extend({
	transTime: function(key, value){
		var model = this.get('model');
		if(value === undefined){
			//property being used as a getter
			return model.get('current');
		}else{
			//property being used as a setter
			model.set('current', value);
			model.save();
			return value;
		}
	}.property('model.current'),
	actions:{
		period: (function(){
					var timerID = window.setInterval(function(){
						var active = $('.active');
						var active_img = $('.slider-image');
						if(active.siblings('.active~span:first')[0] === undefined){
							$('.hidden:first').addClass('slider-image').removeClass('hidden');
							$('.inactive:first').addClass('active').removeClass('inactive');
						}else{
							active_img.siblings('.slider-image~img:first').addClass('slider-image').removeClass('hidden');
							active.siblings('.active~span:first').addClass('active').removeClass('inactive');
						}
						active_img.removeClass('slider-image').addClass('hidden');
						active.removeClass('active').addClass('inactive');
					//var current = this.get('model').get('current');				
				}, 5000)//TIMER: if number is changed here, must also be changed in pause.js view
					//this.set('sliderPause', false);
					
			}()),
	}

});