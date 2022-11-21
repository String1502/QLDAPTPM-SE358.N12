const mongoose = require('mongoose');
const Schema = mongoose.Schema;
////
const DiemDanhVangHoc = new Schema(
    {
        MaDiemDanh: mongoose.ObjectId,
        MaQuaTrinhHoc: { type: String, maxLength: 255 },
        NgayVangHoc: { type: Date },
        CoPhep: { type: Boolean },
    },
    {
        timestamps: true,
    },
);

module.exports = mongoose.model('DiemDanhVangHoc', DiemDanhVangHoc);
