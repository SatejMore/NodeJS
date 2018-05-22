var yargs = require('yargs');

var notes = require('./notes.js');

var argv = yargs.argv;

console.log(argv);

console.log("Command",argv._[0]);