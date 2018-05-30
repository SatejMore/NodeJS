/*Sample callback example

// var getUser = (id,callback)=>{
//     var user = {
//         id:id,
//         name:"Sanjay"
//     };

//     setTimeout(() => {
//         callback(user);
//     }, 3000);
// }


// getUser(101,(userObject)=>{
//     console.log(userObject);
// })

*/

const request = require('request');

request({
    url:"https://maps.googleapis.com/maps/api/geocode/json?address=1301%20lombard%20street%20philadelphia",
    json:true},(error,response,body)=>{
    console.log(JSON.stringify(body,undefined,2));
})