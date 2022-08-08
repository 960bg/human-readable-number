module.exports = function toReadable(number) {
  let str_res = '';
  let mas = [];
  let num_str = '' + number;
  let num_length = ('' + number).length;
  // for (let i = 0; i < numStr.length; i++) {

  // }
  // тысяча = 0
  // сотни = 1
  // десятки = 2
  // единицы = 3



  // тысячи
  if (num_str.length == 4) {
    // если нет сотен десятков и единиц   
    if ((num_str[1] == '0') && (num_str[2] == '0') && (num_str[3] == '0')) {
      return numToStr(num_str[0]) + ` thousand`;
    }

    str_res += numToStr(num_str[0]) + ` thousand`;
    // обрезаем строку на один символ слева чтоб перейти к след разрядам 
    num_str = num_str.substring(1);
  }

  // сотни
  if (num_str.length == 3) {
    // если нет  десятков и единиц   
    if ((num_str[1] == '0') && (num_str[2] == '0')) {
      return str_res += numToStr(num_str[0]) + ` hundred`;
    }

    str_res += numToStr(num_str[0]) + ` hundred `;
    // обрезаем строку на один символ слева чтоб перейти к след разрядам 
    num_str = num_str.substring(1);
  }

  // десятки
  if (num_str.length == 2) {

    // если оставшееся число меньше 20
    if (+(num_str) < 20) {
      return str_res += numToStr(num_str[0] + num_str[1]);
    }

    // если нет  единиц   
    if (num_str[1] == '0') {
      return str_res += numToStr(num_str[0] + num_str[1]);
    }
    //     если десятки не круглые то 
    // делаем десятки круглые для перевода в текст
    str_res += numToStr(num_str[0] + '0') + ` `;
    // обрезаем строку на один символ слева чтоб перейти к след разрядам 
    num_str = num_str.substring(1);
  }

  // единицы
  str_res += numToStr(num_str[0]);

  return str_res;


}


function numToStr(num) {
  // перевод строки в число
  num = +num;

  if (num < 20) {
    // длина 1 
    switch (num) {
      case 0:
        return `zero`;

        break;
      case 1:
        return (`one`);
        break;
      case 2:
        return (`two`);
        break;
      case 3:
        return (`three`);
        break;
      case 4:
        return (`four`);
        break;
      case 5:
        return (`five`);
        break;
      case 6:
        return (`six`);
        break;
      case 7:
        return (`seven`);
        break;
      case 8:
        return (`eight`);
        break;
      case 9:
        return (`nine`);
        break;
      case 10:
        return (`ten`);
        break;
      case 11:
        return (`eleven`);
        break;
      case 12:
        return (`twelve`);
        break;
      case 13:
        return (`thirteen`);
        break;
      case 14:
        return (`fourteen`);
        break;
      case 15:
        return (`fifteen`);
        break;
      case 16:
        return (`sixteen`);
        break;
      case 17:
        return (`seventeen`);
        break;
      case 18:
        return (`eighteen`);
        break;
      case 19:
        return (`nineteen`);
        break;

      default:
        break;
    }

  }

  // обработка десятков
  if (num >= 20) {
    // длина 1 
    switch (num) {
      case 20:
        return `twenty`;
        break;
      case 30:
        return (`thirty`);
        break;
      case 40:
        return (`forty`);
        break;
      case 50:
        return (`fifty`);
        break;
      case 60:
        return (`sixty`);
        break;
      case 70:
        return (`seventy`);
        break;
      case 80:
        return (`eighty`);
        break;
      case 90:
        return (`ninety`);
        break;

      default:
        break;
    }

  }
}


// console.log(toReadable(999));