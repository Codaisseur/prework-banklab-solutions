let balance = 250
let userName = 'JohnDoe'

function init(){
    alert('Hello! ' + userName)

    menu()

    alert('Goodbye')    
}

function menu(){
    // putting this text into a variable to not clutter the program
    // I am using a template string (make them with backticks ``)
    // It preservers empty lines and other formatting
    let optionsText = `
    What would you like to do?

    1.) Show balance
    2.) Withdraw money

    Please enter a number:
    `

    // prompting the user for a number and storing it in choice
    const choice = prompt(optionsText)
    // checking the value of choice
    console.log(choice)

    // Checking what choice is and using a switch case to determine what to next
    switch (choice) {
        // input is '1', show balance
        case '1':
            alert('Your current balance is: \n €' + balance)    
            break
        // input is '2', withdraw money
        case '2':
            withdraw()
            break

        // input is something else.. user made a mistake
        default:
            alert(choice + ' is an invalid input, sorry!')
            // let user try again from the beginning of the menu
            menu()
            break
    }
}

function withdraw(){
    const input = prompt('How much would you like to withdraw?')

    if(input === null){
        return
    }
    
    const withdrawAmount = parseInt(input)

    if(isNaN(withdrawAmount)){
        alert('Oops, that\'s not a number')
        return withdraw()
    }

    if(balance < withdrawAmount){
        alert('Cannot withdraw: €' + withdrawAmount + ' balance is only: €' + balance)
        return withdraw()
    }

    balance = balance - withdrawAmount
    alert('Your new balance is: \n €' + balance)
}

init()

/** 
 * Userstories
 * 
 * [X] 1.) As a user I want to know my current balance so I can make sound financial decisions
 * [X] 2.) As a bank I want to greet my user, so the user feels welcome.
 * [X] 3.) As a user I want to be able to withdraw money from my account so 
 * [X] 4.) As a bank I want prevent users from withdrawing money don't have, so I don't go bankrupt.
 * [ ] 5.) As a user I want to be able to choose if I want to know my balance or deposit money,
 *         So I can do what is relevant for me.
 *         X Display options to user
 *         X Prompt the user for input
 *         X Based on users input withdraw or show balance
 * [ ] 6.) As a user I want to be able to choose to deposit money into my account, so It's safely stored.
 * [ ] 7.) As a bank I want to prevent users from depositing more money in their account than they have,
 *         so I don't go bankrupt.
 * [ ] 8.) As user I want to log in using a username and password, so strangers don't withdraw my money.
*/