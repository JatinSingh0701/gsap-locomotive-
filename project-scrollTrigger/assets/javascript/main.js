gsap.to("#page2 h1", {
  transform: "translateX(-125%)",
  scrollTrigger: {
    trigger: "#page2 h1",
    scroller: "body",
    scrub: 5,
    markers: "true",
    start: "top 0",
    end: "top -100%",
    pin: true,
  },
});
