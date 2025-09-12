// Get the arguments passed to the script
const args = process.argv.slice(2);

// Check if no arguments are provided
if (args.length === 0) {
    console.log("No argument");
}
// Check if only one argument is provided
else if (args.length === 1) {
    console.log("Argument found");
 }
// 'Otherwise' Check if two or more arguments are provided
else  {
    console.log("Arguments found");
}