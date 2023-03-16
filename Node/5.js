let fs = require('fs')
let http = require('readPdf')

let server = http.createServer((req, res) => {
	if(req.url == '/about')
	{
		res.writeHead(200, {'Content-Type':'text/html'});
		res.write("About Page");
		res.end()
	}
	else if(req.url == '/contact')
	{
		res.writeHead(200, {'Content-Type':'text/html'});
		res.write("Contact Page");
		res.end()
	}
	else if(req.url == '/file')
	{ 
		fs.readFile('1.jpg',  function (err, data) 
		{  
			res.setHeader('Content-Type','application/octet-stream');
			res.setHeader('Content-Disposition', 'attachment; filename="car.jpg"' );
			res.write(data);
			return res.end();
		});
	}
	else if(req.url == '/car.jpg'){
		res.writeHead(200, {'Content-Type':'image/jpg'});
		fs.createReadStream('1.jpg').pipe(res)
	}
	else{
		res.writeHead(200, {'Content-Type':'text/html'});
		res.write("<h1>Home Page</h1> <img src='/car' height='300'>");
		res.end()
	}


  })



server.listen(3002, ()=>{
	console.log("connection successful on 3002 port")
});