var current_time = new Date();
var date = ("0" + current_time.getDate()).slice(-2);
var month = ("0" + (current_time.getMonth() + 1)).slice(-2);
var year = current_time.getFullYear();
var hours = current_time.getHours();
var minutes = current_time.getMinutes();
var seconds = current_time.getSeconds();

function infofun(message)
{
    console.log("\nLevel: Info, "+"Message: "+message+", Logged At: "+current_time.toLocaleDateString()+" "+current_time.toLocaleTimeString()+" Logged By "+console.trace());
}
function fatalfun(message)
{    
    console.log("\nLevel: Fatal, "+"Message: "+message+", Logged At: "+current_time.toLocaleDateString()+" "+current_time.toLocaleTimeString());
}
function warningfun(message)
{
    console.log("\nLevel: Warning, "+"Message: "+message+", Logged At: "+current_time.toLocaleDateString()+" "+current_time.toLocaleTimeString());
}
module.exports=
{
        info : infofun,
        fatal :  fatalfun,
        warning :  warningfun
}

/*
infofun - logfun(info, "hello this is info log",data)
fatalfun -
errrfun - 


logfun(level,message,data)---- mesage,data ka typ string hona chahiy -- if not stringify
print---level,message,data*/