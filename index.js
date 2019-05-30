let balance = 250
let userName = 'JohnDoe'

function init(){
    alert('Hello! ' + userName)

    menu()

    alert('Goodbye')    
}

function menu(){
    let optionsText = `
    What would you like to do?

    1.) Show balance
    2.) Withdraw money
    3.) Deposit money

    Please enter a number:
    (or click cancel to exit)
    `

    const choice = prompt(optionsText)

    switch (choice) {
        case '1':
            alert('Your current balance is: \n €' + balance)    
            break

        case '2':
            withdraw()
            break
        
        // Adding an option to the switch case statement
        case '3':
            deposit()
            break

        case null:
            break

        default:
            alert(choice + ' is an invalid input, sorry!')
            menu()
            break
    }
}

// we want to get an amount to deposit from the user
// that's very similar to asking the user for an amount to withdraw
// let's reuse that code by putting it into a function
function getAmountInput(purpose){
    const input = prompt('How much would you like to ' + purpose + '?')
    
    if(input === null){
        return
    }
    
    const amount = parseInt(input)
    
    if(isNaN(amount)){
        alert('Oops, that\'s not a number')
        return getAmountInput(purpose)
    }

    return amount
}

function deposit(){
    // using our getAmountInput function here
    const depositAmount = getAmountInput('deposit')
    
    balance = balance + depositAmount
}

function withdraw(){
    // using our getAmountInput function here as well
    const withdrawAmount = getAmountInput('withdraw')

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
 * [X] 5.) As a user I want to be able to choose if I want to know my balance or deposit money,
 *         So I can do what is relevant for me.
 * [ ] 6.) As a user I want to be able to choose to deposit money into my account, so It's safely stored.
 *         X Add an option to the menu for user to choose to deposit money
 *         X Handle the choice in the switch case statement
 *         X Call a function deposit
 *         X Ask the user how much he wants to deposit
 *         X Check if the input is valid (a number)
 *         X Add the money to the balance
 *         - Send the user back to the menu
 * [ ] 7.) As a bank I want to prevent users from depositing more money in their account than they have,
 *         so I don't go bankrupt.
 * [ ] 8.) As user I want to log in using a username and password, so strangers don't withdraw my money.
*/