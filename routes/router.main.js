const path = require('path')
const express = require('express')
const router = express.Router()

const mainCtrl = require('../controllers/controller.main')

router
    .route('/')
    .get(mainCtrl.gets.home)

module.exports = router