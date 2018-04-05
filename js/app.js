let catData = [
    {
        name: "Tabby",
        clickCount: 0,
        imgSrc: "cat1.jpg",
        nickNames: ['Tabby', 'Tommy', 'The fast Cat']

    },
    {
        name: "Shabby",
        clickCount: 0,
        imgSrc: "cat2.jpg",
        nickNames: ['Shabby', 'Shommy', 'The dirty Cat']
    },
    {
        name: "Patty",
        clickCount: 0,
        imgSrc: "cat3.jpg",
        nickNames: ['Pabby', 'Pommy', 'The cute Cat']
    },
    {
        name: "Snoozy",
        clickCount: 0,
        imgSrc: "cat4.jpg",
        nickNames: ['Snabby', 'Snommy', 'The sleepy Cat']
    },
    {
        name: "Ratty",
        clickCount: 0,
        imgSrc: "cat5.jpg",
        nickNames: ['Rabby', 'Rommy', 'The scared Cat']
    }
];

function Cat({name, clickCount, imgSrc, nickNames}) {
    this.name = ko.observable(name);
    this.clickCount = ko.observable(clickCount);
    this.imgSrc = ko.observable("img/" + imgSrc);
    this.nickNames = ko.observableArray(nickNames);
    this.level = ko.computed(function () {
        if (this.clickCount() > 100) {
            return 'Ninja Jedi'
        }
        if (this.clickCount() > 75) {
            return 'Master Jedi';
        }
        if (this.clickCount() > 50) {
            return 'Intermediate Jedi';
        }
        if (this.clickCount() > 25) {
            return 'Young Jedi';
        }
        if (this.clickCount() > 10) {
            return 'Infant Jedi';
        }
        return 'New Born Jedi';
    }, this);


}

function CatClickViewModel() {

    var self = this;

    self.catList = ko.observableArray([]);

    catData.forEach(function (item) {
        self.catList().push(new Cat(item));
    });
    self.currentCat = ko.observable(self.catList()[0]);
    self.increaseCount = function () {
        let currentCount = self.currentCat().clickCount();
        self.currentCat().clickCount(currentCount + 1);
    };

    self.selectCat = function(cat){
        self.currentCat(cat);
    };


}

ko.applyBindings(new CatClickViewModel());