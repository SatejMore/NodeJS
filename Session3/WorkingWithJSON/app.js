
const fs = require('fs');

var sampleObject = {
    title : "Secret",
    body : "This is secret"
};

var sampleObjectString = JSON.stringify(sampleObject);

fs.writeFileSync("sample.json",sampleObjectString);

// console.log(typeof sampleObjectString);
// console.log(sampleObjectString);

//var jsonString = '{"title":"Secret","body":"This is secret"}';

var jsonString = fs.readFileSync("sample.json");

var jsonObject = JSON.parse(jsonString);
// console.log(typeof jsonObject);
console.log(jsonObject);
console.log(jsonObject.title);