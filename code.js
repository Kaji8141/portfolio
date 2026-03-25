console.log("dom loaded");

let next = document.querySelector(".back_menu2");
let headband = document.querySelector(".headband");
let bleu = document.querySelector(".bleu")
let bleu2 = document.querySelector(".bleu2")
for (let i = 0; i < 29; i++) {
 headband.appendChild(next.cloneNode(true));
}

document.addEventListener('DOMContentLoaded', () => {
  let tl = gsap.timeline({
    repeat: -1,
    yoyo: true,
    onComplete: () => {
    console.log("la timeline est terminée");
    },
});
  tl.to(bleu,{
    height: "+=200vh",
    duration: 3,
  })
  tl.to(bleu2,{
    height: "+=200vh",
    duration: 3,
  })

})