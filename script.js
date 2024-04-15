// / Viết hàm kiểm tra 1 số có phải số nguyên tố hay ko

function laSoNguyenTo(number) {
    // Trường hợp đặc biệt: số nguyên tố phải lớn hơn 1
    if (number <= 1) {
        return false;
    }

    // Duyệt qua các số từ 2 đến căn bậc hai của number để kiểm tra tính chia hết
    for (let i = 2; i <= Math.sqrt(number); i++) {

        if (number % i === 0) {
            return false;
        }
    }

    return true;
}
