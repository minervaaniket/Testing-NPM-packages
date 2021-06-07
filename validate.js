var check=false;
module.exports.verified=function(id,password)
{
    if(id==="abc" && password==="abc")
    {
        check=1;
        return true;
    }
        check=0;
    return false;
}
module.exports.getvalidationvalue=()=>{return check};