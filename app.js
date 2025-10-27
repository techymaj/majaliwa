const express = require('express')
const app = express()
const port = 3000

// set template engine
app.set('view engine', 'pug');


// when the browser issues a GET for /assets/style.css, fire up the /assets endpoint
// and look for the specific static files after /assets in the folder public
app.use('/css', express.static(`${__dirname}/css`));
app.use('/assets', express.static(`${__dirname}/assets`));
app.use('/js', express.static(`${__dirname}/js`));

app.get('/', (req, res) => {
  res.render('index')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
