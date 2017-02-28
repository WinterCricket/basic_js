//class: blueprint for objects
function Person(fullName, composer){
	this.name = fullName;
	this.music = composer;
	this.greet = function(){
		console.log("I'm "+ this.name + ", and I listen to " + this.music +".");
	}
}