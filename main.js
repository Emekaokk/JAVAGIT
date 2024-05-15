//function to reverse string 

function reverseString(str) {
    // Split the string into an array of characters, reverse it, and join it back into a string
    return str.split('').reverse().join('');
}

//function to count string characters 

function countCharacters(str) {
    return str.length;
}

//function to capitalize 

function capitalizeWords(sentence) {
    // Split the sentence into an array of words
    let words = sentence.split(' ');
    
    // Iterate over each word and capitalize the first letter
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }
    
    // Join the words back into a sentence
    return words.join(' ');
}

// function for max and min 
function findMax(arr) {
    if (arr.length === 0) {
        return "Array is empty.";
    }
    
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

function findMin(arr) {
    if (arr.length === 0) {
        return "Array is empty.";
    }
    
    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
}

//sum of elements 

function calculateSum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

//filter array

function filterArray(arr, condition) {
    let filteredArray = [];
    for (let i = 0; i < arr.length; i++) {
        if (condition(arr[i])) {
            filteredArray.push(arr[i]);
        }
    }
    return filteredArray;
}

// factorial 
function factorial(n) {
    if (n < 0) {
        return "Factorial is not defined for negative numbers.";
    }
    if (n === 0 || n === 1) {
        return 1;
    }
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

//prime 
function isPrime(num) {
    // If the number is less than 2, it's not a prime number
    if (num < 2) {
        return false;
    }
    // Check for divisibility by numbers up to the square root of the number
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            // If the number is divisible by any other number, it's not a prime number
            return false;
        }
    }
    // If the number is not divisible by any other number, it's a prime number
    return true;
}

//fibonacci 
function generateFibonacci(numTerms) {
    if (numTerms <= 0) {
        return "Number of terms should be a positive integer.";
    }
    let sequence = [0, 1]; // Initialize the sequence with the first two Fibonacci numbers
    
    // Generate the Fibonacci sequence up to the specified number of terms
    for (let i = 2; i < numTerms; i++) {
        sequence.push(sequence[i - 1] + sequence[i - 2]);
    }
    
    return sequence;
}
