const mongoose = require('mongoose');
const Schema = mongoose.Schema;
////
const TrinhDo = new Schema(
    {
        MaTrinhDo: { type: String, maxLength: 255 },
        TenTrinhDo: { type: String, maxLength: 255 },
        MocDiem: { type: String, maxLength: 255 },
        MaCTH: { type: String, maxLength: 255 },
        TrangThai: { type: String, maxLength: 255 },
    },
    {
        timestamps: true,
    },
);

module.exports = mongoose.model('TrinhDo', TrinhDo);
