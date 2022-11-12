const mongoose = require('mongoose');
const Schema = mongoose.Schema;
////
const ThamSo = new Schema(
    {
        TenThamSo: { type: String, maxLength: 255 },
        GiaTri: { type: String, maxLength: 255 },
    },
    {
        timestamps: true,
    },
);

module.exports = mongoose.model('ThamSo', ThamSo);
