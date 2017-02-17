
//build a for loop for this object of laundryList
var laundryList = {
	laundry: [],
	viewLaundry: function(){
		console.log('My damned laundry list: ');
		for (var i = 0; i < this.laundry.length; i++){
			console.log(this.laundry[i].laundryText);
		}
	},
	addObj: function(garmentText){
		this.laundry.push({
			laundryText: garmentText,
			completed: false
		})
		this.viewLaundry();
	},
	changeObj: function(pos, garmentText) {
		this.laundry[pos].laundryText = garmentText;
		this.viewLaundry();
	},
	removeObj: function (pos) {
		this.laundry.splice(pos, 1);
		this.viewLaundry();
	},
	toggleCompleted: function(pos){
		var laundry = this.laundry[pos];
		laundry.completed = !laundry.completed;
		this.viewLaundry();
	}
};

