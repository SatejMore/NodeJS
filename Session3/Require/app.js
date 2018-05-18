console.log("Starting app.js");

const fs = require('fs');
const os = require('os');

var user = os.userInfo();

fs.appendFile('appended.txt',`Hello ${user.username}!`,function(err){
  if(err)
  {
    console.log("Failed to append the text in file.");
  }
});
