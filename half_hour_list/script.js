var newItemCounter = 1;
var ourList = document.getElementById('our-list');
var ourButton = document.getElementById('our-button');
var ourHeadline = document.getElementById('our-headline');
var listItems = document.getElementById("our-list").getElementsByTagName("li");
// for(var i = 0; i < listItems.length; i++){
// 	listItems[i].addEventListener('click', activateItem);
// }
ourList.addEventListener('click', activateItem);

function activateItem(){
	if() {
		
	}


	ourHeadline.innerHTML = this.innerHTML;
	for(var i = 0; i < listItems.length; i++){
	listItems[i].classList.remove('active');
}
	this.classList.add("active");


}

ourButton.addEventListener('click', makeItem);

function makeItem(){
	ourList.innerHTML += "<li>Polonius Item " + newItemCounter  +" </li>";
	newItemCounter++;
}
