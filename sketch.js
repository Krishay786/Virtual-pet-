var database
var dog, dogImage1, dogImage2
var foodS,foodStock 

function preload()
{
  dogImage1 = loadImage("images/dogImg.png")
  dogImage2 = loadImage("images/dogImg1.png") 
}

function setup() {
  createCanvas(800, 700);
  
  database=firebase.database();

  dog = createSprite(300,300,100,100);
  dog.addImage(dogImage1)
  dog.scale = 0.3;

  foodStock= database.ref('Food');
  foodStock.on("value",readStock);

  
}


function draw() {  
  background("green");

 if(keyWentDown(UP_ARROW)){
   writeStock(foodS);
   dog.addImage(dogImage2)
 }

  drawSprites();
  //add styles here

}
 
function readStock(data){
  foodS = data.val();
}

function writeStock(x){
  if(x<=0){
    x = 0
  }
  else{x=x-1}
  database.ref('/').update({
    Food : x 
  })
  

}
