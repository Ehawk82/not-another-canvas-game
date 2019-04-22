var myUI;

myUI = {
	init: function(){
		const cH = window.innerHeight, cW = window.innerWidth;
		    console.log(cH);
		myUI.loader();
	},
	loader: function(){
		myUI.makeCanvas();
		var btnHolder = createEle("div"),
		    startBtn = createEle("button");

		    startBtn.innerHTML = "START";
		    startBtn.className = "menu_buttons";
		    startBtn.onclick = myUI.startGame();

			btnHolder.className = "btnHolder";
			btnHolder.appendChild(startBtn);

			demo.appendChild(btnHolder);
	},
	makeCanvas: function() {
		var canvas = createEle("canvas");

		canvas.height = 420;
		canvas.width = 680;

	    demo.appendChild(canvas);
	},
	startGame: function() {
		return function() {
			var canvas = byTag("canvas", 0),
		        ctx = canvas.getContext("2d");
			myUI.runTheThing(canvas, ctx);
		}
	},
	runTheThing: function(canvas, ctx) {
		if (canvas) {
	//cycle
    	} else {
			console.log("canvas is null or not available");
    	}
	}
};

window.onload = function() {
    myUI.init();
};