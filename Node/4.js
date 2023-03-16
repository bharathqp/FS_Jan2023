let fs = require('fs')
let http = require('http')

// fs.appendFile('first_text.txt', 
// 	'Welcome to Node js File System', (err) => {
// 		if (err){
// 			throw err 
// 		}
// 		console.log("The file Saved Successfully!!")
// 	});

// fs.readFile('first_text.txt', function (err, file) {
//     if (err) {
//         throw err;
//     }
//     processFile(file);   // Put all of the code here (not the best solution)
// });

// function processFile(content) {
//     console.log(content);
// }


http.createServer((req, res) => {
	fs.readFile('six.html', 
		function (err, data) {  
			res.writeHead(200, {'Content-Type':'text/html'});
			res.write(data);
			return res.end();});
  }).listen(3002);



// fs.open('dfd')
// fs.write('dfd')
// fs.unlink('1.jpg')
// fs.rename('1.jpg')
