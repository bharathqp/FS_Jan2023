class Parent {
	constructor(){
		this.house = "2BHK"
	}

	getInfo(){
		console.log(this)
	}



}




class Child extends Parent{
	constructor(){
		super()
		this.car = "Alto"
	}


	getInfo(){
		console.log(this.car)
	}

}


let p1 = new Parent();
let c1 = new Child();

p1.constructor.getInfo()
