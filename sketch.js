const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body=Matter.Body;

var engine,world;

var plinko=[];
var particle=[];
var divison=[];

var divisonHeight=300;

function setup() {
  createCanvas(480,800);

  engine = Engine.create();
  world = engine.world;
  
  ground=new Ground(240,795,500,10);

  for (var d=0; d<=width; d=d+80){
    divison.push(new Divison(d, height-divisonHeight/2,10,divisonHeight));
  }

  for (var p=50; p<=width-50; p=p+50){
    plinko.push(new Plinko(p,75));
  }
  for (var p=10; p<=width; p=p+50){
    plinko.push(new Plinko(p,175));
  }
  for (var p=50; p<=width-50; p=p+50){
    plinko.push(new Plinko(p,275));
  }
  for (var p=10; p<=width; p=p+50){
    plinko.push(new Plinko(p,375));
  }

}

function draw() {
  background("black");  
  Engine.update(engine);
  
  ground.display();

  if(frameCount%60===0){
    particle.push(new Particle(random(width/2-10,width/2+10),10,10))
  }

  for(var a=0;a<plinko.length;a++){
    plinko[a].display();
  }
  for(var b=0;b<divison.length;b++){
    divison[b].display();
  }
  for(var c=0;c<particle.length;c++){
    particle[c].display();
  }
  drawSprites();
}