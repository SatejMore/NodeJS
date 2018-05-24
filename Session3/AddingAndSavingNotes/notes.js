
const fs = require('fs');

var addNote = (title,body)=>{

    var notes = [];
    var noteData ={
        title,
        body
    };
    try {
       var notesData = fs.readFileSync('notedata.json');
       notes = JSON.parse(notesData);
    }catch (e){
        console.log(e);
    }

    var duplicateNotes = notes.filter((note)=>note.title === title);
    if(duplicateNotes.length === 0)
    {
        notes.push(noteData);
        fs.writeFileSync('notedata.json',JSON.stringify(notes));
    }
};

module.exports={
 addNote
};