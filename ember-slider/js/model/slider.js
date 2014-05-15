Slider.Slider = DS.Model.extend({
	alt: DS.attr('string'),
	current: DS.attr('boolean'),
	img: DS.attr('string')
});

Slider.Slider.FIXTURES = [
	{
		id: 1,
		alt: "image 1",
		current: true,
		img: "img/darklogo.png"
	},
	{
		id: 2,
		alt: "image 2",
		current: false,
		img: "img/callout-img.png"
	},
	{
		id: 3,
		alt: "image 3",
		current: false,
		img: "img/empire-adoption.png"
	},
	{
		id: 4,
		alt: "image 4",
		current: false,
		img: "img/funding.png"
	},
	{
		id: 5,
		alt: "image 5",
		current: false,
		img: "img/meet-someone.png"
	}

];
