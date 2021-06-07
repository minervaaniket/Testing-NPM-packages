const create=require('./createdb.js');
const {getvalidationvalue}=require('./validate.js');
const prompt = require('prompt-sync')({sigint: true});

module.exports.displaydbfun=function(dbdetails)
{
    console.log("\nDisplay db\n");
    if(getvalidationvalue())
    {
        dbdetails.forEach((values,keys) => {
            console.log("Database Name: "+keys+"\n")
            console.log("Database Description: "+values+"\n");        
        });
    }
    else
    {
        console.log("\nSorry, You are \"Not Verified\". Please run \"npm start\" to Login and then run \"npm run createdb\".\n");
    }
}