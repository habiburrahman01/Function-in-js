// declaring a function
console.log(' declaring a function:')
var a=20 //global variable
var b=30
function add(){
    
    console.log(a+b)
}
add()//calling add function
console.log('calling function 10 times using for loop')
for(var i=0;i<=10;i++){


   console.log(
       i+': '
   ) 
   add()
}

//arguments of function
console.log('Arguments of function')
function sub(a,b){
    console.log(a-b)
}
sub(10,5)//arguments of function

//write down a function for find out the summetion of an array element

var arr=[]//emty array
arr.splice(0,0,10,20,30,40,50,60,70,80,90,100)
console.log(arr.join(','))
function arraySum(){
    var sum=0
for(var i=0;i<arr.length;i++){
   
   sum=sum+arr[i]
  

     
}
console.log(sum)
}
arraySum()

//Arguments object in js Function

console.log('Arguments object in js function')
function test(a,b,c){
    console.log(arguments)
}
test(5,6,7)

//traversing arguments
console.log('traversing arguments')
function argTraversing(a,b,c){
for(var i=0;i<arguments.length;i++){
    console.log(arguments[i])
}


}
argTraversing(40,50,60)

//return from function
console.log('Return from function')
function addAll(){
    var sum=0
    for(var i=0;i<arguments.length;i++)
    {
        sum+=arguments[i]
    }
    return sum
}
var result=addAll(0,1,2,3,4,5,6,7,8,9)
console.log(result)

//return object
function Person(){
    return{
        name: 'Habibur Rahman',
        email:'rhabibur1710@gmail.com'
    }
}
console.log(Person())
console.log(Person().name)
console.log(Person().email)

//inner function 
console.log("inner function")
function x(){
    
    function y()
    {
        var sum=0;
        for(var i=0;i<arguments.length;i++){
           sum+=arguments[i]
        }
        return sum
    }
 var addition=y(10,20)
 console.log(addition)

}
x()