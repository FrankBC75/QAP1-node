// Log messages to stdout
console.log("This is a regular log message");
console.info("This is an informational message");
console.warn("This is a warning message");
console.error("This is an error message");

// Log objects
const user = {
  name: "John",
  age: 30,
};
console.log("User:", user);

// Measure execution time
console.time("Loop");
for (let i = 0; i < 1000000; i++) {}
console.timeEnd("Loop");

// Redirect stdout and stderr to a file
const fs = require("fs");
const logStream = fs.createWriteStream("app.log");
console.log("Logging to a file");
console.error("Error to a file");
console.warn("Warning to a file");

//3. console Object:

//The console object provides methods for writing
//log messages to the standard output (stdout)
//and standard error (stderr). It is commonly
//used for debugging and logging information
//about the application's execution.
