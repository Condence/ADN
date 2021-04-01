const { Schema, model, ObjectId } = require('mongoose');

module.exports = model('adn', Schema(
    {
        obj: { type: Object }, 
        mutation: { type: Boolean }, 

    },
    {
        timestamps: true
    }
), 'adns');