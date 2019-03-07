const inquirer = require("inquirer")

const promptQuestion = question => {
  return inquirer.prompt(question)
}

module.exports = {
  promptQuestion
}
