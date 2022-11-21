const mongoose = require('mongoose');
const Schema = mongoose.Schema;
////
const GiangVien = new Schema(
    {
        MaGiangVien: mongoose.ObjectId,
        MaTrinhDo: { type: String, maxLength: 255 },
        TenGiangVien: { type: String, maxLength: 255 },
        DiaChi: { type: String, maxLength: 255 },
        SDT: { type: String, maxLength: 255 },
        TrangThai: { type: String, maxLength: 255 },
    },
    {
        timestamps: true,
    },
);

module.exports = mongoose.model('GiangVien', GiangVien);
