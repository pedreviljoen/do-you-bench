module.exports = [
  {
    name: "requests",
    type: "input",
    message: "Enter the number of requests (Int)",
    default: 10
  },
  {
    name: "concurrency",
    type: "input",
    message: "Specify the number of concurrent requests (Int)",
    default: 1
  },
  {
    name: "protocol",
    type: "list",
    message: "Please choose a protocol",
    choices: ["http", "https"],
    default: "http"
  },
  {
    name: "hostname",
    type: "input",
    message: "Please specify a host name",
    validate: function(val) {
      if (val.length) {
        return true
      } else {
        return "Please enter a valid host name"
      }
    }
  },
  {
    name: "path",
    type: "input",
    message: "Please specify a path",
    default: ""
  }
]
