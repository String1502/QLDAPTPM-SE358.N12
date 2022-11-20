const mongoose = require('mongoose');
const Schema = mongoose.Schema;
////
const CuocThi = new Schema(
    {
        MaCuocThi: { type: OjectId },
        MaLoaiCT: { type: String, maxLength: 255 },
        NgayGioThi: { type: String, maxLength: 255 },
        ThoiGianThi: { type: Int32 },
        GiamThi: { type: String, maxLength: 255 },
        TrangThai: { type: String, maxLength: 255 },
    },
    {
        timestamps: true,
    },
);

module.exports = mongoose.model('CuocThi', CuocThi);
