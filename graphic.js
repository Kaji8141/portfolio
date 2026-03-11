let next = document.querySelector(".back_menu2");
let headband = document.querySelector(".headband");

for (let i = 0; i < 29; i++) {
 headband.appendChild(next.cloneNode(true));
}