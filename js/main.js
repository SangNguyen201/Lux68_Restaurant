let hiddenMenu = document.querySelector(".s-hidden-bar");
let buttonOpen = document.getElementById("openMenu");
let buttonClose = document.getElementById("closeMenu");
let openLayer = document.querySelector(".s-layer-hidden");
let buttonLayer = document.getElementById("openMenu");
buttonOpen.addEventListener("click", () => {
  hiddenMenu.classList.add("open-menu");
});
buttonClose.addEventListener("click", () => {
  hiddenMenu.classList.remove("open-menu");
  openLayer.classList.remove("layer");
});
// layer header and remove class hidden menu
buttonLayer.addEventListener("click", () => {
  openLayer.classList.add("layer");
});
openLayer.addEventListener("click", () => {
  openLayer.classList.remove("layer");
});
// remove DOM s-hidden-bar
openLayer.addEventListener("click", () => {
  hiddenMenu.classList.remove("open-menu");
});
// end DOM header
$(".autoplay").slick({
  lazyLoad: "ondemand",
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: true,
  dots: false,
  responsive: [
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 2,
      },
    },
  ],
});
// scrool header
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  const headerMid = document.querySelector(".header-mid");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    headerMid.classList.add("fixed");
  } else {
    headerMid.classList.remove("fixed");
  }
}

const listTabMenu = document.querySelectorAll(".s-selection .all-day ul li");
listTabMenu.forEach((li) => {
  li.addEventListener("click", () => {
    listTabMenu.forEach((element) => {
      element.classList.remove("active");
    });
    li.classList.add("active");
  });
});
