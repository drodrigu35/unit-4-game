var random_result;
var lost=0;
var win=0;
var previous = 0;


var resetAndStart = function() {
    $(".crystals").empty();

    var images = [
        '/Users/drod/Desktop/Homecoding/Crystalgame/assets/images/greenCrystal.svg', 
        '/Users/drod/Desktop/Homecoding/Crystalgame/assets/images/blueCrystal.svg', 
        '/Users/drod/Desktop/Homecoding/Crystalgame/assets/images/redCrystal.svg', 
        '/Users/drod/Desktop/Homecoding/Crystalgame/assets/images/yellowCrystal.svg'];

    random_result = Math.floor(Math.random() * 69 ) + 30; // hoisting
    
    $("#result").html("Random Result: " + random_result);
    
    for (var i = 0; i < 4; i++) {
        var random = Math.floor(Math.random() * 11) + 1;
        var crystal = $("<div>");
        crystal.attr({
            "class": "crystal", 
            "data-random": random
        });

        crystal.css({
            "background-image": "url('" + images[i] + "')",
            "background-size": "cover"
        })

        $(".crystals").append(crystal);
        
    }
    $("#previous").html("Total Score: " + previous);

}

resetAndStart();

$(document).on("click", ".crystal", function () {
    
    var num = parseInt($(this).attr("data-random"));
    
    previous += num;
    $("#previous").html("Total Score: " + previous);
    
    console.log(previous);
    
    if(previous > random_result){
        lost++;
        
        $("#lost").html("You Lost: " + lost);
        previous = 0;
        
        resetAndStart();
        
    }

    else if (previous === random_result){
        win++;
        
        $("#win").html("You win: " + win);

        previous = 0;
        
        resetAndStart();
    }
    
    
});

// a game with 4 Crystal and Random Result
// Every crystal needs to have a random number between 1 - 12
// when clicking any CRYSTAl, it should be adding with the previous result 
// until it equal to the total score
// if it is greater than the random result, we decrement a lost counter
// if it is equal, then we increment a win counter
// a new number should be generate every single time we win or lost
// to those 4 crystals
