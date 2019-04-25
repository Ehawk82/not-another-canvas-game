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
                    posX: Math.floor((Math.random() * cH) + 1),
                    posY: Math.floor((Math.random() * cH) + 1)
				};
			if(b === 0){
				if (num === 1) {
					
					uNACG.quark.up.enitities[uNACG.quark.up.count] = entityMap;

					uNACG.quark.up.count++;
				} else {
					uNACG.quark.down.enitities[uNACG.quark.down.count] = entityMap;
					

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