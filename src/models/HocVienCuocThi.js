const mongoose = require('mongoose');
const Schema = mongoose.Schema;
////
const HocVienCuocThi = new Schema(
    {
        MaHocVien_CuocThi: { type: String, maxLength: 255 },
        MaHocVien: { type: String, maxLength: 255 },
        MaCuocThi: { type: String, maxLength: 255 },
        Diem: { type: String, maxLength: 11 },
        TrangThai: { type: String, maxLength: 5 },
    },
    {
        timestamps: true,
    },
);

module.exports = mongoose.model('HocVienCuocThi', HocVienCuocThi);
