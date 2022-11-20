const mongoose = require('mongoose');
const Schema = mongoose.Schema;
////
const ThongTinTiemNang = new Schema(
    {
        MaTTTN: { type: OjectId },
        HoTen: { type: String, maxLength: 255 },
        DiaChi: { type: String, maxLength: 255 },
        SDT: { type: String, maxLength: 11 },
        ThGianRanh: { type: String, maxLength: 255 },
        MaLopMuonHoc: { type: String, maxLength: 255 },
        NgayTiepNhanTTTN: { type: Date },
    },
    {
        timestamps: true,
    },
);

module.exports = mongoose.model('ThongTinTiemNang', ThongTinTiemNang);
