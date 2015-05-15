var games = [game0Tips, game1Tips, game2Tips, game3Tips];
var tempContainer = new createjs.Container();
var okB = new createjs.Bitmap("../img/ok.png");
var promptP = new createjs.Bitmap("../img/prompt.png");
promptP.scaleY = promptP.scaleX = imgScale;
promptP.regX = 409 * .5;
promptP.regY = 518 * .5;
		
promptP.x = cCenter;
promptP.y = cCenterY - 100;

//var gameCount;
function instructions(event){
	okB.scaleY= okB.scaleX = .4;
	okB.regX = 282 * .5;
	okB.regY = 118 * .5;
	
	okB.x = cCenter;
	okB.y = cCenterY + 150;
	count = countReset;
	
	
	
	
	var background = new createjs.Shape();
	background.graphics.beginFill("#b2b2b2").drawRect(0,0,canvasW, canvasY);
	background.alpha = .7;
	tempContainer.addChild(background);
	/* var okayButton = new createjs.Shape();
	okayButton.graphics.beginFill("orange").drawRect(100,400,50,50); */
	
	okB.addEventListener("click", unPause);
	tempContainer.addChild(okB);
	//var newTicker = createjs.Ticker.addEventListener("tick", promptTicker);
	//createjs.Ticker.setInterval(1000);
	
	games[nextChallenge]();
	stage.addChild(tempContainer);
	stage.update();
	//Sets up the background
	/*var background = new createjs.Shape();
	background.graphics.beginFill("#b2b2b2").drawRect(0,0,300,500);
	tempContainer.addChild(background);*/
	
		
}
	
	
	//Instructions for the first game
	function game0Tips(){

		
	/* 	promptP.scaleY = promptP.scaleX = imgScale;
		promptP.regX = 409 * .5;
		promptP.regY = 518 * .5;
		
		promptP.x = cCenter;
		promptP.y = cCenterY - 100; */
		
		
		tempContainer.addChild(promptP);
		
		var instructionText = new createjs.Text("Touch the correct\ncolour of the word \nand not what the \nword says before\nthe timer runs out", "20px Verdana", "white");
		instructionText.x = cCenter;
		instructionText.y = cCenterY - 150;
		instructionText.textAlign = "center";
		tempContainer.addChild(instructionText);
		//tempContainer.update();	
	}
	
	//Instructions for the second game
	function game1Tips() {

		tempContainer.addChild(promptP);
		
		var instructionText = new createjs.Text("Tap on the balls \nin descending \norder", "20px Verdana", "white");
		instructionText.x = cCenter;
		instructionText.y = cCenterY - 150;
		instructionText.textAlign = "center";
		tempContainer.addChild(instructionText);
		//tempContainer.update();	
	}
	
	//Instructions for the third game
	function game2Tips() {

		tempContainer.addChild(promptP);
		
		var instructionText = new createjs.Text("Tap on the proper \nside of the arrow", "20px Verdana", "white");
		instructionText.x = cCenter;
		instructionText.y = cCenterY - 150;
		instructionText.textAlign = "center";
		tempContainer.addChild(instructionText);
		//tempContainer.update();	
	}
	
	//Instructions for the fourth game
	function game3Tips() {

		tempContainer.addChild(promptP);
		
		var instructionText = new createjs.Text("Avoid the obstacles \nuntil the timer runs \nout to continue", "20px Verdana", "white");
		instructionText.x = cCenter;
		instructionText.y = cCenterY - 150;
		instructionText.textAlign = "center";
		tempContainer.addChild(instructionText);
		//tempContainer.update();	
	}


function unPause(){
			stage.removeChild(tempContainer);			
			createjs.Ticker.addEventListener("tick", handleTick);
			switch(nextChallenge){
				case 0: 
					gameOne(difficulty);
					break;
				case 1:
					gameTwo(difficulty);
					break;
				case 2: 
					gameThree(difficulty);				
					break;
				case 3:
					gameBoss(difficulty);
					break;
					
				default:
					gameOne(difficulty);
					break;			
				
			}
}
		
/*function promptTicker(event) {

	   // Actions carried out each tick (aka frame)
	   //Things that remain the same go here!!!
	  if (!createjs.Ticker.getPaused()) {
			if (gameCount>=0){
				var background = new createjs.Shape();
			background.graphics.beginFill("#b2b2b2").drawRect(0,0,300,500);
			tempContainer.addChild(background);
			stage.addChild(tempContainer);
			games[nextChallenge]();
			stage.update();}
		}
		
		//Things that change go in here!!
	  if (!event.paused) {
	   
			 if (gameCount == 0){
					stage.removeChild(tempContainer);
					createjs.Ticker.removeEventListener("tick", promptTicker);
					count = 30;
					//loseLife();
					//nextGame();
				}
			
			gameCount--;
			stage.update();
	   
	   }

	stage.update();

}*/// ticker end