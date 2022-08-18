//Modules
const names =require("./names")
const SayHi =require("./utils")
const person=require("./alternative-flavor")
require('./mind-grante')
console.log(person);
console.log(names);
SayHi("John");
SayHi(names.name1);
SayHi(names.name2);

