const mongoose = require('mongoose');
const Schema = mongoose.Schema;
////
const DoanhThuNam = new Schema(
    {
        Nam: { type: Int32 },
        DoanhThu: { type: Int64 },
        CongNo: { type: Int64 },
    },
    {
        timestamps: true,
    },
);

module.exports = mongoose.model('DoanhThuNam', DoanhThuNam);
