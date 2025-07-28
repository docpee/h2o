export default class ChiSiamoController {
  constructor(view) {
    this.view = view;

    this.initAnimations();
  }

  initAnimations() {
    this.timeline = gsap.timeline({ delay: 0.75 });

    this.timeline.from(this.view.chiSiamoTitolo, {
      opacity: 0,
      y: 10,
      duration: 0.5,
      ease: "power2.out",
    });

    this.timeline.from(this.view.chiSiamoTesto, {
      autoAlpha: 0,
      y: 50,
      duration: 1,
      ease: "power2.out",
    });

    this.timeline.from(this.view.chiSiamoEvidenzia, {
      "--after-scale": 0,
      "--after-opacity": 0,
      duration: 0.25,
      ease: "power2.out",
      stagger: 0.1,
    });

    ScrollTrigger.create({
      trigger: this.view.chiSiamo,
      start: "top 85%",
      animation: this.timeline,
      toggleActions: "restart complete complete none",
    });
  }
}
