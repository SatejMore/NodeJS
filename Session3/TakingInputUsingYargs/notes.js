
var addNote = (title, description)=>{
  console.log(`Added note with title: ${title} and description: ${description}`);
};

var listAll = ()=>{
    console.log("Listed all notes");
};

var getNote = (title)=>{
    console.log(`Returned note with title: ${title}`);
};

var removeNote = (title)=>{
    console.log(`Removed note with title: ${title}`);
}

module.exports = {
    addNote,
    listAll,
    getNote,
    removeNote
};