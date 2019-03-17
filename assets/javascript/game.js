$(document).ready(function() {
    // Selects the random number shown at the start of the game 
    // Between 19 - 120
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

    // Click functions for gems
  $('#one').on('click', function() {
    total = total + gemBlue;
        console.log("New total = " + total);
    $('#finalTotal').text(total);
    // conditions for what to do based on total/new total number
    if (total == RandomNum){
        yay();
    }
    else if ( total > RandomNum){
        loser();
    }   
  })  

  $('#two').on('click', function() {
    total = total + gemRed;
        console.log("New total = " + total);
    $('#finalTotal').text(total);
    if (total == RandomNum){
        yay();
    }
    else if ( total > RandomNum){
        loser();
    } 
  })  

  $('#three').on('click', function() {
    total = total + gemYellow;
        console.log("New total = " + total);
    $('#finalTotal').text(total);
    if (total == RandomNum){
        yay();
    }
    else if ( total > RandomNum){
        loser();
    } 
  })

  $('#four').on('click', function() {
    total = total + gemPink;
        console.log("New total = " + total);
    $('#finalTotal').text(total);
    if (total == RandomNum){
        yay();
    }
    else if ( total > RandomNum){
        loser();
    }
  });

    // Alert notifying user of win and adds to win tally
    function yay() {
    alert("You win!");
      wins++; 
      $('#Wins').text(wins);
      reset();
    }
    // Alert notifying user of loss and adds to loss tally
    function loser() {
    alert ("You lose!");
      losses++;
      $('#Losses').text(losses);
      reset()
    }

    // Displays count of wins and losses in div
    $('#numberWins').text(wins);
    $('#numberLosses').text(losses);

    // Resets the game, sets number to zero and generates new numbers
function reset() {
    RandomNum = Math.floor(Math.random() * 101 + 19);
        console.log(RandomNum)
    $('#randomNumber').text(RandomNum);
    gemBlue = Math.floor(Math.random() * 12) + 1;
        console.log(gemBlue);
    gemRed = Math.floor(Math.random() * 12) + 1;
        console.log(gemRed);
    gemYellow = Math.floor(Math.random() * 12) + 1;
        console.log(gemYellow);
    gemPink = Math.floor(Math.random() * 12) + 1;
        console.log(gemPink);
    total = 0;
    $('#finalTotal').text(total);
    } 
});