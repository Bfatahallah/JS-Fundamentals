// Get the arguments passed to the script
const args = process.argv.slice(2);

// Check if no arguments are provided
if (args.length === 0) {
    console.log("No argument");
}
// Check if arguments are provided, then print the first argument
else {
    console.log(args[0]);
}

