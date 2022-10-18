const addSlider = (imagePath) => {
  (() => {
    const containerStyle = {
      // top: 0,
      // left: 0,
      // position: "absolute",
      // width: "auto",
      // height: "auto",
      // overflow: "hidden",
    };
    const overlayStyle = {
      // display: "block",
      // width: "100vw",
    };
    const body = document.querySelector("body");
    const imgContainer = document.createElement("DIV");
    const imgOverlay = document.createElement("img");
    const elementStyles = [
      { element: imgContainer, style: containerStyle },
      { element: imgOverlay, style: overlayStyle },
    ];

    imgContainer.classList.add("img-comp-img", "img-comp-overlay");
    elementStyles.forEach(({ element, style }) => {
      for (let prop of Object.keys(style)) {
        element.style[prop.toString()] = style[prop.toString()];
      }
    });

    imgOverlay.src = imagePath;
    imgContainer.appendChild(imgOverlay);
    body.appendChild(imgContainer);
  })();

  (() => {
    var x, i;
    const sliders = document.querySelectorAll(".img-comp-slider");
    x = document.getElementsByClassName("img-comp-overlay");

    if (sliders.length > 0) {
      sliders.forEach((slider) => {
        slider.remove();
      });
    }

    for (i = 0; i < x.length; i++) {
      compareImages(x[i]);
    }

    function compareImages(img) {
      const slider = document.createElement("DIV");
      const sliderStyle = {
        position: "absolute",
        zIndex: "9",
        cursor: "ew-resize",
        width: "40px",
        height: "40px",
        backgroundColor: "#2196f3",
        opacity: "0.5",
        borderRadius: "50%",
        top: "50vh",
        left: "calc(25vw - 20px)",
      };
      for (let prop of Object.keys(sliderStyle)) {
        slider.style[prop.toString()] = sliderStyle[prop.toString()];
      }

      let { offsetWidth: w, offsetHeight: h } = img;
      let clicked = 0;

      slider.setAttribute("class", "img-comp-slider");
      // slider.style.left = w / 2 - slider.offsetWidth / 2 + "px";
      // slider.style.top = h / 2 - slider.offsetHeight / 2 + "px";

      img.style.width = w / 4 + "px";
      img.parentElement.insertBefore(slider, img);

      slider.addEventListener("mousedown", slideReady);
      window.addEventListener("mouseup", slideFinish);
      slider.addEventListener("touchstart", slideReady);
      window.addEventListener("touchend", slideFinish);

      function slideReady(e) {
        e.preventDefault();
        clicked = 1;
        window.addEventListener("mousemove", slideMove);
        window.addEventListener("touchmove", slideMove);
      }

      function slideFinish() {
        clicked = 0;
      }

      function slideMove(e) {
        var pos;
        if (clicked == 0) return false;
        pos = getCursorPos(e);
        if (pos < 0) pos = 0;
        if (pos > w) pos = w;
        slide(pos);
      }

      function getCursorPos(e) {
        var a,
          x = 0;
        e = e.changedTouches ? e.changedTouches[0] : e;
        a = img.getBoundingClientRect();
        x = e.pageX - a.left;
        x = x - window.pageXOffset;
        return x;
      }

      function slide(x) {
        img.style.width = x + "px";
        slider.style.left = img.offsetWidth - slider.offsetWidth / 2 + "px";
      }
    }
  })();
};

// addSlider("/design/desktop-design.jpg");
// addSlider("/design/active-states.jpg");
addSlider("/design/mobile-design.jpg");

/* ------------------------------------------ */
// .img-comp-img.img-comp-overlay {
//   @apply top-0 left-0 absolute w-auto h-auto overflow-hidden text-left;
// }

// .img-comp-img img {
//   @apply block h-screen w-screen max-w-none left-0;
// }
/* ------------------------------------------ */
