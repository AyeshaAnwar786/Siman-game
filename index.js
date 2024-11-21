var buttonColours=["red","blue","green","yellow"];
var gamePattern=[];
var userClickedpattern=[];
var started=false;
var level=0;

$(".btn").click(function(){
  var userChosenButton=$(this).attr("id");
  userClickedpattern.push(userChosenButton);
  $("."+userChosenButton).addClass("pressed");
   
  playsound(userChosenButton);
  animation(userChosenButton);
  checkanswer(userClickedpattern.length-1);
});

function checkanswer(currentlevel){
  if( gamePattern[currentlevel]==userClickedpattern[currentlevel]){
    if(gamePattern.length==userClickedpattern.length){
      setTimeout(function (){
        nextsequence();
      },1000);
    }
  }
  else{
    playsound('wrong');
    $("body").addClass("game-over");
    $("h1").text("Game-Over.... Press any key to Restart:");
    startover();
  }
}

$(document).keypress(function(){
   if(!started){
    $("#level-title").text("Level  "+level);
    nextsequence();
    started=true;
   }

});


function nextsequence(){
  userClickedpattern=[];
  $("h1").text("Level  "+level);
  level++;
  var randomnumber=Math.floor(Math.random()*4);
  var randomChosenColours= buttonColours[randomnumber];
  gamePattern.push(randomChosenColours);
  animation(randomChosenColours);
  playsound(randomChosenColours);
  
 
}

function animation(currentcolor){
  $("."+currentcolor).addClass("pressed");
  setTimeout(function (){
   $("."+currentcolor).removeClass("pressed")}
   ,100);
}
function playsound(name){
   var audio=new Audio("sounds/"+name+".mp3");
   audio.play();
}

function startover(){
  level=0;
  gamepattern=[];
  userClickedpattern=[];
  started=false;
}