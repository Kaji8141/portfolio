let btn 

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