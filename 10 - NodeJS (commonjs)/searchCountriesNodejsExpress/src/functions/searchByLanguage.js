const fetch = require('node-fetch');

module.exports = async function searchByLanguage(lang) {
  const response = await fetch(
    `https://restcountries.eu/rest/v2/lang/${lang}?fields=name;population;flag;languages`
  );
  const json = await response.json();

  return json;
};
