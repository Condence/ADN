const { getStats } = require('../persistence/repositories/stats.repository');
const { checkArray } = require('../../utils/validator'); 
const { getMessageByCode } = require('../../utils/messages');

function Stats(req, res) { 
    getStats().then(result => {
        res.status(200).json(result);
    }).catch(error => {
        res.status(403).json(getMessageByCode(403));
    })
    
}

 

module.exports = {
    Stats, 
}