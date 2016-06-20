
$(function() {
	startSlide();
	$(".previous").click(previous);
	$(".next").click(next);
	$(".circle").click(circle);
});

let sliderIni = 1;
let sliderNext = 1;
let count = $(".slider").size();

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

function next() {
	let imgNum;
	imgNum = $(".image-focus").eq();
	console.log(imgNum);
}

function previous() {

}

function circle() {

}
