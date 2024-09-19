
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

function findMin(arr){
    return Math.min(...arr);
}

let num=[45,25,10,20,4,60,54,89,78,20];
console.log(findMin(num));





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
    let Numbers =[15,27,1,83,874,985,786,1250];
     return Numbers.sort(function(a,b){
        return b-a;
    })
} 

let res = sortArrayDescending();
console.log( "sor tArray Descending numbers are:",res);





/* 6) Write a function named lowercaseFirstLetter that takes a string and returns the same string with the first letter lowercased.*/

function lowercaseFirstLetter(str){
    return str[0].toLowerCase() + str.slice(1);
}

console.log(lowercaseFirstLetter("MY COUNTRY IS BANGLADSESH"))




/*  7) Write a function named countVowels that takes a string and returns the number of vowels (a, e, i, o, u, A, E, I, O, U) in the string. It should filter vowels from the string. */
function countVowels(str){
    return[...str].filter(char => "aeiouAEIOU.".includes(char)).length
}

console.log(countVowels("This is an example of vowel "))





/*  8) Write a function named findAverage that takes an array of numbers and returns the average of all elements. */
function findAverage(arr){
    sum = 0;
    for(let num of arr){
        sum += num;
    }
    return sum/arr.length;
}

let number = [10,20,30,40,50]
let average = findAverage(number)
console.log(average)
