const router = require('express').Router();
const c = require('../controllers/BProccessController');

router.post('/borrow', c.borrowBook);
router.put('/return/:id', c.returnBook);
router.get('/borrowed/:id', c.getBorrowed);
router.get('/overdue', c.getOverdue);
router.get('/export/overdue', c.exportOverdueLastMonth);
router.get('/export/all', c.exportAllLastMonth);
router.get('/export/range', c.exportByDateRange);
router.get('/analytics', c.getAnalytics);

module.exports = router;