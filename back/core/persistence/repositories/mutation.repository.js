

const { isMutant } = require('../../services/mutation');
const adnModel = require('../schemas/adn.schema');

async function postMutation(adnArray) {
    console.log(isMutant(adnArray.dna));
     
    try {
        let adnExists = await adnModel.exists({ obj: adnArray });  
        
        if(!adnExists){
            if(isMutant(adnArray.dna)){
                const newADN = new adnModel({ obj: adnArray, mutation: true});
                await newADN.save(); 
                return 200;
            } else { 
                const newADN = new adnModel({ obj: adnArray, mutation: false});
                await newADN.save(); 
                return 403;
            }  
            } else{
                return 200;
            }
    } catch (error) {
        return 403;
    } 
    
    
}
async function getListADN(){
    try {
        const adns = await adnModel.find({}, null, { sort: { createdAt: -1 } }).limit(10);;
        return adns;
    } catch (error) {
        return error.message;
    }
}
module.exports = {
    postMutation, 
    getListADN
}