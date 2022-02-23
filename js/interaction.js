let toggleSign = document.getElementById('menu');
document.getElementById('open').addEventListener('click', function () {
  toggleSign.style.right = '0';
});
document.getElementById('close').addEventListener('click', function () {
  toggleSign.style.right = '-100%';
});
document.getElementById('close2').addEventListener('click', function () {
  toggleSign.style.right = '-100%';
});
// ----------------------------------------------------------------------------------------------------------------------- DARK MODE
// ----- DARK MODE & LIGHT MODE BUTTONS (D&LB) --- UP
// ------------------------------------------------------------------------------------------- DARK BUTTON UP ^^^
document.getElementById('dark-mode').addEventListener('click', function () {
  document.body.style.cssText = 'background-color: #111111';
  this.style.display = 'none';
  document.getElementById('dark-mode2').style.display = 'none';
  document.getElementById('light-mode').style.display = 'block';
  document.getElementById('light-mode2').style.display = 'block';

  // 1. NFT's logo - please see 'D&LB'
  document.getElementById('white-logo').style.display = 'none';
  document.getElementById('dark-logo').style.display = 'block';
  /* 2. .intro__heading, .auction__heading, .auction__info--item2 a, .auction__info--item2 p span; .intro__btn & .soon__btn (.buttons) - please see 'D&LB */
  document.getElementsByClassName('intro__heading')[0].style.color = '#fff';
  document.getElementsByClassName('auction__heading')[0].style.color = '#fff';
  let allWhite = document.querySelectorAll('.auction__info--item2 a');
  for (let i = 0; i < allWhite.length; i++) {
    allWhite[i].style.color = '#fff';
  }
  let allWhite2 = document.querySelectorAll('.auction__info--item2 p span');
  for (let i = 0; i < allWhite2.length; i++) {
    allWhite2[i].style.color = '#fff';
  }
  let allWhite2a = document.querySelectorAll('.auction__info--item2 p span');
  for (let i = 0; i < allWhite2a.length; i++) {
    allWhite2a[i].style.backgroundColor = 'transparent';
  }
  let allBlack3a = document.querySelectorAll('.buttons');
  for (let i = 0; i < allBlack3a.length; i++) {
    allBlack3a[i].style.cssText = 'background-color: #111; color: #fff';
  }
  // 3. .auction__item
  let allWhite3 = document.querySelectorAll('.auction__item');
  for (let i = 0; i < allWhite3.length; i++) {
    allWhite3[i].style.backgroundColor = '#000';
  }
  // 4. .release__box1 && .release__image1
  let allWhite4 = document.getElementsByClassName('release__box1')[0];
  allWhite4.style.backgroundColor = '#ff8139';
  let allWhite5 = document.getElementsByClassName('release__image1')[0];
  allWhite5.style.backgroundImage =
    'linear-gradient(to top right, #ffa500 20%, #ff3998 150%)';
  // 5. .release__box2 && .release__image2
  let allWhite6 = document.getElementsByClassName('release__box2')[0];
  allWhite6.style.backgroundColor = '#39ffa0';
  let allWhite7 = document.getElementsByClassName('release__image2')[0];
  allWhite7.style.backgroundImage = 'none';
  allWhite7.style.backgroundColor = '#39ffa0';
  // 6. .release__nft-box1
  let allWhite8 = document.getElementsByClassName('release__nft-box1')[0];
  allWhite8.style.cssText = 'background-color: #555;';
  // 7. .release__info--heading, .release__info--para p, .release__nft--para p, .release__info--checkout a
  let allWhite9 = document.querySelectorAll('.release__nft--heading');
  for (let i = 0; i < allWhite9.length; i++) {
    allWhite9[i].style.color = '#fff';
  }
  let allWhite10 = document.querySelectorAll('.release__info--para p');
  for (let i = 0; i < allWhite10.length; i++) {
    allWhite10[i].style.color = '#111';
  }
  let allWhite11 = document.querySelectorAll('.release__nft--para p');
  for (let i = 0; i < allWhite11.length; i++) {
    allWhite11[i].style.color = '#ccc';
  }
  let allWhite12 = document.querySelectorAll('.release__info--checkout a');
  for (let i = 0; i < allWhite12.length; i++) {
    allWhite12[i].style.color = '#111';
  }
  // 8. .soon
  let allWhite13 = document.getElementsByClassName('soon')[0];
  allWhite13.style.backgroundImage = 'none';
  let allWhite14 = document.getElementsByClassName('soon__heading')[0];
  allWhite14.style.color = '#fff';
  let allWhite15 = document.getElementsByClassName('soon__text')[0];
  allWhite15.style.color = '#ccc';
  // 9. .footer
  let allWhite16 = document.getElementsByClassName('footer__exclusive')[0];
  allWhite16.style.color = '#ccc';
  let allWhite17 = document.querySelectorAll('.footer__menu-item--heading');
  for (let i = 0; i < allWhite17.length; i++) {
    allWhite17[i].style.color = '#ccc';
  }
  let allWhite18 = document.querySelectorAll('.footer__menu-item--option a');
  for (let i = 0; i < allWhite18.length; i++) {
    allWhite18[i].style.color = '#ccc';
  }
  let allWhite19 = document.getElementsByClassName('footer__copyright')[0];
  allWhite19.style.color = '#777';
  // 10. viewport >= 768px:
  let viewportWidth = window.innerWidth;
  if (viewportWidth >= 767) {
    let allWhite20 = document.querySelectorAll('.auction__info--item2 p span');
    for (let i = 0; i < allWhite20.length; i++) {
      allWhite20[i].style.backgroundColor = 'transparent';
    }
    let allWhite21 = document.querySelectorAll('.release__box');
    for (let i = 0; i < allWhite21.length; i++) {
      allWhite21[i].style.backgroundImage = 'none';
    }
    let allWhite22 = document.getElementsByClassName('release__image1')[0];
    allWhite22.style.backgroundImage = 'none';
    let allWhite23 = document.getElementsByClassName('release__item1')[0];
    allWhite23.style.color = '#fff';
  }
  if (viewportWidth >= 1279) {
    let allWhite24 = document.querySelector('.intro__btn-2 a');
    allWhite24.style.color = '#fff';
    let allWhite25 = document.getElementsByClassName('release__nft-box2')[0];
    allWhite25.style.backgroundColor = '#555';
  }
  // 11. menu sidebar
  let allWhite26 = document.getElementById('menu');
  allWhite26.style.backgroundColor = '#111';
  let allWhite27 = document.getElementsByClassName('logo-white')[0];
  allWhite27.style.display = 'none';
  let allWhite28 = document.getElementsByClassName('logo-dark')[0];
  allWhite28.style.display = 'block';
  let allWhite29 = document.getElementById('close2');
  allWhite29.style.display = 'block';
  let allWhite30 = document.getElementById('close');
  allWhite30.style.display = 'none';
  let allWhite31 = document.querySelectorAll('.menu__list--item span');
  for (let i = 0; i < allWhite31.length; i++) {
    allWhite31[i].style.color = '#fff';
  }
  let allWhite32 = document.querySelector('.menu__list--item a');
  allWhite32.style.color = '#fff';

  let allWhite33 = document.querySelectorAll('.menu__list--img');
  for (let i = 0; i < allWhite33.length; i++) {
    allWhite33[i].style.display = 'none';
  }
  let allWhite34 = document.querySelectorAll('.menu__list--img-white');
  for (let i = 0; i < allWhite34.length; i++) {
    allWhite34[i].style.display = 'block';
  }

  let allWhite35 = document.querySelectorAll('.menu-image');
  for (let i = 0; i < allWhite35.length; i++) {
    allWhite35[i].style.display = 'none';
  }
  let allWhite36 = document.querySelectorAll('.menu-image-white');
  for (let i = 0; i < allWhite36.length; i++) {
    allWhite36[i].style.display = 'block';
  }

  let allWhite37 = document.querySelectorAll('.menu__dropdown--item a');
  for (let i = 0; i < allWhite37.length; i++) {
    allWhite37[i].style.color = '#fff';
  }
});

