

//object:
// var ophelia = {
// 	name: "Ophelia",
// 	music: "Walk, by Tycho"
// };



//class: blueprint for objects
function Person(fullName, composer){
	this.name = fullName;
	this.music = composer;
	this.greet = function(){
		console.log("I'm "+ this.name + ", and I listen to " + this.music +".");
	}
}


var ophelia = new Person("Ophelia of Polonius", "Tycho");
ophelia.greet();

var hamlet = new Person("Hamlet of Hamlet", "Air");
hamlet.greet();

