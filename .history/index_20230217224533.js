const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.status(200)
  res.send('<h1>This is Index Page</h1><br/><a href="/about">About</a><br/><a href="/contact">Contact</a>')

})

app.get('/about', (req, res) => {
  res.status(200)
  res.send('<h1>This is About Page</h1>')

})

app.get('/contact', (req, res) => {
  res.status(200)
  res.send('<h1>This is Contact Page</h1>')

})

app.get('*', (req, res) => {
  res.status(404)
  res.send('<h1>Page does not exist!</h1>')

})


const port = 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})