const router = require('express').Router();
const c = require('../controllers/BProccessController');

router.post('/borrow', c.borrowBook);
router.put('/return/:id', c.returnBook);
router.get('/borrowed/:id', c.getBorrowed);
router.get('/overdue', c.getOverdue);

module.exports = router;