'use strict';
var namesArray = [];

document.getElementById('addName').addEventListener('click', function(){
	var name = document.getElementById('names').value;
	var separateNames = name.split(',');
	namesArray.push.apply(namesArray, separateNames);

	for (var i = 0; i < namesArray.length; i++){
		var nameSauce = namesArray[i];
		var nameEntry = document.createElement('li');
		nameEntry.innerHTML = nameSauce;
		myList.appendChild(nameEntry);
		namesArray[i] = ""; //resets namesArray, so no duplication in HTML
	}
	var inputField = document.getElementById('names');
	inputField.value = "";
});

document.getElementById('random').addEventListener('click', function(){
	var randomName = namesArray[Math.floor(Math.random() * namesArray.length)];
	randomName1.innerHTML = randomName;
});

// extra credit group shuffled array:

var names = ['ryan', 'ashley', 'liz', 'will', 'jason'];

function shuffle(array){
	array = array.concat();
	var shuffled = [];
	var randomIndex;

	while(array.length) {
		randomIndex = Math.floor(Math.random() * array.length);
		shuffled = shuffled.concat(array.splice(randomIndex, 1));
	}
	return shuffled;
}

var shuffName = shuffle(names);

function chunk(array, size) {
	array = array.concat();
	var groups = [];
	while(array.length) {
		groups.push(array.splice(0, size));
	}
	return groups;
}

console.log('names: ', names);
console.log('chunk(names, 2): ', chunk(names, 2));
console.log('names: ', names);




