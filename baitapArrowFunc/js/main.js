const colorList = ["pallet", "viridian", "pewter", "cerulean", "vermillion", "lavender","celadon","saffron","fuschia","cinnabar"];

let container = document.querySelector("#colorContainer");
let house = document.querySelector("#house");
let buttons = "";
colorList.forEach(item => {
    buttons += `<button class="color-button ${item}"></button>`;
});
container.innerHTML = buttons;
container.querySelector("button").classList.add("active");

let button = container.querySelectorAll("button");

button.forEach(item => {
    item.addEventListener("click", () => {
        container.querySelector(".active").classList.remove("active");
        item.classList.add("active");
        let color = item.classList[1];
        house.className = "house " + color;
    });
})