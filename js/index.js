import HeaderView from "./views/HeaderView.js";
import HeaderController from "./controllers/HeaderController.js";

import ChiSiamoView from "./views/ChiSiamoView.js";
import ChiSiamoController from "./controllers/ChiSiamoController.js";

import ScheduleView from "./views/ScheduleView.js";
import ScheduleController from "./controllers/ScheduleController.js";

import BJJView from "./views/BJJView.js";
import BJJController from "./controllers/BJJController.js";

document.addEventListener("DOMContentLoaded", (event) => {
  try {
    gsap.registerPlugin(ScrollTrigger, SplitText);

    gsap.set("body", { autoAlpha: 1 });

    const glide = new Glide(".glide", {
      type: "carousel",
      focusAt: "center",
      perView:
        window.innerWidth <= 768
          ? 1
          : window.innerWidth > 768 && window.innerWidth <= 1024
          ? 2
          : 3,
      gap: 0,
      autoplay: 2000,
    });
    glide.mount();

    // Hero section
    const headerView = new HeaderView();
    new HeaderController(headerView);

    // Chi-siamo section
    const chiSiamoView = new ChiSiamoView();
    new ChiSiamoController(chiSiamoView);

    // Schedule section
    const scheduleView = new ScheduleView();
    new ScheduleController(scheduleView);

    // BJJ section
    const bjjView = new BJJView();
    new BJJController(bjjView);
  } catch (error) {
    console.error("Errore durante l'inizializzazione dell'app:", error);
  }
});
