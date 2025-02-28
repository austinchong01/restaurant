import groundBeef from "./images/beef.jpg"

export default function createContent() {
    const content = document.querySelector("#content");

    const h1 = document.createElement("h1");
    const img = document.createElement("img");
    const p = document.createElement("p");

    h1.textContent = "Ground Beef Dish";
    img.src = groundBeef;
    img.alt = "ground beef";
    p.textContent = "This is one of my best dishes with lot of protein.";

    content.appendChild(h1);
    content.appendChild(img);
    content.appendChild(p);
    }
