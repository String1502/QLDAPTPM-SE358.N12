const engine = require('express-handlebars');

let configViewEngine = (app) => {
    app.engine('handlebars', engine.engine({}));
    app.set('view engine', 'handlebars');
    app.set('views', './src/resources/views');
};

export default configViewEngine;
