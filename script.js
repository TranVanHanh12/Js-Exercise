//  Viết hàm tính a mũ b  
function tinhluythua(a, b) {
    let luythua = 1;
    for (var i = 0; i <= b; i++) {
        luythua *= a;
    }
    return luythua;
}
// Cách 2
function tinhluythua(a, b) {
    return Math.pow(a, b);
}