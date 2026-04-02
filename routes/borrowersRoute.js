const router = require('express').Router();
const c = require('../controllers/borrowersContrroller');
const { validateBorrower } = require('../middleware/validations.js');

router.get('/', c.getAll);
router.post('/', validateBorrower, c.add);
router.put('/:id', c.update);
router.delete('/:id', c.delete);

module.exports = router;