import "./styles.css";
import home from "./home.js"
import about from "./about.js"
import menu from "./menu.js"
// import groundBeef from "./images/beef.jpg"

function clearDiv(){
    let content = document.querySelector("#content");
    content.innerHTML = "";
}

const homeBtn = document.querySelector("#Home");
homeBtn.addEventListener("click", () => {
    clearDiv();
    home();
})

const aboutBtn = document.querySelector("#About");
aboutBtn.addEventListener("click", () => {
    clearDiv();
    about();
})

const menuBtn = document.querySelector("#Menu");
menuBtn.addEventListener("click", () => {
    clearDiv();
    menu();
})

home();