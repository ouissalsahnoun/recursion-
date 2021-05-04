// Wissal-Ines 
//04/05/2021
//recursion 
//Q1
function sum(number){
if ( number==-5){
return 0}
return number+sum(number-1)
}
undefined
sum(3)
6
sum(4)
10
//Q2
function factorial(number){
    if (number===0){
        return 1}
    return number*factorial(number-1)}
undefined
factorial(3)
6
factorial(4)
24
//Q3
function repeatString(string,number){
    if (number===0){
        return ""}
    return   string + repeatString(string,number-1)  }
undefined
repeatString('dog',0)
""
repeatString('dog',2)
"dogdog"
//Q4
function fibonacci(number){
var number1=0;
var number2=1;
var sum=0;
    if (number===1){
        return 1}
   sum=number1+number2;
  number2=number1;
  number1=sum;
    return  }
1+1=2
2+1=3
3+2=5
5+3=8
8+5=13
number1+number2=number3
number2=number1
number1=number3
function fibonacci(number){
var number1=0;
var number2=1;
var sum=0
for (i=0;i<=number;i++){
  sum=number1+number2;
  number2=number1;
  number1=sum;}
return sum }
//Q5
function multiplyBy10(firstNumber, secondNumber) {
function help(secondNumber){
  if (secondNumber===0){
   return 1}
   return 10*help(secondNumber-1)
  }
return firstNumber * help(secondNumber)}
undefined
multiplyBy10(4,3)
4000
multiplyBy10(5,2)
500
//Q6
function sumBetween(start, end) {
  if (start>end){
   var a=start;
   start=end;
   end=a } 
  if (start===end){
      return end}
    return start+sumBetween(start+1,end)}
undefined
sumBetween(2,7)
27
//Q7
function add(number1,number2){
    if (number1===0){
        return number2}
    return add(dec(number1),inc(number2))}
undefined
function inc(x) {
return x + 1
}
function dec(x) {
return x - 1
}
undefined
add(1,2)
3
//Q8
//Q9
function multiply(number1, number2){
  if (number2===0){
   return 0}
return number1+multiply(number1,number2-1)}
undefined
multiply(3,2)
6
multiply(5,5)
25