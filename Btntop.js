const Btn_scrollToTopp = document.querySelector(".Btn_scrollToTop");


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 900 || document.documentElement.scrollTop > 900) {
    Btn_scrollToTopp.style.display = "block";
  } else {
    Btn_scrollToTopp.style.display = "none";
  }
}
Btn_scrollToTopp.addEventListener('click', ()=>{
  window.scrollTo({
   top: 0,
   behavior: 'smooth'
  })
})
