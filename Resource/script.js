// Viết hàm hoán đổi giá trị a, b, c với nhau
// Viết hàm tính a mũ b
// Viết hàm kiểm tra tính đồng nhất chẵn lẻ của 2 số
// Viết hàm đếm số lượng số chẵn trong mảng
// Viết hàm đếm số lượng số lẻ trong mảng
// Viết hàm tính tổng số chắn trong mảng
// Viết hàm tính tổng số lẻ trong mảng
// Viết hàm kiểm tra 1 số có phải số nguyên tố hay ko
// Viết hàm tìm số dư của a chia cho b (ko dùng toán tử %)
// Viết hàm tìm giá trị lớn nhất trong 1 mảng các số
// Viết hàm tìm giá trị nhỏ nhất trong 1 mảng các số
// Viết hàm tìm giá trị trung bình trong 1 mảng các số
// Viết hàm đảo ngược thứ tự của một mảng các số
// Viết hàm tìm vị trí của 1 số trong 1 mảng các số

// Viết hàm hoán đổi giá trị a, b, c với nhau
const Shuffle = (items) => {
    for (let i = items.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let tmp = items[i];
        items[i] = items[j];
        items[j] = tmp;
    }
    return items;


// Viết hàm tính a mũ b  
function tinhluythua(a, b) {
    let luythua = 1;
    for (var i = 0; i <= b; i++) {
        luythua *= a;
    }
    return luythua;
}
// Cách 2
function tinhluythua(a, b) {
    return Math.pow(a, b);
}

// Viết hàm kiểm tra tính đồng nhất chẵn lẻ của 2 số
function check(a,b){
    if (a % 2 ===0 && b % 2 === 0 && a!=0 && b!=0) {
      return ('toan la so chan');
    } else if (a % 2 !==0 && b % 2 !== 0 && a!=0 && b!=0){
      return ('toan la so le');
    } else if (a % 2 !==0 && b % 2 === 0 && a!=0 && b!=0){
      return ('1 le 1 chan');
    } else if (a % 2 ===0 && b % 2 !== 0 && a!=0 && b!=0){
      console.log2 ('1 chan 1 le');
    } else { 
      return '0 0'}
  }

  // Viết hàm đếm số lượng số chẵn trong mảng
  function demsochan(arr) {
    let demso = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
            demso +=1
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

//  Viết hàm đếm số lượng số lẻ trong mảng
  function demsole(arr) {
    let demso = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 != 0) {
            demso +=1
        }
    }
    return demso;
  }

// cach 2
const countEvenNumbers = (arr) => {

    const evenNumbers = arr.filter(num => num % 2 != 0);

    return evenNumbers.length;
};


 // Viết hàm tính tổng số chẵn trong mảng
 function demsochan(arr) {
    let tongso = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
            tongso += arr[i];
        }
    }
    return tongso;
  }



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

//   Viết hàm tìm số dư của a chia cho b (ko dùng toán tử %)

function timsodu(a,b) {
    if( a == 0) {
        return 0;
    } else if ( b == 0) {
        return NaN;
    } else if ( a < 0) {
        while (a < 0) {
            a+=b;
        }
        return a
    } else if ( a >= b) {
        while (a >= b) {
            a -= b;
        }
        return a
    }
    }

    // Viết hàm tìm giá trị lớn nhất trong 1 mảng các số
    function timmax (arr) {
        max = 0;
        for ( var i =0; i < arr.length; i++) {
            element = arr [i];
            if ( element > max) {
                max = element;
            }
        }
        return max;
    }


    // Viết hàm tìm giá trị nhỏ nhất trong 1 mảng các số
    function timmin (arr) {
        min = 0;
        for ( var i =0; i < arr.length; i++) {
            element = arr [i];
            if ( element < max) {
                max = element;
            }
        }
        return min;
    }
    

    // Viết hàm tìm giá trị trung bình trong 1 mảng các số
    function average(arr) {
        let ave = 0;
        for (let i = 0; i < arr.length; i++) {
          ave += arr[i];
        }
        return (ave / arr.length)
      }

      // Viết hàm đảo ngược thứ tự của một mảng các số
      function daonguocmang (arr) {
        let mangdaonguoc = [];
        for ( var i = arr.length - 1 ; i>=0 ; i--) {
            mangdaonguoc.push(arr[i]);
        }
        return mangdaonguoc;
      }

    //   // Viết hàm tìm vị trí của 1 số trong 1 mảng các số
    function timvitri (arr, target) {
        for ( var i = 0; i< arr.length ; i++) {
            let num = arr[i]
            if (num == target) {
                return i;
            }
        }
    }
