const onDomLoaded = () => {
  console.log("dom loaded");

  let tl = gsap.timeline({
    repeat: -1,
    yoyo: true,
    onComplete: () => {
      console.log("la timeline est terminée");
    },
  });

    tl.to(".light", {
        x: 10000,
        duration: 2,
    });

}




document.addEventListener("DOMContentLoaded", onDomLoaded);