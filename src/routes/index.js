import homeRouter from './home';
import hocvienRouter from './hocvien';

const route = (app) => {
    app.use('/hocvien', hocvienRouter);
    app.use('/', homeRouter);
};

module.exports = route;
