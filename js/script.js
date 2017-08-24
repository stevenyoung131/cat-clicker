var model = {

    currentCat: null,

    cats: [{
        name: 'Karma',
        clicks: 0,
        picurl: 'images/kitten1.jpeg'
    }, {
        name: 'Syndra',
        clicks: 0,
        picurl: 'images/kitten2.jpeg'
    }, {
        name: 'Jinx',
        clicks: 0,
        picurl: 'images/kitten3.jpeg'
    }, {
        name: 'Fizz',
        clicks: 0,
        picurl: 'images/kitten4.jpg'
    }, {
        name: 'Sona',
        clicks: 0,
        picurl: 'images/kitten5.jpg'
    }]
};


var octopus = {

    init: function() {
        model.currentCat = model.cats[0];
        listView.init();
        displayView.init();
    },

    getCurrentCat: function() {
        return model.currentCat;
    },

    getAllCats: function() {
        return model.cats;
    },

    setCurrentCat: function(cat) {
        model.currentCat = cat;
        document.getElementById("admin-name").value = model.currentCat.name;
        document.getElementById("admin-clicks").value = model.currentCat.clicks;
        document.getElementById("admin-url").value = model.currentCat.picurl;
    },

    incrementCounter: function() {
        model.currentCat.clicks++;
        displayView.render();
    },

    updateCat: function() {
        model.currentCat.name = document.getElementById('admin-name').value;
        model.currentCat.clicks = document.getElementById('admin-clicks').value;
        model.currentCat.picurl = document.getElementById('admin-url').value;
        displayView.render();
        listView.render();
    }
};


var listView = {
    init: function() {
        this.catListElem = document.getElementById('list');

        this.render();
    },

    render: function() {
        var cats = octopus.getAllCats();

        this.catListElem.innerHTML = '';

        for (var i = 0; i < cats.length; i++) {
            var cat = cats[i];

            var elem = document.createElement('button');
            elem.textContent = cat.name;
            elem.type = 'button';
            elem.className = "list-group-item list-group-item-action";

            elem.addEventListener('click', (function(cat) {
                return function () {
                    octopus.setCurrentCat(cat);
                    displayView.render();
                };
            })(cat));

            this.catListElem.appendChild(elem);
        }

        var admin = document.createElement('button')
        admin.textContent = 'admin';
        admin.type = 'button';
        admin.className = "btn btn-secondary";
        admin.addEventListener('click', function(e) {
                $("#admin").toggle();
        });
        this.catListElem.appendChild(admin);
    }
};


var displayView = {
    init: function() {
        this.catElem = document.getElementById('view');
        this.catNameElem = document.getElementById('name');
        this.catImageElem = document.getElementById('cat-img');
        this.countElem = document.getElementById('clicks');

        this.catImageElem.addEventListener('click', function(e){
            octopus.incrementCounter();
        });

        this.render();
    },

    render: function() {
        var currentCat = octopus.getCurrentCat();
        octopus.setCurrentCat(currentCat);
        this.countElem.textContent = currentCat.clicks;
        this.catNameElem.textContent = currentCat.name;
        this.catImageElem.src = currentCat.picurl;
    }
};

octopus.init();