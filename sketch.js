const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint;
var engine, world;
var ball2
var g1,g2,g3,g4;
var dv1,dv2,dv3,dv4,dv5,dv6,dv7
var particles = [];
var plinkos   = [];
var divisions = [];
var divisionHeight =300;
var D
var b 
var ball3
function setup() {
  createCanvas(400,700);
  engine = Engine.create();
  world = engine.world;
 
  g1=new Ground(200,690,width,15)
 
  for (var k=8;k<=width;k=k+50){
    plinkos.push(new Divider(k,50,10))
  
  }
  for (var S=0;S<=width;S=S+50){
    plinkos.push(new Divider(S,100,10))
  
  }
  for (var A=8;A<=width;A=A+50){
    plinkos.push(new Divider(A,150,10))
  
  }
  for (var B=0;B<=width;B=B+50){
    plinkos.push(new Divider(B,200,10))
  
  }
  for (var k = 0; k <=width; k = k + 80) {
    divisions.push(new Divider2(k, height-divisionHeight/2, 10, divisionHeight));
  }


}
function draw() {
  background(0);  
  Engine.update(engine);
  if (frameCount%60===0){
    particles.push(new Ball(random(30,600),5,5));
  }
  for (var i =0 ;i < particles.length;i++){
    particles[i].display()
  
   }
   for (var k =0 ;k < plinkos.length;k++){
    plinkos[k].display()
   
   }
   for (var S =0 ;S < plinkos.length;S++){
    plinkos[S].display()
   
   }
   for (var A =0 ;A < plinkos.length;A++){
    plinkos[A].display()
   
   }
   for (var B =0 ;B < plinkos.length;B++){
    plinkos[B].display()
   
   }
   
   for (var F =0 ;F < divisions.length;F++){
    divisions[F].display()
  
   }

  
  g1.display()
  
  
}
 