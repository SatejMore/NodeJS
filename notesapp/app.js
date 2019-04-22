const notes = require('./notes/notes');
const yargs = require('yargs');
const chalk = require('chalk');

yargs.version('1.1.0');

//Add a note
yargs.command({
    command:'add',
    describe:'Add a new note',
    builder:{
        title:{
            describe:'Title of the note',
            type:String,
            demandOption:true
        },
        body:{
            describe:'Body of the note',
            demandOption: true,
            type:String
        }
    },
    handler:(argv)=>{
        notes.addNote(argv.title,argv.body);
    }
});

//Remove a note
yargs.command({
    command: 'remove',
    describe: 'Remove existing note from db',
    builder:{
        title:{
            describe: 'Title of the note',
            demandOption:true,
            type:String
        }
    },
    handler:(yargs)=>{
        notes.removeNote(yargs.title);
    }
});

//Read a note
yargs.command({
    command:'read',
    describe:'Read a note from db',
    builder:{
        title:{
            describe: 'Title of the note',
            demandOption: true,
            type:String
        }
    },
    handler:(yargs)=>{
        notes.readNote(yargs.title);
    }
});

//List all notes from db
yargs.command({
    command:'list',
    describe:'List all notes from db',
    handler:()=>{
        notes.listNotes();
    }
});

yargs.parse();