/  Viết hàm đếm số lượng số lẻ trong mảng
function demsole(arr) {
    let demso = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 != 0) {
            demso += 1
        }
    }
    return demso;
}

// cach 2
const countEvenNumbers = (arr) => {

    const evenNumbers = arr.filter(num => num % 2 != 0);

    return evenNumbers.length;
};
