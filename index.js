const {verified,getvalidationvalue}=require('./validate.js');
const {createdbfun}=require('./createdb.js');
const {displaydbfun}=require('./displaydb.js');
const prompt = require('prompt-sync')({sigint: true});
const log=require('aniketlogger');
module.exports.start=function()
{
    while(!getvalidationvalue())
    {                                                           
        const id = prompt('Login ID: ');
        const password = prompt('Password: ');
        if(verified(id,password))
        {
            log.info('\nLogin Successfull, Welcome\n');
            break;
        }
        else
        {
            log.warn("\nFailed, Please try again\n");
        }
    }
    var dbdetails=null;
    while(true)
    {
        log.info("Enter 1 to Create DB, Enter 2 to Display all DB, 3 to search DB and 0 to end process.\n")
        const menu =  prompt('Choose your option: ');
        if(menu==1)
        {
            dbdetails=createdbfun();
        }
        else if(menu==2)
        {
            if(dbdetails)
            {
                displaydbfun(dbdetails);
            }
            else
            {
                log.error("\nNo DB Found.\n");
            }
        }
        else if(menu==3)
        {
            if(!dbdetails)
            {
                log.fatal("\nNo Database exists, Please first create Database.\n")
            }
            else
            {
                const SearchedKey =  prompt('Enter Database Name to search: ');
                if(dbdetails && dbdetails.has(SearchedKey))
                {
                    log.info("\nDatabase Name: "+SearchedKey+"\n")
                    log.info("Database Description: "+dbdetails.get(SearchedKey)+"\n"); 
                }
                else
                {
                    log.error("\nNo database found with Database Name: \""+SearchedKey+"\"\n");
                }
            }
        }
        else if(menu==0)
        {
            break;
        }
        else
        {
            log.fatal("\nInvalid option\n");
        }
    }
}