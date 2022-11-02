const mongoose = require('mongoose');
const Schema = mongoose.Schema;
////
const PhanQuyen = new Schema(
    {
        MaChucVu: { type: String, maxLength: 255 },
        MaQuyen: { type: String, maxLength: 255 },
    },
    {
        timestamps: true,
    },
);

module.exports = mongoose.model('PhanQuyen', PhanQuyen);
