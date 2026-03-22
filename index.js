console.log("dom loaded");

let menu_list = document.querySelector(".menu_list");
let hello = document.querySelector(".hello");
let headband = document.querySelector(".headband");

const onDomLoaded = () => {

  let tl = gsap.timeline();
  tl.to(".light", {
  x:2000,
  repeat:-1,
  yoyo: true,
  ease:"sine out",
  duration:2,});

  tl.to(".hello", {
  x:1200,
  repeat:-1,
  yoyo: true,
  ease:"sine out",
  duration:5});"<0"
}

gsap.utils.toArray(".light").forEach(randomFloat);

function randomFloat(element) {
  gsap.to(element, {
    x: 'random(-20, 20, 5)',
    y: 'random(-20, 10, 3)',
    ease: "sine.inOut",
    duration: gsap.utils.random([2, 4]),
    onComplete: () => randomFloat(element)
  });
}

for (let i = 0; i < 10; i++) {
 headband.appendChild(hello.cloneNode(true));
}


document.addEventListener("DOMContentLoaded", onDomLoaded);