const { promptQuestion, collectInput } = require('./src/consolePrompter')
const { executeShell } = require('./src/execute')
const chalk = require('chalk')
const figlet = require('figlet')
const colors = require('colors')
const topics = require('./config/topics')


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

    const questions = collectInput(topics)
    const executables = await promptQuestion(questions)
    executeShell(executables)
}

run()