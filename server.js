require('dotenv').config();

const app = require('./index');

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});

/*
const express = require('express');
const app = express();
const port = 3000;
app.get('/', (req, res) => {
  res.send('Hello Sajid again!!!');
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
*/
