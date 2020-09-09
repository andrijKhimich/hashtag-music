const humburger = $('.js-humburger');
const mobileMenu = $('.header-content');
const header = $('.header');
const logoImg = $('.logo img');
const logoBlackUrl = 'img/svg/logo.svg';
const logoWhiteUrl = 'img/svg/logo-white.svg';
const subList = $('.sidebar-subnav');
const dashboardSubList = $('.dashboard-sidebar-subnav');
const dashboardSubListSm = $('.dashboard-sidebar-subnav_sm');
const card = $('.job-cart');
const linesBtn = $('.js-lines');
const squareBtn = $('.js-square');
const favorite = $('.js-favorite');

function setSquare() {
  card.removeClass('horizontal');
  squareBtn.addClass('active');
  linesBtn.removeClass('active');
  $('.content__col').removeClass('horizontal__row');
}

function hideHorizontalCards() {
  card.removeClass('horizontal');
}

function showHorizontalCards() {
  card.addClass('horizontal');
}

function setLines() {
  card.addClass('horizontal');
  linesBtn.addClass('active');
  squareBtn.removeClass('active');
  $('.content__col').addClass('horizontal__row');
}

function setInnerHeader() {
  logoImg.attr("src", logoWhiteUrl);
  header.addClass('header_inner');
}

function setHomeHeader() {
  logoImg.attr("src", logoBlackUrl);
  header.removeClass('header_inner');
}

function detectSubMenu() {
  subList.each(function () {
    $(this).parent('.sidebar-nav__item').addClass('sidebar-subnav_icon');
  });
}

function detectSubMenuDashboard() {
  dashboardSubList.each(function () {
    $(this).parent('.dashboard-sidebar-nav__item').addClass('dashboard-sidebar-subnav_icon');
  });
}

function detectSubMenuDashboardSm() {
  dashboardSubListSm.each(function () {
    $(this).parent('.dashboard-sidebar-subnav__item').addClass('dashboard-sidebar-subnav_icon_sm');
  });
}

function columnHeight() {
  var maxContent = 0;
  $('.dashboard-pane_top').each(function () { 
    if ($(this).height() > maxContent) {
      maxContent = $(this).height();
    }
  });
  $('.dashboard-pane_top').height(maxContent);
}
function columnHeight2() {
  var maxContent = 0;
  $('.js-one-height-2').each(function () { 
    if ($(this).height() > maxContent) {
      maxContent = $(this).height();
    }
  });
  $('.js-one-height-2').height(maxContent);
}


function showOnScroll(scrollValue) {
  $('.js-scroll').each(function () {
    let elem = $(this);
    let sectionPos = elem.offset().top;
    let windowPos = $(window).scrollTop() + $(window).height() / 1.2;
    if (sectionPos < windowPos) {
      elem.removeClass('js-fadeIn js-slideLeft js-slideRight js-slideTop');
    }
  });

  // console.log($('.payment-radio:checked'));
  $('.payment-radio').change(function () {
    if ($(this).is(':checked')) {
      $('.payment-radio').not(this).closest('.payment-list__item').removeClass('active');
      $(this).closest('.payment-list__item').addClass('active');
    }
  });

}

function openMenu() {
  humburger.addClass('open');
  mobileMenu.addClass('open');
}

function closeMenu() {
  humburger.removeClass('open');
  mobileMenu.removeClass('open');
}

