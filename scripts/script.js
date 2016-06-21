
$(function() {
	$(".image-" + sliderIni).fadeIn(1700);
	startSlide();

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

const count = $(".slider").size();
let sliderIni = 1;
let sliderNext = 2;
let newSlide;
let loop;

function startSlide() {

	loop = setInterval(function() {
		if (sliderNext > count) {
			sliderIni = 1;
			sliderNext = 1;
		}
		$(".slider").fadeOut(400);
		$(".image-" + sliderNext).fadeIn(1700);
		$(".dot").removeClass("dot-focus");
		$(".circle-" + sliderNext).addClass("dot-focus");
		sliderIni = sliderNext;
		sliderNext++;

	}, 4000);
}

function stopSlide() {
	window.clearInterval(loop);
}

function showSlide(slider) {
	stopSlide();
	if (slider > count) {
		slider = 1;
	} else if (slider < 1) {
		slider = count;
	}
	$(".slider").fadeOut(400);
	$(".image-" + slider).fadeIn(1700);
	$(".dot").removeClass("dot-focus");
	$(".circle-" + slider).addClass("dot-focus");
	sliderNext = slider + 1;
	// startSlide();
}

function next() {
	newSlide = sliderIni + 1;
	showSlide(newSlide);
}

function prev() {
	newSlide = sliderIni - 1;
	showSlide(newSlide);
}

function circle() {

}
