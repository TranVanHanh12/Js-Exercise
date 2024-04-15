//   Viết hàm tìm số dư của a chia cho b (ko dùng toán tử %)

function timsodu(a, b) {
    if (a == 0) {
        return 0;
    } else if (b == 0) {
        return NaN;
    } else if (a < 0) {
        while (a < 0) {
            a += b;
        }
        return a
    } else if (a >= b) {
        while (a >= b) {
            a -= b;
        }
        return a
    }
}