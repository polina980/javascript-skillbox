// Задача 1.
// Цель:
// Научиться совместно применять переменные, математические операторы и функции объекта Math.
// Что нужно сделать:
// Запишите в переменные x и y координаты двух произвольных точек: 
// x1, y1 — первая точка; x2, y2 — вторая точка. 
// Вычислите площадь прямоугольника, противоположные углы которого представлены указанными точками. 
// Выведите результат с помощью console.log. 
// Напомним, что площадь прямоугольника — это произведение ширины и высоты.

const x1 = 2, y1 = 3;
const x2 = 10, y2 = 5;

const area = Math.abs((x2 - x1) * (y2 - y1));

console.log(area);


// Задача 2.
// Цель:
// Научиться округлять и точно сравнивать дробные части чисел.
// Что нужно сделать:
// Вычислите дробные части чисел a и b с точностью n. 
// Выведите получившиеся числа с помощью console.log. 
// Выведите результаты их сравнения (>, <, ≥, ≤, ===, ≠) с помощью console.log.

// Комментарий ревьюера:
// Вместо round лучше использовать trunc во втором задании.
// Метод Math.round() возвращает число, округлённое к ближайшему целому.
// Функция Math.trunc() возвращает целую часть числа путём удаления всех дробных знаков.

const a = 13.123456789;
const b = 2.123;
const n = 5;

// const a1 = Math.round(a % 1 * Math.pow(10, n));
// const b1 = Math.round(b % 1 * Math.pow(10, n));
const a1 = Math.trunc(a % 1 * Math.pow(10, n));
const b1 = Math.trunc(b % 1 * Math.pow(10, n));

console.log(a1, b1);

console.log("a1 строго больше b1", a1 > b1);
console.log("a1 строго меньше b1", a1 < b1);
console.log("a1 больше или равно b1", a1 >= b1);
console.log("a1 меньше или равно b1", a1 <= b1);
console.log("a1 равно b1", a1 === b1);
console.log("a1 не равно b1", a1 !== b1);


// Задача 3.
// Цели:
// Попрактиковаться в написании универсального кода, поддерживающего различные ситуации. 
// Научиться применять Math.random и другие функции объекта Math.
// Что нужно сделать:
// Напишите генератор двух случайных чисел в диапазоне между n и m включительно. 
// Учтите, что n и m могут быть отрицательными, а также может быть n > m или n < m.
// Выведите два произвольных числа в консоль с помощью console.log.
// Сравните два полученных числа. 
// Выведите результаты их сравнения >, <, ≥, ≤, ===, ≠ с помощью console.log.

const n2 = 0;
const m = 100;

const min = Math.min(n2, m);
const max = Math.max(n2, m);

const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
const randomNumber2 = Math.floor(Math.random() * (max - min + 1)) + min;

console.log(randomNumber, randomNumber2);

console.log("randomNumber строго больше randomNumber2", randomNumber > randomNumber2);
console.log("randomNumber строго меньше randomNumber2", randomNumber < randomNumber2);
console.log("randomNumber больше или равно randomNumber2", randomNumber >= randomNumber2);
console.log("randomNumber меньше или равно randomNumber2", randomNumber <= randomNumber2);
console.log("randomNumber равно randomNumber2", randomNumber === randomNumber2);
console.log("randomNumber не равно randomNumber2", randomNumber !== randomNumber2);
