// interval
/*
setInterval(my_func, 1000)

var counter = 0
function my_func() {
    counter++
    console.log("Counter: " + counter)

    if (counter == 3)
    clearInterval(id)
}

setInterval(function(){
    counter++
    console.log("Counter: " + counter)
}, 1500)

// timer
setTimeout(function() {
    console.log("Timer")
}

)


var date = new Date();
console.log(date.getFullYear())
console.log(date.getMonth() + 1)

date.setHours(23)
date.setMinutes(24)
console.log("Time: " + date.getHours() + ':' + date.getMinutes())

let arr = [8, 90, 5, 7, 0, 8, 9]
let stroka = arr.reverse().join(", ")
console.log(stroka.split(", "))

*/
//Class and objects

class Person {
constructor (name, age, happiness) {
this.name = name
this.age = age
this.happiness = happiness
}
info() {
console.log("Человек: " + this.name + ". Возраст: " + this.age)    
}
}

let alex = new Person('Alex', 45, true)
let bob = new Person('Bob', 25, false)
alex.info()
bob.info()