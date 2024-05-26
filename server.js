const express = require('express')
const dictionaryRouter = require('./routes/dictionary')
const bengali2bengali = require('./routes/bengali2bengali')
const bengali2english = require('./routes/bengali2english')
const calculator = require('./routes/calculator')
const app = express()



app.set('view engine','ejs')


app.use(express.static('public'));


app.use('/dictionary', dictionaryRouter)
app.use('/bengali-to-bengali', bengali2bengali)
app.use('/bengali-to-english', bengali2english)
app.use('/calculator',calculator)



app.get('/', (req, res) => {
    let queryparm = req.query.query
    if (queryparm) {
       return res.redirect(`/dictionary/${queryparm.replace(/ /g, '-').toLowerCase()}`);
    }
    res.render('index')
})
    



app.get('/privacy-policy', (req, res) => {
  res.render('otherPages/privacy_policy')
})

app.get('/terms-and-conditions', (req, res) => {
  res.render('otherPages/terms_and_conditions')
})

app.get('/disclaimer', (req, res) => {
  res.render('otherPages/disclaimer')
})

app.get('/contact', (req, res) => {
  res.render('otherPages/contact')
})



app.get('/sitemap.xml', async function(req, res, next){
    res.set('Content-Type', 'text/xml')
    res.sendFile(__dirname + '/public/sitemaps/sitemap.xml');
  })

app.get('/sitemap-eng2bn1.xml', async function(req, res, next){
    res.set('Content-Type', 'text/xml')
    res.sendFile(__dirname + '/public/sitemaps/en2bn1.xml');
})

app.get('/sitemap-eng2bn2.xml', async function(req, res, next){
  res.set('Content-Type', 'text/xml')
  res.sendFile(__dirname + '/public/sitemaps/en2bn2.xml');
})

app.get('/sitemap-eng2bn3.xml', async function(req, res, next){
  res.set('Content-Type', 'text/xml')
  res.sendFile(__dirname + '/public/sitemaps/en2bn3.xml');
})

app.get('/sitemap-eng2bn4.xml', async function(req, res, next){
  res.set('Content-Type', 'text/xml')
  res.sendFile(__dirname + '/public/sitemaps/en2bn4.xml');
})


  app.get('/sitemap-bn2bn1.xml', async function(req, res, next){
    res.set('Content-Type', 'text/xml')
    res.sendFile(__dirname + '/public/sitemaps/bn2bn1.xml');
  })

  app.get('/sitemap-bn2bn2.xml', async function(req, res, next){
    res.set('Content-Type', 'text/xml')
    res.sendFile(__dirname + '/public/sitemaps/bn2bn2.xml');
  })


  app.get('/sitemap-bn2en1.xml', async function(req, res, next){
    res.set('Content-Type', 'text/xml')
    res.sendFile(__dirname + '/public/sitemaps/bn2en1.xml');
  })

  app.get('/sitemap-bn2en2.xml', async function(req, res, next){
    res.set('Content-Type', 'text/xml')
    res.sendFile(__dirname + '/public/sitemaps/bn2en2.xml');
  })

  app.get('/sitemap-bn2en3.xml', async function(req, res, next){
    res.set('Content-Type', 'text/xml')
    res.sendFile(__dirname + '/public/sitemaps/bn2en3.xml');
  })

  app.get('/sitemap-bn2en4.xml', async function(req, res, next){
    res.set('Content-Type', 'text/xml')
    res.sendFile(__dirname + '/public/sitemaps/bn2en4.xml');
  })


app.use('/robots.txt', function (req, res, next) {
    res.type('text/plain')
    res.send("User-agent: *\nDisallow: /admin/\nDisallow: /login/\nDisallow: /logout/");
});


// app.use('/ads.txt', function (req, res, next) {
//     res.type('text/plain')
//     res.send("google.com, pub-4942404864764189, DIRECT, f08c47fec0942fa0");
// });


// 404 not found pages --- keen bottom of the page this section-------------
app.use(function(req, res, next) {
  let queryparm = req.query.query
  if (queryparm) {
     return res.redirect(`/dictionary/${queryparm}`);
  }
  res.status(404);
  // respond with html page
  if (req.accepts('html')) {
    res.render('dictionary/not_found', { url: req.url });
    return;
  }

});
app.listen(3002)