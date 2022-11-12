const mongoose = require('mongoose');
const Schema = mongoose.Schema;
////
const CuocThi = new Schema(
    {
        MaCuocThi: { type: String, maxLength: 255 },
        MaLoaiCT: { type: String, maxLength: 255 },
        NgayGioThi: { type: String, maxLength: 255 },
        ThoiGianThi: { type: String, maxLength: 11 },
        MaDeThi: { type: String, maxLength: 5 },
        GiamThi: { type: Date },
        TrangThai: { type: String, maxLength: 255 },
    },
    {
        timestamps: true,
    },
);

module.exports = mongoose.model('CuocThi', CuocThi);