// ------------------------------------------------------------------------------------------- LIGHT BUTTON UP ^^^
document.getElementById('light-mode').addEventListener('click', function () {
  document.body.style.backgroundColor = '#ffffff';
  this.style.display = 'none';
  document.getElementById('light-mode2').style.display = 'none';
  document.getElementById('dark-mode').style.display = 'block';
  document.getElementById('dark-mode2').style.display = 'block';

  // 1. NFT's logo - please see 'D&LB'
  document.getElementById('white-logo').style.display = 'block';
  document.getElementById('dark-logo').style.display = 'none';
  /* 2. .intro__heading, .auction__heading, .auction__info--item2 a, .auction__info--item2 p span, .intro__btn & .soon__btn --- please see 'D&LB' */
  document.getElementsByClassName('intro__heading')[0].style.color = '#111';
  document.getElementsByClassName('auction__heading')[0].style.color = '#111';
  let allBlack = document.querySelectorAll('.auction__info--item2 a');
  for (let i = 0; i < allBlack.length; i++) {
    allBlack[i].style.color = '#111';
  }
  let allBlack2 = document.querySelectorAll('.auction__info--item2 p span');
  for (let i = 0; i < allBlack2.length; i++) {
    allBlack2[i].style.color = '#111';
  }
  let allBlack3 = document.querySelectorAll('.auction__info--item2 p span');
  for (let i = 0; i < allBlack3.length; i++) {
    allBlack3[i].style.backgroundColor = '#eee';
  }
  let allBlack3b = document.querySelectorAll('.buttons');
  for (let i = 0; i < allBlack3b.length; i++) {
    allBlack3b[i].style.cssText = 'background-color: #fff; color: #000';
  }
  // 3. .auction__item
  let allBlack4 = document.querySelectorAll('.auction__item');
  for (let i = 0; i < allBlack4.length; i++) {
    allBlack4[i].style.backgroundColor = '#eee';
  }
  // 4. .release__box1 && .release__image1
  let allBlack5 = document.getElementsByClassName('release__box1')[0];
  allBlack5.style.backgroundColor = '#fff';
  let allBlack6 = document.getElementsByClassName('release__image1')[0];
  allBlack6.style.backgroundImage =
    'linear-gradient(to top right, #fff 40%, #ff3998 150%)';
  // 5. .release__box2 && .release__image2
  let allBlack7 = document.getElementsByClassName('release__box2')[0];
  allBlack7.style.backgroundColor = '#fff';
  let allBlack8 = document.getElementsByClassName('release__image2')[0];
  allBlack8.style.backgroundImage =
    'linear-gradient(to top right, #fff 40%, #ff3998 150%)';
  allBlack8.style.backgroundColor = '#fff';
  // 6. .release__nft-box1
  let allBlack9 = document.getElementsByClassName('release__nft-box1')[0];
  allBlack9.style.backgroundColor = '#eee';
  // 7. .release__info--heading, .release__info--para p, .release__info--checkout a
  let allBlack10 = document.querySelectorAll('.release__nft--heading');
  for (let i = 0; i < allBlack10.length; i++) {
    allBlack10[i].style.color = '#111';
  }
  let allWhite11 = document.querySelectorAll('.release__info--checkout a');
  for (let i = 0; i < allWhite11.length; i++) {
    allWhite11[i].style.color = '#ff3998';
  }
  let allWhite12 = document.querySelectorAll('.release__nft--para p');
  for (let i = 0; i < allWhite12.length; i++) {
    allWhite12[i].style.color = '#555';
  }
  // 8. .soon
  let allBlack14 = document.getElementsByClassName('soon__heading')[0];
  allBlack14.style.color = '#111';
  let allWhite15 = document.getElementsByClassName('soon')[0];
  allWhite15.style.cssText =
    'background-image: linear-gradient( to bottom right,  #fff 40%,  $text-special 150%)';
  let allBlack15 = document.getElementsByClassName('soon__text')[0];
  allBlack15.style.color = '#555';
  // 9. .footer
  let allBlack16 = document.getElementsByClassName('footer__exclusive')[0];
  allBlack16.style.color = '#555';
  let allBlack17 = document.querySelectorAll('.footer__menu-item--heading');
  for (let i = 0; i < allBlack17.length; i++) {
    allBlack17[i].style.color = '#555';
  }
  let allBlack18 = document.querySelectorAll('.footer__menu-item--option a');
  for (let i = 0; i < allBlack18.length; i++) {
    allBlack18[i].style.color = '#555';
  }
  let allWhite19 = document.getElementsByClassName('footer__copyright')[0];
  allWhite19.style.color = '#999';
  // 10. viewport >= 768px:
  let viewportWidth2 = window.innerWidth;
  if (viewportWidth2 >= 768) {
    let allBlack21 = document.querySelectorAll('.release__box');
    for (let i = 0; i < allBlack21.length; i++) {
      allBlack21[i].style.backgroundImage =
        'linear-gradient(to bottom right, #fff0e8 40%, #ff3998 150%)';
    }
    let allBlack22 = document.getElementsByClassName('release__image1')[0];
    allBlack22.style.backgroundImage = 'none';
    let allBlack23 = document.getElementsByClassName('release__item1')[0];
    allBlack23.style.color = '#ff3998';
  }
  if (viewportWidth2 >= 1279) {
    let allBlack24 = document.querySelector('.intro__btn-2 a');
    allBlack24.style.color = '#000';
    let allBlack25 = document.getElementsByClassName('release__nft-box2')[0];
    allBlack25.style.backgroundColor = '#eee';
    let allBlack26 = document.getElementsByClassName('release__image2')[0];
    allBlack26.style.cssText = 'background-color: none; background-image: none';
  }
  // 11. menu sidebar
  let allBlack27 = document.getElementById('menu');
  allBlack27.style.backgroundColor = '#fff';
  let allBlack28 = document.getElementsByClassName('logo-white')[0];
  allBlack28.style.display = 'block';
  let allBlack29 = document.getElementsByClassName('logo-dark')[0];
  allBlack29.style.display = 'none';
  let allBlack30 = document.getElementById('close2');
  allBlack30.style.display = 'none';
  let allBlack31 = document.getElementById('close');
  allBlack31.style.display = 'block';
  let allBlack32 = document.querySelectorAll('.menu__list--item span');
  for (let i = 0; i < allBlack32.length; i++) {
    allBlack32[i].style.color = '#000';
  }
  let allBlack33 = document.querySelector('.menu__list--item a');
  allBlack33.style.color = '#000';

  let allBlack34 = document.querySelectorAll('.menu__list--img');
  for (let i = 0; i < allBlack34.length; i++) {
    allBlack34[i].style.display = 'block';
  }
  let allBlack35 = document.querySelectorAll('.menu__list--img-white');
  for (let i = 0; i < allBlack35.length; i++) {
    allBlack35[i].style.display = 'none';
  }

  let allBlack36 = document.querySelectorAll('.menu-image');
  for (let i = 0; i < allBlack36.length; i++) {
    allBlack36[i].style.display = 'block';
  }
  let allBlack37 = document.querySelectorAll('.menu-image-white');
  for (let i = 0; i < allBlack37.length; i++) {
    allBlack37[i].style.display = 'none';
  }

  let allBlack38 = document.querySelectorAll('.menu__dropdown--item a');
  for (let i = 0; i < allBlack38.length; i++) {
    allBlack38[i].style.color = '#000';
  }
});

