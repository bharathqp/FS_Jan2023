// function a(){console.log("Hello!!")}
// function b(){console.log("Good!!")}
// function c(){console.log("Morning!!")}

// a()
// setTimeout(b, 3000)
// c()
// setTimeout(a, 1000)

function upload(inp) {
	console.log("File" , inp)
}

// let p = new Promise(function(resolve, reject){
// 	let x = 'success'

// 	if (x == 'success')
// 	{
// 		resolve("uploaded")
// 	}
// 	else{
// 		reject("not uploaded");
// 	}
// });

// p.then(
// 	function (value) {upload(value)},
// 	function (error) {upload2("NOOOOOOOO, "+error)}
// );


// function p(){
// 	return Promise.resolve("Uploaded!!")
// }

// p().then(
// 	function (value) {upload(value)},
// 	function (error) {upload2("NOOOOOOOO, "+error)}
// );


// async function p(){
// 	return "Uploaded!!"
// }


// p().then(
// 	function (value) {upload(value)},
// 	function (error) {upload2("NOOOOOOOO, "+error)}
// );


	function asynchronous_safe_lift_method() {
		let x = 'nok'
		let first_promise = new Promise((resolve, reject) => {
					if (x=='ok')
					{
						resolve("Use lift")
					}
					else{
						reject("Fire, dont use lift")
					}
				});



		let 2 = new Promise((resolve, reject) => {
			setTimeout(() => {
			resolve(" GeeksforGeeks..");}, 3000);
		});

		let 3 = new Promise((resolve, reject) => {
			setTimeout(() => {
			resolve(" GeeksforGeeks..");}, 1000);
		});

		let 4 = new Promise((resolve, reject) => {
			setTimeout(() => {
			resolve(" GeeksforGeeks..");}, 1000);
		});



		let combined_promise = Promise.all([1, 2, 3, 4, 5]);
		return first_promise;
	}
	


	// async function checkItem() {
	//   const [ item, error ] = await safePromise(getItem(id));
	//   if (error) { return null; } // handle error and return
	//   return item; // no error so safe to use item
	// }


	async function use_lift() {
		await asynchronous_safe_lift_method()
				.then(
					(value)=> console.log(value),
					(err)=> console.log(err))

	}
	
	use_lift();