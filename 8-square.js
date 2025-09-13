// Get the arguments passed to the script
const args = process.argv.slice(2);

// Try to convert the first argument to an integer
const num = parseInt(args[0], 10);

// Check if the conversion was successful and handle accordingly
if (isNaN(num)) {
    console.log("Missing size");
} else if (num > 0) {
    for (let i = 0; i < num; i++) {
    console.log("x".repeat(num));
    }
}
