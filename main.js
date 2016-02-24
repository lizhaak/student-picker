'use strict';
var namesArray = [];

document.getElementById('addName').addEventListener('click', function(){
	var name = document.getElementById('names').value;
	var separateNames = name.split(',');
	namesArray.push.apply(namesArray, separateNames);
	//console.log('namesArray1: ', namesArray);

	for (var i = 0; i < namesArray.length; i++){
		var nameSauce = namesArray[i];
		console.log('namesArray[i]: ', namesArray[i]);
		
		var nameEntry = document.createElement('li');
		nameEntry.innerHTML = nameSauce;
		
		console.log('nameEntry: ', nameEntry);
		myList.appendChild(nameEntry);
	}
	var inputField = document.getElementById('names');
	inputField.value = "";
});

document.getElementById('random').addEventListener('click', function(){
	console.log('namesArray1: ', namesArray);
	var randomName = namesArray[Math.floor(Math.random() * namesArray.length)];
	randomName1.innerHTML = randomName;
});