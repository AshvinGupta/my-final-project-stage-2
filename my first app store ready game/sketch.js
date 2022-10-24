


function preload(){

    bgImg = loadImage("bg.png");
    plane1Img = loadAnimation("plane1.png","plane2.png");
    enemy1 = loadAnimation("1.png","2.png","3.png","4.png","5.png");
    enemy2 = loadAnimation("1a.png","2a.png","3a.png","4a.png","5a.png");
    enemy3 = loadAnimation("1b.png","2b.png","3b.png","4b.png","5b.png");
    bullets = loadAnimation("Bullet (1).png","Bullet (2).png","Bullet (3).png","Bullet (4).png","Bullet (5).png");
    goImg = loadImage("go.png");
    resetImg = loadImage("r.png");
  

}

function setup() {
    createCanvas(800, 800);


    bg = createSprite(250,250,20,20);
    bg.addImage(bgImg);
    bg.addImage(bgImg);
    bg.scale = 0.7;

    plane = createSprite(30,150,20,20);
    plane.addAnimation("plane",plane1Img);
    plane.scale = 0.1;

    gameOver = createSprite(width/2,height/2-40,20,20);
    gameOver.addImage(goImg);
    gameOver.scale = 0.1;
    
    restart = createSprite(width/2,height/2,20,20);
    restart.addImage(resetImg);
    restart.scale = 0.1;

    enimes = new Group();
    score = 0; 
   
}
  function draw() {
    background(50,50,50);
  
  
    
  
    drawSprites();
    
}

function tealEnemy(){
    if (frameCount %120===0){
     e1 = createSprite(600,150,20,20);
     e1.addAnimation("enemy1",enemy1);
     e1.scale = 0.1;
     e1.velocityX = -5;
     e1.y = random(10, 400);
    enemies.add(e1);
    }
}

  function purpleEnemy(){
    if (frameCount %100===0){
        e2 = createSprite(600,150,20,20);
        e2.addAnimation("enemy2",enemy2);
        e2.scale = 0.1;
       e2.velocityX = -4;
       e2.y = random(10, 400);
    enemies.add(e2)   
    }
} 
  
function greenEnemy(){
    if (frameCount %120===0){
        e3 = createSprite(600,150,20,20);
        e3.addAnimation("enemy3",enemy3);
        e3.scale = 0.1;
       e3.velocityX = -4
       e3.y = random(10,400);
    enemy3.add(e3); 
    }
}

