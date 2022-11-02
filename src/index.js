const express = require('express');
import bodyParser from 'body-parser'
import configViewEngine from './config/viewEngine';
import initWebRoutes from './routes/index';
import { connectDB } from './config/connectDB'
const methodOverride = require('method-override');
require('dotenv').config();

const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

configViewEngine(app)

initWebRoutes(app)

app.use(express.static('./src/pulic'));

app.use(methodOverride('_method'));

connectDB()

const port = process.env.PORT || 8081;
app.listen(port, () => {
    console.log('Server chay o port: ' + port);
});
