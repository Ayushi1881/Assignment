var a="Global";
console.log("Scope: "+a)
function myFunc(){

  var b="Local";
  console.log("Scope: "+b)
  console.log("Scope "+a+" called inside: "+b)
}
myFunc();
