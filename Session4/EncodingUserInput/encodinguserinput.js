
const request = require('request');
const yargs = require('yargs');

var argv = yargs.
    options({
            a:{
                alias:'address',
                describe:'Address to fetch wheather for',
                demand:true,
                string:true
            }
        }
    ).help()
    .alias('help','h')
    .argv;

 const encodedAddress = encodeURI(argv.a);

 console.log(`Encoded Address: ${encodedAddress}`);

request({
    url:`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=AIzaSyAyBmqGjT8IVh2Pc9FkaVYLuXVaLEGOkWo`,
    json:true},(error,response,body)=>{
    console.log(`Formatted address: ${body.results[0].formatted_address}`);
    console.log(`Lattitude : ${body.results[0].geometry.location.lat}`);
    console.log(`Longitude : ${body.results[0].geometry.location.lng}`);
})