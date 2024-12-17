document.querySelector('.btn_calc').onclick = function(evt) {
    evt.preventDefault()
    calcPrice();
};

function calcPrice() {
    let selectProduct = document.getElementById('selectProduct').value;
    let inputQualinty = document.querySelector('.input_qualinty').value;
    let totalBlock = document.querySelector('.total');
    let total = selectProduct * inputQualinty;
    let blockTotal = document.querySelector('.block_total');

    totalBlock.innerHTML = total;
    blockTotal.style.display = 'block';

    if (selectProduct == 0 || inputQualinty == 0) {
        blockTotal.style.display = 'none';
        alert('Укажите значение');
        return;
    }


}

let menuMob = document.querySelector('.menu_mob');
let header = document.querySelector('header');
let nav = document.querySelector('nav');
let menu = document.querySelector('menu');
let closeIcon = document.querySelector('.icon_close');


menuMob.onclick = function() {
    header.classList.add('menu_mob_vissible');
    nav.classList.add('menu_mob_vissible');
    menu.classList.add('menu_mob_vissible');
    closeIcon.style.display = 'block';
    menuMob.style.display = 'none';

};

closeIcon.onclick = function() {
    header.classList.remove('menu_mob_vissible');
    nav.classList.remove('menu_mob_vissible');
    menu.classList.remove('menu_mob_vissible');
    closeIcon.style.display = 'none';
    menuMob.style.display = 'block';

}

let contactPopup = document.getElementById('contacts-popup');
let btnContactPopup = document.querySelectorAll('.btn');

for (let i = 0; i < btnContactPopup.length; i++) {
    btnContactPopup[i].addEventListener('click', function() {
        contactPopup.style.display = "block";
    })
}

document.querySelector('.close_popup').onclick = function() {
    contactPopup.style.display = 'none';
}

document.addEventListener("DOMContentLoaded", function () {
    const top = document.querySelector('.top');

    window.addEventListener("scroll", function () {
      if (window.pageYOffset > 300) {
        top.style.display = "block";
      } else {
        top.style.display = "none";
      }
    });
    top.addEventListener("click", function (event) {
      event.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  });
