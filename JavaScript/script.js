var p=20
var q="hello"
var r=true
var s=null
var t
var u=234567654356785432678n
var v=Symbol("hello")
console.log(typeof p)
console.log(typeof q)
console.log(typeof r)
console.log(typeof s)
console.log(typeof t)
console.log(typeof u)
console.log(typeof v)

arr=[1,2,3,4,5]
console.log(arr)
console.log(typeof arr) 

var object={
    name:"Jeeva",
    age:18
}
console.log(object)
console.log(typeof object)

var a =10;
var b =20;
//arithmetic operator
console.log(a+b)
console.log(a-b)
console.log(a*b)
console.log(a/b)
console.log(a%b)
console.log("end\n")

//relational operator
console.log(a>b)
console.log(a<b)
console.log(a>=b)
console.log(a<=b)
console.log(a==b)
console.log(a!=b)
console.log("end\n")

var a =10;
var b ="20";
console.log(a>b)
console.log(a<b)
console.log(a>=b)
console.log(a<=b)
console.log(a==b)
console.log(a!=b)
console.log(a===b)
console.log(a!==b)
console.log("end\n")

var a =10;
var b ="20";
//arithmetic operator
console.log(a+b)
console.log(a-b)
console.log(a*b)
console.log(a/b)
console.log(a%b)
console.log("end\n")

var a =10;
var b =20;
//assignment operator
console.log(a=b)
console.log(a+=b)
console.log(a-=b)
console.log(a*=b)
console.log(a/=b)
console.log(a%=b)
console.log("end\n")

//logical operator
var a =true;
var b =false;
console.log(a&&b)
console.log(a||b)
console.log(!a)
console.log(!b)
console.log("end\n")

//for loop
for(let i=0;i<10;i++){
    console.log(i)
}
console.log("end\n")

//while loop
var i=0;
while(i<10){
    console.log(i)
    i++;
}
console.log("end\n")

var p=0;
while(p!==5){
    p++;
    console.log(p)
}
console.log("end\n")

//do while loop
var i=0;
do{
    console.log(i)
    i++;
}while(i===0)
console.log("end\n")

//conditional statement
var a=5;
if(a%2===0){
    console.log("even")
}
else{
    console.log("odd")
}
console.log("end\n")

//else if
var marks=90;
if(marks>=90){
    console.log("A grade")
}
else if(marks>=80){
    console.log("B grade")
}
else if(marks>=70){
    console.log("C grade")
}
else if(marks>=60){
    console.log("D grade")
}
else if(marks>=50){
    console.log("E grade")
}
else{
    console.log("F grade")
}
console.log("end\n")

//switch case
var day=1;
switch(day){
    case 1:
        console.log("Monday")
        break;
    case 2:
        console.log("Tuesday")
        break;
    case 3:
        console.log("Wednesday")
        break;
    case 4:
        console.log("Thursday")
        break;
    case 5:
        console.log("Friday")
        break;
    case 6:
        console.log("Saturday")
        break;
    case 7:
        console.log("Sunday")
        break;
    default:
        console.log("Invalid")
        break;
}
console.log("end\n")

//ternary operator
var a=10;
var b=20;
var c=a>b? a:b;
console.log(c)
console.log("end\n")

//else if using ternary operator
var marks=90;
var grade=marks>=90? "A grade":
marks>=80? "B grade":
marks>=70? "C grade":
marks>=60? "D grade":
marks>=50? "E grade":
"F grade";
console.log(grade)
console.log("end\n")

//function without parameter
function add(){
    var a=10;
    var b=20;
    console.log(a+b)
}
console.log("end\n")

//function with parameter
function add(a,b){
    console.log(a+b)
}
add(10,20)
add(30, 40)
console.log("end\n")

//arrow function
var add=(a, b)=>{
    console.log(a+b)
}
console.log("end\n")

add(10, 20)
console.log(typeof add)
console.log("end\n")

//spread operator
var arr=[1,2,3,4,5]
var arr1=[...arr,6,7,8,9,10]
console.log(arr)
console.log(arr1)
console.log("end\n")

//destructing operator
const [name,age,marks]=["Jeeva",18,90]
console.log(name)
console.log(age)
console.log(marks)
console.log("end\n")

const {name1,age1,marks1}={
    name1:"Jeeva",
    age1:18,
    marks1:90
}
console.log(name1)
console.log(age1)
console.log(marks1)
console.log("end\n")

//for..in loop
const object={
    name:"Jeeva",
    age:18,
    marks:90
}
for(let key in object){
    console.log(key)
    console.log(object[key])
}
console.log("end\n")

//for each loop
var arr=[1,2,3,4,5]
arr.forEach((val,index)=>{
    console.log(val)
    console.log(index)
})

class Person{
    name="Jeeva"
    age=18
    constructor(name,age){
        this.name=name
        this.age=age
    }
    print(){
        console.log(this.name)
        console.log(this.age)
    }
}
var person1=new Person("Dhrshini", 17)
person1.print()
console.log("end\n")

//prime number
var num=73
var flag=true
for(let i=2;i<num/2;i++){
    if(num%i===0){
        flag=false
        break
    }
}
if(flag){
    console.log("Prime")
}
else{
    console.log("Not Prime")
}

//palindrome
var num=12321
var temp=num
var rev=0
while(num>0){
    var rem=num%10
    rev=rev*10+rem
    num=Math.floor(num/10)
}
if(temp===rev){
    console.log("Palindrome")
}
else{
    console.log("Not Palindrome")
}
console.log("end\n")

var a=10
if(true){
    var b=20
    console.log(a)
}
console.log(a,b)
console.log("end\n")

let c=10
if(true){
    let d=20
    console.log(c)
}
console.log(c,d)
console.log("end\n")

//hoisting
console.log(a)
const a=10

//callback function
var demo=()=>{
    console.log("Demo -> Hello")
}
var main=(callback)=>{
    console.log("Main called")
    callback()
}
main(demo)

var add=(a,b,callback)=>{
    var res=a+b
    callback(res)
}
add(10, 20, (res)=>{
    console.log(res)
})

console.log("start")   
var Demo=()=>{
    setTimeout(()=>{
        console.log("Processing.......")
    }, 2000)
}   
Demo()