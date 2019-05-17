const shell = require("shelljs")

const executeShell = cmd => {
  shell.exec(cmd)
}

const generateCommand = (input = {}) => {
  return `ab -n ${input.requests} -c ${input.concurrency} ${input.protocol}://www.${
    input.hostname
  }/${input.path}`
}

module.exports = {
  executeShell,
  generateCommand
}
