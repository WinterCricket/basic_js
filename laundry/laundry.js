
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

		this.laundry.forEach(function(launder){
			if(launder.completed === true){
				completedLaundry++;
			}
		});
		
		this.laundry.forEach(function(launder){
			if(completedLaundry === totalLaundry){
				launder.completed = false;
			}else{
				launder.completed = true;
			}
		});
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
	removeObj: function(pos){
		laundryList.removeObj(pos);
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
		
	
		laundryList.laundry.forEach(function(launder, pos){
			var laundryLi = document.createElement('li');
			var laundryTextWithCompletion = '';
			
			
			if(launder.completed === true){
				laundryTextWithCompletion = '(x) ' + launder.laundryText;
			}else{
				laundryTextWithCompletion = '( ) ' + launder.laundryText;
			}
			
			//DOM manipulation
			laundryLi.id = pos;
			laundryLi.textContent = laundryTextWithCompletion;
			laundryLi.appendChild(this.createDeleteButton());
			laundryUl.appendChild(laundryLi);
		}, this);
		
	},
	createDeleteButton: function(){
		var deleteButton = document.createElement('button');
		deleteButton.textContent = "Delete";
		deleteButton.className = 'deleteButton';
		return deleteButton;
	},
	setupEventListeners: function() {
		var laundryUl = document.querySelector('ul');

		laundryUl.addEventListener('click', function(event){
			
			//get element clicked on
			var elementClicked = event.target;
			//is elementClicked a delete button?
			if(elementClicked.className === 'deleteButton'){
				handlers.removeObj(parseInt(elementClicked.parentNode.id));
				 
			}//use chrome dev tools!
		});

	}
};

view.setupEventListeners();
