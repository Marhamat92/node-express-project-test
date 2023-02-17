const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('<h1>This is Index Page</h1>')
  res.send('<br/>')
  res.send('<a href="/about">About</a>')
  res.send('<br/>')
  res.send('<a href="/contact">Contact</a>')
})

app.get('/about', (req, res) => {
  res.send('<h1>This is About Page</h1>')

})

app.get('/contact', (req, res) => {
  res.send('<h1>This is Contact Page</h1>')

})


const port = 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})