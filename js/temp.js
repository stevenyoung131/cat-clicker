var allClicks = [0,0,0,0,0];
var curCat = 0;
var $clicks = $('#clicks');
var cats = ['Karma','Syndra','Jinx','Fizz','Sona'];
var pics = ['images/kitten1.jpeg','images/kitten2.jpeg','images/kitten3.jpeg','images/kitten4.jpg','images/kitten5.jpg'];

$(document).ready ( function() {
	for (var i = 0; i < cats.length; i++) {
		cat = cats[i];
		$('#cat' + (i+1)).text(cat);
	}
});

$("#cat1").click(function(){
	$("#cat-img").attr("src",pics[0]);
	$("#name").text(cats[0]);
	curCat = 0;
	$("#clicks").text(allClicks[curCat]);
	return curCat;
});

$("#cat2").click(function(){
	$("#cat-img").attr("src",pics[1]);
	$("#name").text(cats[1]);
	curCat = 1;
	$("#clicks").text(allClicks[curCat]);
	return curCat;
});

$("#cat3").click(function(){
	$("#cat-img").attr("src",pics[2]);
	$("#name").text(cats[2]);
	curCat = 2;
	$("#clicks").text(allClicks[curCat]);
	return curCat;
});

$("#cat4").click(function(){
	$("#cat-img").attr("src",pics[3]);
	$("#name").text(cats[3]);
	curCat = 3;
	$("#clicks").text(allClicks[curCat]);
	return curCat;
});

$("#cat5").click(function(){
	$("#cat-img").attr("src",pics[4]);
	$("#name").text(cats[4]);
	curCat = 4;
	$("#clicks").text(allClicks[curCat]);
	return curCat;
});

$("#cat-img").click(function(){
	allClicks[curCat] += 1;
	$("#clicks").text(allClicks[curCat]);
});