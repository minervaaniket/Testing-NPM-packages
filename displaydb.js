const create=require('./createdb.js');
const {getvalidationvalue}=require('./validate.js');
const prompt = require('prompt-sync')({sigint: true});

module.exports.displaydbfun=function(dbdetails)
{
    log.info("\nDisplay db\n");
    if(getvalidationvalue())
    {
        dbdetails.forEach((values,keys) => {
            log.info("Database Name: "+keys+"\n")
            log.info("Database Description: "+values+"\n");        
        });
    }
    else
    {
        log.fatal("\nSorry, You are \"Not Verified\". Please run \"npm start\" to Login and then run \"npm run createdb\".\n");
    }
}