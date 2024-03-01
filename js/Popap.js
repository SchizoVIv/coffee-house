const buttonClose = document.querySelector(".popup__button-close");
const popup = document.querySelector(".popup");


const inputList = popup.querySelectorAll(".popup__item")
const lableList = popup.querySelectorAll(".popup__item")
const addList = popup.querySelectorAll("input[name='top']")
const sizeList = popup.querySelectorAll("input[name='size']")


const buttonTopS = popup.querySelector(".popup__item_s")
const buttonTopM = popup.querySelector(".popup__item_m")
const buttonTopL = popup.querySelector(".popup__item_l")

let totalPopap = popup.querySelector(".popup__money")

let a = "0"



function idiotizm() {
  let nameText = popup.querySelector(".popup__title").textContent
  if(nameText === "Red velvet" || nameText === "Creme brulee") {
    a = "4.00"
    console.log(a)
    console.log("tyt")
  } else if(nameText === "Espresso" || nameText === "Moroccan" || nameText === "Cheesecakes" || nameText === "Pancakes"  || nameText === "Honey cake") {
    a = "4.50"
  } else if(nameText === "Ice cappuccino" || nameText === "Ginger" || nameText === "Cranberry") {
    a = "5.00"
  } else if(nameText === "Honey raf" || nameText === "Latte" || nameText === "Latte macchiato" || nameText === "Sea buckthorn"  || nameText === "Chocolate cake") {
    a = "5.50"
  } else if(nameText === "Coffee with cognac" || nameText === "Black forest") {
    a = "6.50"
  } else if(nameText === "Marble cheesecake") {
    a = "3.50"
  } else if(nameText === "Irish coffee" || nameText === "Kahlua coffee") {
    a = "7.00"
  }
}

function calc() {
  
  
  idiotizm()
  let start = parseFloat(a.replace(',', '.'))
  let totalPrice = Number(start)

  for( const radio of sizeList) {
    if(radio.checked === true) {
      let sizeNum = parseFloat(radio.value.replace(',', '.'))
      totalPrice = totalPrice + Number(sizeNum)
      let lebelS = document.querySelector("#label-s")
      let lebelM = document.querySelector("#label-m")
      let lebelL = document.querySelector("#label-l")

      if(radio.id === "size-s") {
        lebelS.classList.add("popup__item_active")
        
        lebelM.classList.remove("popup__item_active")
        lebelL.classList.remove("popup__item_active")


        document.querySelector(".popup__letter_s").classList.add("circle_active")
        document.querySelector(".popup__letter_m").classList.remove("circle_active")
        document.querySelector(".popup__letter_l").classList.remove("circle_active")
        
        
      } else if (radio.id === "size-m") {
        lebelM.classList.add("popup__item_active")

        lebelS.classList.remove("popup__item_active")
        lebelL.classList.remove("popup__item_active")


        document.querySelector(".popup__letter_s").classList.remove("circle_active")
        document.querySelector(".popup__letter_m").classList.add("circle_active")
        document.querySelector(".popup__letter_l").classList.remove("circle_active")
        
      } else if (radio.id === "size-l") {
        lebelL.classList.add("popup__item_active")

        lebelM.classList.remove("popup__item_active")
        lebelS.classList.remove("popup__item_active")

        document.querySelector(".popup__letter_s").classList.remove("circle_active")
        document.querySelector(".popup__letter_m").classList.remove("circle_active")
        document.querySelector(".popup__letter_l").classList.add("circle_active")
      }
    }
    

    
  }


  for(const check of addList) {
    if(check.checked === true) {
      let addNum = parseFloat(check.value.replace(',', '.'))
      console.log(check)
      totalPrice = totalPrice + Number(addNum)
      if(check.id === "top-1") {
        document.querySelector("#popup-style-1").classList.add("popup__item_active")
        document.querySelector(".popup__letter_1").classList.add("circle_active")
        
      } else if (check.id === "top-2") {
        document.querySelector("#popup-style-2").classList.add("popup__item_active")
        document.querySelector(".popup__letter_2").classList.add("circle_active")
        
      } else if (check.id === "top-3") {
        document.querySelector("#popup-style-3").classList.add("popup__item_active")
        document.querySelector(".popup__letter_3").classList.add("circle_active")
      }
    }
    
    if(check.checked === false) {
      if(check.id === "top-1") {
        document.querySelector("#popup-style-1").classList.remove("popup__item_active")
        document.querySelector(".popup__letter_1").classList.remove("circle_active")

      } else if (check.id === "top-2") {
        document.querySelector("#popup-style-2").classList.remove("popup__item_active")
        document.querySelector(".popup__letter_2").classList.remove("circle_active")
        
      } else if (check.id === "top-3") {
        document.querySelector("#popup-style-3").classList.remove("popup__item_active")
        document.querySelector(".popup__letter_3").classList.remove("circle_active")
      }
    }
  }

  


  let theEnd = totalPrice.toFixed(2)
  const formater = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', currencyDisplay: 'narrowSymbol'}).format(theEnd)
  return formater
}


