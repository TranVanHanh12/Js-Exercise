// Viết hàm tính tổng số lẻ trong mảng
function demsole(arr) {
    let tongso = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 != 0) {
            tongso += arr[i];
        }
    }
    return tongso;
}