function showContent() {
  $('.main-wrapper').removeClass('js-fadeIn');
}
$('.js-job-input').change(function () {
  if ($(this).prop('checked')) {
    $(this).parent().addClass('checked');
    $(".js-job-input").not($(this)).parent().removeClass('checked');
  }
});
$(document).ready(function () {
  columnHeight();
  columnHeight2();
  // counter
  var counter = 5;
  var interval = setInterval(function () {
    counter--;
    $(".js-counter").html('0' + counter);
    if (counter == 0) {
      clearInterval(interval);
    }
  }, 1000);

  if ($('.js-inner-header').length > 0) {
    setInnerHeader();
  } else {
    setHomeHeader();
  }
  showContent();

  humburger.click(function () {
    if ($(this).hasClass('open')) {
      closeMenu();
    } else {
      openMenu();
    }
  });
  favorite.click(function () {
    console.log('click');
    $(this).toggleClass('active');
  });

  $('.sidebar-nav__link').click(function (e) {
    e.preventDefault();
    if ($(this).hasClass('active')) {
      $(this).removeClass("active").closest('.sidebar-nav__item').find('.sidebar-subnav').slideUp(200);
    } else {
      $(this).addClass("active").closest('.sidebar-nav__item').find('.sidebar-subnav').slideDown(200);
      $(this).parent().siblings('.sidebar-nav__item').find('.sidebar-nav__link').removeClass("active");
      $(this).parent().siblings('.sidebar-nav__item').find('.sidebar-subnav').slideUp(200);
    }
  });

  $('.dashboard-sidebar-nav__link').click(function (e) {
    e.preventDefault();
    if ($(this).hasClass('active')) {
      $(this).removeClass("active").closest('.dashboard-sidebar-nav__item').find('.dashboard-sidebar-subnav').slideUp(200);
    } else {
      $(this).addClass("active").closest('.dashboard-sidebar-nav__item').find('.dashboard-sidebar-subnav').slideDown(200);
      $(this).parent().siblings('.dashboard-sidebar-nav__item').find('.dashboard-sidebar-nav__link').removeClass("active");
      $(this).parent().siblings('.dashboard-sidebar-nav__item').find('.dashboard-sidebar-subnav').slideUp(200);
    }
  });

  $('.dashboard-sidebar-subnav__link').click(function (e) {
    e.preventDefault();
    if ($(this).hasClass('active')) {
      $(this).removeClass("active").closest('.dashboard-sidebar-subnav__item').find('.dashboard-sidebar-subnav_sm').slideUp(200);
    } else {
      $(this).addClass("active").closest('.dashboard-sidebar-subnav__item').find('.dashboard-sidebar-subnav_sm').slideDown(200);
      $(this).parent().siblings('.dashboard-sidebar-subnav__item').find('.dashboard-sidebar-subnav__link').removeClass("active");
      $(this).parent().siblings('.dashboard-sidebar-subnav__item').find('.dashboard-sidebar-subnav_sm').slideUp(200);
    }
  });
  

  $(".js-tabs-wrapper .tab-link").click(function () {
    $(".js-tabs-wrapper .tab-link").removeClass("active").eq($(this).index()).addClass("active");
    $(".tab-item").hide().eq($(this).index()).fadeIn()
  }).eq(0).addClass("active");

  // parallax effect on mouse wheel
  $(window).scroll(function () {
    var scroll = $(this).scrollTop();
    $('.section-home__wrapper').css({
      'transform': 'translate(0%, ' + -scroll / 50 + '%'
    });
  });

  squareBtn.click(function () {
    setSquare();
  });

  linesBtn.click(function () {
    setLines();
  });
  setCorectCards();
  // hideSidebar();
  if ($(window).width() < 768) {
    $('.js-sidebar-title').click(function (e) {
      $('.sidebar-nav').slideToggle(400);
    });
  } else {
    $('.sidebar-nav').slideDown();
  }
});



$(window).resize(function () {
  setCorectCards();
  // hideSidebar();
});

$(window).on('load', function () {
  detectSubMenu();
  detectSubMenuDashboard();
  detectSubMenuDashboardSm();
});

function setCorectCards() {
  if ($(window).width() <= 575) {
    hideHorizontalCards();
  } else if ($(window).width() > 575 && linesBtn.hasClass('active')) {
    showHorizontalCards()
  }
}

// function hideSidebar() {
//   if ($(window).width() <= 767) {
//     $('.js-sidebar-title').click(function (e) {
//       $('.sidebar-nav').slideToggle(400);
//     });
//   } else {
//     $('.sidebar-nav').slideDown();
//   }
// }

showOnScroll($(window).scrollTop());

$(window).scroll(function () {
  const scrollValue = $(this).scrollTop();
  showOnScroll(scrollValue);
  scrollValue >= 1 ? closeMenu() : null;
});

$('.home-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  dots: true,
  arrows: false,
  infinite: true,
  fade: true,
  speed: 1000,
  cssEase: 'linear',
  autoplaySpeed: 10000
});
$('.banner-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  dots: true,
  arrows: false,
  infinite: true,
  fade: true,
  speed: 1000,
  cssEase: 'linear',
  autoplaySpeed: 10000,
  dots: true
});
$('.colaborate-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  dots: true,
  arrows: false,
  infinite: true,
  fade: true,
  speed: 1000,
  cssEase: 'linear',
  autoplaySpeed: 10000
});

$('.testimonials-slider__wrapper').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  dots: true,
  arrows: false,
  infinite: true,
  fade: true,
  speed: 1000,
  cssEase: 'linear',
  autoplaySpeed: 10000,
  arrows: true,
  prevArrow: $('.testimonials-slider_prev'),
  nextArrow: $('.testimonials-slider_next'),
  responsive: [{
    breakpoint: 575,
    settings: {
      dots: false,
      adaptiveHeight: true
    }
  }]
});

// slider
$slick_slider = $('.payment-list');
settings_slider = {
  dots: false,
  arrows: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  infinite: false,
  centerMode: false,
  dots: true
  // more settings
}
slick_on_mobile($slick_slider, settings_slider);

// slick on mobile
function slick_on_mobile(slider, settings) {
  $(window).on('load resize', function () {
    if ($(window).width() > 576) {
      if (slider.hasClass('slick-initialized')) {
        slider.slick('unslick');
      }
      return
    }
    if (!slider.hasClass('slick-initialized')) {
      return slider.slick(settings);
    }
  });
};


svg4everybody();