// Viết hàm tìm giá trị trung bình trong 1 mảng các số
function average(arr) {
    let ave = 0;
    for (let i = 0; i < arr.length; i++) {
        ave += arr[i];
    }
    return (ave / arr.length)
}

