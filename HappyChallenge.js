const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const Http = new XMLHttpRequest();
const urlGet = 'https://happyreturnsqatest.free.beeceptor.com/getProductVariants';
const urlPost = 'https://happyreturnsqatest.free.beeceptor.com/order';
let response, jsonObject;

// perform GET
Http.open("GET", urlGet);
Http.send();

// save the text
Http.onreadystatechange = (e) => {
    // console.log(Http.responseText);
    response = Http.responseText;
}

// parse json object
console.log(response);
jsonObject = JSON.parse(response);
console.log(jsonObject);

//Perform POST
Http.open("POST", urlPost);
Http.send(jsonObject);

