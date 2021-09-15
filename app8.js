/*
let counter = 0
function onClickButton(el){
  
    counter++
    console.log(el.value)
    el.innerHTML = "You click button:" + counter
    el.style.background = "red"
    el.style.color = "blue"
    //el.style.cssText = "border-radius: 5px; border: 0; font-size: 20px"
}

function onInput(el) {
    if(el.value == "Hello")
    alert("I love you!")
    console.log(el.value);
}

let text = document.getElementById('text')
text.title = "New text"
console.log(text.title)

text.style.color = "red"
text.style.backgroundColor = "blue"

text.innerHTML = "New<br>string"

// document.getElementById('text').style.color = "white"

var spans = document.getElementsByTagName('span')

for(var i = 0; i < spans.length; i++) {
    console.log(spans[i].innerHTML)
}
*/
document.getElementById('main-form').addEventListener("submit", checkForm)
function checkForm(event) {
    event.preventDefault()
   var el = document.getElementById('main-form');

    let name = el.name.value;
    let pass = el.pass.value;
    let repass = el.repass.value;
    let state = el.state.value;
    console.log(name);
    console.log(pass);
    console.log(repass);
    console.log(state);

let fail = "";

if(name == "" || pass == ""  || state =="")
fail = "Add all fields"
else if (name.length <= 1  || name.length > 50 )
fail = "Enter your Name"
else if(pass != repass)
fail = "Pass should be the same"
else if (pass.split("&").length > 1)
fail = "Uncorrect pass"

if(fail !=""){
    document.getElementById('error').innerHTML = fail
    return false;
} else {
    alert("All Data is correct")
    //window.location = "http://itproger.com"
    return true
}
}