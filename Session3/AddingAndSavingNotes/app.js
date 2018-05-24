
const yargs = require('yargs');

var notes= require('./notes.js');
var argv = yargs.argv;

var command = argv._[0];
console.log(`Command: ${argv._[0]}`);

if(command === 'add'){
    notes.addNote(argv.title,argv.body);
}