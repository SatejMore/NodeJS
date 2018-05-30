
const yargs = require('yargs');

var notes= require('./notes.js');

var titleOptions={
    alias:'t',
    describe:'Note title'
};

var bodyOptions={
    alias:'b',
    describe:'Body of note'
};

var argv = yargs.
           command('add','add a note',{
                title:titleOptions ,
                body:bodyOptions
           }).command('remove','Remove a note',{
                title:titleOptions
           }).command('read','Read a note',{
                title:titleOptions
           })
           .command('list','List all notes')
           .help().argv;

var command = argv._[0];
console.log(`Command: ${argv._[0]}`);

if(command === 'add'){
   var addedNote = notes.addNote(argv.title,argv.body);
   if(addedNote)
   {
        console.log('Note Added');
        notes.logNote(addedNote);
   }//end of if
   else{
       console.log("Note data already exist!!");
   }//end of else
}else if(command=='remove'){
    var isNoteRemoved = notes.removeNote(argv.title);
    var noteRemoveStatus = isNoteRemoved ? 'Note is removed':'Note not found'; 
    console.log(noteRemoveStatus);
}else if(command=='read'){
    var noteData = notes.readNote(argv.title);
    if(noteData)
    {
        console.log("Returned Note");
        notes.logNote(noteData);
    }
    else{
        console.log("Note data not found!!");
    }
}else if(command =='list'){
    var allNotesData = notes.getAllNotes();
    if(allNotesData){
    console.log(`Listed ${allNotesData.length} note(s).`);
    allNotesData.forEach(element => {
        notes.logNote(element);
    });
}else{
    console.log("No note data found!!");
}

}else{
    console.log("Command not found");
}
