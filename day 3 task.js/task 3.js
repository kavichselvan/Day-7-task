var xhr = new XMLHttpRequest();
xhr.open("GET", "https://restcountries.com/v3.1/all"); 
xhr.responseType = "json";
xhr.send();

xhr.onload = function () {
  var responseObj = xhr.response;
  
  for (var i = 0; i < responseObj.length; i++) {
    var country = responseObj[i];
    var name = country.name.common;
    var region = country.region;
    var population = country.population;
    var subregion = country.subregion;

    console.log(`Name: ${name}`);
    console.log(`Region: ${region}`);
    console.log(`Population: ${population}`);
    console.log(`Sub-region: ${subregion}`);
    console.log("----------");
  }
};

