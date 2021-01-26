"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Animal = /** @class */ (function () {
    function Animal(animalType) {
        this.type = animalType;
    }
    Animal.prototype.Speak = function () {
        console.log('Meark');
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(leg) {
        var _this = _super.call(this, 'Dog') || this;
        _this.legs = length;
        return _this;
    }
    Dog.prototype.Speak = function () {
        console.log('BowWow');
        _super.prototype.Speak.call(this);
    };
    return Dog;
}(Animal));
var scout = new Dog(4);
scout.Speak();
var genericAnimal = scout;
genericAnimal.Speak();
//# sourceMappingURL=index.js.map