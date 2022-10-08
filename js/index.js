

function layLoaiXe() {
    var loaiXe;
    var uberX = document.getElementById('uberX').checked;
    var uberSUV = document.getElementById('uberSUV').checked;
    var uberBlack = document.getElementById('uberBlack').checked;
    if (uberX) {
        loaiXe = 'uberX';
    } else if (uberSUV) {
        loaiXe = 'uberSUV';
    } else if (uberBlack) {
        loaiXe = 'uberBlack';
    }

    return loaiXe;
    
}

var thanhtien = 0;

function tinhTien() {
    var loaiXe = layLoaiXe();
    // Giá mở cửa
    var open;
    // Mốc di chuyển thứ 1
    var mocThuNhat;
    // Mốc di chuyển thứ 2
    var mocThuHai;
    // Đơn giá thời gian chờ
    var donGiaCho;
    if (loaiXe == 'uberX') {
        open = 8000;
        mocThuNhat = 12000;
        mocThuHai = 10000;
        donGiaCho = 2000;
    } else if (loaiXe == 'uberSUV') {
        open = 9000;
        mocThuNhat = 14000;
        mocThuHai = 12000;
        donGiaCho = 3000;
    } else if (loaiXe == 'uberBlack') {
        open = 10000;
        mocThuNhat = 16000;
        mocThuHai = 14000;
        donGiaCho = 4000;
    }

    var divThanhtien = document.querySelector('#divThanhTien');
    var xuatTien = document.querySelector('.xuatTien');
    var soKM = parseFloat(document.querySelector('.distance').value)
    var waitTime = parseFloat(document.querySelector('.waitTime').value);
    
    switch (loaiXe) {
        case 'uberX':
            if (soKM > 0 && soKM <= 20) {
                thanhtien = open + soKM * mocThuNhat + waitTime * donGiaCho;
            } else if (soKM > 20) {
                thanhtien = open + 20 * mocThuNhat + (soKM - 20) * mocThuHai + waitTime * donGiaCho;
            }
            break;
        case 'uberSUV':
            if (soKM > 0 && soKM <= 20) {
                thanhtien = open + soKM * mocThuNhat + waitTime * donGiaCho;
            } else if (soKM > 20) {
                thanhtien = open + 20 * mocThuNhat + (soKM - 20) * mocThuHai + waitTime * donGiaCho;}
                break;
        case 'uberBlack':
            if (soKM > 0 && soKM <= 20) {
                thanhtien = open + soKM * mocThuNhat + waitTime * donGiaCho;
            } else if (soKM > 20) {
                thanhtien = open + 20 * mocThuNhat + (soKM - 20) * mocThuHai + waitTime * donGiaCho;
            }
            break;
            

    }
    xuatTien.innerHTML = thanhtien;
    divThanhtien.style.display = "block";
    return thanhtien;
}

function inHoaDon () {
    var loaiXe = layLoaiXe()
    var thanhtien = tinhTien()
    document.querySelector('.loaiXeBill1').innerHTML = loaiXe;
    document.querySelector('.loaiXeBill2').innerHTML = loaiXe;
    document.querySelector('.loaiXeBill3').innerHTML = loaiXe;
    var soKM = parseFloat(document.querySelector('.distance').value)
    var waitTime = parseFloat(document.querySelector('.waitTime').value);
    document.querySelector('.useBill').innerHTML = waitTime;
    var open;
    // Mốc di chuyển thứ 1
    var mocThuNhat;
    // Mốc di chuyển thứ 2
    var mocThuHai;
    // Đơn giá thời gian chờ
    var donGiaCho;
    if (loaiXe == 'uberX') {
        open = 8000;
        mocThuNhat = 12000;
        mocThuHai = 10000;
        donGiaCho = 2000;
    } else if (loaiXe == 'uberSUV') {
        open = 9000;
        mocThuNhat = 14000;
        mocThuHai = 12000;
        donGiaCho = 3000;
    } else if (loaiXe == 'uberBlack') {
        open = 10000;
        mocThuNhat = 16000;
        mocThuHai = 14000;
        donGiaCho = 4000;
    }

//  Dongia
    document.querySelector('.DonGiaBillopen').innerHTML = open;
    document.querySelector('.DonGiaBill2').innerHTML = mocThuNhat;
    document.querySelector('.DonGiaBill').innerHTML = donGiaCho;
    document.querySelector('.ThanhTienBillopen').innerHTML = open;
    document.querySelector('.ThanhTienBillTime').innerHTML = waitTime*donGiaCho;
    // document.querySelector('.ThanhTienBillTime') = waitTime * donGiaCho;


    if (soKM > 0 && soKM <= 20) {
        document.querySelector('.useBill2').innerHTML  = soKM;
        document.querySelector('.ThanhTienBill2').innerHTML = mocThuHai*soKM;
        document.querySelector('#moc3').remove()
    } else {
        document.querySelector('.useBill2').innerHTML  = 20;
        document.querySelector('.ThanhTienBill2').innerHTML = 20 * mocThuHai;
        document.querySelector('.useBill3').innerHTML = soKM -20;
        document.querySelector('.DonGiaBill3').innerHTML = mocThuHai;
        document.querySelector('.ThanhTienBill3').innerHTML = (soKM -20)*mocThuHai; 

    }





   document.querySelector('#TotalBillTime').innerHTML = thanhtien;
   
}  


