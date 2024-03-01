let refresh = document.querySelector(".menu__refresh")

refresh.addEventListener("click", function () {
  let tempList = document.querySelectorAll(".menu__item")
  console.log(tempList[7])
  tempList[7].style.display = "block"
  tempList[6].style.display = "block"
  tempList[5].style.display = "block"
  tempList[4].style.display = "block"

  refresh.classList.add("menu__refresh_hidden")
})