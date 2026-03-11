let btn 
let return2 = document.querySelector(".back_menu");
let headband = document.querySelector(".headband");

for (let i = 0; i < 29; i++) {
 headband.appendChild(return2.cloneNode(true));
}

gif = document.querySelector(".gif")

gif.hover(function toggleControls() {
    if (this.hasAttribute("controls")) {
        this.removeAttribute("controls")
    } else {
        this.setAttribute("controls", "controls")
    }
})


const onDomLoaded = () => {
    console.log("dom loaded")
}

document.addEventListener("DOMContentLoaded", onDomLoaded);