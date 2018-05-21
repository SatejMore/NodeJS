
console.log(process.argv)

var option = process.argv[2];

console.log(`command : ${option}`);

if(option === "add")
{
    console.log("Adding new note");
}else if(option === "list")
{
    console.log("Listing all notes");
}else if( option == "read")
{
    console.log("Fetching all notes")
}else if( option == "remove")
{
    console.log("Removing all notes");
}else{
    console.log("Command not found");
}