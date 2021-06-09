const create=require('./createdb.js');
const log=require('aniketlogger');
const {getvalidationvalue}=require('./validate.js');
const prompt = require('prompt-sync')({sigint: true});

module.exports.displaydbfun=function(dbdetails)
{
    console.log("\nDisplay db\n");
    if(getvalidationvalue())
    {
        dbdetails.forEach((values,keys) => {
            log.info("Database Name: "+keys+"\n"+"Database Description: "+values);        
        });
    }
    else
    {
        log.fatal("Sorry, You are \"Not Verified\". Please run \"npm start\" to Login and then run \"npm run createdb\".");
    }
}