const { Router } = require('express');
const router = Router(); 


const mutationController = require('../core/controllers/mutation.controller'); 
const statsController = require('../core/controllers/stats.controller'); 

// Mutation
router.post(`/mutation`, mutationController.mutation);
router.get(`/list`, mutationController.ListADN);

// Stats
router.get(`/stats`, statsController.Stats);

 
module.exports = router;