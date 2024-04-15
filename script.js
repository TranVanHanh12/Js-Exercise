// Viết hàm kiểm tra tính đồng nhất chẵn lẻ của 2 số
function check(a, b) {
    if (a % 2 === 0 && b % 2 === 0 && a != 0 && b != 0) {
        return ('toan la so chan');
    } else if (a % 2 !== 0 && b % 2 !== 0 && a != 0 && b != 0) {
        return ('toan la so le');
    } else if (a % 2 !== 0 && b % 2 === 0 && a != 0 && b != 0) {
        return ('1 le 1 chan');
    } else if (a % 2 === 0 && b % 2 !== 0 && a != 0 && b != 0) {
        console.log2('1 chan 1 le');
    } else {
        return '0 0'
    }
}