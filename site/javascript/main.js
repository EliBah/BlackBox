var stage;

var panel = new createjs.Bitmap("../img/menuPanel.png");


var imgScale = .5;
var canvasW = 320;
var canvasY = 568;
var cCenter = canvasW * .5;
var cCenterY = canvasY * .5;
var alphaV = .01;

var soundB, playB, leaderB;

/* TEST independent canvas */
function start() {
	stage = new createjs.Stage(document.getElementById("canvas"));
	
	menu2();	
}

function menu2(){
	
	// main pannel
	panel.scaleX = panel.scaleY = imgScale;
	
	
	// play button
	
	playB = new createjs.Shape();
	playB.graphics.beginFill("yellow");
	playB.graphics.moveTo(cCenter, cCenterY).lineTo(canvasW, 190).lineTo(canvasW, canvasY).lineTo(cCenter, canvasY).lineTo(cCenter, cCenterY);
	playB.alpha = alphaV;
	
	// sound button
	soundB = new createjs.Shape();
	soundB.graphics.beginFill("green");
	soundB.graphics.moveTo(cCenter, cCenterY).lineTo(0, 190).lineTo(0, canvasY).lineTo(cCenter, canvasY).lineTo(cCenter, cCenterY);
	soundB.alpha = alphaV;
	
	
	//leader button
	leaderB = new createjs.Shape();
	leaderB.graphics.beginFill("cyan");
	leaderB.graphics.moveTo(cCenter, cCenterY).lineTo(canvasW, 190).lineTo(canvasW, 35).lineTo(0, 35).lineTo(0,190);
	leaderB.alpha = alphaV;
	
	
	// adding to screen
	stage.addChild(panel);
	stage.addChild(playB);
	stage.addChild(soundB);
	stage.addChild(leaderB);
	
	
	
	//button functionality
	playB.addEventListener("click", playT);
	soundB.addEventListener("click", soundT);
	leaderB.addEventListener("click", leaderT);
	
	
	
	stage.update();
	
}

// removing the panel
function removeMain() {
	stage.removeChild(panel);
	stage.removeChild(playB);
	stage.removeChild(soundB);
	stage.removeChild(leaderB);
	
	stage.update();
}

// when clicking play
function playT(event){
	removeMain() ;
	alert("playing game..");
	
}

// when clicking sound
function soundT(event) {
	alert("toggle sound..");
}

// when clicking leader 
function leaderT(event) {
	removeMain();
	leader();
	/* alert("leaderboards.."); */
}




