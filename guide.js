const levelA = document.querySelector(".level-1-div");
const input1 = document.querySelector("#input-1");
const btn1 = document.querySelector(".btn-1");

const levelB = document.querySelector(".level-2-div");
const input2 = document.querySelector("#input-2");
const btn2 = document.querySelector(".btn-2");

const levelC = document.querySelector(".level-3-div");
const input3a = document.querySelector("#input-3a");
const input3b = document.querySelector("#input-3b");
const btn3 = document.querySelector(".btn-3");

const levelD = document.querySelector(".level-4-div");
const input4a = document.querySelector("#input-4a");
const input4b = document.querySelector("#input-4b");
const btn4 = document.querySelector(".btn-4");

btn1.addEventListener("click", function (e) {
  const styleValue = input1.value.trim(); // Get the user-entered style value

  if (styleValue) {
    levelA.style.cssText = styleValue;
  }
  if (
    styleValue == "justify-content: end" ||
    styleValue == "justify-content:end"
  ) {
    document.querySelector(".level-1").classList.add("hidden");
    document.querySelector(".level-2").classList.remove("hidden");
  }
});

btn2.addEventListener("click", function (e) {
  const styleValue = input2.value.trim();

  if (styleValue) {
    levelB.style.cssText = styleValue;
  }
  if (
    styleValue == "align-items: flex-end" ||
    styleValue == "align-items: end" ||
    styleValue == "align-items:end" ||
    styleValue == "align-items:flex-end"
  ) {
    document.querySelector(".level-2").classList.add("hidden");
    document.querySelector(".level-3").classList.remove("hidden");
  }
});

btn3.addEventListener("click", function (e) {
  const styleValueA = input3a.value.trim();
  const styleValueB = input3b.value.trim();

  let combinedStyles = "";

  if (styleValueA) {
    combinedStyles += styleValueA + "; ";
  }
  if (styleValueB) {
    combinedStyles += styleValueB + "; ";
  }

  levelC.style.cssText = combinedStyles.trim();

  if (
    (styleValueA === "justify-content: end" &&
      styleValueB === "align-items: flex-end") ||
    (styleValueB === "justify-content: end" &&
      styleValueA === "align-items: flex-end") || (styleValueA === "justify-content:end" &&
      styleValueB === "align-items:flex-end") || (styleValueA === "justify-content: end" &&
      styleValueB === "align-items: end") || (styleValueA === "justify-content:end" &&
      styleValueB === "align-items:end")
  ) {
    document.querySelector(".level-3").classList.add("hidden");
    document.querySelector(".level-4").classList.remove("hidden");
  }
});

btn4.addEventListener("click", function (e) {
  const styleValueA = input4a.value.trim();
  const styleValueB = input4b.value.trim();

  const combinedStyles = styleValueA + "; " + styleValueB;

  levelD.style.cssText = combinedStyles;

  if (
    (styleValueA === "justify-content: end" &&
      styleValueB === "align-items: center") ||
    (styleValueB === "justify-content: end" &&
      styleValueA === "align-items: center")
  ) {
    document.querySelector(".level-4").classList.add("hidden");
    document.querySelector(".level-5").classList.remove("hidden");
  }
});
