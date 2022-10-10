
const router = require('express').Router();
const pokemonController = require('../controllers/pokemon');

router.get('/', pokemonController.list);
router.post('/add', pokemonController.save);
router.get('/delete/:id', pokemonController.delete);
router.get('/update/:id', pokemonController.edit);  
router.post('/edit/:id', pokemonController.update);

module.exports = router;