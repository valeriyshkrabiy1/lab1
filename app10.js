// создание

//const human = {
//    name: 'Bobby',
 //   age: 15,
//};


//console.log(human);

//доступ к свойствам

//const human = {
//    name: 'Bobby',
//    age: 15,
//};

//human.age = 20;

//const key = 'name';
//console.log(human [key]);
//console.log(human['age']);

//const obj2 = { a: 1 };
//human[obj2] = 5;

//const obj2 = { a: 3 };
//human[obj2] = 55;


//console.log(human);

//console.log(Object.keys(human).includes('name'));

//Удаление ключей

//const human = {
//    name: 'Bobby',
//    age: 15,
//};
//console.log(human);
//delete human.age
//console.log(human);

//отсутствующие свойства
//const hotel = {
//   stars: 5,
//quests: ['mango', 'poly', 'ajax'],
//};
//console.log(hotel.stars);
//console.log(hotel.pool);

//Короткие свойства
//const getHuman = (name, age) => ({
//    return {
 //       name, //name: name,
 //       age, //age: age,
//    }
//});
//console.log(getName('Bobby', 15));

//Вычисляемые свойства
//const human = {name: 'Bobby'
//};
//const key = 'abrakadabra'
//human[key] = 123
//console.log(human);

//8 Методы обекта
//const human = {
//    name: 'Bobby',
//sayHello: function(){
//    console.log(this.name);
    // console.log('Hello!');
//},
//sayBye() {
//    console.log('Bye');
//},
//    };
//human.sayHello();
//human.sayBye();

//object.keys(), object.values(), object.entries()
//const human = {
//    name: 'Bobby',
//    age: 15,
//};
//Object.keys(human).forEach(key => {
//    if ()
//})

//9 spread розділяємо масив

//const arr =[1, 2, 3, 4]
//console.log(arr);
//console.log(...arr);

//console.log(Math.min(...arr));

//обєднуємо
//const arr1 =[1, 2, 3]
//const arr2 =[4, 5, 6]

//const arr3 = arr1.concat(arr2)
//console.log(arr3);

//розєдн
//const obj1 = {
//    name: 'Boddy',
//}
//const obj2 = {
//    age: '15',
//}
//const human = {
//    ...obj1,
//    ...obj2,
//};
//console.log(human);

// rest
const fn = ()