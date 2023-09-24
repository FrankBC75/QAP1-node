// Access command-line arguments
console.log("Command Line Arguments:", process.argv);

// Access environment variables
console.log("Environment Variable (HOME):", process.env.HOME);

// Listen for exit event
process.on("exit", (code) => {
  console.log(`Process exited with code ${code}`);
});

// Simulate an unhandled exception
throw new Error("This is an unhandled exception");
