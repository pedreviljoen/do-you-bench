const shell = require("shelljs")

const executeShell = (input = {}) => {
  const cmd = `ab -n ${input.requests} -c ${input.concurrency} ${input.protocol}://${
    input.hostname
  }/${input.path}`

  shell.exec(cmd)
}

module.exports = {
  executeShell
}
