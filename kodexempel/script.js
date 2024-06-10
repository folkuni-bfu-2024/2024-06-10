console.log('Hello world')

// Plocka ut element ur DOM
// Skriv funktion som skickar request
// uppdatera med svaret när det kommer

const button = document.querySelector('#get-joke-button')
const display = document.querySelector('.display-joke')

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

button.addEventListener('click', getJokeFromApi)
