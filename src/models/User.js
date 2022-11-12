const mongoose = require('mongoose');
const Schema = mongoose.Schema;
////
const User = new Schema(
    {
        MaUser: { type: String, maxLength: 255 },
        Email: { type: String, maxLength: 255 },
        MatKhau: { type: String, maxLength: 255 },
        CCCD: { type: String, maxLength: 255 },
        GioiTinh: { type: String, maxLength: 255 },
        NgaySinh: { type: String, maxLength: 255 },
        MaChucVu: { type: String, maxLength: 255 },
        HinhAnh: { type: String, maxLength: 255 },
        TrangThai: { type: String, maxLength: 255 },
    },
    {
        timestamps: true,
    },
);

module.exports = mongoose.model('User', User);
