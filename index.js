document.addEventListener('DOMContentLoaded', function () {
    const translations = {
        "es": {
            "headerTitle": "Países Latinoamericanos",
            "headerDescription": "Descubre información sobre los países de América Latina.",
            "filterLabel": "Filtrar por:",
            "selectFilter": "Selecciona un filtro",
            "search": "Buscar país:",
            "searchText": "Buscar país...",
            "footerText": "2025 Tania Agredo. Todos los derechos reservados.",
            "capital": "Capital",
            "currency": "Moneda",
            "language": "Idioma",
            "gdp": "PIB",
            "population": "Población",
        },
        "en": {
            "headerTitle": "Latin American Countries",
            "headerDescription": "Discover information about the countries in Latin America.",
            "filterLabel": "Filter by:",
            "selectFilter": "Select a filter",
            "search": "Search country:",
            "searchText": "Search country...",
            "footerText": "2025 Tania Agredo. All rights reserved.",
            "capital": "Capital",
            "currency": "Currency",
            "language": "Language",
            "gdp": "GDP",
            "population": "Population",
        }
    };

    const langSelect = document.getElementById('language');
    let currentLanguage = langSelect.value; // 🔥 Mueve esto arriba

    const filterSelect = document.getElementById('filter');
    const searchInput = document.getElementById('search');

    let countriesData = [];

    // Cambiar idioma
    document.getElementById('language').addEventListener('change', function (e) {
        const lang = e.target.value;
        changeLanguage(lang);
    });

    function changeLanguage(lang) {
        currentLanguage = lang;

        document.querySelectorAll('[data-translate]').forEach(function (elem) {
            const key = elem.getAttribute('data-translate');
            if (translations[lang] && translations[lang][key]) {
                elem.innerText = translations[lang][key];
            }
        });
    
        // Cambiar placeholders
        document.querySelectorAll('[data-translate-placeholder]').forEach(function (elem) {
            const key = elem.getAttribute('data-translate-placeholder');
            if (translations[lang] && translations[lang][key]) {
                elem.placeholder = translations[lang][key];
            }
        });

        renderCountries(countriesData); // Renderizar nuevamente con idioma correcto
    }

    // Fetch datos
    fetch('./data/latam.json')
        .then(response => response.json())
        .then(data => {
            countriesData = data;
            renderCountries(countriesData);
        })
        .catch(error => console.error('Error al cargar los datos:', error));

    // Función para convertir el PIB a número
    function convertGDP(value) {
        const number = parseFloat(value.replace(/[^0-9.-]+/g, ""));
        if (value.includes('billones')) {
            return number * 1000; // Convierte billones a millones (en inglés 'trillion' es 1000 billones)
        }
        if (value.includes('mil millones') || value.includes('millones')) {
            return number; // Si tiene "mil millones" o "millones", simplemente devuelve el número
        }
        return number;
    }

    function convertPopulation(population) {
        const number = population.replace(/\,/g, '');
        return parseInt(number, 10);
    }

    // Filtros PIB y población
    filterSelect.addEventListener('change', function () {
        const filterValue = filterSelect.value;
        let sortedCountries = [...countriesData];
    
        sortedCountries.sort((a, b) => {
            if (filterValue === 'gdp') {
                // Usamos `currentLanguage` para obtener el valor de PIB correcto en el idioma seleccionado
                const gdpA = convertGDP(a.gdp[currentLanguage]);
                const gdpB = convertGDP(b.gdp[currentLanguage]);
                return gdpB - gdpA; // Ordenar de mayor a menor PIB
            } else if (filterValue === 'population') {
                const popA = convertPopulation(a.population);
                const popB = convertPopulation(b.population);
                return popB - popA; // Ordenar de mayor a menor población
            }
            return 0;
        });
    
        renderCountries(sortedCountries);
    });

    // Buscar países
    searchInput.addEventListener('input', function () {
        const query = searchInput.value.toLowerCase();
        const filteredData = countriesData.filter(country => country.country[currentLanguage].toLowerCase().includes(query));
        renderCountries(filteredData);
    });

    // Renderizar países
    function renderCountries(countries) {
        const countryList = document.getElementById('countries-container');
        countryList.innerHTML = '';

        countries.forEach(country => {
            const countryDiv = document.createElement('div');
            countryDiv.classList.add('country-card');

            countryDiv.innerHTML = `
                <h2>${country.country[currentLanguage]}</h2>
                <p><strong>${translations[currentLanguage].capital}:</strong> ${country.capital[currentLanguage]}</p>
                <p><strong>${translations[currentLanguage].currency}:</strong> ${country.currency[currentLanguage]} (${country.currency_code})</p>
                <p><strong>${translations[currentLanguage].language}:</strong> ${country.language[currentLanguage]}</p>
                <p><strong>${translations[currentLanguage].gdp}:</strong> ${country.gdp[currentLanguage]}</p>
                <p><strong>${translations[currentLanguage].population}:</strong> ${country.population}</p>
                <img src="${country.flag}" alt="${country.country[currentLanguage]} flag" width="100">
            `;

            countryList.appendChild(countryDiv);
        });
    }

    // Inicializar idioma y renderizar
    changeLanguage(currentLanguage);
});