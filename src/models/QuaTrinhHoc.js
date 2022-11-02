const mongoose = require('mongoose');
const Schema = mongoose.Schema;
////
const QuaTrinhHoc = new Schema(
    {
        MaQuaTrinhHoc: { type: String, maxLength: 255 },
        MaHocVien: { type: String, maxLength: 255 },
        MaLop: { type: String, maxLength: 255 },
        SoBuoiVangHoc: { type: String, maxLength: 255 },
        NgayGhiDanhVaoLop: { type: String, maxLength: 255 },
        NgayKetThuc: { type: String, maxLength: 255 },
        TrangThai: { type: String, maxLength: 255 },
    },
    {
        timestamps: true,
    },
);

module.exports = mongoose.model('QuaTrinhHoc', QuaTrinhHoc);
