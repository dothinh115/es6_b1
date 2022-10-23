let heading = document.querySelector(".heading");
let text = heading.innerText;

let textArr = [...text];
let span = "";
textArr.forEach(item => {
    span += `<span>${item}</span>`;
});
heading.innerHTML = span;