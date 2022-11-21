const mongoose = require('mongoose');
const Schema = mongoose.Schema;
////
const LoaiCuocThi = new Schema(
    {
        MaLoaiCT: mongoose.ObjectId,
        TenLoaiCT: { type: String, maxLength: 255 },
        TrangThai: { type: String, maxLength: 255 },
    },
    {
        timestamps: true,
    },
);

module.exports = mongoose.model('LoaiCuocThi', LoaiCuocThi);
