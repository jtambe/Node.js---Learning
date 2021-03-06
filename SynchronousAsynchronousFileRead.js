var fs = require("fs");

var data = fs.readFileSync('input.txt');

console.log(data.toString());
console.log("Program Ended 1");

fs.readFile('input.txt', function (err, data) {
   if (err) return console.error(err);
   console.log(data.toString());
});

console.log("Program Ended 2");

//Synchronous code to read a .txt file

var fs = require("fs");
var data = fs.readFileSync('input.txt');
console.log(data.toString());
console.log("Program over");

// In above code, input file is read first and then "Program over" text is printed on console.


//Asynchronous code

var fs = require("fs")
fs.readFile('input.txt',function(err,data){
 if(err) {return console.error(err);}
 console.log(data.toString());
});
console.log("Program over");

// In above code, input file is read after "Program over" text is printed. This shows asynchronous execution of program.
