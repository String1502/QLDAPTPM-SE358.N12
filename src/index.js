const express = require('express');
import bodyParser from 'body-parser';
import configViewEngine from './config/viewEngine';
import initWebRoutes from './routes/index';
import { connectDB } from './config/connectDB';
const methodOverride = require('method-override');
require('dotenv').config();

const path = require('path');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

configViewEngine(app);

initWebRoutes(app);

app.use(express.static('./src/pulic'));
app.use(express.static('public'));
app.use(express.static(path.join(__dirname, 'public')));

app.use(methodOverride('_method'));

connectDB();

const port = process.env.PORT || 8081;
app.listen(port, () => {
    console.log('Server chay o port: ' + port);
});

app.get('/dashboardUI', (req, res) => {
    //Serves the body of the page aka "main.handlebars" to the container //aka "index.handlebars"
    res.render('dashboard', { layout: 'main' });
});
app.get('/student', (req, res) => {
    //Serves the body of the page aka "main.handlebars" to the container //aka "index.handlebars"
    res.render('student', { layout: 'main' });
});

app.get('/studentPO', (req, res) => {
    //Serves the body of the page aka "main.handlebars" to the container //aka "index.handlebars"
    res.render('studentPO', { layout: 'main' });
});
