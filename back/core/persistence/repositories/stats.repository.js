const adnModel = require('../schemas/adn.schema');

async function getStats() {
    try {
        const adns = await adnModel.find();
 
        let Mutations = 0;
        let noMutations = 0;
        adns.map(adn => { 
            if (adn.mutation) { 
                Mutations++;
            } else {
                noMutations++;
            }
        });
         return ({
            count_mutations: Mutations,
            count_no_mutation: noMutations,
            ratio: Mutations/noMutations
         });
    } catch (error) {
        
    }
}

module.exports = {
    getStats, 
}