const slideUpIcon = {
  distance: "50%",
  origin: "bottom",
  opacity: 0,
  duration: 1750,
};

const slideUpBtn = {
  distance: "50%",
  origin: "bottom",
  opacity: 0,
  duration: 1500,
  delay: 750,
};

const slideUp = (delay) => {
  return {
    // distance: "50%",
    origin: "bottom",
    opacity: 0,
    duration: 1500,
    delay: delay,
  };
};

// header
ScrollReveal().reveal(".slide-up-btn", slideUpBtn);
ScrollReveal().reveal(".slide-up-icon", slideUpIcon);

// skills
ScrollReveal().reveal(".slide-up-one", slideUp(0));
ScrollReveal().reveal(".slide-up-two", slideUp(250));
ScrollReveal().reveal(".slide-up-three", slideUp(500));
ScrollReveal().reveal(".slide-up-four", slideUp(750));
ScrollReveal().reveal(".slide-up-five", slideUp(1000));
ScrollReveal().reveal(".slide-up-six", slideUp(1250));
ScrollReveal().reveal(".slide-up-seven", slideUp(1500));

// let name = "Print this sentence";

// for (let i = 0; i < name.length; i++) {
//   task(i);
// }

// function task(i) {
//   setTimeout(function () {
//     console.log(name[i]);
//   }, 500 * i);
// }

// const ex = (num) => {
//   return new Promise((resolve, reject) => {
//     if (ex > 4) {
//       resolve(`${num} is more than 4`);
//     } else {
//       reject(`${num} is less than 4`);
//     }
//   });
// };

// const prom = async (boi) => {
//   try {
//     const response = await ex(boi);
//     console.log(response);
//   } catch (error) {
//     console.log(error);
//   }
// };

// prom(8);
