var ViewModel = function() {
    this.clickCount = ko.observable()
    this.name = ko.observable
    this.imbSrc = ko.observable(img)
    this.imgAttribution = ko.observable(HTTP)

    this.incrementCounter = function () {
        this.clickCount(this.clickCount() + 1);
    };
}

ko.applyBindings(new ViewModel());