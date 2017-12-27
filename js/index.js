/**
* Application Name: Fractaltrees.js
* Application URI: https://github.com/sambgordon/Fractaltrees.js
* Description: This plugin generates binary tree-based fractals.
* Version: 1.0.0
* Author: Sam Gordon
* Author URI: http://www.devbysam.com 
* License: MIT
*/

void function () {
	//Declare anonymous function with vars for travel, branchWidth, canvas, and the canvas context
	var travel = 100 , branchWidth = 10
	
	//Draw canvas and set 2D context
	var canvas = document.getElementById('mycanvas')
	var ctx = canvas.getContext('2d')
	
	//set width and height of canvas to fill screen
	canvas.width = window.innerWidth
	canvas.height = window.innerHeight
  ctx.globalCompositeOperation;
	var fractalTree = function () {
		
		/* accesses clearRect() method of Canvas API with starting point (0,0) and size set relative to
		window width and height
		*/
		ctx.clearRect(0, 0, window.innerWidth, window.innerHeight)
		
		//Defines placement of tree relative to window
		drawTree(ctx, (window.innerWidth/2), (window.innerHeight/1), 40, -Math.PI/2, travel+10, branchWidth)
		
	}
	//Define drawTree function
	var drawTree = function (ctx, startX, startY, length, angle, travel, branchWidth) {
		var rand = Math.random, dept,
			newLength, newAngle,
			mainBranch = 3,
			endX, endY, maxAngle = Math.PI /2;
		
		//Creates new canvas path
		ctx.beginPath()
		ctx.moveTo(startX, startY)
		
		//defines x and y end values by start values
		endX = startX + length * Math.cos(angle)
		endY = startY + length * Math.sin(angle)
		
		//uses lineCap canvas property to round the lines
		ctx.lineCap = 'round'
		ctx.lineWidth = branchWidth
		ctx.lineTo(endX, endY)
		
		//sets white color for generated tree and branches
		ctx.strokeStyle = 'white'
		ctx.stroke()
		newTravel = travel
		if (!newTravel) return
		subBranches = mainBranch -1
		
		/*This is where the recursion occurs
		Each new child branch is 7/10 the size of its parent branch,
		so they are generated infinitely until they "fizzle out". */
		branchWidth *= .7
		for (var i = 0; i < subBranches; i++) {
			/*set new angles defined by a formula
			that is based on the max angle multiplied by a random value.
			The value can't be negative because the branches will turn in onto themselves!
			*/
			
			newAngle = angle + rand()*maxAngle - maxAngle*.5
			newLength = length * (.7 + rand()*.5)
			/*uses setTimeout method with input as the drawTree function that draws tree
			and its parameters. Expression is evaluated after 60 ms.
			*/
			
			setTimeout(function () {
				drawTree(ctx, endX, endY, newLength, newAngle, newTravel, branchWidth);
				}, 60)
		}
	}
	/*adds event listener that detects whether DOM has loaded, runs fractalTree regardless if content has loaded
	so it triggers more quickly */
	
	document.addEventListener('DOMContentLoaded',function(){
		fractalTree()
	}, false);
}();
