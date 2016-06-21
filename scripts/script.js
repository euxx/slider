
$(function() {
	dot.first().addClass("focus");
	slider.first().fadeIn(1700);

	loop = setInterval(function() {
		startSlide();
	}, 4000);

	$(".prev").click(prev);
	$(".next").click(next);
	dot.click(circle);

	slider.hover(
		function() {
			stopSlide();
		},
		function() {
			resetSlide();
		}
	);
});

const lastDot = $(".dot").size() - 1;
const slider = $(".slider");
const dot = $(".dot");
let sliderNext;
let loop;

function showSlide(sliderNext) {
	slider.fadeOut(400).eq(sliderNext).fadeIn(1700);
	dot.removeClass("focus").eq(sliderNext).addClass("focus");
}

function startSlide() {
	sliderNext = $(".focus").index();
	sliderNext === lastDot ? sliderNext = 0 : sliderNext = sliderNext + 1;
	showSlide(sliderNext);
}

function stopSlide() {
	window.clearInterval(loop);
}

function resetSlide() {
	window.clearInterval(loop);
	loop = setInterval(function() {
		startSlide();
	}, 4000);
}

function next() {
	startSlide();
	resetSlide();
}

function prev() {
	sliderNext = $(".focus").index();
	if (sliderNext === 0) {
		sliderNext = lastDot;
	} else {
		sliderNext = sliderNext - 1;
	}
	showSlide(sliderNext);
	resetSlide();
}

function circle() {
	if (!$(this).hasClass("focus")) {
		sliderNext = $(this).index();
		showSlide(sliderNext);
		resetSlide();
	}
}
