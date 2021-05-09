const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;

function preload() {
      getBackgroundImg( )

}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){
if(backgroundImg)
background(backgroundImg)
    // add condition to check if any background image is there to add


    Engine.update(engine);

    // write code to display time in correct format here


}

async function getBackgroundImg(){

var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
var responseJSON = await response.json ()
var datetime = responseJSON.datetime 
console.log(datetime)
    // write code slice the datetime
var hour = datetime.slice(11,13)

    // add conditions to change the background images from sunrise to sunset
    if(hour >= 12 && hour <= 5){
        bg="sunrise1.png"
    }
    else{
        bg="sunset7.png"

    //load the image in backgroundImg variable here

}

backgroundImg = loadImage(bg)
}