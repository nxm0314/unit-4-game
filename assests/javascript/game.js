
$( document ).ready(function(){
    // Generates random number to guess
    var Random=Math.floor(Math.random() * 102 +1 9)
    
    // Display random number
    $('#scoreToMatch').text(Random);
    
    //Generate random number for each crystal
    var crystal1= Math.floor(Math.random() * 12 + 1)
    var crystal2= Math.floor(Math.random() * 12 + 1)
    var crystal3= Math.floor(Math.random() * 12 + 1)
    var crystal4= Math.floor(Math.random() * 12 + 1)
    
    // Variables to keep track of wins, losses and total
    var playerTotal= 0; 
    var wins= 0;
    var losses = 0;
    
  
  $('#wins').text(wins);
  $('#losses').text(losses);
  
  // Reset game
  function reset(){
        Random=Math.floor(Math.random() * 102 + 19);
        console.log(Random)

        $('#scoreToMatch').text(Random);
        crystal1= Math.floor(Math.random()*12+1);
        crystal2= Math.floor(Math.random()*12+1);
        crystal3= Math.floor(Math.random()*12+1);
        crystal4= Math.floor(Math.random()*12+1);

        playerTotal= 0;

        $('#totalScore').text(playerTotal);
        } 
  


  function woohoo(){
  alert("Congrats! You won!");
    wins++; 
    $('#wins').text(wins);
    reset();
  }

  function loser(){
  alert ("Sorry! You lose!");
    losses++;
    $('#losses').text(losses);
    reset()
  }
  // Clicking crystals
    $('#one').on('click', function(){
      playerTotal = playerTotal + crystal1;
      $('#collected').text(playerTotal); 
    
          if (playerTotal == Random){
            woohoo();
          }
          else if ( playerTotal > Random){
            loser();
          }   
    })  
    $('#two').on('click', function(){
      playerTotal = playerTotal + crystal2;
      $('#collected').text(playerTotal); 
          if (playerTotal == Random){
            woohoo();
          }
          else if ( playerTotal > Random){
            loser();
          } 
    })  
    $('#three').on('click', function(){
      playerTotal = playerTotal + crystal3;
      $('#collected').text(playerTotal);
  
            if (playerTotal == Random){
            woohoo();
          }
          else if ( playerTotal > Random){
            loser();
          } 
    })  
    $('#four').on ('click', function(){
      playerTotal = playerTotal + crystal4;
      $('#collected').text(playerTotal); 
        
            if (playerTotal == Random){
            woohoo();
          }
          else if ( playerTotal > Random){
            loser();
          }
    });   
  }); 
