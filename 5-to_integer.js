// Get the arguments passed to the script
const args = process.argv.slice(2);

// Try to convert the first argument to an integer
const num = parseInt(args[0], 10);

// Check if the conversion was successful
if (isNaN(num)) {
    console.log("Not a number");
} else {
    console.log("My number: " + num);
}
