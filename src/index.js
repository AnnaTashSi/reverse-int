module.exports = function reverse (n) {
  // Функция parseInt возвращает целое число из строк
  return parseInt(n.toString().split('').reverse().join(''))
}
console.log(162);
