var newItemCounter = 1;
var ourList = document.querySelector('#our-list');
var ourButton = document.querySelector('#our-button');
var ourHeadline = document.querySelector('#our-headline');
var listItems = document.querySelector("#our-list li");
// for(var i = 0; i < listItems.length; i++){
// 	listItems[i].addEventListener('click', activateItem);
// }
ourList.addEventListener('click', activateItem);

function activateItem(e){
	if(e.target.nodeName === "LI") {
		ourHeadline.innerHTML = e.target.innerHTML;
		for(var i = 0; i < e.target.parentNode.children.length; i++){
			e.target.parentNode.children[i].classList.remove('active');
		}
			e.target.classList.add("active");
	}


}

ourButton.addEventListener('click', makeItem);

function makeItem(){
	ourList.innerHTML += "<li>Polonius Item " + newItemCounter  +" </li>";
	newItemCounter++;
}
