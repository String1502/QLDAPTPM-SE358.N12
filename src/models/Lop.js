const mongoose = require('mongoose');
const Schema = mongoose.Schema;
////
const Lop = new Schema(
    {
        MaLop: { type: String, maxLength: 255 },
        TenLop: { type: String, maxLength: 255 },
        MaTrinhDo: { type: String, maxLength: 255 },
        NgayKetThuc: { type: String, maxLength: 255 },
        LichHoc: { type: String, maxLength: 255 },
        MaMucHocPhi: { type: String, maxLength: 255 },
        SoBuoiDaHoc: { type: String, maxLength: 255 },
        TongSoBuoiHoc: { type: String, maxLength: 255 },
        SoHocVienToiDa: { type: String, maxLength: 255 },
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
