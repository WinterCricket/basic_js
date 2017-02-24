
var laundryList = {
	laundry: [],
	addObj: function(garbText){
		this.laundry.push({
			laundryText: garbText,
			completed: false
		});
		
	},
	changeObj: function(pos, garbText){
		this.laundry[pos].laundryText = garbText;
	
	},
	removeObj: function(pos){
		this.laundry.splice(pos, 1);
		
	},
	toggleCompleted: function(pos){
		var laundry = this.laundry[pos];
		laundry.completed = !laundry.completed;
		
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
		
		
	}
	
	
};


var handlers = {
	
	addObj: function(){
		var addLaundryTextInput = document.getElementById("addLaundryTextInput");
		laundryList.addObj(addLaundryTextInput.value);
		addLaundryTextInput.value = '';
		view.viewLaundry();
	},
	changeObj: function(){
		var changeLaundryPositionInput = document.getElementById("changeLaundryPositionInput");
		var changeLaundryTextInput = document.getElementById("changeLaundryTextInput");
		laundryList.changeObj(changeLaundryPositionInput.valueAsNumber,changeLaundryTextInput.value);
		changeLaundryPositionInput.value = '';
		changeLaundryTextInput.value = '';
		view.viewLaundry();
	},
	removeObj: function(){
		var removeLaundryPositionInput = document.getElementById("removeLaundryPositionInput");
		laundryList.removeObj(removeLaundryPositionInput.valueAsNumber);
		removeLaundryPositionInput.value = '';
		view.viewLaundry();
	},
	toggleCompleted: function(){
		var toggleCompletedPositionInput = document.getElementById("toggleCompletedPositionInput");
		laundryList.toggleCompleted(toggleCompletedPositionInput.valueAsNumber);
		toggleCompletedPositionInput.value = '';
		view.viewLaundry();
	},
	toggleAll: function(){
		laundryList.toggleAll();
		view.viewLaundry();
	}
};

var view = {
	viewLaundry: function(){
		
		var laundryUl = document.querySelector('ul');
		laundryUl.innerHTML = '';
		
		for( var i = 0; i < laundryList.laundry.length; i++){
			var laundryLi = document.createElement('li');
			var launder = laundryList.laundry[i];
			var laundryTextWithCompletion = '';
			
			
			if(launder.completed === true){
				laundryTextWithCompletion = '(x) ' + launder.laundryText;
			}else{
				laundryTextWithCompletion = '( ) ' + launder.laundryText;
			}
			
			//DOM manipulation
			laundryLi.textContent = laundryTextWithCompletion;
			laundryUl.appendChild(laundryLi);
		}
		
	}
};
