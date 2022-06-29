const axios = require('axios');

const describeDigimon = (data, index = 0) => {
  console.log(`${'>'.repeat(index + 1)} ${data.name} (${data.images[0].href})`);
}

const digiApiUrl = "https://www.digi-api.com/api/v1/digimon/";

const evolutionChain = [
  "botamon", 
  "koromon", 
  "agumon",
  "greymon",
  "metal greymon",
  "war greymon"
];

console.log("EVOLUTION CHAIN USING PROMISES\n");

axios(`${digiApiUrl}${evolutionChain[0]}`)
  .then(response => {
    describeDigimon(response.data, 0);
    return axios(`${digiApiUrl}${evolutionChain[1]}`);
  })
  .then(response => {
    describeDigimon(response.data, 1);
    return axios(`${digiApiUrl}${evolutionChain[2]}`);
  })
  .then(response => {
    describeDigimon(response.data, 2);
    return axios(`${digiApiUrl}${evolutionChain[3]}`);
  })
  .then(response => {
    describeDigimon(response.data, 3);
    return axios(`${digiApiUrl}${evolutionChain[4]}`);
  })
  .then(response => {
    describeDigimon(response.data, 4);
    return axios(`${digiApiUrl}${evolutionChain[5]}`);
  })
  .then(response => describeDigimon(response.data, 5))
  .catch((err) => console.error(err));
  