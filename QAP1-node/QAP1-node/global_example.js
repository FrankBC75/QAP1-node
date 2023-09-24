// Define a global variable
myGlobalVar = 42;

// Access the global variable from another module
const anotherModule = require("./another_module");
console.log(
  "Accessing Global Variable from another module:",
  anotherModule.getGlobalVar()
);

// Define a global function
myGlobalFunction = () => {
  console.log("This is a global function");
};

// Call the global function from another module
anotherModule.callGlobalFunction();
