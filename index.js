
/* 1) Write a function named calculateDifference that takes two arguments and returns the difference between the first and second argument.*/

function calculateDifference(num1,num2){
    return num1-num2

}
let subtraction =  calculateDifference(50,10)
console.log(subtraction);



/*2) Write a function named isOdd that takes one argument and returns true if the number is odd, and false if it is not.*/

function isOdd(number){
    if(number%2!==0){
        return true
    }
    else{
        return false
    }
}
let result = isOdd(15)
console.log(result)


/* 3) Write a function named findMin that takes an array of numbers and returns the smallest number in the array.*/

// function findMin(){
//     let num = [10,20,50,60,70,2]
    
// }



/* 4) Write a function named filterEvenNumbers that takes an array of numbers and returns a new array containing only the even numbers.*/

function filterEvenNumbers(arr){
    return arr.filter(function(num){
        return num % 2 ===0;

    });
}
let numbers = [2,6,8,7,9,13,15,30,25,47,89,40];
let evenNumbers = filterEvenNumbers(numbers);

console.log("Original Array:", numbers)
console.log("Even numbers:", evenNumbers)




/* 5) Write a function named sortArrayDescending that takes an array of numbers and returns a new array sorted in descending order.*/

function sortArrayDescending(){
    let numbersarray = [10,60,80,90,45,36,17,105,658]
    numbersarray.sort((a,b) => b-a )
    console.log("sort Array Descending numbers are:",numbersarray)
}
sortArrayDescending()


/* 6) Write a function named lowercaseFirstLetter that takes a string and returns the same string with the first letter lowercased.*/

// function lowercaseFirstLetter(){
//     let str = "Bangladesh is my favourite country."
//     firstLetter = str.indexOf(0)
//     console.log("first letteris:", firstLetter)
// }
// lowercaseFirstLetter()

