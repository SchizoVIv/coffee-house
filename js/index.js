// alert("Привет, я еще не завершила работу, но думаю к вечеру все исправлю, если можно, то прошу проверить работу позже, до дедлайна) как сигнал готовности будет исчезновение этого сообщения)))) или можете написать в телеграмм/дискорд и я сама вам сообщу") 

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("burger").addEventListener("click", function () {
      document.querySelector("header").classList.toggle("active")
    })
  });
  
  document.querySelector("nav>ul").addEventListener("click", function() {
    document.querySelector("header").classList.remove("active")
  })
  
  document.querySelector("main").addEventListener("click", function() {
    document.querySelector("header").classList.remove("active")
   })

