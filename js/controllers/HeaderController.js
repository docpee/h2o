export default class HeaderController {
  constructor(view) {
    this.view = view;

    this.initAnimations();
  }

  initAnimations() {
    this.timeline = gsap.timeline({ delay: 0.75 });

    this.timeline.from(this.view.headerLogo, {
      duration: 1,
      opacity: 0,
      scale: 0.95,
      y: 50,
      ease: "power1.inOut",
    });

    this.timeline.from(
      this.view.headerSottotitolo,
      {
        duration: 1,
        opacity: 0,
        scale: 0.95,
        y: 10,
        delay: 0.75,
        ease: "power2.out",
      },
      "-=0.8"
    );

    this.timeline.from(this.view.headerUnderline, {
      "--after-scale": 0.5,
      "--after-opacity": 0,
      duration: 1,
    });
  }
}
