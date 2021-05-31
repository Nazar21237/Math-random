"use strict"

// Заполнить массив из 10 элементов случайными целыми числами от 100 до 200.

function getRandomNumber(max, min){
  return Math.floor(Math.random() * (max - min + 1) + min);

}

const randomNum = [];
const arraySize = 10;
const minValue = 100;
const maxValue = 200;

for(let i = 0; i < arraySize; i++){
  randomNum.push(getRandomNumber(minValue, maxValue));
}

randomNum.forEach(function(element, index){
  console.log(`Current index ${index}, value = ${element}`);
});


// Создать функцию, которая принимает amout - количество создаваемых объектов,
// создает указанное кол-во объектов пользователей с полями email, age, isMale.
// Поле email заполняется последовательно в формате user${i}@gmail.com. i - счетчик цикла.
// Поле age заполняется рандомно от 12 до 50 лет. (Только целые числа).
// Поле isMale заполняется рандомно значениями true или false.

function User(email, age, isMale){
  this.email = email;
  this.age = age;
  this.isMale = isMale;
}

User.prototype.toString = function(){
  return `email: ${this.email}, age: ${this.age}, isMale: ${this.isMale}`;
}

function getRandomUsers(amount){
  const userArr = [];
  for(let i = 0; i < amount; i++){
    userArr.push(
      new User(
        `user${i}@gmail.com`, 
        getRandomNumber(12, 50),
        Math.random() < 0.5
      )
    );
  }
  return userArr;
}
