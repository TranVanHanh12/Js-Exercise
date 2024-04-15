// Viết hàm tìm giá trị trung bình trong 1 mảng các số
function average(arr) {
    let ave = 0;
    for (let i = 0; i < arr.length; i++) {
        ave += arr[i];
    }
    return (ave / arr.length)
}

// Viết hàm đảo ngược thứ tự của một mảng các số
function daonguocmang(arr) {
    let mangdaonguoc = [];
    for (var i = arr.length - 1; i >= 0; i--) {
        mangdaonguoc.push(arr[i]);
    }
    return mangdaonguoc;
}