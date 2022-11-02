const mongoose = require('mongoose');

async function connectDB() {
    try {
        await mongoose.connect('mongodb://localhost:27017/trungtamav', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('connect DB success');
    } catch (error) {
        console.log('connect DB fail');
    }
}

module.exports = { connectDB };
