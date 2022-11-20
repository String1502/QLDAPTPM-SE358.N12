import homeRouter from './home';
import HocVienRouter from './hocvien';

const route = (app) => {
    app.use('/student', HocVienRouter);
    app.use('/', homeRouter);
};

module.exports = route;
