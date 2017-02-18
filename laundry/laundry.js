
var laundryList = {
	laundry: [],
	viewLaundry: function(){
		if(this.laundry.length === 0){
			console.log("My laundry list is empty!");
		} else {
			console.log("Here's my damned laundry list: ");
			for(var i = 0; i < this.laundry.length; i++){
				if(this.laundry[i].completed === true){
					console.log("(x)", this.laundry[i].laundryText);
				}else{
					console.log("()", this.laundry[i].laundryText);
				}
			}
		}
	},
	addObj: function(garmentText){
		this.laundry.push({
			laundryText: garmentText,
			completed: false
		});
		this.viewLaundry();
	},
	changeObj: function(pos, garmentText){
		this.laundry[pos].laundryText = garmentText;
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
	}
};