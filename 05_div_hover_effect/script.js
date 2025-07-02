window.addEventListener("mousemove", function (details) {
  var rect = document.querySelector("#rect");

  var rectLocationX = gsap.utils.mapRange(
    0,
    window.innerWidth,
    500 + rect.getBoundingClientRect().width / 2,
    window.innerWidth - (500 + rect.getBoundingClientRect().width / 2),
    details.clientX
  );
  var rectLocationY = gsap.utils.mapRange(
    0,
    window.innerHeight,
    250 + rect.getBoundingClientRect().height / 2,
    window.innerHeight - ( 250 + rect.getBoundingClientRect().height / 2),
    details.clientY
  );

  gsap.to("#rect", {
    top: rectLocationY,
    left: rectLocationX + "px",
    ease: Power3,
  });
});
