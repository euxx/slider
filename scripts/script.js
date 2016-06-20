
$(function() {
	next();
});

function next() {
	let imgNum;
	$(".slide").removeClass("image-focus");
	imgNum = $(".image-focus").eq();
	console.log(imgNum);
}
