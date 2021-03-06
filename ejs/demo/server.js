var express = require('express')
var app = express()
var bodyParser = require('body-parser')
var multer = require('multer')
var fs = require("fs");
var cookieParser = require('cookie-parser')
var util = require('util');

var urlencodeParser = bodyParser.urlencoded({extended : false});
app.use(multer({ dest: '/tmp/'}).array('image'));

app.use(express.static('public'))

app.get('/index.html', function(req, res){
  res.sendFile(__dirname + "/" + "index.html");
})

app.get('/',function(req, res){
  console.log('Cookies:' + util.inspect(req.cookies));
})

app.get('/process_get',function(req, res){
  var response = {
    "first_name" : req.query.first_name,
    "last_name" : req.query.last_name
  }
  console.log(response);
  res.end(JSON.stringify(response));
})

app.post('/process_get',urlencodeParser, function(req, res){
  var response = {
    "first_name" : req.body.first_name,
    "last_name" : req.body.last_name
  }
  console.log(response);
  res.end(JSON.stringify(response));
})

app.post('/file_upload', function (req, res) {
 
  console.log(req.files[0]);  // 上传的文件信息

  var des_file = __dirname + "/" + req.files[0].originalname;
  fs.readFile( req.files[0].path, function (err, data) {
       fs.writeFile(des_file, data, function (err) {
        if( err ){
             console.log( err );
        }else{
              response = {
                  message:'File uploaded successfully', 
                  filename:req.files[0].originalname
             };
         }
         console.log( response );
         res.end( JSON.stringify( response ) );
      });
  });
})

var server = app.listen(8081,function(){
  var host = server.address().adderss
  var port = server.address().port
  console.log("应用实例，访问地址为 http://%s:%s", host, port)
})