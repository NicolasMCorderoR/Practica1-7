console.log("Hello World!");

const endDigRGB = 256;

function titleTextMod() {
    console.log("Test!");
    let textNew = document.querySelector("#text-inp").value;
    if (textNew !== "") {
        let titleNew = document.querySelector("#text-title");
        titleNew.textContent = textNew;
        let bgcCont = document.querySelector("main");
        let colorText = document.querySelector("#inst-p");
        titleNew.style.color = randomColorRGB();
        bgcCont.style.backgroundColor = randomColorRGB();
        colorText.style.color = randomColorRGB();
    }
}

function randomColorRGB() {
    return `rgb( ${random()}, ${random()}, ${random()} )`;
}

function random() {
    return Math.random() * endDigRGB;
}