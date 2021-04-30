const shell = require("shelljs")

const executeShell = (cmd) => {
  shell.exec(cmd)
}

const generateCommand = (input = {}) => {
  let command = `ab -n ${input.requests} -c ${input.concurrency} `

  if (input.postfile) {
    command = `${command} -p ${input.postfile} -H 'accept: application/json' -H 'Content-Type: application/json' `
  }

  return `${command} ${input.protocol}://${input.domain}/${input.path}/`
}

module.exports = {
  executeShell,
  generateCommand,
}
