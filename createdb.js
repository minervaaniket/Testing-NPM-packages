const log=require('aniketlogger');
let dbdetails = new Map();
module.exports.createdbfun=function()
{
    const {getvalidationvalue}=require('./validate.js');
    const prompt = require('prompt-sync')({sigint: true});
    if(getvalidationvalue())
    {
        while(true)
        {
            console.log("\nEnter DB Info\n");
            var dbname = prompt('DB Name: ');
            if(!dbdetails.has(dbname))
            {
                break;
            }
            else
            {
                log.error("DB Name already exists, Try again with unique value.");
            }
        }
        var dbdescription = prompt('DB Description: ');
        log.info("DB created successfully");
        dbdetails.set(dbname,dbdescription);
        return dbdetails;
    }
    else
    {
        log.fatal("Sorry, You are \"Not Verified\". Please run \"npm start\" to Login and then run \"npm run createdb\".");
        return dbdetails;
    }
}