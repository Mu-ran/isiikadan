'use strict';
{
  const open = document.getElementById('open');
  const close = document.getElementById('close');
  const modal = document.getElementById('modal');
  const mask = document.getElementById('mask');

  open.addEventListener('click', () => {
    modal.classList.remove('hidden');
    mask.classList.remove('hidden');
  });

  close.addEventListener('click', () => {
    modal.classList.add('hidden');
    mask.classList.add('hidden');
  });

  mask.addEventListener('click', () => {
    modal.classList.add('hidden');
    mask.classList.add('hidden');
  });





  /カレンダー/
  const config = {
    minDate: "today",
    mode: "multiple",
    dateFormat: "Y-m-d",
    defaultDate: ["2016-10-20", "2016-11-04"]
  }
  flatpickr('.flatpickr', config);



  // fv swiper ふわっと表示
  let swipeOption = {
    loop: true,
    effect: 'fade',
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    speed: 1000,
  }
  new Swiper('.swiper-container', swipeOption);



  // タブメニュー
  {
    const menuItems = document.querySelectorAll('.menu li a');
    const contents = document.querySelectorAll('.content');

    menuItems.forEach(clickedItem => {
      clickedItem.addEventListener('click', e => {
        e.preventDefault();

        menuItems.forEach(item => {
          item.classList.remove('active');
        });
        clickedItem.classList.add('active');

        contents.forEach(content => {
          content.classList.remove('active');
        });
        document.getElementById(clickedItem.dataset.id).classList.add('active');
      });
    });
  }

  // header fixed
  jQuery(window).on('scroll', function () {
    if (jQuery('.header').height() < jQuery(this).scrollTop()) {
      jQuery('.header').addClass('change-color');
    } else {
      jQuery('.header').removeClass('change-color');
    }
  });


  // ハンバーガーメニュー
  {
    const open = document.getElementById('menu');
    const overlay = document.querySelector('.overlay');
    const close = document.getElementById('tojiru');

    open.addEventListener('click', () => {
      overlay.classList.add('show');
      open.classList.add('hide');
    });

    close.addEventListener('click', () => {
      overlay.classList.remove('show');
      open.classList.remove('hide');
    });
  }




}


