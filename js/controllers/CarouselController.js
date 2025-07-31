export default class CarouselController {
  constructor(view) {
    this.view = view;
    this.images = [
      "foto-1.jpeg",
      "foto-2.jpeg",
      "foto-3.jpeg",
      "foto-4.jpeg",
      "foto-5.jpeg",
    ];

    this.glide = new Glide(".glide", {
      type: "carousel",
      focusAt: "center",
      perView: 3,
      breakpoints: {
        1024: {
          perView: 1,
        },
      },
      gap: 0,
      autoplay: 2000,
    });

    this.initSlides();
    this.initGlide();
  }

  initGlide() {
    this.glide.mount();
  }

  initSlides() {
    this.images.forEach((image, i) => {
      this.view.carouselContainer.insertAdjacentHTML(
        "beforeend",
        `<li class="glide__slide"><img src="/assets/${image}" alt="Team H2O" /></li>`
      );
    });
  }
}
