const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express();
const port = 80;

// EXPRESS SPECIFIC STUFF
app.use('/static', express.static('static')) // For serving static files
app.use(express.urlencoded())

// PUG SPECIFIC STUFF
app.set('view engine', 'pug') // Set the template engine as pug
app.set('views', path.join(__dirname, 'public')) // Set the views directory
 
app.get('/', (req, res) => {
    const params = ""
    res.status(200).render('index.pug', params);
})
app.get('/facaulty', function (req, res) {
    const params = ""
    res.status(200).render('fecaulty.pug', params);
    // res.sendFile(path.join(__dirname, '/public/fecaulty.html'));
});
app.get('/study-material', function (req, res) {
    const params = ""
    res.status(200).render('IT&Security.pug', params);
    // res.sendFile(path.join(__dirname, '/public/IT&Security.html'));
});
app.get('/vocational', function (req, res) {
    const params = ""
    res.status(200).render('vocational.pug', params);
    // res.sendFile(path.join(__dirname, '/public/vocational.html'));
});
app.get('/contact-us', function (req, res) {
    const params = ""
    res.status(200).render('contact.pug', params);
    // res.sendFile(path.join(__dirname, '/public/contact.html'));
});
app.get('/about-vocational', function (req, res) {
    const params = ""
    res.status(200).render('about-vocational.pug', params);
    // res.sendFile(path.join(__dirname, '/public/about-vocational.html'));
});
app.get('/IT-study-material', function (req, res) {
    const params = ""
    res.status(200).render('IT-study-material.pug', params);
    // res.sendFile(path.join(__dirname, '/public/IT-study-material.html'));
});
app.get('/security-study-material', function (req, res) {
    const params = ""
    res.status(200).render('Security-study-material.pug', params);
    // res.sendFile(path.join(__dirname, '/public/Security-study-material.html'));
});
app.use((req, res) => {
    const params = ""
    res.status(404);
    res.send(`<h2>Error 404: Resource not found</h2>`)
})
// START THE SERVER
app.listen(port, () => {
    console.log(`The application started successfully on port ${port}`);
});
