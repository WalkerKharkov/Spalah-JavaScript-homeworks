function Car(color){
    this.color=color;
}

function Track(color, weight){
    Car.apply(this, arguments);
    this.weight=weight;
}

Track.prototype=Object.create(Car.prototype);
Track.prototype.constructor=Track;

console.dir(Track);
console.dir(Track.prototype);

var track=new Track('red', 100);

console.log(track);
//console.log(track.prototype);