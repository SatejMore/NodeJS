
const fs = require('fs');

var fetchNotesData=()=>{
    try {
        var notesData = fs.readFileSync('notedata.json');
        return JSON.parse(notesData);
     }catch (e){
         return [];
     }
};

var saveNotesData=(notes)=>{
    fs.writeFileSync('notedata.json',JSON.stringify(notes));
};

var addNote = (title,body)=>{

    var notes = fetchNotesData();
    var noteData ={
        title,
        body
    };
    
    var duplicateNotes = notes.filter((note)=>note.title === title);
    if(duplicateNotes.length === 0)
    {
        notes.push(noteData);
        saveNotesData(notes);
        return noteData;
    }
};

module.exports={
 addNote
};