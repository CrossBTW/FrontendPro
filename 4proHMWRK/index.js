//1. Дан массив
const arr = [54, 63, 76, 34, 21, 57, 25, 301, 94];
//вывести в консоль наибольшее число из этого массива

const maxValue = Math.max.apply(null, arr);
    console.log(maxValue);

//2. С помощью цикла создать пустой массив, наполнить массив двузначными числами которые делятся на 3 (с нулевым остатком)
let arr2 = new Array();

for (let a = 0; ;) {
        console.log(arr2);
    if (a % 3 < 0) {
        break;
    }
}