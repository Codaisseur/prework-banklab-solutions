let balance = 250
let cash = 25
const userName = 'JohnDoe'
const password = 'test1234'

function init(){
    const userAuthenticated = authenticateUser(2)

    if(!userAuthenticated){
        return alert('You have been locked out, please contact customer support')
    }

    alert('Hello! ' + userName)

    menu()

    alert('Goodbye')    
}

function authenticateUser(triesLeft){
    console.log(triesLeft)
    const userNameInput = prompt('Please enter your username')
    const passwordInput = prompt('Please enter your password')

    if(userNameInput === userName && passwordInput === password){
        return true
    }
    
    if(triesLeft >= 1){
        alert('username or password do not match')
        return authenticateUser(triesLeft - 1)
    }

    return false
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
            displayBalance('current')
            menu()    
            break

        case '2':
            withdraw()
            break
        
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

function displayBalance(status){
    alert('Your ' + status + ' balance is: \n €' + balance)
}

function deposit(){
    const depositAmount = getAmountInput('deposit')

    if(cash < depositAmount){
        alert('Cannot deposit: €' + depositAmount + ' cash on hand is only: €' + cash)
        return deposit()
    }
    
    balance = balance + depositAmount
    cash = cash - depositAmount

    displayBalance('new')
    menu()
}

function withdraw(){
    const withdrawAmount = getAmountInput('withdraw')

    if(balance < withdrawAmount){
        alert('Cannot withdraw: €' + withdrawAmount + ' balance is only: €' + balance)
        return withdraw()
    }

    balance = balance - withdrawAmount
    cash = cash + withdrawAmount

    displayBalance('new')
    menu()
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
 * [X] 6.) As a user I want to be able to choose to deposit money into my account, so It's safely stored.
 * [X] 7.) As a bank I want to prevent users from depositing more money in their account than they have,
 *         so I don't go bankrupt.
 * [X] 8.) As user I want to log in using a username and password, so strangers don't withdraw my money.
*/