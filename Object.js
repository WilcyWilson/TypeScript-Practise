var Point2 = /** @class */ (function () {
    function Point2() {
    }
    Point2.prototype.draw2 = function () {
        console.log('X: ' + this.x + ', Y: ' + this.y);
    };
    Point2.prototype.getDistance = function (another) {
        //.,.
    };
    return Point2;
}());
var point = new Point2();
point.x = 2;
point.y = 3;
point.draw2();
