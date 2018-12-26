
//
function add(a, b, callback){
return callback(a+b)
}

var a = 5;
var b=6;

add (a, b, function(result){
console.log("Thre result is : "+ result);

});
