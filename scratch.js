var ViewModel = function() {
    this.clickCount = ko.observable();
    this.name = ko.observable;
    this.imbSrc = ko.observable(img);
    this.imgAttribution = ko.observable(HTTP);
    this.nicknames = ko.observableArray(['Zer Zer', 'Zero', 'Missa Mew Mew']);

    this.incrementCounter = function () {
        this.currentCat().clickCount(this.currentCat()clickCount() + 1);
    };
};

ko.applyBindings(new ViewModel());