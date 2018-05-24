
const yargs = require('yargs');

var notes= require('./notes.js');
var argv = yargs.argv;

var command = argv._[0];
console.log(`Command: ${argv._[0]}`);

if(command === 'add'){
   var addedNote = notes.addNote(argv.title,argv.body);
   if(addedNote)
   {
        console.log('Note Added');
        console.log('--');
        console.log(`Title: ${addedNote.title}`);
        console.log(`Body: ${addedNote.body}`);
   }//end of if
   else{
       console.log("Note data already exist!!");
   }//end of else
}else if(command=='remove'){
    var isNoteRemoved = notes.removeNote(argv.title);
    var noteRemoveStatus = isNoteRemoved ? 'Note is removed':'Note not found'; 
    console.log(noteRemoveStatus);
}else{
    console.log("Command not found");
}
