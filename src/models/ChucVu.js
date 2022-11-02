const mongoose = require('mongoose');
const Schema = mongoose.Schema;
////
const ChucVu = new Schema(
    {
        MaChucVu: { type: String, maxLength: 255 },
        TenChucVu: { type: String, maxLength: 255 },
    },
    {
        timestamps: true,
    },
);

module.exports = mongoose.model('ChucVu', ChucVu);
