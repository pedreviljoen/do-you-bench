#!/usr/bin/env node
const { promptQuestion } = require("./src/consolePrompter")
const { executeShell, generateCommand } = require("./src/execute")
const chalk = require("chalk")
const figlet = require("figlet")
const colors = require("colors")
const prompts = require("./config/prompts")

const init = () => {
    console.log(
        chalk.green(
            figlet.textSync('Arnold Benches, do you?', {
                font: 'Standard',
                horizontalLayout: 'default',
                verticalLayout: 'default'
            })
        )
    )
}

const run = async () => {
    // initial text
    init()

    // prompt
    console.log(
        colors.red.bold("What's your max bench? Follow the prompts below")
    )

    const executables = await promptQuestion(prompts)
    const cmd = generateCommand(executables)
    executeShell(cmd)
}

run()