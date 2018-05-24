var yargs = require('yargs');

var notes = require('./notes.js');

var argv = yargs.argv;
console.log(argv);
var command = argv._[0]
console.log("Command",command);


if(command === "add"){
  notes.addNote(argv.title,argv.body);
}else if(command === "read"){
  notes.getNote(argv.title);
}else if(command === "list"){
  notes.listAll();
}else if(command === "remove"){
  notes.removeNote(argv.title);
}else{
    console.log("Invalid Command");
}