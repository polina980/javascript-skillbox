// это функция, внутри которой нужно написать ваш код
// roadMines (массив ячеек поля) будет задаваться в момент вызова функции,
// как в примере кода под ней
function moveTank(roadMines) {
  let lives = 2;
  for (let i = 0; i < roadMines.length; i++) {
    const position = i + 1;
    if (roadMines[i] === true) {
      lives -= 1;
      if (lives === 1) {
        console.log('танк повреждён');
        console.log(`танк переместился на ${position}`);
      } else if (lives === 0) {
        console.log(`танк переместился на ${position}`);
        console.log('танк уничтожен');
        break;
      } else {
        console.log(`танк переместился на ${position}`);
      }
    } else {
      console.log(`танк переместился на ${position}`);
    }
  }
}

// вызов функции
moveTank([false, false, false, false, false, false, false, false, false, false]);
// танк проедет по полю без мин
// можете вызывать функцию сколько угодно раз подряд с различными параметрами

// строка ниже необходима, чтобы работало автоматическое тестирование
// не изменяйте этот код!
export default moveTank;
