$(document).ready(function() {
    // Selects the random number shown at the start of the game should be between 19 - 120
    var RandomNum = Math.floor(Math.random() * 101 + 19)
    console.log(RandomNum);
    // Displays Number to Get in div
    $('#randomNumber').text(RandomNum); 

    // Starting variables 
    var wins = 0;
    var losses = 0;
    var total = 0;

    // Gem number variables
    var gemBlue = Math.floor(Math.random() * 12) + 1;
        console.log(gemBlue);
    var gemRed = Math.floor(Math.random() * 12) + 1;
        console.log(gemRed);
    var gemYellow = Math.floor(Math.random() * 12) + 1;
        console.log(gemYellow);
    var gemPink = Math.floor(Math.random() * 12) + 1;
        console.log(gemPink);
    
    $('#numberWins').text(wins);
    $('#numberLosses').text(losses);





    //resets the game
function reset(){
    RandomNum = Math.floor(Math.random() * 101 + 19);
    console.log(RandomNum)
    $('#randomNumber').text(RandomNum);
    gemBlue = Math.floor(Math.random() * 12) + 1;
    gemRed = Math.floor(Math.random() * 12) + 1;
    gemYellow = Math.floor(Math.random() * 12) + 1;
    gemPink = Math.floor(Math.random() * 12) + 1;
    total = 0;
    $('#finalTotal').text(total);
    } 
});