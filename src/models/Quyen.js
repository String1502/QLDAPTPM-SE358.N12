const mongoose = require('mongoose');
const Schema = mongoose.Schema;
////
const Quyen = new Schema(
    {
        MaQuyen: { type: OjectId },
        TenQuyen: { type: String, maxLength: 255 },
        TenManHinhDuocLoad: { type: String, maxLength: 255 },
    },
    {
        timestamps: true,
    },
);

module.exports = mongoose.model('Quyen', Quyen);
