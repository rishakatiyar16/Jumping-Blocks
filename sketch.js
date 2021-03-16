function setup() {
    createCanvas(800,400);
    block1= createSprite(0,390,360,30)
    block1.shapeColor = "pink"
    block2= createSprite(290,390,200,30)
    block2.shapeColor = "blue"
    block3= createSprite(515,390,200,30)
    block3.shapeColor = "red"
    block4= createSprite(740,390,200,30)
    block4.shapeColor = "yellow"
    ball1= createSprite (random(10,750),100,20,20)
    ball1.shapeColor = "white"
    ball1.velocityX= 4
    ball1.velocityY= 16


  }
  
  function draw() {
    background(0);
    edges = createEdgeSprites()
    ball1.bounceOff(edges)
    if(istouching(ball1,block1) ){
   ball1.shapeColor= "pink"
    }
   if(istouching(ball1,block2) ){
     ball1.shapeColor= "blue"
   }
    if(istouching(ball1,block3) ){
     ball1.shapeColor= "red"
    }
    if(istouching(ball1,block4) ){
     ball1.shapeColor= "yellow"  
      

    }
   
    drawSprites();
   
  }
  