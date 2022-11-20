const mongoose = require('mongoose');
const Schema = mongoose.Schema;
////
const Lop = new Schema(
    {
        MaLop: { type: String, maxLength: 255 },
        TenLop: { type: String, maxLength: 255 },
        MaTrinhDo: { type: String, maxLength: 255 },
        NgayKetThuc: { type: Date },
        LichHoc: { type: String, maxLength: 255 },
        HocPhi: { type: Int64 },
        SoBuoiDaHoc: { type: Int32 },
        TongSoBuoiHoc: { type: Int32 },
        SoHocVienToiDa: { type: Int32 },
        MaGiangVien: { type: String, maxLength: 255 },
        MaCuocThiGiuaKi: { type: String, maxLength: 255 },
        MaCuocThiKetThuc: { type: String, maxLength: 255 },
        TrangThai: { type: String, maxLength: 255 },
    },
    {
        timestamps: true,
    },
);

module.exports = mongoose.model('Lop', Lop);
