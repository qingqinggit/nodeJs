var Hello = require('./hello')
var util = require('util')

var hello = new Hello();
hello.setName('qq');
hello.sayHello();

function Base(){
  this.name = 'base';
  this.base =1991;
  this.sayHello = function(){
    console.log('Hello' + this.name)
  }
}
Base.prototype.showName = function(){
  console.log(this.name)
}

function Sub(){
  this.name = 'sub';
}

util.inherits(Sub,Base);
var objBase = new Base();
objBase.showName();

