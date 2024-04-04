let imgLeft = document.querySelector(".img_header_right");
let imgRight = document.querySelector(".img_header_left");
let card_analytic = document.querySelector(".card_analytics")


window.addEventListener('scroll', ()=>{
        let value = window.scrollY;
        imgLeft.style.left = value * 1.1 + 'px';
        imgRight.style.right = value * 1.1 + 'px'; 
        card_analytic.style.marginTop = value / 9.3 + 'px'; 
})