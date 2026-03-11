let next = document.querySelector(".back_menu2");
let headband = document.querySelector(".headband");

for (let i = 0; i < 29; i++) {
 headband.appendChild(next.cloneNode(true));
}

const onDomLoaded = () => {

  let tl = gsap.timeline();
  tl.to(".bleu", {
  y:800,
  repeat:-1,
  yoyo: true,
  ease:"steps(12)",
  duration:5,});

}