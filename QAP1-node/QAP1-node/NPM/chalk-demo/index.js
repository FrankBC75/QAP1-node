// Import the chalk package
const chalk = require("chalk");

// Use chalk to style console.log() output
console.log(chalk.blue("This is a blue text."));
console.log(chalk.green("This is a green text."));
console.log(chalk.red("This is a red text with underline.").underline);
console.log(
  chalk.yellow.bgRed.bold(
    "This is yellow text on a red background with bold style."
  )
);
