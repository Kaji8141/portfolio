const onDomLoaded = () => {
  console.log("dom loaded");

  gsap.to(".bleu", {rotation: 360, x: 100, duration: 1});
}