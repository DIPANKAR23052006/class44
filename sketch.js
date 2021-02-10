 var ground;
 
 function preload(){



  }
  function setup(){
createCanvas(1000,600);
ground=createSprite(500,550,1000,50);
ground.velocityX=-3;
 

  }
  function draw(){
background(" lightblue");


drawSprites()

  }