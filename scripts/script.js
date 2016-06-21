
$(function() {
	startSlide();
	stopSlide();

	$(".prev").click(prev);
	$(".next").click(next);
	$(".circle").click(circle);
	$(".slider").hover(
		function() {
			stopSlide();
		},
		function() {
			startSlide();
		}
	);
});

let sliderNext = 1;
let count = $(".slider").size();
let newSlide;

function startSlide() {
	if (sliderNext > count) {
		sliderIni = 1;
		sliderNext = 1;
	}
	$(".slider").fadeOut(400);
	$(".image-" + sliderNext).fadeIn(2000);
	$(".dot").removeClass("dot-focus");
	$(".circle-" + sliderNext).addClass("dot-focus");
	sliderNext++;

	setTimeout(startSlide, 5000);
}

function stopSlide() {
	window.clearTimeout(startSlide);
}

function showSlide(slider) {
	stopSlide();
	if (slider > count) {
		slider = 1;
	} else if (slider < 1) {
		slider = count;
	}
	$(".slider").fadeOut(400);
	$(".image-" + slider).fadeIn(2000);
	$(".dot").removeClass("dot-focus");
	$(".circle-" + slider).addClass("dot-focus");
	sliderNext = slider + 1;
	startSlide();
}

function next() {
	newSlide = sliderNext + 1;
	showSlide(newSlide);
}

function prev() {
	newSlide = sliderNext - 1;
	showSlide(newSlide);
}

function circle() {

}
