# Övningar: asynkron JavaScript

+ Syftet med övningarna är att träna på att skriva kod, snarare än att hitta exakt rätt lösning. Försök att arbeta med så många övningar som möjligt.
+ Det går att lösa de flesta uppgifter på flera sätt. Gå gärna tillbaka till tidigare uppgifter och se om du kan lösa dem på något annat sätt.
+ Innan du kör fast: diskutera din kod med klasskamrater på Discord, eller be Aizo förklara / ge ledtrådar.

Ett bra sätt att lära sig programmera är att:
1. försöka själv först
1. läsa någon annans kod
1. diskutera kod med någon annan


Skriv din kod i Visual Studio Code eller Replit.

---

1 Skriv färdigt koden, så att den hämtar data från ett API och visar den på webbsidan.

```html
<!-- HTML -->
<main>
    <section class="container">
        <h1> Fetcha data från API </h1>
        <button id="get-joke"> Show me something funny </button>
        <p class="output"></p>
    </section>
</main>
```
```js
// JavaScript - se upp! Det finns flera fel i koden
// Om du är tvungen att ta hjälp av Aizo, be om en ledtråd först, i stället för lösningen.
const baseUrl = 'https://api.chucknorris.io/jokes/random'
const output = document.querySelector('.output')
const button = dokyment.querySelector('#get-jokeee')
conswole.log('Kom ihåg att du kan använda console.log för felsökning!')

button.addEventListener(getJoke, 'click')

async function getJoke() {
    const result = await fetch(baseUrl)
    const joke = result.value
    output.innerText = joke
}
```

---

2 Skapa konto på [API Ninjas](https://api-ninjas.com/). Leta upp "Chuck Norris API". Skriv om koden i uppgift 1 så att den använder API Ninja-versionen i stället. (Varning: kodexemplet för JavaScript använder jQuery, som är en gammal teknik. Du ska använda `fetch` i stället.)
```js
// Du måste skicka med API-nyckeln för att det ska fungera
const settings = {
    method: 'GET',
    headers: {
        'X-Api-Key': 'din-api-nyckel-från-api-ninjas'
    },
    contentType: 'applicatin/json'
}
fetch(url, settings)
```
---

3 Använd API Ninjas "City" för att hämta och visa information om Karlstad. Kom ihåg: när en URL slutar med `?name=x` kallas det *querystring*. Du kan skicka med andra värden än "name" och "x", för att söka efter en specifik stad.

4 Fortsätt med att lägga till ett sökfält, så användare kan söka efter information om vilken stad man vill.

---

5 Bygg en webbsida som hämtar och visar information om filosofer, med hjälp av "Historical figures API".

---
6 Bygg en webbsida som hämtar och visar information om några länder med under en miljon invånare. Använd API Ninjas "Country".

---
7 Förbättra sidan, så att den dessutom visar information om städer i de aktuella länderna. Använd API Ninjas "Country".

Tips! Landsobjekt innehåller ISO-koden för landet, du kan använda den för att söka i "City" API.
```js
country.iso2  // 'se', 'no', 'us', osv.
```

---

8 Fortsätt utforska olika API. Till exempel kan Geocoding API ta fram latitud och longitud för städer.

