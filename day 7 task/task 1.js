// Fetching country data from the API
fetch('https://restcountries.com/v3.1/all')
  .then(response => response.json())
  .then(data => {
    // Problem 1: Getting countries from Asia using Filter
    const asiaCountries = [];
    for (const country of data) {
      if (country.region === 'Asia') {
        asiaCountries.push(country.name.common);
      }
    }
    console.log('Asia Countries:', asiaCountries);

    // Problem 2: Getting countries with small population using Filter
    const smallPopulationCountries = [];
    for (const country of data) {
      if (country.population < 200000) {
        smallPopulationCountries.push(country.name.common);
      }
    }
    console.log('Countries with Population < 2 lakhs:', smallPopulationCountries);

    // Problem 3: Printing name, capital, and flag using forEach
    for (const country of data) {
      console.log('Name:', country.name.common);
      console.log('Capital:', country.capital);
      console.log('Flag:', country.flags.svg);
    }

    // Problem 4: Calculating total population using reduce
    let totalPopulation = 0;
    for (const country of data) {
      totalPopulation += country.population;
    }
    console.log('Total Population:', totalPopulation);

    // Problem 5: Finding countries using US Dollars as currency
    const usDollarCountries = [];
    for (const country of data) {
      if (country.currencies && country.currencies.USD) {
        usDollarCountries.push(country.name.common);
      }
    }
    console.log('Countries using US Dollars:', usDollarCountries);
  })
  .catch(error => console.error('Error fetching data:', error));
