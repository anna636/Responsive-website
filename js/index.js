const nav = $('.nav-menu');
const navigation = $('.navigation');
const openBtn = $('.hamburger');
const closeBtn = $('.close');



const navLeft = nav.position().left;

openBtn.click(function () {
  if (navLeft < 0) {
    navigation.addClass('show');
    nav.addClass('show');
    $('body').addClass('show');

  }

});

closeBtn.on('click', () => {
  if (navLeft < 0) {
    navigation.removeClass('show');
    nav.removeClass('show');
    $('body').removeClass('show');

  }

});


const navHeight = $('.navigation').height();
window.addEventListener("scroll", () => {
  const scrollHeight = window.pageYOffset;
  if (scrollHeight > navHeight) {
    $('.navigation').addClass('fix-nav');
  }
  else {
    $('.navigation').removeClass('fix-nav');
  }
})
