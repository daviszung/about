const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const jsonpre = document.querySelector("#jsonpre");

const arr = jsonpre.innerHTML.split("");

let count = 0;

const interval = setInterval(() => {

    jsonpre.innerHTML = jsonpre.innerHTML.split("").map((char, index) => {
        if (char === "\n" || char === " ") return char;
        if (index < count) return arr[index];
        return letters[Math.floor(Math.random() * 26)];
    }).join("");

    count += 3.5;

    if (count > arr.length) clearInterval(interval);

}, 30);