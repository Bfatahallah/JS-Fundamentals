// Get the arguments passed to the script
const args = process.argv.slice(2);

// Check if no arguments are provided
if (args [0] === undefined) {
    console.log("No argument");
}
// Check if arguments are provided, then print the first and second argument concatenated with "is" in between
else {
    console.log(args[0] + " is " + args[1]);
}

