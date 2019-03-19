/**
* Application Name: Fractaltrees.js
* Application URI: https://github.com/sambgordon/Fractal.js
* Description: Generates binary tree-based fractals.
* Version: 1.0.0
* Author: Sam Gordon
* Author URI: http://www.devbysam.com 
* License: MIT
*/

void function () {
	var travel = 100 , branchWidth = 10
	
	//draw canvas and set 2D context
	var canvas = document.getElementById('mycanvas')
	var ctx = canvas.getContext('2d')
	
	canvas.width = window.innerWidth
	canvas.height = window.innerHeight
  	ctx.globalCompositeOperation;
	var fractalTree = function () {
		
		//access clearRect() method of Canvas API
		ctx.clearRect(0, 0, window.innerWidth, window.innerHeight)
		
		//define placement of tree relative to window
		drawTree(ctx, (window.innerWidth/2), (window.innerHeight/1), 40, -Math.PI/2, travel+10, branchWidth)
		
	}

	var drawTree = function (ctx, startX, startY, length, angle, travel, branchWidth) {
		var rand = Math.random, dept,
			newLength, newAngle,
			mainBranch = 3,
			endX, endY, maxAngle = Math.PI /2;
		
		//create new canvas path
		ctx.beginPath()
		ctx.moveTo(startX, startY)
		
		endX = startX + length * Math.cos(angle)
		endY = startY + length * Math.sin(angle)
		
		ctx.lineCap = 'round'
		ctx.lineWidth = branchWidth
		ctx.lineTo(endX, endY)
		
		ctx.strokeStyle = 'white'
		ctx.stroke()
		newTravel = travel
		if (!newTravel) return
		subBranches = mainBranch -1
		
		/*each new child branch is 7/10 the size of its parent branch
		so they are generated infinitely until they "fizzle out". */
		branchWidth *= .7
		for (var i = 0; i < subBranches; i++) {
			/*set new angles defined by a formula
			that is based on the max angle multiplied by a random value.
			this value can't be negative because the branches will turn in onto themselves!
			*/
			
			newAngle = angle + rand()*maxAngle - maxAngle*.5
			newLength = length * (.7 + rand()*.5)

			/*use setTimeout method with input as the drawTree function that draws tree
			and its parameters. Expression is evaluated after 60ms.
			*/
			setTimeout(function () {
				drawTree(ctx, endX, endY, newLength, newAngle, newTravel, branchWidth);
				}, 60)
		}
	}
	
	document.addEventListener('DOMContentLoaded',function(){
		fractalTree()
	}, false);
}();
