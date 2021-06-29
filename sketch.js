var background , backgroundImage;
var cap,capI,CapA,capM,CAP,CAP1;
var Tony,TonyI,Tonyatt,Tonyimg;
var test;
var base;
var health,healthimg,health1,health1img;
var green,green1;
var CA,CAI,CA1,CA1I,CA2,CA2I,CA3,CA3I;
var vib,vibI


function preload(){
 //load your images here 
  backgroundImage = loadImage("BG.png");
  capI = loadAnimation("CAPATTACK2.png");
  CapA = loadAnimation("CapATC1.png","CapATC2.png");
  CAP = loadImage("CapM.png");  
  TonyI = loadImage("Tony Rest.png");
  healthimg = loadImage("healthbar.png");
  health1img = loadImage("healthbar1.png");
  CAI = loadImage("P.png");
  CA1I = loadImage("P1.png");
  CA2I = loadImage("P2.png");
  CA3I = loadImage("P3.png");
  Tonyimg = loadAnimation("A1.1.png","A1.2.png");
  vibI = loadAnimation("Shield.png","Shield1.png");
  
 
  
}

function setup() {
  createCanvas(windowWidth,windowHeight);
 background = createSprite(760,320,windowWidth,windowHeight);
  background.addImage("BG",backgroundImage);
  background.scale = 0.8;

  base = createSprite(760,550,windowWidth,20);
  base.visible = false;
  
 
  cap = createSprite(250,390,100,100);
 vib = createSprite(250,350,100,50);
 vib.addAnimation("Shield",vibI);
 vib.scale = 0.7;
 vib.velocityX = 18
 vib.velocityY = -2;
 vib.debug = false;
 
  
  if(mousePressedOver(CA)){
    cap.addAnimation("CapATC",CapA);
  }
  else{
    cap.addAnimation("Caprest",capI);
  }

  cap.scale = 0.25;
  cap.debug = false;
  cap.setCollider("rectangle",0,0,400,1000);
  cap.velocityY = 3;

  CA = createSprite(130,520,20,20);
  CA.addImage("P",CAI);
  CA.scale = 0.5;
  CA.debug = false;
  CA.setCollider("rectangle",0,0,100,100);

  CA1 = createSprite(60,520,20,20);
  CA1.addImage("P1",CA1I);
  CA1.scale = 0.48;
  CA1.debug = false;
  CA1.setCollider("rectangle",0,0,100,100);

  CA2 = createSprite(60,450,20,20);
  CA2.addImage("P2",CA2I);
  CA2.scale = 0.48;
  CA2.debug = false;
  CA2.setCollider("rectangle",0,0,100,100);
  CA2.depth = cap.depth+1;

  CA3 = createSprite(130,450,20,20);
  CA3.addImage("P3",CA3I);
  CA3.scale = 0.48;
  CA3.debug = false;
  CA3.setCollider("rectangle",0,0,100,100);
 
  
  Tony = createSprite(1300,350,100,100);
  Tony.addImage("tony",TonyI);
  Tony.scale = 0.75;
  Tony.debug = false;
  Tony.setCollider("rectangle",0,0,100,400);
  
  cap.depth = Tony.depth;
  
  test = createSprite(650,300,50,50); 
  test.visible = false;
  
 health = createSprite(160,110,100,20);
 health.addImage("healthbar",healthimg);
 health.scale = 0.25;
 
 green = createSprite(180,110,200,30);
 green.shapeColor = "green";

 health1 = createSprite(1360,110,100,20);
 health1.addImage("healthbar1",health1img);
 health1.scale = 0.25;

 green1 = createSprite(1340,110,200,30);
 green1.shapeColor = "green";

 

 

 


    
    
  //add code here
  
}

function draw() {
  cap.collide(base);
  vib.bounceOff(Tony);


  drawSprites();
  //add code here
  
}