var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Image route');
});

router.get('/upload', function(req, res, next) {
  res.sendfile('./public/html/images-upload.html');
});

router.post('/upload', function(req, res, next) {

	var multiparty = require("multiparty");
	var form = new multiparty.Form();

	form.parse(req, function(err, fields, files){
		
		var img = files.images[0];
		var fs = require("fs");

		 fs.readFile(img.path, function(err, data) {

		 var path="./public/images/"+img.originalFilename;
		 
		fs.writeFile(path, data, function(error){
			if(error) console.log(error);

			res.send("Upload Success");
		});	
	});  
});
});

module.exports = router;
