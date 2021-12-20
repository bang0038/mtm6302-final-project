let clock = document.getElementById("clock");


setInterval(function() {
	let date = new Date();
	clock.innerHTML = date.toLocaleTimeString(); //Method
}, 1000);

window.onload = function() {
	let time = new Date();
	let greetingElement = document.getElementById('greeting');
	let greeting = 'I hope you are having a';

	// Morning
	if (time.getHours() < 12) {
		greeting = greeting + ' relaxing morning!';
		// Afternoon
	} else if (time.getHours() < 18) {
		greeting = greeting + ' fun afternoon!';
		// Evening
	} else greeting = greeting + ' peaceful evening!';

	greetingElement.innerText = greeting;
};
// APOD SCRIPT

const apiUrl = 'https://api.nasa.gov/planetary/apod?api_key=';
const apiKey = '2x6RHpvYgeQCieL1tobnLDs4CLfechp7qS74NBSL';

const displayAPOD = async() => {

	const response = await fetch(`${apiUrl}${apiKey}`);
	const data = await response.json();
	getNasaApod(data);

};


const getNasaApod = data => {

	document.getElementById('apod').src = data.url;

};

displayAPOD();

function changeColor(colorName) {
	document.body.style.background = colorName;
}

// Customization SCRIPT

function chooseColour() {
	let userColor = document.getElementById('color').value;
	localStorage.setItem('storedValue', document.body.style.backgroundColor = userColor);
}


if (localStorage.storedValue) {
	document.getElementById('color').value = localStorage.storedValue;
	document.body.style.backgroundColor = localStorage.storedValue;
}



function chooseColourtwo() {
	let userColortwo = document.getElementById('colortwo').value;
	localStorage.setItem('storedValue', document.body.style.color = userColortwo);
}


if (localStorage.storedValue) {
	document.getElementById('colortwo').value = localStorage.storedValue;
	document.body.style.color = localStorage.storedValue;
}


// ADDITIONAL INFO SCRIPT

let weekDay = document.getElementById("weekday");
let fullWeek = [
	"Sunday",
	"Monday",
	"Tuesday",
	"Wednesday",
	"Thursday",
	"Friday",
	"Saturday",
];
let todaysDate = new Date();
let whatDay = todaysDate.getDay();
weekDay.innerHTML = `Today is <span>${fullWeek[whatDay]} &#128512;</span>`;

// Thanks for a great semester Geoff!!! :)