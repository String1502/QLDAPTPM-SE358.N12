const HocVien = require('../models/HocVien');

class HocVienController {
    async index(req, res) {
        let hocvien = await HocVien.find({});

        return res.render('student', {
            HocVien: hocvien,
        });
    }

    createHV(req, res) {
        const hv = new HocVien({
            MaHocVien: '2',
            HoTen: 'tri',
            DiaChi: '123123',
            SDT: '0123',
            MaTrinhDo: 'av0',
            NgayTTHVCT: Date.now(),
            TrangThai: 'nnone',
        });
        hv.save()
            .then(() => {
                res.send(' them thanh cong');
            })
            .catch((error) => {});
    }

    async readHV(req, res) {
        const hv = await HocVien.find({});
        res.send(JSON.stringify(hv));
    }

    async updateHV(req, res) {
        await HocVien.updateOne(
            { MaHocVien: 1 },
            {
                HoTen: 'trissssssssss',
                DiaChi: '00000000',
            },
        );
        res.redirect('/hocvien/read');
    }
}

module.exports = new HocVienController();
