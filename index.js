let balance = 250
let userName = 'JohnDoe'

function init(){
    alert('Hello! ' + userName)
    alert('Your current balance is: \n €' + balance)    
    withdraw()
    alert('Goodbye')    
}

function withdraw(){
    const input = prompt('How much would you like to withdraw?')
    // If a user clicks 'cancel' on the prompt box input will be 'null'
    // So we stop the withdrawing process
    if(input === null){
        return
    }

    // using parseInt to convert the string from prompt into a number (so we can do math)
    const withdrawAmount = parseInt(input)
    // using typeof to check if withdrawAmount is now a number (it is)
    console.log(typeof withdrawAmount)
    console.log('withdraw amount:', withdrawAmount)
    // subtracting withdrawAmount from balance and reassigning balance
    balance = balance - withdrawAmount
    // display the new balance to the user
    alert('Your new balance is: \n €' + balance)
}

init()

/** 
 * Userstories
 * 
 * [X] 1.) As a user I want to know my current balance so I can make sound financial decisions
 * [X] 2.) As a bank I want to greet my user, so the user feels welcome.
 * [ ] 3.) As a user I want to be able to withdraw money from my account so 
 *         I can spend it on things I like.
 *         X Change balance variable to something higher than 0
 *         X Prompt the user for an amount they want to withdraw
 *         X Subtract the amount from the balance variable
 *         X Display the balance again
 * [ ] 4.) As a bank I want prevent users from withdrawing money don't have, so I don't go bankrupt.
 * [ ] 5.) As a user I want to be able to choose if I want to know my balance or deposit money,
 *         So I can do what is relevant for me.
 * [ ] 6.) As a user I want to be able to choose to deposit money into my account, so It's safely stored.
 * [ ] 7.) As a bank I want to prevent users from depositing more money in their account than they have,
 *         so I don't go bankrupt.
 * [ ] 8.) As user I want to log in using a username and password, so strangers don't withdraw my money.
*/