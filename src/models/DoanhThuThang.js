const mongoose = require('mongoose');
const Schema = mongoose.Schema;
////
const DoanhThuThang = new Schema(
    {
        MaDoanhThuThang: { type: OjectId, maxLength: 255 },
        Nam: { type: Int32 },
        DoanhThu: { type: Int64 },
        CongNo: { type: Int64 },
    },
    {
        timestamps: true,
    },
);

module.exports = mongoose.model('DoanhThuThang', DoanhThuThang);
