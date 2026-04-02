const router = require('express').Router();
const c = require('../controllers/bookController.js');
const { validateBook } = require('../middleware/validations.js');

router.get('/', c.getBooks);
router.post('/', validateBook, c.addBook);
router.put('/:id', c.updateBook);
router.delete('/:id', c.deleteBook);
router.get('/search', c.searchBook);

module.exports = router;