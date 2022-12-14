const express = require('express');
const logger = require('morgan');
const mongoose = require('mongoose');
const compression = require('compression');

const PORT = process.env.PORT || 3001;
const MONGODB_URI =
  process.env.MONGODB_URI ||
  'mongodb+srv://joehenrickson:<Barnabas1005!>@cluster0.wznsf6a.mongodb.net/?retryWrites=true&w=majority';

const app = express();

app.use(logger('dev'));

app.use(compression());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
});

app.use(require('./routes/api.js'));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
