const tester = document.getElementById("tester");
const counter = document.getElementById("click__counter");
const dblcounter = document.getElementById("dblclick__counter");
let count = 0;
let dblcount = 0;


tester.addEventListener("click", () => {
    tester.style.backgroundColor = "yellow";
    count++;
    counter.innerHTML = `Click Counter: ${count}`

})

tester.addEventListener("dblclick", () => {
    tester.style.backgroundColor = "red";
    dblcount++;
    dblcounter.innerHTML = `Double Click Counter: ${dblcount}`
})