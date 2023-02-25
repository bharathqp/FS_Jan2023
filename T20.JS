// class Programing {
// 	constructor(ifs, loops, switchs, polymorphism){
// 		this.if_statement = ifs
// 		this.loops = loops
// 		this.switchs = switchs
// 		this.polym = polymorphism
// 	}
// }



// class Child extends Programing{
// 	constructor(a, b, c, d, fe, be){
// 		super(a, b, c, d)
// 		this.front_end = fe
// 		this.backend = be
// 	}
// }


// let python = new Child(true, true, false, true, true, true)
// let js     = new Child(true, true, true, false, true, true)
// let php     = new Child(true, true, true, true, false, true)
// let html     = new Child(false, false, false, false, true, false)

// console.log(php)



class Vehicle {
	constructor(a){
		this.first = a
	}
}


class RoadVeicles extends Vehicle{
	constructor(a, b){
		super(a)
		this.second = b
	}
}



class FourWheelers extends RoadVeicles{
	constructor(a, b, c){
		super(a, b,)
		this.third = c
	}
}


class HondaCars extends FourWheelers{
	constructor(a, b, c){
		super(a, b,)
		this.third = c
	}
}



let v1 = new Vehicle(1000);
let c1 = new RoadVeicles(500, 600);
let gc1 = new FourWheelers(10, 20, 30);


console.log(gc1)



class ArialVehcles {
	constructor(wheels){

	}
}
