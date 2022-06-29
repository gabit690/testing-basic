const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

const fetchApi = (url, callback) => {
  const request = new XMLHttpRequest();
  request.open("GET", url, true);
  request.onreadystatechange = () => {
    if(request.readyState === 4) {
      if(request.status === 200) {
        callback(null, JSON.parse(request.responseText));
      } else {
        callback(new Error(`Invalid url: ${url}`), null);
      }
    }
  };
  request.send();
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

// Callback Hell
fetchApi(`${digiApiUrl}${evolutionChain[0]}`, (error, data) => {

  if(error) return console.error(error);

  console.log("EVOLUTION CHAIN \n");

  console.log(`> ${data.name} (${data.images[0].href})`);

  fetchApi(`${digiApiUrl}${evolutionChain[1]}`, (error, data) => {

    if(error) return console.error(error);

    console.log(`>> ${data.name} (${data.images[0].href})`);

    fetchApi(`${digiApiUrl}${evolutionChain[2]}`, (error, data) => {

      if(error) return console.error(error);

      console.log(`>>> ${data.name} (${data.images[0].href})`);

      fetchApi(`${digiApiUrl}${evolutionChain[3]}`, (error, data) => {

        if(error) return console.error(error);

        console.log(`>>>> ${data.name} (${data.images[0].href})`);

        fetchApi(`${digiApiUrl}${evolutionChain[4]}`, (error, data) => {

          if(error) return console.error(error);

          console.log(`>>>>> ${data.name} (${data.images[0].href})`);

          fetchApi(`${digiApiUrl}${evolutionChain[5]}`, (error, data) => {

            if(error) return console.error(error);

            console.log(`>>>>>> ${data.name} (${data.images[0].href})`);
          });
        });
      });
    });
  });
});
