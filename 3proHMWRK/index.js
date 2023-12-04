/*1. Пользователь вводит год своего рождения, вывести
информацию о возрасте пользователя в разные года
до текущего. Например, вводим «2003». Вывод: «в
2003 было 1 год», «в 2004 было 2 год», «в 2005 было
3 год» и т.д.
*/

 let age = prompt('введите год своего рождения');
     age = Number(age);
 if (!isNaN(age)) {
     let currentYear = 2023;
     for(let i = age; i <= currentYear; i++){
         console.log('в ' + i + ' было ' + (i-age) + ' год');
     }
 } else {
     console.log('Введите год рождения в ввиде числа');
}

/*2. Написать программу, в которой пользователя просят ввести числа 5 раз. Причем
каждое последующее число должно быть больше предыдущего, иначе вывести
ошибку.
*/

var previousNum;
for(var i = 1; i <= 5; i++) {
    var userInput = prompt('введите число ' + i);
    var currentNum = Number(userInput);

    if( !isNaN(currentNum)) {
        if(i > 1 && currentNum <= previousNum) {
            console.log('ERROR');
            break;
        } 
        previousNum = currentNum;
    } else {
        console.log('Введите корректное число');
        break;
    }
}