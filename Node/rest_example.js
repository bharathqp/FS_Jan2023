//Refer Mongoose API https://mongoosejs.com/docs/queries.html


const express = require('express');
const mongoose = require('mongoose');
let app = express();


const formidable = require('formidable');
const form = formidable({ multiples: true });


mongoose.connect('mongodb://127.0.0.1:27017/School')
.then(() => console.log('Connected!'))
.catch(err => console.log('Could not connect because : '+ err));


const StudentSchema = new mongoose.Schema({
  first_name: String,
  last_name: String,
  batch: Number,
  profile_pic: String,
});


const StudentModel = mongoose.model('Student', StudentSchema);



app.get("/students", async (req, res) => {
	let output = await StudentModel.find({});
	res.json(output)
});




app.get("/students/:first_name", async (req, res) => {

	let output = await StudentModel.find({first_name:req.params.first_name});
	res.json(output)
});





app.put("/students/:last_name", async (req, res) => {
	let filter = {last_name:req.params.last_name}

	let modification = {first_name:"ABC"}
	let output = await StudentModel.updateMany(filter, modification);
	res.json(output)
});






app.post("/insert", (req, res) => {
	form.parse(req, (err, fields, files) => {
		let st = StudentModel(fields)
		st.save()
		res.send("Successfully Inserted")
	});
});



app.listen(3000);