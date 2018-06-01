const yargs = require('yargs');

var geocode = require('./geocode/geocode.js');

var argv = yargs.option({
        a:{
            alias: 'address',
            describe: 'Address for which location info need to find',
            demand: true,
            string:true
        }
    }).help()
    .alias('help','h')
    .argv;


var address = encodeURIComponent(argv.a);

geocode.formattedAdress(address,(error,results)=>{
    if(error)
    {
        console.log(error);
    }else{
        console.log(JSON.stringify(results));
    }
})