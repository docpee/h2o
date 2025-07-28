export default class ScheduleController {
  constructor(view) {
    this.view = view;

    this.initAnimations();
  }

  initAnimations() {
    this.timeline = gsap.timeline({ delay: 0.75 });

    this.timeline.from(this.view.scheduleTitolo, {
      opacity: 0,
      y: 10,
      duration: 0.5,
      ease: "power2.out",
    });

    this.timeline.from(this.view.scheduleContainer, {
      duration: 1,
      opacity: 0,
      y: 50,
      ease: "power1.inOut",
    });

    ScrollTrigger.create({
      trigger: this.view.schedule,
      start: "top 85%",
      animation: this.timeline,
      toggleActions: "restart complete complete none",
    });
  }
}
