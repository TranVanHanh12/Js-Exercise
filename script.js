// Viết hàm đếm số lượng số chẵn trong mảng
function demsochan(arr) {
    let demso = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
            demso += 1
        }
    }
    return demso;
}

// cach 2
const countEvenNumbers = (arr) => {
    // Sử dụng phương thức filter để lọc ra các số chẵn
    const evenNumbers = arr.filter(num => num % 2 == 0);
    // Trả về số lượng phần tử trong mảng chứa các số chẵn
    return evenNumbers.length;
};