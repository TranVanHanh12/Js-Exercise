// Viết hàm tìm vị trí của 1 số trong 1 mảng các số
function timvitri(arr, target) {
    for (var i = 0; i < arr.length; i++) {
        let num = arr[i]
        if (num == target) {
            return i;
        }
    }
}