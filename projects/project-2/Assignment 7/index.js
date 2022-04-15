// SECTION 1: VARIABLES
// Our API Key for Airtable
const airtableApiKey = "key0zgkz38dpB9LQp";

// URL of Where our Data is Located
const tableUrl = "https://api.airtable.com/v0/apphYBbLI307cYmgm/Table%201?";

// URL with API Key Authentication
const authenticatedUrl = tableUrl + "?api_key=" + airtableApiKey;

// SECTION 2: DOM References 
const bodyElement = document.querySelector('body')
const applicationElement = document.querySelector('#application')
const fortitudeElement = document.querySelector('#fortitude')
const typeElement = document.querySelector('#type')
const gardenElement = document.querySelector('#garden')
const spyElement = document.querySelector('#spy')

// Get a 'Promise' Representing the Data that Will be Returned
fetch(authenticatedUrl)
  // When 'Promise' is 'Resolved', get the JSON data
  .then((res) => res.json())
  // Use the JSON Data
  .then((data) => {
    const words = data.records;
    const fortitudes = words.filter((word) => {
        return word.fields.Type === 'fortitude'
    })
    // Filter for Word Types 
    const gardens = words.filter((word) => {
        return word.fields.Type === 'garden'
    })
    const types = words.filter((word) => {
        return word.fields.Type === 'type'
    })    
    const spys = words.filter((word) => {
        return word.fields.Type === 'spy'
    })
    // Set Values onto HTML Elements 
    fortitudeElement.innerHTML = fortitudes[Math.floor(Math.random()*fortitudes.length)].fields.Copy
    typeElement.innerHTML = types[Math.floor(Math.random()*types.length)].fields.Copy
    gardenElement.innerHTML = gardens[Math.floor(Math.random()*gardens.length)].fields.Copy
    spyElement.innerHTML = spys[Math.floor(Math.random()*spys.length)].fields.Copy
    applicationElement.classList.add('loaded')
  })
  .catch((error) => {
    console.log(error);
  });