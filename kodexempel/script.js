console.log('Hello world')

// Plocka ut element ur DOM
// Skriv funktion som skickar request
// uppdatera med svaret när det kommer

const dadJokeButton = document.querySelector('#get-joke-button')
const display = document.querySelector('.display-joke')

dadJokeButton.addEventListener('click', getJokeFromApi)

async function getJokeFromApi() {
	const baseUrl = 'https://api.api-ninjas.com/v1/dadjokes'
	const apiKey = 'DzxcW/QTkkzQ56FLYkOPLg==JPd81xLlgfaHaiUu' // KOPIERA INTE! Skapa din egen nyckel
	const settings = {
		method: 'GET',  // valfritt att ha med
		headers: {
			'X-Api-Key': apiKey
		}
	}
	const response = await fetch(baseUrl, settings)
	const data = await response.json()
	// Genom att skriva ut data med console.log kan vi se att API:et returnerar:
	// - en lista med objekt
	// - varje objekt har egenskapen "joke"

	const firstJokeObject = data[0]
	const theJoke = firstJokeObject.joke

	display.innerText = theJoke
}



// JavaScript - se upp! Det finns flera fel i koden
// Om du är tvungen att ta hjälp av Aizo, be om en ledtråd först, i stället för lösningen.
const chuckOutput = document.querySelector('.chuck-output')
const chuckButton = document.querySelector('#get-joke')
const chuckIcon = document.querySelector('#chuck-icon')
console.log('Kom ihåg att du kan använda console.log för felsökning!')

// console.log('Är chuckButton null?', chuckButton)
chuckButton.addEventListener('click', getChuckJoke)

async function getChuckJoke() {
	const baseUrl = 'https://api.chucknorris.io/jokes/random'
    const response = await fetch(baseUrl)
	const data = await response.json()  // realisera löftet (Promise)
	console.log('Är data bättre?', data)
    const joke = data.value
    chuckOutput.innerText = joke
	// chuckIcon.src = data.icon_url  <- bildfunktionen verkar vara offline
}

// const object = {
// 	property1: 123,
// 	property2: true
// }
// object.property1

// const variabel = null
// variabel.property1