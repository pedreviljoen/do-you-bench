const inquirer = require("inquirer")

const promptQuestion = question => {
  return inquirer.prompt(question)
}

const collectInput = (input = []) => {
  const blueprint = {
    type: "input",
    validate: function(val) {
      if (val.length) {
        return true
      } else {
        return "Please provide a valid input"
      }
    }
  }

  return input.map(topic => {
    return {
      ...blueprint,
      name: topic.toLowerCase(),
      message: `${topic}: `
    }
  })
}

module.exports = {
  promptQuestion,
  collectInput
}
