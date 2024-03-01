scrollConteiner.addEventListener("touchstart",
    handleTouchStart,
    false
  );
  scrollConteiner.addEventListener("touchmove",         
    handleTouchMove, 
    false);
  
  let x1 = null;
  let y1 = null;
  
  function handleTouchStart(event) {
    const firstTouches = event.touches[0];
  
    x1 = firstTouches.clientX;
    y1 = firstTouches.clientY;
    console.log(y1, x1);
  }
  function handleTouchMove(event) {
    if (!x1 || !y1) {
      return false;
    }
    let x2 = event.touches[0].clientX;
    let y2 = event.touches[0].clientY;
    console.log(y2, x2);
    let xDiff = x2 - x1;
    let yDiff = y2 - y1;
    if (Math.abs(xDiff) > Math.abs(yDiff)) {
      if (xDiff > 0) {
        offset += 480;
        if (offset > 960) {
          offset = 0;
        }
        scrollList.style.left = -offset + "px";
      } else {
        offset -= 480;
        if (offset < 0) {
          offset = 960;
        }
  
        scrollList.style.left = -offset + "px";
      }
    } else {
      if (yDiff > 0) console.log("down");
      else console.log("top");
    }
    x1 = null;
    y1 = null;
  }