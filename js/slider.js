const scrollConteiner = document.querySelector(
    ".scroll__conteiner"
  );
  const scrollList = document.querySelector(".scroll__list");
  
  const sliders = document.querySelectorAll(".favourites-coffee__item-page");
  
  const buttonLeft = document.querySelector(
    ".scroll__arrow_left"
  );
  const buttonRight = document.querySelector(
    ".scroll__arrow_right"
  );
  const itemWrapperHover = document.querySelector(
    ".slider-content__item-wrapper:hover"
  );
  


  function sliderClass(a){
    sliders[0].childNodes[1].classList.remove("activePoint");
        sliders[1].childNodes[1].classList.remove("activePoint");
        sliders[2].childNodes[1].classList.remove("activePoint");
        sliders[a].childNodes[1].classList.add("activePoint");
  }

  let offset = 0;
  let currentOffset = 0;
  let offsetControls = 0;
  
  buttonLeft.addEventListener("click", moveLeft);
  buttonRight.addEventListener("click", moveRight);


  sliders[0].childNodes[1].classList.add("activePoint");

  let moveSliderInInfinity = setInterval(() => {
    offset -= 480;
    if (offset < 0) {
      offset = 960;
    }
  
    scrollList.style.left = -offset + "px";
  }, "5000");
console.log(sliders[0].childNodes[1])
  setInterval(() => {
    if (offset === currentOffset) {
    } else {
      currentOffset = offset;
      if (offset === 0) {
        sliderClass(0)
      } else if (offset === 480) {
        sliderClass(1)
      } else if (offset === 960) {
        sliderClass(2)
      }
    }
    if (itemWrapperHover !== null) {
      document.querySelector(".activePoint").style.animationPlayState =
        "paused";
      ("paused");
    }
  }, "1");
  
  function moveLeft() {
    offset -= 480;
    if (offset < 0) {
      offset = 960;
    }
  
    scrollList.style.left = -offset + "px";
  }
  
  function moveRight() {
    offset += 480;
    if (offset > 960) {
      offset = 0;
    }
    scrollList.style.left = -offset + "px";
  }


//   mobile
  // scrollConteiner.addEventListener("touchstart",
  //   handleTouchStart,
  //   false
  // );
  // scrollConteiner.addEventListener("touchmove",         
  //   handleTouchMove, 
  //   false);
  
  // let x1 = null;
  // let y1 = null;
  
  // function handleTouchStart(event) {
  //   const firstTouches = event.touches[0];
  
  //   x1 = firstTouches.clientX;
  //   y1 = firstTouches.clientY;
  //   console.log(y1, x1);
  // }
  // function handleTouchMove(event) {
  //   if (!x1 || !y1) {
  //     return false;
  //   }
  //   let x2 = event.touches[0].clientX;
  //   let y2 = event.touches[0].clientY;
  //   console.log(y2, x2);
  //   let xDiff = x2 - x1;
  //   let yDiff = y2 - y1;
  //   if (Math.abs(xDiff) > Math.abs(yDiff)) {
  //     if (xDiff > 0) {
  //       offset += 480;
  //       if (offset > 960) {
  //         offset = 0;
  //       }
  //       scrollList.style.left = -offset + "px";
  //     } else {
  //       offset -= 480;
  //       if (offset < 0) {
  //         offset = 960;
  //       }
  
  //       scrollList.style.left = -offset + "px";
  //     }
  //   } else {
  //     if (yDiff > 0) console.log("down");
  //     else console.log("top");
  //   }
  //   x1 = null;
  //   y1 = null;
  // }