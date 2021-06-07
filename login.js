const {verified,getvalidationvalue}=require('./validate.js');
const {createdbfun}=require('./createdb.js');
const {displaydbfun}=require('./displaydb.js');
const prompt = require('prompt-sync')({sigint: true});
while(!getvalidationvalue())
{                                                           
    const id = prompt('Login ID: ');
    const password = prompt('Password: ');
    if(verified(id,password))
    {
        console.log('\nLogin Successfull, Welcome\n');
        break;
    }
    else
    {
        console.log("\nFailed, Please try again\n");
    }
}
var dbdetails=null;
while(true)
{
    console.log("Enter 1 to Create DB, Enter 2 to Display all DB, 3 to search DB and 0 to end process.\n")
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
            console.log("\nNo DB Found.\n")
        }
    }
    else if(menu==3)
    {
        if(!dbdetails)
        {
            console.log("\nNo Database exists, Please first create Database.\n")
        }
        else
        {
            const SearchedKey =  prompt('Enter Database Name to search: ');
            if(dbdetails && dbdetails.has(SearchedKey))
            {
                console.log("\nDatabase Name: "+SearchedKey+"\n")
                console.log("Database Description: "+dbdetails.get(SearchedKey)+"\n"); 
            }
            else
            {
                console.log("\nNo database found with Database Name: \""+SearchedKey+"\"\n");
            }
        }
    }
    else if(menu==0)
    {
        break;
    }
    else
    {
        console.log("\nInvalid option\n");
    }
}