// ------------------------------------------------------------------------------------------- DARK BUTTON DOWN vvv
document.getElementById('dark-mode2').addEventListener('click', function () {
  document.body.style.cssText = 'background-color: #111111';
  this.style.display = 'none';
  document.getElementById('dark-mode').style.display = 'none';
  document.getElementById('light-mode2').style.display = 'block';
  document.getElementById('light-mode').style.display = 'block';

  // 1. NFT's logo - please see 'D&LB'
  document.getElementById('white-logo').style.display = 'none';
  document.getElementById('dark-logo').style.display = 'block';
  /* 2. .intro__heading, .auction__heading, .auction__info--item2 a, .auction__info--item2 p span; .intro__btn & .soon__btn (.buttons) - please see 'D&LB */
  document.getElementsByClassName('intro__heading')[0].style.color = '#fff';
  document.getElementsByClassName('auction__heading')[0].style.color = '#fff';
  let allWhite = document.querySelectorAll('.auction__info--item2 a');
  for (let i = 0; i < allWhite.length; i++) {
    allWhite[i].style.color = '#fff';
  }
  let allWhite2 = document.querySelectorAll('.auction__info--item2 p span');
  for (let i = 0; i < allWhite2.length; i++) {
    allWhite2[i].style.color = '#fff';
  }
  let allWhite2a = document.querySelectorAll('.auction__info--item2 p span');
  for (let i = 0; i < allWhite2a.length; i++) {
    allWhite2a[i].style.backgroundColor = 'transparent';
  }
  let allBlack3a = document.querySelectorAll('.buttons');
  for (let i = 0; i < allBlack3a.length; i++) {
    allBlack3a[i].style.cssText = 'background-color: #111; color: #fff';
  }
  // 3. .auction__item
  let allWhite3 = document.querySelectorAll('.auction__item');
  for (let i = 0; i < allWhite3.length; i++) {
    allWhite3[i].style.backgroundColor = '#000';
  }
  // 4. .release__box1 && .release__image1
  let allWhite4 = document.getElementsByClassName('release__box1')[0];
  allWhite4.style.backgroundColor = '#ff8139';
  let allWhite5 = document.getElementsByClassName('release__image1')[0];
  allWhite5.style.backgroundImage =
    'linear-gradient(to top right, #ffa500 20%, #ff3998 150%)';
  // 5. .release__box2 && .release__image2
  let allWhite6 = document.getElementsByClassName('release__box2')[0];
  allWhite6.style.backgroundColor = '#39ffa0';
  let allWhite7 = document.getElementsByClassName('release__image2')[0];
  allWhite7.style.backgroundImage = 'none';
  allWhite7.style.backgroundColor = '#39ffa0';
  // 6. .release__nft-box1
  let allWhite8 = document.getElementsByClassName('release__nft-box1')[0];
  allWhite8.style.cssText = 'background-color: #555;';
  // 7. .release__info--heading, .release__info--para p, .release__nft--para p, .release__info--checkout a
  let allWhite9 = document.querySelectorAll('.release__nft--heading');
  for (let i = 0; i < allWhite9.length; i++) {
    allWhite9[i].style.color = '#fff';
  }
  let allWhite10 = document.querySelectorAll('.release__info--para p');
  for (let i = 0; i < allWhite10.length; i++) {
    allWhite10[i].style.color = '#111';
  }
  let allWhite11 = document.querySelectorAll('.release__nft--para p');
  for (let i = 0; i < allWhite11.length; i++) {
    allWhite11[i].style.color = '#ccc';
  }
  let allWhite12 = document.querySelectorAll('.release__info--checkout a');
  for (let i = 0; i < allWhite12.length; i++) {
    allWhite12[i].style.color = '#111';
  }
  // 8. .soon
  let allWhite13 = document.getElementsByClassName('soon')[0];
  allWhite13.style.backgroundImage = 'none';
  let allWhite14 = document.getElementsByClassName('soon__heading')[0];
  allWhite14.style.color = '#fff';
  let allWhite15 = document.getElementsByClassName('soon__text')[0];
  allWhite15.style.color = '#ccc';
  // 9. .footer
  let allWhite16 = document.getElementsByClassName('footer__exclusive')[0];
  allWhite16.style.color = '#ccc';
  let allWhite17 = document.querySelectorAll('.footer__menu-item--heading');
  for (let i = 0; i < allWhite17.length; i++) {
    allWhite17[i].style.color = '#ccc';
  }
  let allWhite18 = document.querySelectorAll('.footer__menu-item--option a');
  for (let i = 0; i < allWhite18.length; i++) {
    allWhite18[i].style.color = '#ccc';
  }
  let allWhite19 = document.getElementsByClassName('footer__copyright')[0];
  allWhite19.style.color = '#777';
  // 10. viewport >= 768px:
  let viewportWidth = window.innerWidth;
  if (viewportWidth >= 767) {
    let allWhite20 = document.querySelectorAll('.auction__info--item2 p span');
    for (let i = 0; i < allWhite20.length; i++) {
      allWhite20[i].style.backgroundColor = 'transparent';
    }
    let allWhite21 = document.querySelectorAll('.release__box');
    for (let i = 0; i < allWhite21.length; i++) {
      allWhite21[i].style.backgroundImage = 'none';
    }
    let allWhite22 = document.getElementsByClassName('release__image1')[0];
    allWhite22.style.backgroundImage = 'none';
    let allWhite23 = document.getElementsByClassName('release__item1')[0];
    allWhite23.style.color = '#fff';
  }
  if (viewportWidth >= 1279) {
    let allWhite24 = document.querySelector('.intro__btn-2 a');
    allWhite24.style.color = '#fff';
    let allWhite25 = document.getElementsByClassName('release__nft-box2')[0];
    allWhite25.style.backgroundColor = '#555';
  }
  // 11. menu sidebar
  let allWhite26 = document.getElementById('menu');
  allWhite26.style.backgroundColor = '#111';
  let allWhite27 = document.getElementsByClassName('logo-white')[0];
  allWhite27.style.display = 'none';
  let allWhite28 = document.getElementsByClassName('logo-dark')[0];
  allWhite28.style.display = 'block';
  let allWhite29 = document.getElementById('close2');
  allWhite29.style.display = 'block';
  let allWhite30 = document.getElementById('close');
  allWhite30.style.display = 'none';
  let allWhite31 = document.querySelectorAll('.menu__list--item span');
  for (let i = 0; i < allWhite31.length; i++) {
    allWhite31[i].style.color = '#fff';
  }
  let allWhite32 = document.querySelector('.menu__list--item a');
  allWhite32.style.color = '#fff';

  let allWhite33 = document.querySelectorAll('.menu__list--img');
  for (let i = 0; i < allWhite33.length; i++) {
    allWhite33[i].style.display = 'none';
  }
  let allWhite34 = document.querySelectorAll('.menu__list--img-white');
  for (let i = 0; i < allWhite34.length; i++) {
    allWhite34[i].style.display = 'block';
  }

  let allWhite35 = document.querySelectorAll('.menu-image');
  for (let i = 0; i < allWhite35.length; i++) {
    allWhite35[i].style.display = 'none';
  }
  let allWhite36 = document.querySelectorAll('.menu-image-white');
  for (let i = 0; i < allWhite36.length; i++) {
    allWhite36[i].style.display = 'block';
  }
  let allWhite37 = document.querySelectorAll('.menu__dropdown--item a');
  for (let i = 0; i < allWhite37.length; i++) {
    allWhite37[i].style.color = '#fff';
  }
});

