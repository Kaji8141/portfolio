console.log("dom loaded");

const onDomLoaded = () => {

  let tl = gsap.timeline();
  tl.to(".light", {
  x:800,
  repeat:-1,
  yoyo: true,
  ease:"steps(12)",
  duration:5,})
}




document.addEventListener("DOMContentLoaded", onDomLoaded);