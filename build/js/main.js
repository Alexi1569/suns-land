;
jQuery(document).ready(function ($) {
  var windowWidth = $(window).width();
  var mobileMenu = $('#mobile-menu');
  var styledSelect = $('.styled-select');

  $(window).resize(function () {
    windowWidth = $(window).width();
  });

  $(window).on('load', function () {
    onLoadCallBack();
  });

  function onLoadCallBack() {
    initMap();
  }

  $(document).on('click touchstart', function (event) {
    if ((!$(event.target.closest('.header__phones')).is(".header__phones")) && $('.header__phones').hasClass('active')) {
      $(".header__phones").removeClass('active');
    }

  });

  if ("ontouchstart" in document.documentElement) {
    $('body').addClass('touch-device');
  } else {
    $('body').removeClass('touch-device');
  }

  (window.initScrollBars =  function initScrollBars() {
    $('.scrollbar-inner').each(function () {
      $(this).scrollbar({

      });
    });
  })();

  (function initOnlyTextInputs() {
    $('.only-text-input').each(function () {
      $(this).bind('keyup blur', function () {
          var node = $(this);
          node.val(node.val().replace(/[^a-zA-Zа-яА-Я]/g, ''));
        }
      );
    });
  })();

  (function initTextAreaResize() {
    $('textarea').each(function () {
      $(this).on('change keyup keydown input paste cut', function (e) {
        if ($(this)[0].scrollHeight > $(this)[0].clientHeight) {
          $(this).attr('rows', parseInt($(this).attr('rows')) + 1);
        }
      });
    });

  })();

  (function initMaskedPhones() {
    $('.masked-phone').each(function () {
      $(this).mask('+38(000)000-00-00', {placeholder: "+38(___)___-__-__*"});
      $(this).attr('autocomplete', 'off');
    });
  })();

  (function () {
    var acc = document.getElementsByClassName("faq__item-question");
    var i;

    for (i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
          panel.style.maxHeight = null;
        } else {
          panel.style.maxHeight = panel.scrollHeight + "px";
        }
      });
    }
  })();

  function setMobileMenuPaddingTop(target) {
    $(target).css({
      'padding-top': $('.header').outerHeight(true)
    });
  }

  function setHeaderBtnPosition(target) {
    var $btn = $('.header__btn');
    if (windowWidth <= 500) {
      $(target).prepend($btn);
      $btn.css({
        'top': ($('.header').outerHeight(true) / 2) + 'px'
      });

      $btn.addClass('active');
    } else {
      $('.header__phones').after($btn);
      $btn.css({
        'top': '0px'
      });
      $btn.removeClass('active');
    }
  }

  (function initMobileMenu() {
    var $hamburger = $('#js-hamburger');
    var $mobileMenu = $('#mobile-menu');

    setMobileMenuPaddingTop($mobileMenu);
    setHeaderBtnPosition($mobileMenu);

    $(window).resize(function () {
      setMobileMenuPaddingTop($mobileMenu);
      setHeaderBtnPosition($mobileMenu);
    });

    $hamburger.click(function () {
      $(this).toggleClass('active');
      $mobileMenu.toggleClass('active');
      $('html, body').toggleClass('block-scroll');
    });
  })();

  (function initProductBtn() {
    $('.product__modal').find('.product__modal-btn--linear').click(function () {
      var source = $(this).closest('.product__modal-form').attr('data-source');
      $('#usersource').val(source);
    });
  })();

  function initProductModal() {
    $('.product__modal-preview img').click(function() {
      var $target = $('.product__modal-img img');
      var that = $(this);
      $(that).addClass('img-hide');
      $target.addClass('img-hide');
      var _src = $(that).attr('src');
      var targetSrc = $target.attr('src');

      $target.attr('src', _src);
      $(that).attr('src', targetSrc);

      setTimeout(function () {
        $(that).removeClass('img-hide');
        $target.removeClass('img-hide');
      }, 300);
    });

    setPoruductPopupTitlePosition();
    $(window).resize(function () {
      setPoruductPopupTitlePosition();
    });
  }

  initProductModal();

  if ($(styledSelect).length) {
    $(styledSelect).each(function () {
      $(this).selectmenu({
        appendTo: $(this).closest('.form__group-select'),
        position: {
          of: $(this).closest('.form__group-select'),
          collision: 'flipfit',
          my: 'left-50% top+10',
          at: 'center top+20'
        }
      });
    });
  }

  (function initHeaderBtn() {
    $headerBtn = $('.header__btn');

    $headerBtn.click(function () {
      $('#js-hamburger').removeClass('active');
      $mobileMenu.removeClass('active');
      $('html, body').removeClass('block-scroll');
    });
  });

  (function initHeaderPhonesToggler() {
    $('#js-phones-toggler').click(function() {
      $('.header__phones').toggleClass('active');
    })
  })();

  function setPoruductPopupTitlePosition() {
    var $title = $('.product__modal-title');

    if (windowWidth <= 700) {
      $('.product__modal-info').prepend($title);
    } else {
      $('.product__modal-right').prepend($title);
    }
  }


  (function initReviewsSlider() {
    var $reviews = $('#js-reviews-slider');

    $reviews.slick({
      cssEase: 'ease-out',
      easing: 'ease-out',
      speed: 600,
      slidesToShow: 2,
      slidesToScroll: 2,
      appendArrows: '.reviews__arrows',
      dots: true,
      appendDots: '.reviews__dots',
      dotsClass: 'reviews__dots-list flex jc-c ai-c',
      prevArrow: '<button class="arrow inline-flex ai-c jc-c arrow--prev"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 129 129" xmlns:xlink="http://www.w3.org/1999/xlink" enable-background="new 0 0 129 129"><g><path d="m88.6,121.3c0.8,0.8 1.8,1.2 2.9,1.2s2.1-0.4 2.9-1.2c1.6-1.6 1.6-4.2 0-5.8l-51-51 51-51c1.6-1.6 1.6-4.2 0-5.8s-4.2-1.6-5.8,0l-54,53.9c-1.6,1.6-1.6,4.2 0,5.8l54,53.9z"/></g></svg></button>',
      nextArrow: '<button class="arrow inline-flex ai-c jc-c arrow--next"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 129 129" xmlns:xlink="http://www.w3.org/1999/xlink" enable-background="new 0 0 129 129"><g><path d="m40.4,121.3c-0.8,0.8-1.8,1.2-2.9,1.2s-2.1-0.4-2.9-1.2c-1.6-1.6-1.6-4.2 0-5.8l51-51-51-51c-1.6-1.6-1.6-4.2 0-5.8 1.6-1.6 4.2-1.6 5.8,0l53.9,53.9c1.6,1.6 1.6,4.2 0,5.8l-53.9,53.9z"/></g></svg></button>',
      responsive: [
        {
          breakpoint: 601,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    })
  })();

  // (function initBannerSlider() {
  //   var $banner = $('#js-banner-slider');

  //   $banner.slick({
  //     autoPlay: true,
  //     autoplaySpeed: 3500,
  //     cssEase: 'ease-out',
  //     easing: 'ease-out',
  //     arrows: false
  //   })
  // })();


  function initMap() {
    var delta = 0;
    if (windowWidth < 1050 && windowWidth >= 600) {
      delta = 0.0015;
    } else {
      delta = 0;
    }

    var center = {
      lat: 50.488793,
      lng: 30.488387
    }
    var map = new google.maps.Map(document.getElementById('map-target'), {
      zoom: 17,
      disableDefaultUI: true,
      center: {
        lat: center.lat,
        lng: center.lng + delta
      }
    });

    var markerImage = new google.maps.MarkerImage(
      '../img/marker-img.png',
      new google.maps.Size(31,47),
      new google.maps.Point(0,0)
    );


    var marker = new google.maps.Marker({
      position: center,
      icon: markerImage,
      map: map
    });

  }

  function setMapOffsetRight(el, right) {
    if (windowWidth > 600) {
      $(el).css({
        'right': right + 'px'
      });
    }
  }

  (function alignMapInfo() {
    var $mapInfo = $('#js-map-info');
    var right = ($(window).outerWidth() - $('.video .container').innerWidth()) / 2;

    setMapOffsetRight($mapInfo, right);

    $(window).resize(function () {
      setMapOffsetRight($mapInfo, right);
    });
  })();

  function getCookie(name) {
    var matches = document.cookie.match(new RegExp(
      "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
  }

  function setCookie(name, value, options) {
    options = options || {};

    var expires = options.expires;

    if (typeof expires == "number" && expires) {
      var d = new Date();
      d.setTime(d.getTime() + expires * 1000);
      expires = options.expires = d;
    }
    if (expires && expires.toUTCString) {
      options.expires = expires.toUTCString();
    }

    value = encodeURIComponent(value);

    var updatedCookie = name + "=" + value;

    for (var propName in options) {
      updatedCookie += "; " + propName;
      var propValue = options[propName];
      if (propValue !== true) {
        updatedCookie += "=" + propValue;
      }
    }

    document.cookie = updatedCookie;
  }

  (function initSmoothScroll() {
    $('.header__nav-list a, .mobile-menu a').click(function () {
      $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
      }, 750);

      $('#js-hamburger').removeClass('active');
      $('.mobile-menu').removeClass('active');
      $('html, body').removeClass('block-scroll');

      return false;
    });
  })();

  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function deleteCookie(name) {
    setCookie(name, "", {
      expires: -1
    })
  }

  // deleteCookie('sale-counter');
  // deleteCookie('sale-offset');

  var fakeUsers = [
    'Георгий,купил,Мужское пальто T-043 (iClass),1',
    'Иван,купил,Мужская куртка B-128 (Universal),2',
    'Константин,купил,Мужское пальто A-045 (Neo & Gilet),3',
    'Кирилл,купил,Мужское пальто тест,4',
    'Анна,купила,Женское белье,5',
    'Константин,купил,Мужское пальто A-045 (Neo & Gilet),3',
    'Кирилл,купил,Мужское пальто тест,4',
    'Георгий,купил,Мужское пальто T-043 (iClass),1',
    'Иван,купил,Мужская куртка B-128 (Universal),2',
    'Константин,купил,Мужское пальто A-045 (Neo & Gilet),3',
    'Кирилл,купил,Мужское пальто тест,4',
    'Анна,купила,Женское белье,5',
    'Константин,купил,Мужское пальто A-045 (Neo & Gilet),3',
    'Кирилл,купил,Мужское пальто тест,4',
    'Георгий,купил,Мужское пальто T-043 (iClass),1',
    'Иван,купил,Мужская куртка B-128 (Universal),2',
    'Константин,купил,Мужское пальто A-045 (Neo & Gilet),3',
    'Кирилл,купил,Мужское пальто тест,4',
    'Анна,купила,Женское белье,5',
    'Константин,купил,Мужское пальто A-045 (Neo & Gilet),3',
    'Кирилл,купил,Мужское пальто тест,4'
  ];

  function buildSaleItems() {
    var $clients = $('#js-sale-clients');
    var $inner = $clients.find('.sale__clients-inner');

    for (var i = 0; i < fakeUsers.length; i++) {
      var el = document.createElement('div');
      el.classList.add('sale__clients-item');

      var _arr = fakeUsers[i].split(',');

      var _b = document.createElement('b');
      _b.textContent = _arr[0] + ' ';

      var _i = document.createElement('i');
      _i.textContent = _arr[1] + ' ';

      var _a = document.createElement('a');
      _a.setAttribute('rel', 'modal:open');
      _a.setAttribute('href', '#product-modal');
      _a.setAttribute('data-id', _arr[3]);
      _a.textContent = _arr[2];

      el.append(_b, _i, _a);

      $inner.append(el);
    }


  }

  buildSaleItems();

  function saleTick(target, start, list, offsetY, itemHeight) {

    window.interval = setInterval(function () {
      var decStart = parseInt(start);
      decStart += 1;
      var strStart = decStart.toString();

      while(strStart.length < 5) {
        strStart = '0' + strStart;
      }

      var _target = target;
      var _list = list;
      var _itemHeight = parseInt(itemHeight);
      var _offsetY = parseInt(offsetY);
      var res = _offsetY - itemHeight;

      if (window.maxOffset > $(window.wrapper).outerHeight()) {
        if((-(res / itemHeight)) > fakeUsers.length - 4) {
          res = 0;
        }

        $(_list).css({
          'transform': 'translateY(' + res + 'px)'
        });

      }


      window.clock = getRandomInt(2000, 10000);

      $(_target).find('.sale__info-amount').text(strStart);
      setCookie('sale-counter', strStart, {expires: 3600 * 24 * 7});
      setCookie('sale-offset', res, {expires: 3600 * 24 * 7});

      clearInterval(window.interval);
      saleTick(_target, strStart, _list, res, _itemHeight);

    }, window.clock);
  }


  (function initSaleCounter() {
    var $sale = $('#js-sale-amount');
    var start = getCookie('sale-counter') ? getCookie('sale-counter') : '00460';
    $sale.find('.sale__info-amount').text(start);

    var $clients = $('#js-sale-clients');
    var $inner = $clients.find('.sale__clients-inner');
    var offsetY = getCookie('sale-offset') ? getCookie('sale-offset') : '0';
    var itemHeight = $('.sale__clients-item').outerHeight(true);

    window.wrapper = $clients.find('.sale__clients-wrapper');

    window.maxOffset = $inner.outerHeight();

    $(window.wrapper).css({
      'height': itemHeight * 4
    });

    $inner.css({
      'transform': 'translateY(' + offsetY + 'px)'
    });

    $clients.addClass('initialized');


    window.clock = getRandomInt(500, 10000);

    if (getCookie('sale-counter')) {
      start = getCookie('sale-counter');
    }

    saleTick($sale, start, $inner, offsetY, itemHeight);
    $sale.addClass('active');
  })();

  window.initCounter = function initCounter(date, target) {
    var countDownDate = new Date(date).getTime();


    var x = setInterval(function() {
  
      var now = new Date().getTime();
  
      var distance = countDownDate - now;
  
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = (Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).toString().length > 1 ? Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)) : '0' + (Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).toString();
      var minutes = (Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))).toString().length > 1 ? Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)) : '0' + (Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))).toString();
      var seconds = (Math.floor((distance % (1000 * 60)) / 1000)).toString().length > 1 ? Math.floor((distance % (1000 * 60)) / 1000) : '0' + (Math.floor((distance % (1000 * 60)) / 1000)).toString();


      $(target).find('.counter-item--days b').text(days);
      $(target).find('.counter-item--hours b').text(hours);
      $(target).find('.counter-item--minutes b').text(minutes);
      $(target).find('.counter-item--seconds b').text(seconds);
  
      if (distance < 0) {
        clearInterval(x);
        $(target).html('<p class="counter__finished">Акция закончилась</p>');
      }

      if (!($(target).hasClass('active'))) {
        $(target).addClass('active');
      }
    }, 1000);

  }

});