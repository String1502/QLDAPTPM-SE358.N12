const mongoose = require('mongoose');
const Schema = mongoose.Schema;
////
const ChuongTrinhHoc = new Schema(
    {
        MaCTH: mongoose.ObjectId,
        TenCTH: { type: String, maxLength: 255 },
        TrangThai: { type: String, maxLength: 255 },
    },
    {
        timestamps: true,
    },
);

module.exports = mongoose.model('ChuongTrinhHoc', ChuongTrinhHoc);
