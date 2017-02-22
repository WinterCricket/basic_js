
var laundryList = {
	laundry: [],
	viewLaundry: function(){
		if(this.laundry.length === 0){
			
			console.log("Your bloody laundry list is bloody empty!");
		}else{
			console.log("Here's your stinking list, fool!");
			for(var i = 0; i < this.laundry.length; i++){
				if(this.laundry[i].completed == true){
					console.log('(x)', this.laundry[i].laundryText);
				}else{
					console.log('()', this.laundry[i].laundryText);
				}
			}
		}
		
	},
	addObj: function(garbText){
		this.laundry.push({
			laundryText: garbText,
			completed: false
		});
		this.viewLaundry();
	},
	changeObj: function(pos, garbText){
		this.laundry[pos].laundryText = garbText;
		this.viewLaundry();
	},
	removeObj: function(pos){
		this.laundry.splice(pos, 1);
		this.viewLaundry();
	},
	toggleCompleted: function(pos){
		var laundry = this.laundry[pos];
		laundry.completed = !laundry.completed;
		this.viewLaundry();
	},
	toggleAll: function(){
		var totalLaundry = this.laundry.length;
		var completedLaundry = 0;
		for(var i = 0; i < totalLaundry; i++){
			if(this.laundry[i].completed === true){
				completedLaundry++;
			}
		}
		if(completedLaundry === totalLaundry){
			for(var i = 0; i < totalLaundry; i++){
			this.laundry[i].completed = false;	
			}
			
		}else{
			for(var i = 0; i < totalLaundry; i++){
				this.laundry[i].completed = true;
			}
			
		}
		this.viewLaundry();
	}
	
	
};


var handlers = {
	viewLaundry: function(){
		laundryList.viewLaundry();
	},
	toggleAll: function(){
		laundryList.toggleAll();
	},
	addObj: function(){
		laundryList.addOb();
	}
};
