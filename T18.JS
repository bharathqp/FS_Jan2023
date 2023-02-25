class student {
	static class_timings = "9:30 AM"
	constructor(fname, batch, ct){
		this.first_name = fname
		this.batch = batch
		this.city = ct
		this.year = 2023
	}

	changeBatch(new_batch){
		this.batch = new_batch
		// this.class_timings = "9:30 AM"
	}


	static changeBatchTimings() {
		this.class_timings = "8:30 AM"
		// console.log("Your new Batch timings is 8:30 AM")
	}
}


let student1 = new student("Ankitha", "FS", "Mumbai");
let student2 = new student("Sagar", "Testing", "Delhi");
let student3 = new student("Sagar", "Devops", "Delhi");

student1.constructor.changeBatchTimings()
console.log(student1.constructor.class_timings)
console.log(student2.constructor.class_timings)


