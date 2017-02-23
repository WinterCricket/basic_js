
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
	addObj: function(){
		var addLaundryTextInput = document.getElementById("addLaundryTextInput");
		laundryList.addObj(addLaundryTextInput.value);
		addLaundryTextInput.value = '';
	},
	changeObj: function(){
		var changeLaundryPositionInput = document.getElementById("changeLaundryPositionInput");
		var changeLaundryTextInput = document.getElementById("changeLaundryTextInput");
		laundryList.changeObj(changeLaundryPositionInput.valueAsNumber,changeLaundryTextInput.value);
		changeLaundryPositionInput.value = '';
		changeLaundryTextInput.value = '';
	},
	removeObj: function(){
		var removeLaundryPositionInput = document.getElementById("removeLaundryPositionInput");
		laundryList.removeObj(removeLaundryPositionInput.valueAsNumber);
		removeLaundryPositionInput.value = '';
	},
	toggleCompleted: function(){
		var toggleCompletedPositionInput = document.getElementById("toggleCompletedPositionInput");
		laundryList.toggleCompleted(toggleCompletedPositionInput.valueAsNumber);
		toggleCompletedPositionInput.value = '';
	},
	toggleAll: function(){
		laundryList.toggleAll();
	}
};
