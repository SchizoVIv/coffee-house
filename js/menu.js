const buttonTea = document.querySelector(".menu__button-tea")
const buttonCoffee = document.querySelector(".menu__button-coffee")
const buttonDesserts = document.querySelector(".menu__button-desert")
const elements = document.querySelectorAll(".menu__item")


const cardsDelete = () => {
    let cards = list.querySelectorAll(".menu__item")
    cards.forEach(el => {
        el.remove()
    })
}

buttonTea.addEventListener("click", function () {
    // refresh.classList.add("menu__refresh_hidden")
    setTimeout(function() {
        let cardListTea = template.content.querySelectorAll(".menu__item")
        if(cardListTea.length <= 4){
            refresh.classList.add("menu__refresh_hidden")
        } else {
            
            refresh.classList.remove("menu__refresh_hidden")
        }
    }, 3000);

    buttonTea.classList.add("menu__button-active")
    buttonCoffee.classList.remove("menu__button-active")
    buttonDesserts.classList.remove("menu__button-active")

    buttonTea.querySelector(".menu__button-circle").classList.add("circle_active")
    buttonCoffee.querySelector(".menu__button-circle").classList.remove("circle_active")
    buttonDesserts.querySelector(".menu__button-circle").classList.remove("circle_active")
    categ = "tea";
    cardsDelete()
    renderCard()
} )

buttonDesserts.addEventListener("click", function () {
    refresh.classList.remove("menu__refresh_hidden")
    setTimeout(function() {
        // let cardListDess = template.content.querySelectorAll(".menu__item")
        // console.log(cardListDess.length)
        // console.log(cardListDess)
        // if(cardListDess.length <= 4){
        //     refresh.classList.add("menu__refresh_hidden")
        // } else {
            
        //     refresh.classList.remove("menu__refresh_hidden")
        // }
    }, 2000);
    

    buttonTea.classList.remove("menu__button-active")
    buttonCoffee.classList.remove("menu__button-active")
    buttonDesserts.classList.add("menu__button-active")

    buttonTea.querySelector(".menu__button-circle").classList.remove("circle_active")
    buttonCoffee.querySelector(".menu__button-circle").classList.remove("circle_active")
    buttonDesserts.querySelector(".menu__button-circle").classList.add("circle_active")
    categ = "dessert";
    cardsDelete()
    renderCard()
} )

buttonCoffee.addEventListener("click", function () {
    refresh.classList.remove("menu__refresh_hidden")

    // setTimeout(function() {
    //     let cardListCoffee = template.content.querySelectorAll(".menu__item")
    //     if(cardListCoffee.length <= 4){
    //         refresh.classList.add("menu__refresh_hidden")
    //     } else {
            
    //         refresh.classList.remove("menu__refresh_hidden")
    //     }
    // }, 3000);

    buttonTea.classList.remove("menu__button-active")
    buttonCoffee.classList.add("menu__button-active")
    buttonDesserts.classList.remove("menu__button-active")

    buttonTea.querySelector(".menu__button-circle").classList.remove("circle_active")
    buttonCoffee.querySelector(".menu__button-circle").classList.add("circle_active")
    buttonDesserts.querySelector(".menu__button-circle").classList.remove("circle_active")
    categ = "coffee";
    cardsDelete()
    renderCard()
} )


