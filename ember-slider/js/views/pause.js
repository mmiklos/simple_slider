Slider.PauseView = Ember.View.extend({
    mouseLeave: function(evt){
    				//this.get('controller').send('slider_resume');
    				if(this.get('sliderPause')){//if the slider is paused, create a new setInterval
						var id = window.setInterval(function(){
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
						}, 5000)//TIMER: if number is changed here, must also be changed in slider_controller.js controller
						
						this.set('sliderPause', false);
						this.set('timerId', id);
					}
    },
    mouseEnter: function(evt){
				window.clearInterval(this.get('timerId'));
				this.set('sliderPause', true);
    },  
    click: function(evt){

			//console.log($(evt.target)[0].nodeName);
			if($(evt.target)[0].nodeName !== 'SPAN'){//clicking anywhere besides the span elements will do nothing
				return;
			}

			var ei = $(evt.target).parent().children().index($(evt.target));
			$(evt.target).siblings('span').each(function(){
				if($(this).hasClass('active')){
					$(this).removeClass('active').addClass('inactive');
					var remove_image_index = $(this).parent().children().index($(this))
					$($('div#slider').children()[remove_image_index]).removeClass('slider-image').addClass('hidden');
					//console.log($(this).parent().children().index($(this)), ei);
				}
			});

			if(!$(evt.target).hasClass('active')){//if the target isn't active, make it active
				$(evt.target).removeClass('inactive').addClass('active');
				$($('div#slider').children()[ei]).removeClass('hidden').addClass('slider-image');
			}

			if(!this.get('sliderPause')){//if the slider is not paused, pause it
				window.clearInterval(this.get('timerId'));
				this.set('sliderPause', true); 
			}  
    }, 
    sliderPause: false,
    timerId: 1,
});