var express = require('express');
var router = express.Router();
const accountController = require('../controllers/account-controller');

/* GET accounts listing. */
router.get('/', async function(req, res, next) {
  await accountController.getAccounts(req, res);
});

router.get('/create', async function(req, res, next) {
  await accountController.createAccount(req, res);
});

router.post('/store', async function(req, res, next) {
  await accountController.storeAccount(req, res);
});

module.exports = router;
