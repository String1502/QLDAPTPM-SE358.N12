const mongoose = require('mongoose');
const Schema = mongoose.Schema;
////
const DoanhThuThang = new Schema(
    {
        MaDoanhThuThang: { type: String, maxLength: 255 },
        Nam: { type: String, maxLength: 255 },
        DoanhThu: { type: String, maxLength: 255 },
        CongNo: { type: String, maxLength: 255 },
    },
    {
        timestamps: true,
    },
);

module.exports = mongoose.model('DoanhThuThang', DoanhThuThang);