// ------------------------------------------------------------------------------------------- LIGHT BUTTON DOWN vvv
document.getElementById('light-mode2').addEventListener('click', function () {
  document.body.style.backgroundColor = '#ffffff';
  this.style.display = 'none';
  document.getElementById('light-mode').style.display = 'none';
  document.getElementById('dark-mode2').style.display = 'block';
  document.getElementById('dark-mode').style.display = 'block';

  // 1. NFT's logo - please see 'D&LB'
  document.getElementById('white-logo').style.display = 'block';
  document.getElementById('dark-logo').style.display = 'none';
  /* 2. .intro__heading, .auction__heading, .auction__info--item2 a, .auction__info--item2 p span, .intro__btn & .soon__btn --- please see 'D&LB' */
  document.getElementsByClassName('intro__heading')[0].style.color = '#111';
  document.getElementsByClassName('auction__heading')[0].style.color = '#111';
  let allBlack = document.querySelectorAll('.auction__info--item2 a');
  for (let i = 0; i < allBlack.length; i++) {
    allBlack[i].style.color = '#111';
  }
  let allBlack2 = document.querySelectorAll('.auction__info--item2 p span');
  for (let i = 0; i < allBlack2.length; i++) {
    allBlack2[i].style.color = '#111';
  }
  let allBlack3 = document.querySelectorAll('.auction__info--item2 p span');
  for (let i = 0; i < allBlack3.length; i++) {
    allBlack3[i].style.backgroundColor = '#eee';
  }
  let allBlack3b = document.querySelectorAll('.buttons');
  for (let i = 0; i < allBlack3b.length; i++) {
    allBlack3b[i].style.cssText = 'background-color: #fff; color: #000';
  }
  // 3. .auction__item
  let allBlack4 = document.querySelectorAll('.auction__item');
  for (let i = 0; i < allBlack4.length; i++) {
    allBlack4[i].style.backgroundColor = '#eee';
  }
  // 4. .release__box1 && .release__image1
  let allBlack5 = document.getElementsByClassName('release__box1')[0];
  allBlack5.style.backgroundColor = '#fff';
  let allBlack6 = document.getElementsByClassName('release__image1')[0];
  allBlack6.style.backgroundImage =
    'linear-gradient(to top right, #fff 40%, #ff3998 150%)';
  // 5. .release__box2 && .release__image2
  let allBlack7 = document.getElementsByClassName('release__box2')[0];
  allBlack7.style.backgroundColor = '#fff';
  let allBlack8 = document.getElementsByClassName('release__image2')[0];
  allBlack8.style.backgroundImage =
    'linear-gradient(to top right, #fff 40%, #ff3998 150%)';
  allBlack8.style.backgroundColor = '#fff';
  // 6. .release__nft-box1
  let allBlack9 = document.getElementsByClassName('release__nft-box1')[0];
  allBlack9.style.backgroundColor = '#eee';
  // 7. .release__info--heading, .release__info--para p, .release__info--checkout a
  let allBlack10 = document.querySelectorAll('.release__nft--heading');
  for (let i = 0; i < allBlack10.length; i++) {
    allBlack10[i].style.color = '#111';
  }
  let allWhite11 = document.querySelectorAll('.release__info--checkout a');
  for (let i = 0; i < allWhite11.length; i++) {
    allWhite11[i].style.color = '#ff3998';
  }
  let allWhite12 = document.querySelectorAll('.release__nft--para p');
  for (let i = 0; i < allWhite12.length; i++) {
    allWhite12[i].style.color = '#555';
  }
  // 8. .soon
  let allBlack14 = document.getElementsByClassName('soon__heading')[0];
  allBlack14.style.color = '#111';
  let allWhite15 = document.getElementsByClassName('soon')[0];
  allWhite15.style.cssText =
    'background-image: linear-gradient( to bottom right,  #fff 40%,  $text-special 150%)';
  let allBlack15 = document.getElementsByClassName('soon__text')[0];
  allBlack15.style.color = '#555';
  // 9. .footer
  let allBlack16 = document.getElementsByClassName('footer__exclusive')[0];
  allBlack16.style.color = '#555';
  let allBlack17 = document.querySelectorAll('.footer__menu-item--heading');
  for (let i = 0; i < allBlack17.length; i++) {
    allBlack17[i].style.color = '#555';
  }
  let allBlack18 = document.querySelectorAll('.footer__menu-item--option a');
  for (let i = 0; i < allBlack18.length; i++) {
    allBlack18[i].style.color = '#555';
  }
  let allWhite19 = document.getElementsByClassName('footer__copyright')[0];
  allWhite19.style.color = '#999';
  // 10. viewport >= 768px:
  let viewportWidth2 = window.innerWidth;
  if (viewportWidth2 >= 768) {
    let allBlack21 = document.querySelectorAll('.release__box');
    for (let i = 0; i < allBlack21.length; i++) {
      allBlack21[i].style.backgroundImage =
        'linear-gradient(to bottom right, #fff0e8 40%, #ff3998 150%)';
    }
    let allBlack22 = document.getElementsByClassName('release__image1')[0];
    allBlack22.style.backgroundImage = 'none';
    let allBlack23 = document.getElementsByClassName('release__item1')[0];
    allBlack23.style.color = '#ff3998';
  }
  if (viewportWidth2 >= 1279) {
    let allBlack24 = document.querySelector('.intro__btn-2 a');
    allBlack24.style.color = '#000';
    let allBlack25 = document.getElementsByClassName('release__nft-box2')[0];
    allBlack25.style.backgroundColor = '#eee';
    let allBlack26 = document.getElementsByClassName('release__image2')[0];
    allBlack26.style.cssText = 'background-color: none; background-image: none';
  }
  // 11. menu sidebar
  let allBlack27 = document.getElementById('menu');
  allBlack27.style.backgroundColor = '#fff';
  let allBlack28 = document.getElementsByClassName('logo-white')[0];
  allBlack28.style.display = 'block';
  let allBlack29 = document.getElementsByClassName('logo-dark')[0];
  allBlack29.style.display = 'none';
  let allBlack30 = document.getElementById('close2');
  allBlack30.style.display = 'none';
  let allBlack31 = document.getElementById('close');
  allBlack31.style.display = 'block';
  let allBlack32 = document.querySelectorAll('.menu__list--item span');
  for (let i = 0; i < allBlack32.length; i++) {
    allBlack32[i].style.color = '#000';
  }
  let allBlack33 = document.querySelector('.menu__list--item a');
  allBlack33.style.color = '#000';
  let allBlack34 = document.querySelectorAll('.menu__list--img');
  for (let i = 0; i < allBlack34.length; i++) {
    allBlack34[i].style.display = 'block';
  }
  let allBlack35 = document.querySelectorAll('.menu__list--img-white');
  for (let i = 0; i < allBlack35.length; i++) {
    allBlack35[i].style.display = 'none';
  }

  let allBlack36 = document.querySelectorAll('.menu-image');
  for (let i = 0; i < allBlack36.length; i++) {
    allBlack36[i].style.display = 'block';
  }
  let allBlack37 = document.querySelectorAll('.menu-image-white');
  for (let i = 0; i < allBlack37.length; i++) {
    allBlack37[i].style.display = 'none';
  }
  let allBlack38 = document.querySelectorAll('.menu__dropdown--item a');
  for (let i = 0; i < allBlack38.length; i++) {
    allBlack38[i].style.color = '#000';
  }
});

// -------------------------------------------------------------------------------------------- MENU DROPDOWN
$(document).ready(function () {
  $('#menu ul li .menu__call').click(function (e) {
    e.preventDefault();
    let menuChild = $(this).parent('li').find('.menu__antifirst');
    menuChild.toggleClass('show');
    let arrowBtn = $(this).find('.menu-image');
    arrowBtn.toggleClass('rotate');
    let arrowBtn2 = $(this).find('.menu-image-white');
    arrowBtn2.toggleClass('rotate');
  });
});
// ------------------------------------------------ ABOUT
document.getElementById('about').addEventListener('click', function () {
  let aboutCondition = document.getElementById('about-list');
  let aboutImage = document.getElementById('about-image');
  let aboutImage2 = document.getElementById('about-image2');
  if (aboutCondition.style.display === 'block') {
    document.getElementById('about-list').style.display = 'none';
    aboutImage.style.transform = 'rotate(0deg)';
    aboutImage2.style.transform = 'rotate(0deg)';
  } else {
    document.getElementById('about-list').style.display = 'block';
    aboutImage.style.transform = 'rotate(-180deg)';
    aboutImage2.style.transform = 'rotate(-180deg)';
  }
});
