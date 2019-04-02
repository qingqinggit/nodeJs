var express = require('express')
var app = express();
app.use(express.static('public'))

app.get('/',function(req, res){
  res.send('Hello get');
})

app.post('/', function(req, res){
  console.log('post request');
  res.send('Hello Post');
})

app.get('/del_user',function(req, res){
  res.send('delete page')
})

app.get('/ab*cd',function(req, res){
    res.send('正则匹配')
})

var server = app.listen(8081, function(){
  var host = server.address().address;
  var port = server.address().port;

  console.log('应用实例，访问地址为http://%s%s', host, port);
})