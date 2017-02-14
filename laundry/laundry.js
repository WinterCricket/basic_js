
//variable array to be filled, to store item names
//var laundry = ["yellow socks", "old dance shoes", "new dance shoes", "straw hat", "long pants"];

//add to array variable
/*laundry.push()

//to update item in array
laundry[] = ''

//to delete item(s) from array, index position and number of items
laundry.splice(,)

//to view
console.log(laundry)

//function analogy
function makeSandwichWith(filler){
	Place slice 1 bread on plate;
	Add filler to slice 1;
	Place  slice 2 on top ;
}

makeSandwichWith("Salmon")


//my function for todos display
function viewLaundry(){
	console.log('My damned laundry list: ', laundry);
}
viewLaundry()

//function to add item to laundry
function addItem() {
	laundry.push('new item');
}
addItem()

//now put viewLaundry function inside addItem
function addItem() {
	laundry.push('new item');
	viewLaundry();
}
addItem()
//now addItem will display list with item added

//now make it so you can add new items to list with new variable
//requirements met: display, add item
function addItem(garment) {
	laundry.push(garment);
	viewLaundry();
}
addItem("code mail socks")
//another function, this one changing and showing change to item
function changeItem(position, newValue) {
	laundry[position] = newValue;
	viewLaundry();
}
changeItem(3, 'yellow socks')

//now the delete function
function removeItem(position) {
	laundry.splice(position, 1);
	viewLaundry();
}
removeItem(2)

//object with a function as a property
var me = {
	name: 'Todd',
	sayName: function() {
		console.log(this.name);
	}
}*/

//add functions into the object--use this.property,
var laundryList = {
	laundry: ["yellow socks", "old dance shoes", "new dance shoes", "straw hat", "long pants"],
	viewLaundry: function(){
		console.log('My damned laundry list: ', this.laundry);
	},
	addItem: function(garment){
		this.laundry.push(garment)
		this.viewLaundry();
	},
	changeItem: function(pos, newVal) {
		this.laundry[pos] = newVal;
		this.viewLaundry();
	},
	removeItem: function (pos) {
		this.laundry.splice(pos, 1);
		this.viewLaundry();
	}
};

// removeItem: function (pos) {
// 	this.laundry.splice(pos, 1);
// 	viewLaundry();
// }
