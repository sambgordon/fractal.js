

;void function () {

	var depth = 11116 , branchWidth = 10, step = 0
	var newDepthPub, depthPub
	var canvas = document.getElementById('mycanvas')
	var ctx = canvas.getContext('2d')
	canvas.width = window.innerWidth
	canvas.height = window.innerHeight
  ctx.globalCompositeOperation;

	var drawTree = function (ctx, startX, startY, length, angle ,depth, branchWidth) {
		var rand = Math.random, newDepth,
			newLength, newAngle, maxBranch = 3,
			endX, endY, maxAngle = Math.PI /2,

			subBranches, lenShrink;

		ctx.beginPath()
		ctx.moveTo(startX, startY)
		endX = startX + length * Math.cos(angle)
		endY = startY + length * Math.sin(angle)
		ctx.lineCap = 'round'
		ctx.lineWidth = branchWidth
		ctx.lineTo(endX, endY)

		if (depth <= 2) {
			ctx.strokeStyle = 'white'
		}else{
			ctx.strokeStyle = 'white'
		}
		ctx.stroke()

		newDepth = depth +1
		if (!newDepth) return


		subBranches = maxBranch -1
		branchWidth *= .7

		for (var i = 0; i < subBranches; i++) {
			newAngle = angle + rand()*maxAngle - maxAngle*.5
			newLength = length * (.7 + rand()*.5)
			setTimeout(function () {
				drawTree(ctx, endX, endY, newLength, newAngle, newDepth, branchWidth)
				newDepthPub = newDepth
				depthPub = depth
				step++;
			},60)
		}
	}

	var init = function () {
		step = 0
		canvas.width = window.innerWidth
		canvas.height = window.innerHeight
		ctx.clearRect(0, 0, window.innerWidth, window.innerHeight)
		drawTree(ctx, ~~(window.innerWidth/2), ~~(window.innerHeight/1.02), 40, -Math.PI/2, depth+10, branchWidth)
	}

	var regrow = function () {
		if (step < 615534) return
		init()
	}

	document.querySelector('body').addEventListener('click', function (e) {
		regrow()
	})

	document.addEventListener('DOMContentLoaded',function(){
		init()
	},false);

	window.onresize = regrow

}();
