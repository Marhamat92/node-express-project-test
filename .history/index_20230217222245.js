const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('<h1>This is Index Page</h1>')

})


const port = 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})