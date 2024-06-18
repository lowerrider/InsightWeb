import Swiper from "swiper/bundle";
import "swiper/css/autoplay";

// import { Application } from "@splinetool/runtime";

// const canvas = document.getElementById("canvas3d");
// const app = new Application(canvas);
// const cyberBtns = document.getElementsByClassName("cybrBtn");
// const cyberTitles = document.getElementsByClassName("cyber-tile");
// const barOrangeRight = document.getElementById("barOrangeRight");
// const barOrangeLeft = document.getElementById("barOrangeLeft");

// app
//   .load("https://prod.spline.design/4Vjf8RHWzTuYKdiG/scene.splinecode")
//   .then(() => {
//     const object = app.findObjectByName("Group");

//     app.emitEvent("start");

//     gsap.set(object.scale, { x: 1, y: 1, z: 1 });
//     gsap.set(object.position, { x: 110, y: 50 });

//     let rotateobject = gsap.to(object.rotation, {
//       y: Math.PI * 2 + object.rotation.y,
//       x: 0,
//       z: 0,
//       duration: 10,
//       repeat: -1,
//       ease: "none",
//     });

//     let rotationProgress = 0;

//     gsap
//       .timeline({
//         scrollTrigger: {
//           trigger: "#part1",
//           start: "top 60%",
//           end: "bottom bottom",
//           scrub: true,
//           onEnter: () => {
//             rotationProgress = rotateobject.progress();

//             rotateobject.pause();
//             gsap.to(object.rotation);
//           },
//           onLeaveBack: () => {
//             const newProgress = object.rotation.y / (Math.PI * 2);
//             rotateobject.progress(newProgress).resume();
//           },
//         },
//       })
//       .to(object.rotation, { x: -Math.PI / 14, z: Math.PI / 36 }, 0)
//       .to(object.position, { x: -500, y: -200 }, 0)
//       .to(object.scale, { x: 3, y: 3, z: 3 }, 0);

//     gsap
//       .timeline({
//         scrollTrigger: {
//           trigger: "#part2",
//           start: "top bottom",
//           end: "center bottom",
//           scrub: true,
//         },
//       })
//       .to(object.rotation, { x: Math.PI / 36, y: -Math.PI / 10 }, 0)
//       .to(object.position, { x: 150, y: 50 }, 0)
//       .to(object.scale, { x: 0.8, y: 0.8, z: 0.8 }, 0);

//     gsap
//       .timeline({
//         scrollTrigger: {
//           trigger: "#part3",
//           start: "top bottom",
//           end: "bottom bottom",
//           scrub: true,
//         },
//       })
//       .to(object.position, { x: 0, y: 0 }, 0);
//   });

// NEW ANIMATION

// second ANIMATION

// import { Application } from "@splinetool/runtime";

// const canvas = document.getElementById("canvas3d");
// const app = new Application(canvas);
// app.load("https://prod.spline.design/SwGUf5Yv7x5imq22/scene.splinecode");

// second ANIMATION

// NEW ANIMATION
import { Application } from "@splinetool/runtime";

const canvas = document.getElementById("canvas3d");
const app = new Application(canvas);
app.load("https://prod.spline.design/Zv5ex1qCxfwDEjRx/scene.splinecode");
// background progress bar
function animateBar(triggerElement, onEnterWidth, onLeaveBackWidth, className) {
  gsap.to(className, {
    scrollTrigger: {
      trigger: triggerElement,
      start: "bottom bottom",
      end: "bottom bottom",
      scrub: true,

      onEnter: () => {
        gsap.to(className, {
          width: onEnterWidth,
          duration: 0.2,
          ease: "none",
        });
      },
      onLeaveBack: () => {
        gsap.to(className, {
          width: onLeaveBackWidth,
          duration: 0.2,
          ease: "none",
        });
      },
    },
  });
}

animateBar("#hero", "35%", "0%", ".barOrangeRight");
animateBar("#part1", "0%", "35%", ".barOrangeRight");
animateBar("#part2", "0%", "0%", ".barOrangeRight");

animateBar("#hero", "0%", "0%", ".barOrangeLeft");
animateBar("#part1", "55%", "0%", ".barOrangeLeft");
animateBar("#part2", "0%", "55%", ".barOrangeLeft");

// const swiper = new Swiper(".swiper-container", {
//   autoplay: {
//     delay: 5000,
//   },
//   effect: "coverflow",
//   grabCursor: true,
//   centeredSlides: true,
//   slidesPerView: "auto",
//   coverflowEffect: {
//     rotate: 20,
//     stretch: 0,
//     depth: 350,
//     modifier: 1,
//     slideShadows: true,
//   },
//   pagination: {
//     el: ".swiper-pagination",
//   },
// });

const swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 500000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const observer = new MutationObserver(function (mutations) {
  mutations.forEach(function (mutation) {
    if (
      mutation.attributeName === "style" &&
      mutation.target.id === "barOrangeRight"
    ) {
      for (let el of cyberBtns) {
        if (mutation.target.style.width === "35%") {
          el.classList.remove("cybrBtnOrange");
        } else {
          el.classList.add("cybrBtnOrange");
        }
      }
    }

    if (
      mutation.attributeName === "style" &&
      mutation.target.id === "barOrangeLeft"
    ) {
      for (let el of cyberTitles) {
        if (mutation.target.style.width === "55%") {
          el.classList.remove("cybrTitleOrange");
        } else {
          el.classList.add("cybrTitleOrange");
        }
      }
    }
  });
});

const observerConfig = {
  attributes: true,
  attributeFilter: ["style"],
};

observer.observe(barOrangeRight, observerConfig);
observer.observe(barOrangeLeft, observerConfig);
