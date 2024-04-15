// Viết hàm hoán đổi giá trị a, b, c với nhau
const Shuffle = (items) => {
    for (let i = items.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let tmp = items[i];
        items[i] = items[j];
        items[j] = tmp;
    }
    return items;
}

