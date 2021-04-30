module.exports = [
  {
    name: "requests",
    type: "input",
    message: "Enter the number of requests (Int)",
    default: 10,
  },
  {
    name: "concurrency",
    type: "input",
    message: "Specify the number of concurrent requests (Int)",
    default: 1,
  },
  {
    name: "protocol",
    type: "list",
    message: "Please choose a protocol",
    choices: ["http", "https"],
    default: "http",
  },
  {
    name: "method",
    type: "list",
    message: "Please choose the Method of the request",
    choices: ["GET", "POST"],
    default: "GET",
  },
  {
    name: "postfile",
    type: "input",
    message: "Please specify the post data file",
    when: (answers) => answers.method === "POST",
  },
  {
    name: "domain",
    type: "input",
    message: "Please specify the domain name",
    validate: function (val) {
      if (val.length) {
        return true
      } else {
        return "Please enter a valid host name"
      }
    },
  },
  {
    name: "path",
    type: "input",
    message: "Please specify a path",
    default: "",
  },
]
