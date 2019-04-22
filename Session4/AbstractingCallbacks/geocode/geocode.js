const request = require('request');

var formattedAdress = (address,callback) =>{

    request(
        {
            url:`https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=AIzaSyAyBmqGjT8IVh2Pc9FkaVYLuXVaLEGOkWo`,
            json:true
        },(error,response,body)=>{
            if(error){
                callback("Unable to connect to google services");
            }else if(body.status === "ZERO_RESULTS")
            {
                callback("Could not find any information for provided address field");
            }else if(body.status === "OK"){
                var formattedAddr = {
                    formatted_Address: body.results[0].formatted_address,
                    latitude: body.results[0].geometry.location.lat,
                    longitude: body.results[0].geometry.location.lng
                }
                callback(undefined,formattedAddr);
            }
        }
    )
}

module.exports = {
    formattedAdress
}