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
