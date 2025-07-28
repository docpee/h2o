export default class BJJController {
  constructor(view) {
    this.view = view;

    this.initAnimations();
  }

  initAnimations() {
    this.timeline = gsap.timeline({ delay: 0.75 });

    this.timeline.from(this.view.bjjTitolo, {
      opacity: 0,
      y: 10,
      duration: 0.5,
      ease: "power2.out",
    });

    this.timeline.from(this.view.bjjTesto, {
      autoAlpha: 0,
      y: 50,
      duration: 1,
      ease: "power2.out",
    });

    this.timeline.from(this.view.bjjEvidenzia, {
      "--after-scale": 0,
      "--after-opacity": 0,
      duration: 0.25,
      ease: "power2.out",
      stagger: 0.1,
    });

    ScrollTrigger.create({
      trigger: this.view.bjj,
      start: "top 85%",
      animation: this.timeline,
      toggleActions: "restart complete complete none",
    });
  }
}
