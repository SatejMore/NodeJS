
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


var removeNote =(title)=>{
  var notes = fetchNotesData();
  var filteredNotes = notes.filter((note)=>note.title !== title);
  saveNotesData(filteredNotes);
  return notes.length!==filteredNotes.length;
};


var readNote = (title)=>{
   var notes = fetchNotesData();
   var filteredNotes = notes.filter((note)=>note.title === title);
   return filteredNotes[0];
};

var logNote=(noteData)=>{
    console.log('--');
    console.log(`Title: ${noteData.title}`);
    console.log(`Body: ${noteData.body}`);
};

module.exports={
 addNote,
 removeNote,
 readNote,
 logNote
};