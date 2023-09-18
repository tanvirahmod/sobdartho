const express = require('express')
const router = express.Router()
const db = require("./../db/table_data")


// English to Bengali Homepage sobdartho.com/dictionary/
router.get('/', (req, res) => {
        res.render('calculator/calculator')
})
    

router.get('/addition', (req, res) => {
    res.render('calculator/addition')
})


router.get('/addition16', (req, res) => {
    res.render('calculator/addition16')
})


router.get('/substraction', (req, res) => {
    res.render('calculator/sub')
})


router.get('/substraction16', (req, res) => {
    res.render('calculator/sub16')
})


module.exports = router