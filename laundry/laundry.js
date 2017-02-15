






//add functions into the object--use this.property, then
//make laundryList add objects instead of items, intro boolean
var laundryList = {
	laundry: [],
	viewLaundry: function(){
		console.log('My damned laundry list: ', this.laundry);
	},
	addObj: function(garmentText){
		this.laundry.push({
			garmentText: garmentText,
			completed: false
		})
		this.viewLaundry();
	},
	changeObj: function(pos, garmentText) {
		this.laundry[pos].garmentText = garmentText;
		this.viewLaundry();
	},
	removeObj: function (pos) {
		this.laundry.splice(pos, 1);
		this.viewLaundry();
	},
	toggleCompleted: function(pos){
		var garment = this.laundry[pos];
		garment.completed = !garment.completed;
		this.viewLaundry();
	}
};

