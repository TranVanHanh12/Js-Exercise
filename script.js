// Viết hàm đảo ngược thứ tự của một mảng các số
function daonguocmang(arr) {
    let mangdaonguoc = [];
    for (var i = arr.length - 1; i >= 0; i--) {
        mangdaonguoc.push(arr[i]);
    }
    return mangdaonguoc;
}