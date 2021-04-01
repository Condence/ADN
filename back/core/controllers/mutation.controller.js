const { postMutation, getListADN } = require('../persistence/repositories/mutation.repository');
const { checkArray } = require('../../utils/validator'); 
const { getMessageByCode } = require('../../utils/messages');

function mutation(req, res) {
    const adnArray = req.body; 
    if (checkArray(adnArray.dna)) { 
        postMutation(adnArray).then(result => {
            res.status(result).json(getMessageByCode(result));
        }).catch(error => {
            res.status(403).json(getMessageByCode(403));
        })
    } else {
        res.status(403).json(getMessageByCode(403));
    }
}

 
function ListADN(req, res) { 
    getListADN().then(result => {
        res.status(200).json(result);
    }).catch(error => {
        res.status(403).json(getMessageByCode(403));
    })
  
}

 

module.exports = {
    mutation, 
    ListADN
}