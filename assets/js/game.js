
// var playerName = 'Tony the Robot';
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

// You can also log multiple values at once like this
console.log(playerName, playerAttack, playerHealth);

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;


// fight function
var fight = function (enemyName) {
    // repeat and execute as long as the enemy-robot is alive 
    while (playerHealth > 0 && enemyHealth > 0) {
        // place fight function code block here . . . {
        // Alert players that they are starting the round
        //window.alert("Welcome to Robot Gladiators!");

        // ask player if they'd like to fight or run
        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

        // if player picks "skip" confirm and then stop the loop
        if (promptFight === "skip" || promptFight === "SKIP") {
            // confirm player wants to skip
            var confirmSkip = window.confirm("Are you sure you'd like to quit?");

            // if yes (true), leave fight
            if (confirmSkip) {
                window.alert(playerName + " has decided to skip this fight. Goodbye!");
                // subtract money from playerMoney for skipping
                playerMoney = playerMoney - 10;
                console.log("playerMoney", playerMoney)
                break;
            }
        }

            // remove enemy's health by subtracting the amount set in the playerAttack variable
            enemyHealth = enemyHealth - playerAttack;
            console.log(
                playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
            );

            // check enemy's health
            if (enemyHealth <= 0) {
                window.alert(enemyName + " has died!");

                // award palyer money for winning
                playerMoney = playerMoney + 20;
                // leave while () loop since enemy is dead 
                break;

            } else {
                window.alert(enemyName + " still has " + enemyHealth + " health left.");
            }

            // remove player's health by subtracting the amount set in the enemyAttack variable
            playerHealth = playerHealth - enemyAttack;
            console.log(
                enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
            );

            // check player's health
            if (playerHealth <= 0) {
                window.alert(playerName + " has died!");
                break;

            } else {
                window.alert(playerName + " still has " + playerHealth + " health left.");
            }
            // if player choses to skip
            /* } else if (promptFight === "skip" || promptFight === "SKIP") {
                 // confirm player wants to skip
                 var confirmSkip = window.confirm("Are you sure you'd like to quit?");
     
                 // if yes (true), leave fight
                 if (confirmSkip) {
                     window.alert(playerName + " has decided to skip this fight. Goodbye!");
                     // subtract money from playerMoney for skipping
                     playerMoney = playerMoney - 10;
                     console.log("playerMoney", playerMoney);
                     break;
                 }
                 // if no (false), ask question again by running fight() again
                 else {
                     fight();
                 }*/
        }
    };

console.log(enemyNames);

for (var i = 0; i < enemyNames.length; i++) {
    var pickedEnemyName = enemyNames[i];
    enemyHealth = 50;
    fight(pickedEnemyName);
}
