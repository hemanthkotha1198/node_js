var  fs =require('fs');
var path = require('path');
var directory=process.argv[2];
var extact ='.'+process.argv[3];
fs.readdir(directory,function(err,files){
    if(err){
        console.log(err);
    }
    files.forEach(function(file){
        if([path.extname(file)==extact]){
            console.log(file);
        }
    })
})