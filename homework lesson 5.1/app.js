(function () {

    var Class = {
        extendClass: function (dest, extClass) {
            dest.prototype = Object.create(extClass.prototype);
            dest.prototype.constructor = dest;
        }
    };

    function Car(color) {
        this.color = color;
    }
    Class.extendClass(Car, {
        d: 0,
        drive: function () {
            this.d++;
        }
    });

    function Track(color, weight) {
        Car.apply(this, arguments);

        this.weight = weight;
    }

    Class.extendClass(Track, Car, {
        drop: function () {

        }
    });
}());