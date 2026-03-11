console.log("dom loaded");

let menu_list = document.querySelector(".menu_list");
let hello = document.querySelector(".hello");
let headband = document.querySelector(".headband");

const onDomLoaded = () => {

  let tl = gsap.timeline();
  tl.to(".light", {
  x:1400,
  repeat:-1,
  yoyo: true,
  ease:"steps(12)",
  duration:5,});

  tl.to(".hello", {
  x:1400,
  repeat:-1,
  yoyo: true,
  ease:"steps(12)",
  duration:5});

}



for (let i = 0; i < 11; i++) {
 headband.appendChild(hello.cloneNode(true));
}


document.addEventListener("DOMContentLoaded", onDomLoaded);