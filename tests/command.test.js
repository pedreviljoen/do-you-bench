const { generateCommand } = require("../src/execute")

test("Should generate http command", () => {
  const executables = {
    requests: 50,
    concurrency: 5,
    protocol: "http",
    hostname: "revix.com",
    path: "",
  }

  const cmd = generateCommand(executables)
  expect(cmd).toBe("ab -n 50 -c 5 http://www.revix.com/")
})

test("Should generate https command", () => {
  const executables = {
    requests: 50,
    concurrency: 5,
    protocol: "https",
    hostname: "revix.com",
    path: "",
  }

  const cmd = generateCommand(executables)
  expect(cmd).toBe("ab -n 50 -c 5 https://www.revix.com/")
})
