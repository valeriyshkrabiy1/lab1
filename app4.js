//for(var i = 0; i < 10; i++) {
//    console.log(i)
//}

//var j = 1000;
//while(j >= 100) {
//    console.log(j)
//    j -=100
//}
//небажаний цикл
//var isHasCar = true
//while(isHasCar) {
//}

//var x = 100
//do {
//console.log(x)
//} while(x < 50);

//for(var i = 10; i <= 20; i+=2) {
//    if(i > 15)
//   break;
//    console.log(i)
//}

//for(var i = 10; i <= 20; i++) {
//    if(i % 2 == 0)
//    continue;
//    console.log(i)
//}

var arr = [5, true, "stroka", 5.7, 0, -100];
for(var i = 0; i < arr.length; i++) {
    arr[i] *= 2
    console.log("Элемент" + (i + 1) + ": " + arr[i]);
}