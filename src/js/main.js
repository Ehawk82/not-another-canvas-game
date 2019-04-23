var myUI;

myUI = {
	init: function(){
		const cH = window.innerHeight, cW = window.innerWidth;
		
		myUI.loader(cH,cW);
	},
	loader: function(cH,cW){

	},

};

window.onload = function() {
    myUI.init();
};