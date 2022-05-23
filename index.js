let one = document.getElementById("one");
let two = document.getElementById("two");
let three = document.getElementById("three");

let btn1 = document.getElementById("btn-1");
let btn2 = document.getElementById("btn-2");
let btn3 = document.getElementById("btn-3");

//First
btn1.addEventListener("click", () => {
    one.classList.add("bgimg");
    one.classList.remove("bgimg2");
    one.classList.remove("bgimg3");
})

btn2.addEventListener("click", () => {
    one.classList.add("bgimg2");
    one.classList.remove("bgimg");
    one.classList.remove("bgimg3");
})

btn3.addEventListener("click", () => {
    one.classList.add("bgimg3");
    one.classList.remove("bgimg");
    one.classList.remove("bgimg2");
})

//Second
btn1.addEventListener("click", () => {
    two.classList.add("bgimg");
    two.classList.remove("bgimg2");
    two.classList.remove("bgimg3");
})

btn2.addEventListener("click", () => {
    two.classList.add("bgimg2");
    two.classList.remove("bgimg");
    two.classList.remove("bgimg3");
})

btn3.addEventListener("click", () => {
    two.classList.add("bgimg3");
    two.classList.remove("bgimg");
    two.classList.remove("bgimg2");
})

//Third
btn1.addEventListener("click", () => {
    three.classList.add("bgimg");
    three.classList.remove("bgimg2");
    three.classList.remove("bgimg3");
})

btn2.addEventListener("click", () => {
    three.classList.add("bgimg2");
    three.classList.remove("bgimg");
    three.classList.remove("bgimg3");
})

btn3.addEventListener("click", () => {
    three.classList.add("bgimg3");
    three.classList.remove("bgimg");
    three.classList.remove("bgimg2");
})