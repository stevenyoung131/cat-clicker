var initialCats = [
	{
		clickCount: 0,
		name: "Karma",
		imgSrc: "images/kitten1.jpeg",
		imgAttribution: "",
		nickNames: ["Fuzzy", "Fluffy", "Furry"]
	},
	{
		clickCount: 0,
		name: "Syndra",
		imgSrc: "images/kitten2.jpeg",
		imgAttribution: "",
		nickNames: ["Fluffy Meowington", "Cat", "Dark One"]
	},
	{
		clickCount: 0,
		name: "Jinx",
		imgSrc: "images/kitten3.jpeg",
		imgAttribution: "",
		nickNames: ["Shit Ass", "Jinxy", "Parrot Cat"]
	},
	{
		clickCount: 0,
		name: "Fizz",
		imgSrc: "images/kitten4.jpg",
		imgAttribution: "",
		nickNames: ["Sweet Kitty", "Fizz Fizz Fizz", "Fatty Kitty"]
	},
	{
		clickCount: 0,
		name: "Sona",
		imgSrc: "images/kitten5.jpg",
		imgAttribution: "",
		nickNames: ["Fat Ass", "Stupid Cat", "Lazy"]
	}];

var Cat = function(data) {
	this.clickCount = ko.observable(data.clickCount);
	this.name = ko.observable(data.name);
	this.imgSrc = ko.observable(data.imgSrc);
	this.imgAttribution = ko.observable(data.imgAttribution);
	this.nickNames = ko.observableArray(data.nickNames);

	this.level = ko.computed(function() {
		if (this.clickCount() > 100) {
			return "Adult";
		} else if (this.clickCount() > 50) {
			return "Teen";
		} else if (this.clickCount() > 25) {
			return "Adolescent";
		} else {
			return "Newborn";
		}
	}, this);

}


var ViewModel = function() {
	var self = this;

	this.catList = ko.observableArray([]);

	initialCats.forEach(function(catItem) {
		self.catList.push(new Cat(catItem));
	});

	this.currentCat = ko.observable( this.catList()[0] );

	this.incrementCounter = function() {
		this.clickCount(this.clickCount() + 1);
	};

	this.selectCurrentCat = function(cat) {
		self.currentCat(cat);
	};
}

ko.applyBindings(new ViewModel());