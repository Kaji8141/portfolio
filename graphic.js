console.log("dom loaded");

let next = document.querySelector(".back_menu2");
let headband = document.querySelector(".headband");

for (let i = 0; i < 29; i++) {
 headband.appendChild(next.cloneNode(true));
}

const onDomLoaded = () => {

  let tl = gsap.timeline();
  tl.to(".back_menu2", {
  x:1400,
  repeat:-1,
  yoyo: true,
  duration:5,});

}
