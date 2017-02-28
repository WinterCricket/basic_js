function person(name, music){
	console.log("I am " + name +". My choice in music is " + music +".");
}


//object:
var ophelia = {
	name: "Ophelia",
	music: "Walk, by Tycho"
};

person(ophelia.name, ophelia.music);

//class: blueprint for objects
function Person(){
	this.salut = function(){
		console.log("I'm " + name +". My choice in music is " + music +".")
	}
}

var ophelia = new Person();