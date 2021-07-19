const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;

function preload() {
    // create getBackgroundImg( ) here
    getBackgroundImg()



  
    
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    // add condition to check if any background image is there to add


    Engine.update(engine);
    if(backgroundImg)
    background(backgroundImg)

    // write code to display time in correct format here


}

async function getBackgroundImg(){
    
        var response = await fetch("http://worldtimeapi.org/api/timezone/America/Los_Angeles")

            var responseJSON = await response.json();
            var datetime = responseJSON.datetime;
            var r = datetime.slice(11, 13)
            if(hour <= 8 && hour >= 6){
                bg = "sunrise1.png";
           }
           else if(hour <= 10 && hour >= 8){
                bg = "sunrise2.png";
           }
           else if(hour <= 12 && hour >= 10){
                bg = "sunrise4.png";
           }
           else if(hour <= 14 && hour >= 12){
                bg = "sunrise5.png";
           }
           else if(hour <= 15 && hour >= 14){
                bg = "sunset7.png";
           }
           else if(hour <= 17 && hour >= 15){
                bg = "sunset10.png";
           }
           else if(hour <= 20 && hour >= 17){
                bg = "sunset11.png";
           }
           else {
                bg = "sunset12.png";
           }
                
            
            backgroundImg = loadImage(bg);
    
            
    // write code to fetch time from API

    //change the data in JSON format

    // write code slice the datetime


    // add conditions to change the background images from sunrise to sunset


    //load the image in backgroundImg variable here

}
