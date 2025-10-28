const express = require('express')
const app = express()
const port = 3000

// set template engine
app.set('view engine', 'pug');

app.use('/css', express.static(`${__dirname}/css`));
app.use('/assets', express.static(`${__dirname}/assets`));
app.use('/js', express.static(`${__dirname}/js`));

app.get('/', (req, res) => {
    res.render('index')
})

app.get('/reality', (req, res) => {
    res.render('reality', { active: "active", realityStone: "reality-stone", color: "crimson" })
})

app.get('/soul', (req, res) => {
    res.render('soul', { active: "active", soulStone: "soul-stone", color: "orange" })
})

app.get('/universe', (req, res) => {
    res.render('universe')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
