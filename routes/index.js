const express = require('express');
const { readAndAppend } = require('../helpers/fsUtils');

const notesRouter = require('./notes');

const app = express();

app.use('/notes', notesRouter);

module.exports = app;