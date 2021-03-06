/* var stage; */

var headerb = new createjs.Bitmap("../img/MenuHead.png");
var retry = new createjs.Bitmap("../img/retry.png");
var menu = new createjs.Bitmap("../img/menu2.png");

var BG = new createjs.Bitmap("../img/bgGray.png");

/* var highScoreBar = new createjs.Shape();
var highScoreInBar = new createjs.Shape();
var highScoreTxt = new createjs.Text("HIGHEST SCORE", "25px Arial", "#f5cb37");
var highScoreTxtUser = new createjs.Text("000000", "30px Arial", "#f5cb37"); */

var currentScoreTxt = new createjs.Text("YOUR SCORE", "22px Arial", "#f5cb37");
var currentScoreTxtUser = new createjs.Text("0000", "25px Arial", "#f5cb37");

var achtxt2 = new createjs.Bitmap("../img/achtxt2.png");
var ach1 = new createjs.Bitmap("../img/achive1.png");
var ach3 = new createjs.Bitmap("../img/achive2.png");
var ach2 = new createjs.Bitmap("../img/achive3.png");


var retryY = 568 -(305 * .5);
var menuY = retryY - (229 * .5)
var imgScale = .5;

var canvasW = 320;
var canvasY = 568;
var achivScale = .25;
var achievY = 140;

var cCenter = canvasW * .5;

/* TEST independent canvas */
/* function start() {
	stage = new createjs.Stage(document.getElementById("canvas"));
	
	endGame();
	
	
	
} 
 */
function endGame2(num, one, two, three) {
	stage.removeAllChildren();
	stage.removeAllEventListeners("click");
	count = countReset;
	lives = 3;
	difficulty = 1;
	complete = 0;
	currentScore = num;
	a1 = one;
    a2 = two;
    a3 = three;
	
	headerb.scaleX = imgScale;
	headerb.scaleY = imgScale;
	
	/* gray BG */
	BG.scaleX = BG.scaleY = imgScale;
	
	/* Retry Button */
	retry.scaleY = retry.scaleX = imgScale;
	retry.y = retryY;
	
	/* Menu Button */
	menu.scaleY = menu.scaleX = imgScale;
	
	menu.y =  menuY;
	
	/* Highest Score Bar */
	/* highScoreBar.graphics.beginFill("#1f1f1f").drawRect(cCenter, retryY - menuY, 225, 75);
	highScoreBar.regY = 75 * .5;
	highScoreBar.regX = 225 * .5;
	
	highScoreInBar.graphics.beginFill("#35687d").drawRect(cCenter, retryY - menuY + 8, 190, 32);
	highScoreInBar.regY = 24 * .5;
	highScoreInBar.regX = 190 * .5;
	
	
	highScoreTxt.x = cCenter;
	highScoreTxt.y = 80;
	highScoreTxt.textAlign = "center";
	
	
	highScoreTxtUser.x = cCenter;
	highScoreTxtUser.y = 110;
	highScoreTxtUser.textAlign = "center"; */
	
	// achievement text
	achtxt2.scaleX = achtxt2.scaleY = imgScale;
	achtxt2.regX = 246 * .5;
	achtxt2.regY = 32 * .5;
	
	achtxt2.x = cCenter;
	achtxt2.y = 80;
	
	
	
	//achievement icons
	ach1.scaleX = ach1.scaleY = achivScale;
	ach1.regX = ach1.regY = 244 * .5;
	ach1.x = cCenter - 65;
	ach1.y = achievY;
    if (a1 == false){
	    ach1.alpha = noAchi;
    } else {
        ach1.alpha = yeAchi;
    }
	
	ach2.scaleX = ach2.scaleY = achivScale;
	ach2.regX = ach2.regY = 244 * .5;
	ach2.x = cCenter;
	ach2.y = achievY;
	if (a2 == false){
	    ach2.alpha = noAchi;
    } else {
        ach2.alpha = yeAchi;
    }
	
	ach3.scaleX = ach3.scaleY = achivScale;
	ach3.regX = ach3.regY = 244 * .5;
	ach3.x = cCenter + 65;
	ach3.y = achievY;
	if (a3 == false){
	    ach3.alpha = noAchi;
    } else {
        ach3.alpha = yeAchi;
    }
	
	var currentScoreTxt = new createjs.Text("YOUR SCORE", "22px Arial", "#f5cb37");
	var currentScoreTxtUser = new createjs.Text(num, "25px Arial", "#f5cb37");
	/* Current Score Bar */
	currentScoreTxt.x = cCenter;
	currentScoreTxt.y = 190;
	currentScoreTxt.textAlign = "center";
	
	
	
	currentScoreTxtUser.x = cCenter;
	currentScoreTxtUser.y = 215;
	currentScoreTxtUser.textAlign = "center";
	

	/* Adding components to the stage */

	stage.addChild(BG);
	
	stage.addChild(headerb);
	stage.addChild(retry);
	stage.addChild(menu);
	stage.addChild(ach1, ach2, ach3);
	stage.addChild(currentScoreTxtUser);
	stage.addChild(currentScoreTxt);
	stage.addChild(achtxt2);
	
	
	
	/* Functionality */
	menu.addEventListener("click", menuE);
	retry.addEventListener("click", retryE);
	
	stage.update();

	var username = prompt("Please enter a three letter name.", "AAA");
	while (username.length > 3 || username.length < 3) { 
        username = prompt("Please enter a three letter name.", "AAA");
    }
    postScore(username.toUpperCase(), currentScore, a1, a2, a3);
}

//Posts user score
function postScore(name, num, one, two, three){
    //post user ranking
    $.ajax({ url: "https://api.mongolab.com/api/1/databases/scores/collections/users?apiKey=lNSMtfgEiRFg6AMmRoF-buHNYoRynthh",
                 data: JSON.stringify({ id: name,
                 score: num,
                 achievementone: one,
                 achievementtwo: two,
                 achievementthree: three }),
                 type: "POST",
                 contentType: "application/json",
                 success: function (data) {
                     alert("posted");
                 },
                 error: function () {
                     alert("boom");
                 }

             });
}


/* removes the endgame page from canvas - Turns OFF*/
function removeEnd() {
	/* stage.removeChild(BG);
	stage.removeChild(headerb);
	stage.removeChild(retry);
	stage.removeChild(currentScoreTxtUser);
	stage.removeChild(currentScoreTxt); */
	
	
	stage.removeAllChildren();
	
	stage.update();
}

function menuE(event) {
	removeEnd();
	stage.removeAllChildren();
	
	init();
	/* alert("going menu.."); */
	removePause();
	count = countReset;
	lives = 3;
	difficulty = 1;
	complete = 0;
	currentScore = 0;
    stage.update();
	buttonPressAudio.play();
	audio.play();
}

function retryE(event) {
	removeEnd();
	stage.removeAllChildren();
	count = countReset;
	lives = 3;
	difficulty = 1;
	complete = 0;
	currentScore = 0;
	buttonPressAudio.play();
	
	/* restart(); */
	/* stage.update(); */
	nextGame();
	/* alert("retrying game.."); */
	 
}