for(const input of inputList) {
  input.addEventListener("input", function (e) {
    let end = calc()
    totalPopap.textContent = end
  })
}








buttonClose.onclick = () => {
  addList.forEach((el) => {
    el.checked = false
  })
  document.querySelector(".page").classList.remove("no-scroll")
  popup.querySelector(".popup__item_s").checked = true
  document.querySelector("#popup-style-1").classList.remove("popup__item_active")
  document.querySelector("#popup-style-2").classList.remove("popup__item_active")
  document.querySelector("#popup-style-3").classList.remove("popup__item_active")
  document.querySelector("#label-m").classList.remove("popup__item_active")
  document.querySelector("#label-l").classList.remove("popup__item_active")
  popup.classList.add("popup_hidden")

  document.querySelector(".popup__letter_s").classList.add("circle_active")
  document.querySelector(".popup__letter_m").classList.remove("circle_active")
  document.querySelector(".popup__letter_l").classList.remove("circle_active")

  document.querySelector(".popup__letter_1").classList.remove("circle_active")
  document.querySelector(".popup__letter_2").classList.remove("circle_active")
  document.querySelector(".popup__letter_3").classList.remove("circle_active")
}



const popupInfo = (card) => {
  popup.querySelector(".popup__item_s").checked = true
  document.querySelector("#label-s").classList.add("popup__item_active")
  popup.querySelector("#popup-img").src = card.image;
  popup.querySelector("#popup-img").alt = card.name;
  popup.querySelector(".popup__title").textContent = card.name;
  popup.querySelector(".popup__subtitle").textContent = card.description;
  popup.querySelector(".popup__item_s").textContent = card.sizes.s.size;
  popup.querySelector(".popup__item_s").value = card.sizes.s.surcharge;
  popup.querySelector(".popup__item_m").textContent = card.sizes.m.size;
  popup.querySelector(".popup__item_m").value = card.sizes.m.surcharge;
  popup.querySelector(".popup__item_l").textContent = card.sizes.l.size;
  popup.querySelector(".popup__item_l").value = card.sizes.l.surcharge;
  popup.querySelector(".popup__item_1").textContent = card.additives[0].name;
  popup.querySelector(".popup__item_add_1").value = card.additives[0].surcharge;
  popup.querySelector(".popup__item_2").textContent = card.additives[1].name;
  popup.querySelector(".popup__item_add_2").value = card.additives[1].surcharge;
  popup.querySelector(".popup__item_3").textContent = card.additives[2].name;
  popup.querySelector(".popup__item_add_3").value = card.additives[2].surcharge;
  popup.querySelector(".popup__money").textContent = `$${card.price}`;

  console.log()
}

// const page = document.querySelector(".page")
// page.addEventListener("click", function() {
//   popup.classList.add("popup_hidden")
//   document.querySelector(".page").classList.remove("no-scroll")
//  })



