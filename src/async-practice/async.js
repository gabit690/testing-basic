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

const getEvolutionChain = async () => {
  console.log("EVOLUTION CHAIN USING ASYNC FUNCTIONS\n");
  for (let index = 0; index < evolutionChain.length; index++) {
    const response1 = await axios(`${digiApiUrl}${evolutionChain[index]}`);
    describeDigimon(response1.data, index);
  }
}

getEvolutionChain();
