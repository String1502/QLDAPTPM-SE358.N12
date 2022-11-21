const mongoose = require('mongoose');
const Schema = mongoose.Schema;
////
const HocVienCuocThi = new Schema(
    {
        MaHocVien_CuocThi: mongoose.ObjectId,
        MaHocVien: { type: String, maxLength: 255 },
        MaCuocThi: { type: String, maxLength: 255 },
        Diem: { type: int32 },
        TrangThai: { type: String, maxLength: 5 },
    },
    {
        timestamps: true,
    },
);

module.exports = mongoose.model('HocVienCuocThi', HocVienCuocThi);
