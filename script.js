var canvas = document.getElementById("game");

var ctx  = canvas.getContext('2d');


const GAME_WIDTH = 800;
const GAME_HEIGHT = 700;
var score = 0;

//var background = new Image();
//background.src = "../Dodge-Ball-Game/images/Canvas_Sky.gif";

//background.onload = function(){
  //  ctx.drawImage(background,0,0); 

//}
function startGame() {
    myGameArea.start();
    myGamePiece = new component(30, 30, "red", 10, 120);
}

var myGameArea = {
    canvas : document.createElement("canvas"),
    start : function() {
        this.canvas.width = 480;
        this.canvas.height = 270;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
    }
}


class Game {
	constructor(gamewidth,gameheight){
		this.gamewidth = gamewidth;
		this.gameheight = gameheight;
	}
	start(){
		
		this.ball = new ball(this);
		this.Scores=new Scores(this);
		// var blackballs = [];
	


		this.gameObject = [
			this.ball,
			this.Scores,
		];


		new InputHandler(this.ball);

	}
	draw(c){
	
		this.gameObject.forEach(object => object.draw(c));	
		

	}
	update(change){
	
		this.gameObject.forEach(object => object.update(change));	
		
    }
}
    
    class Scores{
        constructor(game){
          this.X=700;
          this.Y=20;
        }
    
        draw(c){
        // add code here
            c.fillStyle="black";
            c.font = "14px Arial";
            c.fillText("Score : "+score,this.X,this.Y);
        }
    
        update(){
           //add code here		
            
        }
    }


class Ball{
	
	constructor(game){
	this.image = document.getElementById('Ball');
	this.X=350;
	this.Y=750;
	this.Width=20;
	this.Height=20;
	this.Velocity=3;
	 //add code here
	}

	draw(c){
	 //add code here
		c.drawImage(this.image,this.X,this.Y, this.Width, this.Height);
	}

	update(){
		// add code here		
		this.X-=this.Velocity;
		if(game.detectCollision(this)||this.X<0)
		{
			this.X=GAME_WIDTH;
			this.Y=Math.random()*1000%600;
		}
		
		}

	}
