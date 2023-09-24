// Define a function to access the global variable
const getGlobalVar = () => {
  return myGlobalVar;
};

// Define a function to call the global function
const callGlobalFunction = () => {
  myGlobalFunction();
};

module.exports = {
  getGlobalVar,
  callGlobalFunction,
};
