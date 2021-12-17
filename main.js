const $ = (selector) => document.querySelector(selector);
const $All = (selector) => document.querySelectorAll(selector);

const $slider = $("#slider");
const $figures = $All(".image-section");

//botones
const $btnPrev = $(".prev");
const $btnNext = $(".next");

const $lastFigure = $figures[$figures.length - 1];

$slider.insertAdjacentElement("afterbegin", $lastFigure);

function Next() {
  let $firtFigure = $All(".image-section")[0];
  $slider.style.marginLeft = "-200%";
  $slider.style.transition = "all 0.5s";
  setTimeout(() => {
    $slider.style.transition = "none";
    $slider.insertAdjacentElement("beforeend", $firtFigure);
    $slider.style.marginLeft = "-100%";
  }, 500);
}

function Prev() {
  let $sliderPrev = $All(".image-section");
  let $figureLast = $sliderPrev[$sliderPrev.length - 1];
  $slider.style.marginLeft = "0";
  $slider.style.transition = "all 0.5s";

  setTimeout(() => {
    $slider.style.transition = "none";
    $slider.insertAdjacentElement("afterbegin", $figureLast);
    $slider.style.marginLeft = "-100%";
  }, 500);
}

$btnNext.addEventListener("click", Next);
$btnPrev.addEventListener("click", Prev);

setInterval(() => {
  Next();
}, 8000);
// Next();
