const express = require('express');
const app = express();
const port = 2001;

app.set("views", "templates");
app.set("view engine", "pug");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/resources", express.static("resources"));

// insert authentification here 

// get the main page
app.get("/", async (req, res) => {
    res.render("");
});

