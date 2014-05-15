Slider.Router.map(function(){
	this.resource('slider', {path: '/'}, function(){
		this.route('active');
	});
});

Slider.SliderRoute = Ember.Route.extend({
	setupController: function(controller, slider) {
    	controller.set('model', slider);
 	},
	model: function(){
		return this.store.find('slider');
	},
	renderTemplate: function() {//does nothing...
		this.render('thumbnail', {   // the template to render
	      into: 'images',       // the template to render into
	      outlet: 'thumbnail',        // the name of the outlet in that template
	      controller: 'slider'        // the controller to use for the template
	    });
	    this.render('images', {   // the template to render
	      into: 'slider',       // the template to render into
	      outlet: 'images',        // the name of the outlet in that template
	      controller: 'slider'        // the controller to use for the template
	    });
	}
});