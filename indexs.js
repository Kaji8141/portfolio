const onDomLoaded = () => {
  console.log("dom loaded");

  let tl = gsap.timeline();
  tl.to(".light", {duration: 1, x: 774})
}




document.addEventListener("DOMContentLoaded", onDomLoaded);