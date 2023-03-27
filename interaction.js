const circleDivs = document.querySelectorAll(".circle__container");
const submitBTN = document.getElementById("submitBtn");
const ratingSection = document.querySelector(".rating");
const thankYouSection = document.querySelector(".thanks");
const radioButtonsValue = document.getElementsByName("rating");
const ratingForm = document.getElementById("form_rating");
const selectedValue = document.getElementById("calification_selected");

const getRadioValue = () => {
  let value = null;
  radioButtonsValue.forEach((radio) => {
    if (radio.checked) {
      value = radio.value;
    }
  });
  return value;
};

// circleDivs.forEach((circle, i) => {
//   const radioInput = circle.childNodes[1];
//   radioInput.addEventListener("click", () => {
//     for (let j = 0; j < circleDivs.length; j++) {
//       circleDivs[j].classList.toggle("rating__input--selected", j === i);
//     }
//   });
// });

// submitBTN.addEventListener("click", () => {
//   const rating = getRadioValue();
// });

ratingForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const rating = getRadioValue();
  if (rating) {
    ratingSection.style.display = "none";
    thankYouSection.style.display = "unset";
    selectedValue.innerHTML = rating;
  }
});
