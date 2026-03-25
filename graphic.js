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
    height: "+=270.4vh",
    duration: 3,
  })
  tl.to(bleu2,{
    height: "+=270.4vh",
    duration: 3,
  })

})


gsap.utils.toArray(".imgmove").forEach(randomFloat);

function randomFloat(element) {
  gsap.to(element, {
    x: 'random(-20, 20, 5)',
    y: 'random(-20, 10, 3)',
    ease: "sine.inOut",
    duration: gsap.utils.random([2, 4]),
    onComplete: () => randomFloat(element)
  });
}