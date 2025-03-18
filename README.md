# 🌎 LATAM Countries JSON
This project contains detailed information about **Latin American countries**, including data about their **capital cities, currencies, languages, GDP, population and flag**. The data is organized in a **JSON file** and can be used across various platforms, such as **web applications, Google Sheets, or directly via HTTP requests**.

**🔗 Access the code:** [GitHub - Tania Agredo: LATAM Countries JSON](https://github.com/taniagredo/latam-countries-json)

## Data Source
The data of Latin American countries has been collected from various reliable sources, including **government statistics, international banks, and updated economic reports**. Below are the links to the main sources:
- [Banco Mundial](https://www.worldbank.org/ext/en/home): For economic data such as GDP, population, and growth rates.
- [Instituto Nacional de Estadística y Geografía (INEGI)](https://www.inegi.org.mx/): For population data of Latin American countries.
- [CIA World Factbook](https://www.cia.gov/the-world-factbook/): For information on capitals, currencies, and other general details.
- [Wikipedia - Lista de países de Latinoamérica](https://es.wikipedia.org/wiki/Anexo:Pa%C3%ADses_de_Am%C3%A9rica_Latina): For additional information on the countries' cultural and historical characteristics.

## Main Features
- **Comprehensive data** of Latin American countries.
- Includes fields like: ***Country Name, Capital City, Currency (with acronym), Language(s), GDP, Population, Flag***.
- **Multi-language support in Spanish/English** *(available when using the Node.js server)*.
- **Filtering options by GDP, population, and search by country name** *(available when using the Node.js server)*.
- Easy to integrate in **web, mobile, or academic projects**.
- **JSON formatted**, making it easy to parse and use in various environments.
- **Clean, structured, and human-readable data**.

## Preview
Here is a sample of how the `latam.json` file is structured:
```sh
[
  {
    "country": { "es": "Argentina", "en": "Argentina" },
    "capital": { "es": "Buenos Aires", "en": "Buenos Aires" },
    "currency": { "es": "Peso argentino", "en": "Argentine peso" },
    "currency_code": "ARS",
    "language": { "es": "Español", "en": "Spanish" },
    "gdp": { "es": "500.5 mil millones", "en": "500.5 billion" },
    "population": "45,195,777",
    "flag": "https://flagcdn.com/ar.svg"
  },
  {
    "country": { "es": "Belice", "en": "Belize" },
    "capital": { "es": "Belmopán", "en": "Belmopan" },
    "currency": { "es": "Dólar beliceño", "en": "Belize dollar" },
    "currency_code": "BZD",
    "language": { "es": "Inglés", "en": "English" },
    "gdp": { "es": "1.9 mil millones", "en": "1.9 billion" },
    "population": "397,621",
    "flag": "https://flagcdn.com/bz.svg"
  },
]
```
Here is a sample of how the project looks when running the local server and using the filtering and search functionalities:
<video src="assets/preview.webm" controls width="700">
  Your browser does not support the video tag.
</video>

**Local Server URL:**

```sh
http://localhost:3000/data`
```

**Functionalities shown in preview:**
- Filtering by **GDP** and **Population**.
- Searching for a **specific country**.
- Multilanguage support **(switching between available languages)**.

## Prerequisites
Before running the game, make sure you have:
- **Node.js** (recommended version: 16 or higher).
- To check if it's installed, run the following command in your terminal:
  
```sh
node -v
```

If not installed, download it from [Node.js](https://nodejs.org/).

## Install and Use
### Use in Node.js
You can set up a simple server using **Node.js** and **Express.js** to serve the JSON file. Follow these steps:

1. Clone the repository:
   
```sh
git clone https://github.com/taniagredo/latam-countries-json.git
cd latam-countries-json
```

2. Install dependencies:
   
```sh
npm install
```

3. Start the server:
   
```sh
node server.js
```
   
This will start a local server serving the `latam.json` file at:

```sh
http://localhost:3000/
```

### Use in JavaScript
You can load the `latam.json` file in your web application using an HTTP request, as shown below:

**With `XMLHttpRequest`:**

```sh
function loadJSON(callback) {
    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open("GET", "data/latam.json", true); // Cambia la ruta si es necesario
    xobj.onreadystatechange = function () {
        if (xobj.readyState == 4 && xobj.status == "200") {
            callback(xobj.responseText);
        }
    };
    xobj.send(null);
}

function init() {
    loadJSON(function (response) {
        var data = JSON.parse(response);
        console.log(data); // Aquí puedes trabajar con los datos
    });
}
```
**With `fetch`:**

```sh
fetch('https://raw.githubusercontent.com/tuusuario/tu-repo/master/data/latam.json')
    .then(response => response.json())
    .then(data => {
        console.log(data); // Aquí tienes los datos de los países
    })
    .catch(error => console.error('Error al cargar el JSON:', error));
```

### Use via HTTP Request
You can also access the data directly from the GitHub repository. Use the following URL to get the `latam.json` file:

```sh
https://raw.githubusercontent.com/taniagredo/latam-countries-json/main/data/latam.json
```

### Use in Google Sheets
To use the data in Google Sheets, you can import the JSON directly using the `ImportJSON` library:

1. Install the [ImportJSON](https://github.com/bradjasper/ImportJSON) library en Google Sheets.
2. Use the `ImportJSON` function to load the file:

```sh
=ImportJSON("https://raw.githubusercontent.com/taniagredo/latam-countries-json/main/data/latam.json")
```

## Build With
- [Node.js](https://nodejs.org/): To create the server that serves the JSON file and handles HTTP requests.
- [Express.js](https://expressjs.com/): Node.js framework used to handle routing and server setup.
- [JSON](https://www.json.org/json-en.html): Data format used for storage and transfer.
- [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript): To load, process, and display the data in web applications.
- [HTML5](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5): For structuring the user interface in web apps.
- [CSS3](https://developer.mozilla.org/en-US/docs/Web/CSS): For designing and styling the web interface.
- [Google Sheets](https://www.google.com/sheets/about/): For importing and manipulating the data in spreadsheets.

## Contributions
Contributions are welcome! To improve this project:

1. Fork the repository.
2. Create a new branch:

```sh
git checkout -b feature-nueva-funcionalidad
```
   
3. Make your changes and commit them:
   
```sh
git commit -m "Descripción del cambio"
git push origin feature-nueva-funcionalidad
```

4. Submit a Pull Request.

## License
This project is licensed under the [MIT License](https://opensource.org/licenses/MIT). See the [LICENSE](LICENSE) file for more details.
