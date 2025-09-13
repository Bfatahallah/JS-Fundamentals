// Get the arguments passed to the script
const args = process.argv.slice(2);
// Convert the argument to an integer
const num = parseInt(args[0], 10);

// Factorial function declaration
function factorial(n) {
    if (n === 0|n === 1) {
        // Base case:(0!=1 & 1!=1)
        return 1; 
    }
    return n * factorial(n - 1); // Recursive case
}

if (isNaN(num)) {
    console.log("1"); 
} else if (num < 0) {
    console.log("Factorial is not defined for negative numbers");
} else {
    // Print the factorial of the number
    console.log(factorial(num)); 
}