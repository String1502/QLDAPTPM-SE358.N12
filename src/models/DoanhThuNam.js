const mongoose = require('mongoose');
const Schema = mongoose.Schema;
////
const DoanhThuNam = new Schema(
    {
        Nam: { type: String, maxLength: 255 },
        DoanhThu: { type: String, maxLength: 255 },
        CongNo: { type: String, maxLength: 255 },
    },
    {
        timestamps: true,
    },
);

module.exports = mongoose.model('DoanhThuNam', DoanhThuNam);
