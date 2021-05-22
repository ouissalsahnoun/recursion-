
//Q1
//Answer 
function sum(number){
if ( number==0){

return 0
}

return number+sum(number-1)
}






//Q2

// answer 

function factorial(number){
	if (number===0){
  return 1}

 return number * factorial(number-1)
 }


//Q3
// answer 

function repeatString(string,number){
    if (number===0){
    	return ""
    }

return string + repeatString(string,(number-1))
}


// Q4
// answer 

function fibonacci(number){
 



}



// Q5 
// answer 

function multiplyBy10(number1,number2){

	function help(number2){


	if ((number2)===0){
		return 1
	}
	return 10 * help((number2)-1)
   }

	
   return number1* help(number2)
	}



// Q6
// Answer 
function sumBetween(start,end){
if (start>end){
	var a= start;
	start=end;
	end=a
}
if (start===end){
	return end }
	return start + sumbetween(start+1,end)
}

//to redo



// Q7
// answer 


function INC(x){

	return x+1
}


function DEC(x){

	return x-1
}



function add(number1,number2){

	if (number1===0){ 
		return number2}

    return add(DEC(number1),INC(number2))
	}


//Q8
// answer 
function dec(x){


	return x-2
}

function isEven(number){

	if (number===1)
		{return false }

      if (number===0)
      	{ return true }

return isEven(dec(number))

}


// Q9
// answer 
function multiply(number1,number2){
if (number2===0) {

	return 0

}
return number1+multiply(number1,((number2)-1))



}



// Q10 
// answer 




function inc(x){

	return x+1
}


function range(start,end){

if (start===end-1){

return " "
}
return start+1 + ","+ range(inc(start),end)
}




// Q11
// Answer 

function stringLength(string){
    if (string.slice(0,(string.length-1))===""){
    	return 1
    }

 return 1+ stringLength(string.slice(0,(string.length-1)))   	
}




//Q12 
// Answer 

function modulo(number1,number2){

if (number1<number2){
	return number1 
}

 return modulo(number1-number2,number2)
}


// Q13







//Q14






//Q15
// answer 

function power(base,exponent){
    if (exponent===0){
        return 1}
    return base*power(base,exponent-1)}


//Q16


function reverseString(string){

	if ( string.slice(0,(string.length)-1)===""){
		return string[0]
	}

 return string[string.length-1] + stringLength(string.slice(0.(string.length-1)))
}















































