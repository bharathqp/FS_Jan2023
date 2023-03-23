const express = require('express')
const app = express()
const fs = require('fs')


const formidable = require('formidable');
const form = formidable({ multiples: true });


app.get('', (req, res) => {
	res.sendFile(__dirname+'/views/index.html')
})

app.get('/register_view', (req, res) => {

	res.sendFile(__dirname+'/views/register.html')
})



app.post('/register', (req, res) => {


    form.parse(req, (err, fields, files) => {
      res.end(files['profile_image'].filepath);

      //fs.writeFile(__dirname+'/images/ok.jpg", files, ()=> console.log("Successfully saved"))
		
	  oldPath = files['profile_image'].filepath
	  newPath = __dirname+"/images/ok"


	  fs.rename( oldPath,  newPath,
	  	function(err) {if ( err ) console.log('ERROR: ' + err);
        });
    });
















})

app.listen(3000)