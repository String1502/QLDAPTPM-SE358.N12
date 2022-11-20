const mongoose = require('mongoose');

async function connectDB() {
    try {
        await mongoose.connect(
            'mongodb+srv://trungtamanhngu:123123123@cluster0.tgvtke9.mongodb.net/AB?retryWrites=true&w=majority',
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            },
        );
        console.log('connect DB success');
    } catch (error) {
        console.log('connect DB fail');
    }
}

module.exports = { connectDB };
