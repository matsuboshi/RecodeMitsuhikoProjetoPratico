const fetch = require('node-fetch');

module.exports = async function searchByRegion(region) {
  const response = await fetch(
    `https://restcountries.eu/rest/v2/region/${region}?fields=name;population;flag;region`
  );
  const json = await response.json();

  return json;
};
