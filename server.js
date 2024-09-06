const express = require('express');
const app = express();
const port = 2001;

app.set("views", "templates");
app.set("view engine", "pug");

app.use(express.urlencoded({ extended: true }));
