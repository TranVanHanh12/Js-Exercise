// Viết hàm tìm giá trị nhỏ nhất trong 1 mảng các số
function timmin(arr) {
    min = 0;
    for (var i = 0; i < arr.length; i++) {
        element = arr[i];
        if (element < max) {
            max = element;
        }
    }
    return min;
}