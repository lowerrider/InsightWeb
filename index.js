import IMask from "imask";

const URL = "https://utility.insgt.ru/api/contact-form";

const ERROR_MSG = {
  email: "",
  name: "",
  phone: "",
};

const FORM = document.querySelector("#add-form");

const PHONE_INPUT = document.getElementById("phone");
const EMAIL_INPUT = document.getElementById("email");
const NAME_INPUT = document.getElementById("name");

const FORM_ERROR_LABEL = document.querySelector("#errorMsg");
const FORM_ERROR_MSG = "Необходимо указать телефон или email";

const numberMask = document.getElementById("phone");
const maskOptions = {
  mask: "{+7} (000) 000 - 00 - 00",
  placeholder: " ",
  lazy: true,
};

const mask = new IMask(numberMask, maskOptions);

function removeError(input) {
  const parent = input.parentNode;
  if (parent.classList.contains("error")) {
    parent.querySelector(".error-label").remove();
    parent.classList.remove("error");
  }
}

// function validation(form) {

function createError(input, text) {
  const parent = input.parentNode;
  const errorLabel = document.createElement("label");
  errorLabel.classList.add("error-label");
  errorLabel.textContent = text;
  parent.classList.add("error");
  parent.append(errorLabel);
}
//   let result = true;

// for (const input of ALL_INPUTS) {

// removeError(input);

// if (input.dataset.minLength) {
//   if (input.value.length < input.dataset.minLength) {
//     removeError(input);

//     createError(input, "Неверный номер");
//     result = false;
//   }
// }

// if (input.dataset.required == "true") {
//   if (input.value == "") {
//     createError(input, "Поле не заполнено");
//     result = false;
//   }
// }
// }

function validateForm() {
  for (const key in ERROR_MSG) {
    const errorMessage = ERROR_MSG[key];
    if (errorMessage) {
      const selectInput = FORM.querySelector(`input[name=${key}]`);
      createError(selectInput, errorMessage);
    }
  }
}

async function sendApplication() {
  const sendData = JSON.stringify({
    email: EMAIL_INPUT.value,
    name: NAME_INPUT.value,
    phone: PHONE_INPUT.value,
  });

  try {
    const response = await fetch(URL, {
      method: "POST",
      body: sendData,
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();

    if (json.length) {
      json.forEach(({ field, msg }) => {
        ERROR_MSG[field] = msg;
      });
      validateForm();
    } else {
      // hide form
      document.getElementsByClassName("formCyberpunk")[0].style =
        "display: none";
      document.getElementsByClassName("form_sends")[0].style = "display: flex";
    }
  } catch (error) {
    console.error("Ошибка:", error);
  }
}

function removeFormError() {
  if (FORM_ERROR_LABEL.textContent) {
    FORM_ERROR_LABEL.textContent = "";
    FORM_ERROR_LABEL.classList.remove("form-error");
  }
}

FORM.addEventListener("submit", function (event) {
  event.preventDefault();
  removeError(NAME_INPUT);
  removeError(EMAIL_INPUT);
  removeError(PHONE_INPUT);

  if (!EMAIL_INPUT.value && !PHONE_INPUT.value) {
    FORM_ERROR_LABEL.classList.add("form-error");
    FORM_ERROR_LABEL.textContent = FORM_ERROR_MSG;
    return;
  }
  sendApplication();
});

PHONE_INPUT.addEventListener("change", function () {
  removeFormError();
  removeError(PHONE_INPUT);
});

EMAIL_INPUT.addEventListener("change", function () {
  removeFormError();
  removeError(EMAIL_INPUT);
});

NAME_INPUT.addEventListener("change", function () {
  removeFormError();
  removeError(NAME_INPUT);
});

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

// NEW ANIMATION!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// import { Application } from "@splinetool/runtime";

// const canvas = document.getElementById("canvas3d");
// const app = new Application(canvas);
// app.load("https://prod.spline.design/Zv5ex1qCxfwDEjRx/scene.splinecode");

// background progress bar
// function animateBar(triggerElement, onEnterWidth, onLeaveBackWidth, className) {
//   gsap.to(className, {
//     scrollTrigger: {
//       trigger: triggerElement,
//       start: "bottom bottom",
//       end: "bottom bottom",
//       scrub: true,

//       onEnter: () => {
//         gsap.to(className, {
//           width: onEnterWidth,
//           duration: 0.2,
//           ease: "none",
//         });
//       },
//       onLeaveBack: () => {
//         gsap.to(className, {
//           width: onLeaveBackWidth,
//           duration: 0.2,
//           ease: "none",
//         });
//       },

//     },
//   });
// }

// animateBar("#hero", "35%", "0%", ".barOrangeRight");
// animateBar("#part1", "0%", "35%", ".barOrangeRight");
// animateBar("#part2", "0%", "0%", ".barOrangeRight");

// animateBar("#hero", "0%", "0%", ".barOrangeLeft");
// animateBar("#part1", "55%", "0%", ".barOrangeLeft");
// animateBar("#part2", "0%", "55%", ".barOrangeLeft");

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
// window.addEventListener("resize", resize);

// function resize() {
//   const formImage = document.querySelector(".form__image");
//   formImage.style.height = document.body.scrollHeight + "px";
// }

// resize();
