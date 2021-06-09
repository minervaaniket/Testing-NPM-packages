const prompt = require('prompt-sync')({sigint: true});
const colors = require('colors');
var current_time = new Date();
var date = ("0" + current_time.getDate()).slice(-2);
var month = ("0" + (current_time.getMonth() + 1)).slice(-2);
var year = current_time.getFullYear();
var hours = current_time.getHours();
var minutes = current_time.getMinutes();
var seconds = current_time.getSeconds();

function infofun(message)
{
    console.log(message.black.bgWhite);
    if(prompt('\nPress 1 to display Log Details: ')==1)
    {
        console.log(("\n\"Level\" : \"Info\", "+"\"Message\" : \""+message+"\", \"Logged At\" : "+current_time.toLocaleDateString()+" "+current_time.toLocaleTimeString()).black.bgWhite);
    }
}
function fatalfun(message)
{    
    console.log(message.bgRed);
    if(prompt('\nPress 1 to display Log Details: ')==1)
    {
        console.log(("\n\"Level\" : \"Fatal\", "+"\"Message\" : \""+message+"\", \"Logged At\" : "+current_time.toLocaleDateString()+" "+current_time.toLocaleTimeString()).bgRed);
    }
}
function warningfun(message)
{
    console.log(message.yellow);
    if(prompt('\nPress 1 to display Log Details: ')==1)
    {
        console.log(("\n\"Level\" : \"Warning\", "+"\"Message\" : \""+message+"\", \"Logged At\" : "+current_time.toLocaleDateString()+" "+current_time.toLocaleTimeString()).yellow);
    }
}
function errorfun(message)
{
    console.log(message.red);
    if(prompt('\nPress 1 to display Log Details: ')==1)
    {
        console.log(("\n\"Level\" : \"Error\", "+"\"Message\" : \""+message+"\", \"Logged At\" : "+current_time.toLocaleDateString()+" "+current_time.toLocaleTimeString()).red);
    }
}
module.exports=
{
        info : infofun,
        fatal : fatalfun,
        warn : warningfun,
        error : errorfun
}