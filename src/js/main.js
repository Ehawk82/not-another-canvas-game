var myUI;

myUI = {
	init: function(){
		const cH = window.innerHeight, cW = window.innerWidth;
        LSinit("userNACG", userNACG);

        var uNACG = parseLS("userNACG");

		myUI.loader(cH,cW,uNACG);
	},
	loader: function(cH,cW,uNACG){
		var btnHolder = createEle("div"),
		    canvas = createEle("canvas");

		canvas.height = cH;
		canvas.width = cW;
        myUI.canvasLoop(cH,cW,uNACG,canvas);
        for (var b=0;b<10;b++) {
        	var btns = createEle("button");

        	btns.innerHTML = btnNames[b];
        	btns.className = "btns";
        	btns.onclick = myUI.addFunc(btns,b,canvas,uNACG);

 			if (b>uNACG.level){
				btns.disabled = true;
			} else {
				btns.disabled = false;
			}
       
			btnHolder.appendChild(btns);
        }

		btnHolder.className = "btnHolder";
		setTimeout(function() {

			makeFull(btnHolder);

		}, 200);


		demo.append(canvas,btnHolder);
		
	},
	canvasLoop: function(cH,cW,uNACG,canvas){
		var upQuarksCount = uNACG.quark.up.count,
		    downQuarksCount = uNACG.quark.down.count;

            var ctx = canvas.getContext("2d");
            var directional;

            ctx.clearRect(0,0,cW,cH);
		for(var i = 0; i < upQuarksCount; i++) {
			if(uNACG.quark.up.entities[i]){
				var centerWidth = cW / 2,
				    centerHeight = cH / 2,
				    posX = uNACG.quark.up.entities[i].posX,
                    posY = uNACG.quark.up.entities[i].posY;
                
                
			var numb = Math.floor((Math.random() * 8) + 1);
            if (numb === 1) {
            	uNACG.quark.up.entities[i].posX++;
            }
            if (numb === 2) {
            	uNACG.quark.up.entities[i].posY--;

            }
            if (numb === 3) {
            	uNACG.quark.up.entities[i].posX--;

            }
            if (numb === 4) {
            	uNACG.quark.up.entities[i].posY++;

            }
            if (numb === 5) {
            	uNACG.quark.up.entities[i].posX++;
            	uNACG.quark.up.entities[i].posY++;

            }
            if (numb === 6) {
            	uNACG.quark.up.entities[i].posX--;
            	uNACG.quark.up.entities[i].posY--;

            }
            if (numb === 7) {
            	uNACG.quark.up.entities[i].posX++;
            	uNACG.quark.up.entities[i].posY--;

            }
            if (numb === 8) {
            	uNACG.quark.up.entities[i].posX--;
            	uNACG.quark.up.entities[i].posY++;

            }
				ctx.beginPath();
				ctx.strokeStyle = "gold";
                ctx.arc(posX, posY, 1, 0, 2 * Math.PI);
                ctx.stroke();
                
			}else{
				console.log("no entities");
			}
		}
		for(var i = 0; i < downQuarksCount; i++) {
			if(uNACG.quark.down.entities[i]){
                var posX = uNACG.quark.down.entities[i].posX,
                    posY = uNACG.quark.down.entities[i].posY;

                var numb = Math.floor((Math.random() * 8) + 1);
	            if (numb === 1) {
	            	uNACG.quark.down.entities[i].posX++;
	            }
	            if (numb === 2) {
	            	uNACG.quark.down.entities[i].posY--;
	            }
	            if (numb === 3) {
	            	uNACG.quark.down.entities[i].posX--;
	            }
	            if (numb === 4) {
	            	uNACG.quark.down.entities[i].posY++;
	            }
	            if (numb === 5) {
	            	uNACG.quark.down.entities[i].posX++;
	            	uNACG.quark.down.entities[i].posY++;
	            }
	            if (numb === 6) {
	            	uNACG.quark.down.entities[i].posX--;
	            	uNACG.quark.down.entities[i].posY--;
	            }
	            if (numb === 7) {
	            	uNACG.quark.down.entities[i].posX++;
	            	uNACG.quark.down.entities[i].posY--;
	            }
	            if (numb === 8) {
	            	uNACG.quark.down.entities[i].posX--;
	            	uNACG.quark.down.entities[i].posY++;
	            }
				ctx.beginPath();
				ctx.strokeStyle = "silver";
                ctx.arc(posX, posY, 1, 0, 2 * Math.PI);
                ctx.stroke();
			}else{
				console.log("no entities");
			}
		}

        //saveLS("userNACG", uNACG);
		setTimeout(function() {
			myUI.canvasLoop(cH,cW,uNACG,canvas);
		}, 150);
		/*
		
		*/
	},
	addFunc: function(btns,b,canvas,uNACG) {
		return function() {
			var num = Math.floor((Math.random() * 2) + 1);

			var numName, up, down;
				if (num === 1) {
					numName = uNACG.quark.up.count;
				} else {
					numName = uNACG.quark.down.count;
				}
				
				var entityMap = {
					place: numName,
                    posX: Math.floor((Math.random() * cW) + 1),
                    posY: Math.floor((Math.random() * cH) + 1)
				};
			if(b === 0){
				if (num === 1) {
					uNACG.quark.up.entities[uNACG.quark.up.count] = entityMap;

					uNACG.quark.up.count++;
				} else {
					uNACG.quark.down.entities[uNACG.quark.down.count] = entityMap;

					uNACG.quark.down.count++;
				}

			}
			saveLS("userNACG", uNACG);
	    }
	}

};

window.onload = function() {
    myUI.init();
};