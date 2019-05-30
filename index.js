let balance = 0
let userName = 'JohnDoe'

function init(){
    alert('Hello! ' + userName)
    alert('Your current balance is: \n €' + balance)    
}

init()

/** 
 * Userstories
 * 
 * [X] 1.) As a user I want to know my current balance so I can make sound financial decisions
 * [X] 2.) As a bank I want to greet my user, so the user feels welcome.
 *         X Create a variable that stores the user's name
 *         X Greet the user when the program starts
 * [ ] 3.) As a user I want to be able to withdraw money from my account so 
 *         I can spend it on things I like.
 * [ ] 4.) As a bank I want prevent users from withdrawing money don't have, so I don't go bankrupt.
 * [ ] 5.) As a user I want to be able to choose if I want to know my balance or deposit money,
 *         So I can do what is relevant for me.
 * [ ] 6.) As a user I want to be able to choose to deposit money into my account, so It's safely stored.
 * [ ] 7.) As a bank I want to prevent users from depositing more money in their account than they have,
 *         so I don't go bankrupt.
 * [ ] 8.) As user I want to log in using a username and password, so strangers don't withdraw my money.
*/