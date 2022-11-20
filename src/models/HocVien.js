const mongoose = require('mongoose');
const Schema = mongoose.Schema;
////
const HocVien = new Schema(
    {
        MaHocVien: { type: OjectId },
        HoTen: { type: String, maxLength: 255 },
        DiaChi: { type: String, maxLength: 255 },
        SDT: { type: String, maxLength: 11 },
        MaTrinhDo: { type: String, maxLength: 5 },
        NgayTTHVCT: { type: Date },
        TrangThai: { type: String, maxLength: 255 },
    },
    {
        timestamps: true,
    },
);

module.exports = mongoose.model('HocVien', HocVien);
