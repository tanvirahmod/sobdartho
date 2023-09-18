const express = require('express')
const router = express.Router()
const db = require("./../db/table_data")


// English to Bengali Homepage sobdartho.com/dictionary/
router.get('/', (req, res) => {
    let queryparm = req.query.query
    if (queryparm) {
       return res.redirect(`/dictionary/${queryparm.replace(/\s+$/, '').replace(/ /g, '-').toLowerCase()}`);
    }
    res.render('dictionary/en2bn_home')
    })

// pagination page
router.get('/pagination', (req, res) => {
    res.render('dictionary/pagination')
})


// Dictionary Results page
router.get('/:input', async(req, res) => {
    let qu = req.query.query
    if (qu) {
        return res.redirect(`/dictionary/${qu.replace(/\s+$/, '').replace(/ /g, '-').toLowerCase()}`);
    }
    const eng2bn = await db.getOne(req.params.input);
    if (eng2bn) {
        res.render('dictionary/dictionary',{word:req.params.input, info: eng2bn})
    } else {
        return res.redirect(`not-found/404`);
    }
    
    // res.status(200).json({eng2bn})
})




// not found 404 page
router.get('/not-found/404', (req, res) => {
    let queryparm = req.query.query
    if (queryparm) {
       return res.redirect(`/dictionary/${queryparm.replace(/\s+$/, '').replace(/ /g, '-').toLowerCase()}`);
    }
    res.render('dictionary/not_found')
    })


module.exports = router