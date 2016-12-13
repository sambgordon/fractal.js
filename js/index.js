/*The following vars are used for different parameters of generated tree and can searched easily:

mainBranch = the main generated branch
subBranches = the sub branches that are generated "infinitely"
travel = the "distance" the branches will travel
branchWidth = Width of the stroke generated branches - keep in mind they
get exponentially thinner and thinner as recursion continues
startX, StartY, endX, endY = Defines path starting and ending values
length = length of each new tree relative to window
angle = angle of path of each new tree


I annotated the code so you can follow along!
*/

void function () {
	//Declare variables travel, branchWidth, canvas, and the canvas context
	var travel = 100 , branchWidth = 10
	//Draw canvas and set 2D context
	var canvas = document.getElementById('mycanvas')
	var ctx = canvas.getContext('2d')
	//set width and height of canvas to fill screen
	canvas.width = window.innerWidth
	canvas.height = window.innerHeight
  ctx.globalCompositeOperation;
	var fractalTree = function () {
		/* accesses clearRect() method of Canvas's 2d API with starting point (0,0) and size set to window.innerWidth
		and .innerHeight
		*/
		ctx.clearRect(0, 0, window.innerWidth, window.innerHeight)
		//Defines placement of tree relative to window, also
		drawTree(ctx, (window.innerWidth/2), (window.innerHeight/1), 40, -Math.PI/2, travel+10, branchWidth)
	}
	//Define drawTree var as function that has following variables as parameters
	var drawTree = function (ctx, startX, startY, length, angle, travel, branchWidth) {
		var rand = Math.random, dept,
			newLength, newAngle,
			mainBranch = 3,
			endX, endY, maxAngle = Math.PI /2;
		//Creates new canvas path
		ctx.beginPath()
		//Sets new trees to defined x and y coordinates - placed in center
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
		/*This is where the recursion really occurs!
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
