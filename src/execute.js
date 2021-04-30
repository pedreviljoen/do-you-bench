const shell = require("shelljs")

const executeShell = (cmd) => {
  shell.exec(cmd)
}

const generateCommand = (input = {}) => {
  let command = `ab -n ${input.requests} -c ${input.concurrency} `

  if (input.postfile) {
    command = `${command} -p ${input.postfile} -H 'accept: application/json' -H 'Content-Type: application/json' `
  }

  return `${command} ${input.protocol}://${input.domain}/${replaceAll(input.path, "/", "")}/`
}

function replaceAll(string = "", character = "", replace = "") {
  return string.split(character).join(replace)
}

module.exports = {
  executeShell,
  generateCommand,
}
