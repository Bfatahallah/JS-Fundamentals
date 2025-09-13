// Get the arguments passed to the script
const args = process.argv.slice(2);

// Check if there are fewer than two arguments
if (args.length < 2) {
    console.log("NaN");
} else {
    // Convert the arguments to integers
    const num1 = parseInt(args[0], 10);
    const num2 = parseInt(args[1], 10);

    // Check if both conversions were successful
    if (isNaN(num1) || isNaN(num2)) {
        console.log("NaN");
    } else {
        console.log(num1 + num2);
    }
}
