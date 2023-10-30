const inquirer = require('inquirer')
const fs = require('fs')
const generateSvg = require("./utils/generatesvg")


const questions = [
    {
        type: "input",
        message: "please enter 3 letters for your logo",
        name:"letters"
    },
    {
        type: "input",
        message: "please enter a color for your text",
        name: "color"
    },
    {
        type: "list",
        message: "please select a shape",
        choices: ["circle", "triangle", "square"],
        name: "shape"
    },
    {
        type: "input",
        message: "please ender a color for your shape",
        name: "shapeColor"
    },
  

]

function init() {
    inquirer
    .prompt(questions)
    .then((response) => {
      fs.writeFile("./output/logo.svg", generateSvg(response) , (error)=>error?console.error(error):console.log("successful") );
    });
  }

  init()