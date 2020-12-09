window.onload = () => {
  const popups = ["newsletter"];

  document.querySelector(
    `#${popups[Math.floor(Math.random() * (popups.length - 0) + 0)]}`
  ).style.display = "block";
};

const hidePopUp = (selector) =>
  (document.querySelector(`#${selector}`).style.display = "none");
