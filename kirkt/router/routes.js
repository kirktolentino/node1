const express = require("express");
const router = express.Router();
const kirk_controller = require('../controller/Kirk_Controller');

router.get('/', kirk_controller.index);
router.get('/about', kirk_controller.about);
router.get('/contact', kirk_controller.contact);
router.get('/shop', kirk_controller.shop);
router.get('/account', kirk_controller.account);

module.exports = router;