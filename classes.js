'use strict';

class Car {
    constructor(year, type, torch, hp, speed) {
        this.year = year;
        this.type = type;
        this.torch = torch;
        this.hp = hp;
        this.speed = speed;
    }

    calcPower() {
        return this.torch * this.hp;
    }
}

class Cars2022 extends Car {
    constructor(year, type, torch, hp, speed, engineType) {
        super(year, type, torch, hp, speed);
        this.engineType = engineType;
    }
}

const Bentley = new Car (2015, 'lux', 6000, 500, 310);

const Bentley2022 = new Cars2022(2022, 'lux', 6300, 430, 305);
Bentley2022.engineType = 'electro';

console.log(Bentley2022);
console.log(Bentley.calcPower());
console.log(Bentley2022.calcPower());



//console.log(Bentley.calcPower());


