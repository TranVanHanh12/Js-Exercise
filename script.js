// Viết hàm tìm giá trị lớn nhất trong 1 mảng các số
function timmax(arr) {
    max = 0;
    for (var i = 0; i < arr.length; i++) {
        element = arr[i];
        if (element > max) {
            max = element;
        }
    }
    return max;
}