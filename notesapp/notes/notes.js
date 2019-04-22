const fs = require('fs');
const chalk = require('chalk');

const addNote = (title, body) => {
    const notes = loadNotes();
    const filteredNotes = notes.filter((note) => note.title === title);
    if (filteredNotes.length === 0) {
        notes.push({
            title: title,
            body: body
        });
        saveNotes(JSON.stringify(notes));
        console.log(chalk.inverse.green('Note added successfully'));
    } else {
        console.log(chalk.inverse.red('Note title already taken!'));
    }
};

const removeNote = (title) => {
    const notes = loadNotes();
    const filteredNotes = notes.filter(note => note.title !== title);
    if (notes.length > filteredNotes.length) {
        saveNotes(JSON.stringify(filteredNotes));
        console.log(chalk.inverse.green('Note removed successfully!!'));
    } else {
        console.log(chalk.inverse.red('No note found!!'));
    }
};

const readNote = (title) => {
    const notes = loadNotes();
    const requiredNote = notes.find(note=>note.title === title);
    if(requiredNote !== undefined){
        console.log(JSON.stringify(requiredNote));
    }else{
        console.log(chalk.inverse.red('No note found!!'));
    }
};

const listNotes = ()=>{
    const notes = loadNotes();
    console.log(JSON.stringify(notes));
}

const saveNotes = (notes) => {
    fs.writeFileSync('notes.json', notes);
}
const loadNotes = () => {
    try {
        const notes = fs.readFileSync('notes.json', 'utf-8');
        return JSON.parse(notes.toString());
    } catch (error) {
        return [];
    }
};

module.exports = {
    addNote,
    removeNote,
    readNote,
    listNotes
}