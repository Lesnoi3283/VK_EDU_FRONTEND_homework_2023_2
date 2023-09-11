"use strict";

/**
 * @param {String} str - Строка
 * @returns {(number)[]} - массив чисел Float
 * */
const getNumbersArr = (str) => {
  const strs = str.split(" ");
  const arrToRetDirty = strs.map((el) => parseFloat(el));
  const arrToRetCleaned = arrToRetDirty.filter((el) => !isNaN(el));
  return arrToRetCleaned;
};

/**
 * @param {String} numbers - Строка чисел, разделенных пробелами.
 * @returns {(number|undefined)[]} Массив, с минимальным и максимальным числами
 */
const minmax = (numbers) => {
  if (typeof numbers !== "string") {
    return [undefined, undefined];  
  }

  const numbersArr = getNumbersArr(numbers);
  if (numbersArr.length === 0) {
    return [undefined, undefined];
  }

  const result = numbersArr.reduce(
    (acc, curVal) => [
      curVal < acc[0] ? curVal : acc[0],
      curVal > acc[1] ? curVal : acc[1],
    ], [Infinity, -Infinity]);

  return result;
  
};