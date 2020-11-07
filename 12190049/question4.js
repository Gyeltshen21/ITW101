var NumberAttempts=5;
//Generating random number between 1 to 9
 var num=Math.floor(Math.random()*9)+1;

//Refreshing the Document to start new game
function reload(){
    location.reload();
}

//conditions for game
function btn(y){
    //Users False click condition
    if(NumberAttempts==1){
        document.getElementById("lose").innerHTML="You lost the game";
        document.getElementById("found").innerHTML="Bomb is at random number: "+num+' <img src="bomb.gif">';
    }
    //Warning to Users
    else if(NumberAttempts==3){
        if(y==num){
            document.getElementById(y).innerHTML='<img src="bomb.gif">';
            document.getElementById("won").innerHTML="You Won the Game";
            document.getElementById("found").innerHTML="Bomb is at position: "+num+' <img src="bomb.gif">';
        }
        else{
            NumberAttempts=NumberAttempts-1;
            alert("You are left with 2 more attempts");
            document.getElementById('NumberAttempts').innerHTML="You have 2 more";
        }
    }
    //Users True click Condition
    else{
        //Conditions where bomb is placed with random numbers
        if(y==num){
            document.getElementById(y).innerHTML='<img src="bomb.gif">';
            document.getElementById("won").innerHTML="You Won the Game";
            document.getElementById("found").innerHTML="Bomb is at position: "+num+' <img src="bomb.gif">';
        }
        else{
            NumberAttempts=NumberAttempts-1;
            document.getElementById('NumberAttempts').innerHTML="You have "+NumberAttempts+" more";
        }
    }
}