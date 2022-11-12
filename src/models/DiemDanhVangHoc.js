const mongoose = require('mongoose');
const Schema = mongoose.Schema;
////
const DiemDanhVangHoc = new Schema(
    {
        MaDiemDanh: { type: String, maxLength: 255 },
        MaQuaTrinhHoc: { type: String, maxLength: 255 },
        NgayVangHoc: { type: String, maxLength: 255 },
        NgayVangHoc: { type: String, maxLength: 255 },
        NgayVangHoc: { type: String, maxLength: 255 },
        NgayVangHoc: { type: String, maxLength: 255 },
    },
    {
        timestamps: true,
    },
);

module.exports = mongoose.model('DiemDanhVangHoc', DiemDanhVangHoc);
