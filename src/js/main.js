var myUI;

myUI = {
	init: function(){
		const cH = window.innerHeight, cW = window.innerWidth;
        LSinit("userNACG", userNACG);
		myUI.loader(cH,cW);
	},
	loader: function(cH,cW){
		var btnHolder = createEle("div");

        for (var b=0;b<10;b++) {
        	var btns = createEle("button");

        	btns.innerHTML = btnNames[b];
        	btns.className = "btns";

        	btns.disabled = true;

			btnHolder.appendChild(btns);
        }

		btnHolder.className = "btnHolder";
		setTimeout(function() {
			makeFull(btnHolder);
		}, 200);


		demo.appendChild(btnHolder);
	},

};

window.onload = function() {
    myUI.init();
};