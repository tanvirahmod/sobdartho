const express = require('express')
const router = express.Router()
const db = require("./../db/table_data")


// English to Bengali Homepage sobdartho.com/dictionary/
router.get('/', (req, res) => {
    let queryparm = req.query.query
    if (queryparm) {
       return res.redirect(`/bengali-to-english/${queryparm.replace(/\s+$/, '').replace(/ /g, '-')}`);
    }
    res.render('bengali2english/bn2en_home')
    })


// Dictionary Results page
router.get('/:input', async(req, res) => {
    let qu = req.query.query
    if (qu) {
        return res.redirect(`/bengali-to-english/${qu.replace(/\s+$/, '').replace(/ /g, '-')}`);
    }
    const bn2bn = await db.getOneB2E(req.params.input);
    if (bn2bn) {
        res.render('bengali2english/dictionaryb2e',{word:req.params.input, info: bn2bn})
    } else {
        return res.redirect(`not-found/404`);
    }
    // console.log(bn2bn[0].bn_word.slice(","))
    // res.status(200).json({eng2bn})
})



// not found 404 page
router.get('/not-found/404', (req, res) => {
    let queryparm = req.query.query
    if (queryparm) {
       return res.redirect(`/bengali-to-english/${queryparm.replace(/\s+$/, '').replace(/ /g, '-').toLowerCase()}`);
    }
    res.render('dictionary/not_found')
    })



module.exports = router