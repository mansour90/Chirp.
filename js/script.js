const toggler = document.querySelector(".navbar__toggler");
const menu = document.querySelector(".navbar__list");

toggler.addEventListener("click", function() {
  if(toggler.classList.contains("open")) {
    toggler.classList.remove("open")
    menu.classList.remove("open")
  }else{
    toggler.classList.add("open");
    menu.classList.add("open");
  }
})

const btnTop = document.getElementById("scroll-to-top");

window.onscroll = function() {
  console.log(this.scrollY)
  this.scrollY >= 600 ? btnTop.classList.add("show") : btnTop.classList.remove("show")
}
btnTop.onclick = function() {
  window.scrollTo({
    top: 0
  });
}