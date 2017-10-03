var Cat = function() {
    this.clickCount = ko.observable();
    this.name = ko.observable;
    this.imbSrc = ko.observable(img);
    this.imgAttribution = ko.observable(HTTP);
    this.nicknames = ko.observableArray(['Zer Zer', 'Zero', 'Missa Mew Mew']);

    this.title = ko.computed(function() {
        var title;
        var clicks = this.clickCount();
        if (clicks < 10) {
            title = 'Newborn';
        } else if (clicks < 50) {
            title = 'Infant';
        } else if (clicks < 100) {
            title = 'Child';
        } else if (clicks < 200) {
            title = 'Teen';
        } else if (clicks < 500) {
            title = 'Adult';
        } else {
            title = 'Ninja';
        }
        return title;
    }, this);
}

var ViewModel = function() {


    this.incrementCounter = function () {
        this.currentCat().clickCount(this.currentCat()clickCount() + 1);
    };
};

ko.applyBindings(new ViewModel());