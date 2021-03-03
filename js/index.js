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

// Skills section view more ///////////////////////////
jQuery(document).ready(function () {
  // If more than 4  skill-collection-container, hide the remaining
  $(".skill-collection-container .skill-individual-container")
    .slice(0, 4)
    .addClass("shown");

  $(".skill-collection-container .skill-individual-container")
    .not(".shown")
    .hide();
  $(".showMore").on("click", function () {
    $(".skill-collection-container .skill-individual-container")
      .not(".shown")
      .toggle(300);
    $(this).toggleClass("showLess");
  });
});
