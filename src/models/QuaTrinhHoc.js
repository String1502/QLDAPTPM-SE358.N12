const mongoose = require('mongoose');
const Schema = mongoose.Schema;
////
const QuaTrinhHoc = new Schema(
    {
        MaQuaTrinhHoc: { type: OjectId },
        MaHocVien: { type: String, maxLength: 255 },
        MaLop: { type: String, maxLength: 255 },
        SoBuoiVangHoc: { type: Int32 },
        NgayGhiDanhVaoLop: { type: Date },
        NgayKetThuc: { type: Date },
        TrangThai: { type: String, maxLength: 255 },
        ThanhToanHocPhi: { type: Date },
        NgayDongHocPhi: { type: Date },
    },
    {
        timestamps: true,
    },
);

module.exports = mongoose.model('QuaTrinhHoc', QuaTrinhHoc);
