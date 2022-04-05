


function onClickMenu(){
  document.getElementById("menu").classList.toggle("change");
 document.getElementById("nav").classList.toggle("change");
 }

const menuOpen = document.querySelector('.menuopen');
const menuClose = document.querySelector('.menuclose');
const nav = document.querySelector('.nav');
menuOpen.addEventListener('click',menuTog);
menuClose.addEventListener('click',menuTog);

function menuTog(e){
    nav.classList.toggle('active')
}


$('h4').click(function(){
  $(this).next('.content').slideToggle();
  $(this).parent().addClass('active');
  $(this).parent().siblings().children('.content').slideUp();
  $(this).parent().siblings().removeClass('active');
})
