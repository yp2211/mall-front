/*---------------------------------
// デバイス、OS判定用
---------------------------------*/
function getDevice(){
  var ua = window.navigator.userAgent.toLowerCase();
  if(ua.indexOf('iphone') > 0 || ua.indexOf('ipod') > 0 || ua.indexOf('android') > 0 && ua.indexOf('mobile') > 0 || ua.indexOf('windows phone') > 0){
    return 'sp';
  }else if(ua.indexOf('ipad') > 0 || ua.indexOf('android') > 0){
    return 'tab';
  }else{
    return 'pc';
  }
}

function getOS(){
  var ua = window.navigator.userAgent.toLowerCase();
  if(ua.indexOf('iphone') > 0 || ua.indexOf('ipod') > 0 || ua.indexOf('ipad') > 0){
    return 'iOS';
  }else if(ua.indexOf('android') > 0){
    return 'Android';
  }
}

/*---------------------------------
// アンカーリンクのスムーズスクロール
---------------------------------*/
$(function(){
  var speed = 500;
  var headerHeight;
  var position;

  function hashScroll(){
    var urlHash = document.location.hash;
    if(urlHash){
      if(document.URL.match('/jp/ja/data-insight')){
        if($(window).width() > 767){
          headerHeight = 100;
        }else{
          headerHeight = 50;
        }
      }else{
        headerHeight = 66;
      }
      position = $(window).scrollTop() - headerHeight;
      $('html, body').animate({
        scrollTop: position
      }, speed, 'swing');
    }
  }
  var ua = window.navigator.userAgent.toLowerCase();
  if(ua.indexOf('msie') >= 0 || ua.indexOf('trident') >= 0){
    $(window).on('load', function(){
      setTimeout(function(){
        hashScroll();
      }, 500);
    });
  } else{
    hashScroll();
  }

  $('a[href^="#"]:not(".modal"):not([href="#case"])').click(function(){
    var href = $(this).attr('href');
    var target = $(href == "#" || href == "" ? 'html' : href);
    if(document.URL.match('/jp/ja/data-insight')){
      if($(window).width() > 767){
        headerHeight = 100;
      }else{
        headerHeight = 50;
      }
    }else{
      headerHeight = 66;
      if ($('.sticky-wrapper').length) {
        var stickyHeight = $('.sticky-wrapper').outerHeight();
        headerHeight = 66 + stickyHeight;
      }
    }
    if(target.offset().top == 0){
      position = target.offset().top;
    }else{
      position = target.offset().top - headerHeight;
    }
    $('html, body').animate({
      scrollTop: position
    }, speed, 'swing');
    return false;
  });
});

/*---------------------------------
// ハンバーガーメニュー
---------------------------------*/
$(function(){
  function scrollControl(event){ // スマホスクロール制御用関数
    event.preventDefault();
  }
  var $headerMenu = $('.l-header-menu');
  var $headerIcoMenu = $('.l-header-ico-menu');
  var $headerSearch = $('.l-header-search');
  var $searchInputArea = $('.l-header-search-input');
  var $searchInput = $('.l-header-search form input');
  $headerIcoMenu.on('keydown', function(e){
    if(e.keyCode == 13){
      if($('.l-header-search.is-hide').length){
        $(this).trigger('click');
      }else if($('.l-header-menu.is-hide').length){ //検索用モーダルオープン時
        $(this).trigger('click');
      }
    }
  });
  $headerIcoMenu.on('click', function(){
    if($('.l-header-search.is-hide').length || (!$('.l-header-search').length && !$('.l-header.is-close').length)){
      if($headerMenu.hasClass('is-hide')){
        $headerMenu.css({
          'display': 'flex'
        });
        setTimeout(function(){
          $headerMenu.toggleClass('is-hide');
        }, 0);
      }else{
        $headerMenu.toggleClass('is-hide');
        setTimeout(function(){
          $headerMenu.css({
            'display': ''
          });
        }, 300);
      }
      $headerIcoMenu.toggleClass('is-menu').toggleClass('is-close');
      if($headerIcoMenu.hasClass('is-close') == true){
        document.addEventListener('touchmove', scrollControl,{
          passive: false
        });
      }else{
        document.removeEventListener('touchmove', scrollControl,{
          passive: false
        });
      }
    }else if($('.l-header-menu.is-hide').length){ //検索用モーダルオープン時
      $headerSearch.removeClass('is-typing');
      $('.l-header-search-suggestions').css({
        'opacity': ''
      });
      $('.l-header-search-suggestions').removeClass('is-show');
      $('.l-header-search-results').removeClass('is-show');
      $('.l-header-search-results').hide();
      $searchInput.val('');

      $headerSearch.addClass('is-hide');
      $searchInputArea.removeClass('is-fadein').removeClass('is-move');
      $headerIcoMenu.removeClass('is-close');
      setTimeout(function(){
        $headerSearch.css({
          'display': ''
        });
      }, 300);
    }else if($('.l-header.is-close').length){ //閉じるのみのヘッダー用（Contact Usなど）
      $('.l-wrapper').slideToggle();
      setTimeout(function(){
        if(document.referrer.indexOf(document.domain) != -1){
          window.history.back();
        }else{
          window.location.href = '/jp/ja/';
        }
      }, 400);
    }
    $headerIcoMenu.blur();
  });
});

/*---------------------------------
// ヘッダー検索用モーダル
---------------------------------*/
$(function(){
  var $headerSearch = $('.l-header-search');
  var $headerIcoSearch = $('.l-header-ico-search');
  var $headerIcoMenu = $('.l-header-ico-menu');
  var $searchInputArea = $('.l-header-search-input');
  var $searchInput = $('.l-header-search form input');
  var $searchSuggestions = $('.l-header-search-suggestions');
  var $searchResults = $('.l-header-search-results');
  var keyupFlg = true;

  if(getOS() == 'iOS'){
    $searchInput.addClass('is-iOS');
  }

  $headerIcoSearch.on('keydown', function(e){
    if(e.keyCode == 13){
      $(this).trigger('click');
    }
  });
  $headerIcoSearch.on('click', function(){
    $headerSearch.css({
      'display': 'block'
    });
    setTimeout(function(){
      $headerSearch.removeClass('is-hide');
    }, 0);
    $headerIcoMenu.addClass('is-close');
    $headerIcoSearch.blur();
    setTimeout(function(){
      $searchInputArea.addClass('is-fadein');
      setTimeout(function(){
        $searchInputArea.addClass('is-move');
        setTimeout(function(){
          $searchInput.focus();
        }, 800);
      }, 600);
    }, 300);
  });

  $searchInput.on('compositionstart', function(){
    keyupFlg = false;
  });
  $searchInput.on('compositionend', function(){
    keyupFlg = true;
  });
  $searchInput.on('keyup compositionend', function(){
    if($searchInput.val() != ''){ //1文字以上文字が入力された場合（IME未確定時含む）
      setTimeout(function(){
        $headerSearch.addClass('is-typing');
        $searchSuggestions.addClass('is-show');
      }, 100);
      if(keyupFlg){ //文字入力確定後処理
        /*
                if($searchResults.is(':hidden') && resultFlg == true){
                  resultFlg = false;
                  setTimeout(function(){
                    if(resultFlg == false){
                      $searchResults.fadeIn(500);
                    }
                  }, 1200);
                }
        */
        if($searchInput.val().length >= 3){ //3文字以上入力確定した場合
          // サジェスト処理
          getSuggestData();
        }else{ //2文字以下の場合
          $('.l-header-search-suggestions').css({
            'opacity': ''
          });
          $('.l-header-search-results').hide();
        }
      }
    }else{ //文字が空の場合
      setTimeout(function(){
        $headerSearch.removeClass('is-typing');
        $searchSuggestions.css({
          'opacity': ''
        });
        $('.l-header-search-suggestions').removeClass('is-show');
        $('.l-header-search-results').removeClass('is-show');
        $('.l-header-search-results').hide();
      }, 0);
    }
  });
});

/*---------------------------------
// ヘッダースクロール切り替え
---------------------------------*/
$(function(){
  var $header = $('.l-header');
  var $headerLogoPicture = $('.l-header-logo picture');
  var $headerFlex = $('.l-header .c-flex-align-center');
  var source = '';
  var currentScrollTop = 0;

  function headerScroll(){
    if($(this).scrollTop() >= 1){
      if(currentScrollTop < 1){
        $header.addClass('is-scroll');
        source = '';
        source += '<source media="(max-width:767px)" srcset="/assets2/images/logo-nttdata-blue-sp.png">';
        source += '<source media="(min-width:768px)" srcset="/assets2/images/logo-nttdata-blue-pc.png">';
        source += '<img src="/assets2/images/logo-nttdata-blue-pc.png" alt="NTT DATA" class="u-w-100p">';
        $headerLogoPicture.html(source);
        $headerFlex.removeClass('u-mt-30-pc');
        currentScrollTop = $(this).scrollTop();
      }
    }else{
      $header.removeClass('is-scroll');
      source = '';
      if($('.l-header.is-blue').length){
        source += '<source media="(max-width:767px)" srcset="/assets2/images/logo-nttdata-full-blue-sp.png">';
        source += '<source media="(min-width:768px)" srcset="/assets2/images/logo-nttdata-full-blue-pc.png">';
        source += '<img src="/assets2/images/logo-nttdata-full-blue-pc.png" alt="NTT DATA" class="u-w-100p">';
      }else{
        source += '<source media="(max-width:767px)" srcset="/assets2/images/logo-nttdata-full-white-sp.png">';
        source += '<source media="(min-width:768px)" srcset="/assets2/images/logo-nttdata-full-white-pc.png">';
        source += '<img src="/assets2/images/logo-nttdata-full-white-pc.png" alt="NTT DATA" class="u-w-100p">';
      }
      $headerLogoPicture.html(source);
      $headerFlex.addClass('u-mt-30-pc');
      currentScrollTop = $(this).scrollTop();
    }
  }
  headerScroll();
  setTimeout(function(){
    $header.removeClass('is-hide');
  }, 500);
  $(window).on('scroll', function(){
    headerScroll();
  });
});

/*---------------------------------
// ヘッダーメガメニュー
---------------------------------*/
$(function(){
  var $header = $('.l-header');
  var $headerLogoPicture = $('.l-header-logo picture');
  var source = '';

  function headerLogoSwitch(){
    if($header.hasClass('is-blue') || $header.hasClass('is-l-mega-header-opened')){
      source = '';
      source += '<source media="(max-width:767px)" srcset="/assets2/images/logo-nttdata-full-blue-sp.png">';
      source += '<source media="(min-width:768px)" srcset="/assets2/images/logo-nttdata-full-blue-pc.png">';
      source += '<img src="/assets2/images/logo-nttdata-full-blue-pc.png" alt="NTT DATA" class="u-w-100p">';
    }else{
      source = '';
      source += '<source media="(max-width:767px)" srcset="/assets2/images/logo-nttdata-full-white-sp.png">';
      source += '<source media="(min-width:768px)" srcset="/assets2/images/logo-nttdata-full-white-pc.png">';
      source += '<img src="/assets2/images/logo-nttdata-full-white-pc.png" alt="NTT DATA" class="u-w-100p">';
    }
    if($header.hasClass('is-scroll')){
      source = '';
      source += '<source media="(max-width:767px)" srcset="/assets2/images/logo-nttdata-blue-sp.png">';
      source += '<source media="(min-width:768px)" srcset="/assets2/images/logo-nttdata-blue-pc.png">';
      source += '<img src="/assets2/images/logo-nttdata-blue-pc.png" alt="NTT DATA" class="u-w-100p">';
    }
    $headerLogoPicture.html(source);
  }

  $('.l-mega-header-summary-nav-item').hover(function(){
    $(this).addClass('is-active').siblings().removeClass('is-active');
    let megaNavID = $(this).attr('data-target');
    let megaNavItem = '#' + megaNavID;

    $(megaNavItem).addClass('is-active').siblings().removeClass('is-active');

    $('.l-mega-header-sub-image-text').trunk8({
      lines: 2,
    });
    $('.l-mega-header-main-head-item p').trunk8({
      lines: 2,
    });
  }, function(){});

  $('.l-mega-header-main-head-linklist-item a').hover(function(){
    $(this).addClass('is-active').parent().siblings().children().removeClass('is-active');
    let megaSubID = $(this).attr('data-target');
    let megaSubItem = '#' + megaSubID;

    $(megaSubItem).addClass('is-active').siblings().removeClass('is-active');

    $('.l-mega-header-sub-image-text').trunk8({
      lines: 2,
    });
    $('.l-mega-header-main-head-item p').trunk8({
      lines: 2,
    });
  }, function(){});

  $('.l-header-gnav ul li a').on('click', function(){
    let megaMenuID = $(this).attr('data-target');
    let megaMenuItem = '#' + megaMenuID;

    if($(this).hasClass('is-active')){
      $(this).removeClass('is-active');
      $header.removeClass('is-l-mega-header-opened');
      $(megaMenuItem).removeClass('is-active');
      headerLogoSwitch();
    }else if($(this).is('[data-target]')){

      $(this).addClass('is-active').parent().siblings().children().removeClass('is-active');
      $header.addClass('is-l-mega-header-opened');
      $(megaMenuItem).addClass('is-active').siblings().removeClass('is-active');
      headerLogoSwitch();

      $('.l-mega-header-sub-image-text').trunk8({
        lines: 2,
      });
      $('.l-mega-header-main-head-item p').trunk8({
        lines: 2,
      });
    }else{
      $(this).parent().siblings().children().removeClass('is-active');
      $header.removeClass('is-l-mega-header-opened');
      headerLogoSwitch();
    }
  });

  $('.l-header, .l-header-inner *, .l-main, .l-footer').on('click', function(e){
    if(!$(e.target).attr('data-target') && !$(e.target).closest('a[href="/jp/ja"]').length){
      $('.l-header-gnav ul li a').removeClass('is-active');
      $('.l-mega-header-item').removeClass('is-active');
      $header.removeClass('is-l-mega-header-opened');
      headerLogoSwitch();
    }

  });

  $('.l-mega-header').on('click', function(e){
    e.stopPropagation();
  });

  $(window).on('resize', function(){
    $('.l-header-gnav ul li a').removeClass('is-active');
    $('.l-mega-header-item').removeClass('is-active');
    $header.removeClass('is-l-mega-header-opened');
    headerLogoSwitch();
  });

});

/*---------------------------------
// ページトップへ戻るボタン
---------------------------------*/
$(function(){
  var $pageTop = $('.l-footer-pagetop');
  var $pageTopLink = $('.l-footer-pagetop a');
  var scrollHeight = 0;
  var windowHeight = 0;
  var scrollPosition = 0;
  var footHeight = 0;
  $(window).on('load', function(){
    scrollHeight = $(document).height();
    windowHeight = $(window).outerHeight();
    footHeight = $('.l-footer-upper').outerHeight() + $('.l-footer-lower').outerHeight();
    if($(window).scrollTop() > 1){
      $pageTop.removeClass('is-hide');
    }
  });
  $(window).on('scroll touchmove', function(){
    if($(window).scrollTop() > 1){
      $pageTop.removeClass('is-hide');
    }else{
      $pageTop.addClass('is-hide');
    }
    if(scrollHeight != $(document).height()){
      scrollHeight = $(document).height();
    }
    if($(window).width() > 767){
      scrollPosition = windowHeight + $(window).scrollTop();
      if(scrollHeight - scrollPosition <= footHeight){
        $pageTop.addClass('is-hide');
      }else{
        if($(window).scrollTop() != 0){
          $pageTop.removeClass('is-hide');
        }
      }
    }
  });
  $(window).on('resize', function(){
    if(getDevice == 'pc'){
      scrollHeight = $(document).height();
      windowHeight = $(window).outerHeight();
      footHeight = $('.l-footer-upper').outerHeight() + $('.l-footer-lower').outerHeight();
      scrollPosition = windowHeight + $(window).scrollTop();
      if(scrollHeight - scrollPosition <= footHeight){
        $pageTop.addClass('is-hide');
      }else{
        if($(window).scrollTop() != 0){
          $pageTop.removeClass('is-hide');
        }
      }
    }
  });
  $pageTopLink.on('click', function(){
    $('body, html').animate({
      scrollTop: 0
    }, 300);
    return false;
  });
});

/*---------------------------------
// アコーディオン
---------------------------------*/
$(function(){
  var clickTextFlg = false;
  var clickText = '';
  $('.js-accordion-label input[type]').on('change', function () {
    $(this).closest('.js-accordion-area').find('.js-accordion-open').slideToggle(300, 'swing');
    if ($(this).closest('.js-accordion-label').hasClass('c-link-down')) {
      $(this).closest('.js-accordion-label').toggleClass('is-open');
    }
  });
  $(document).on('click', '.js-accordion-click', function(e){
    e.preventDefault();
    if($('.js-accordion-open.is-open').length){
      var position = $(this).closest('.js-accordion-area').offset().top;
      $("html,body").animate({
        scrollTop: position - 500 //スクロール位置調整
      }, 300, 'swing');
    }
    if($(this).is('[data-text-change]')){
      if(!clickTextFlg){
        clickText = $(this).text();
        clickTextFlg = true;
      }
      if($(this).attr('data-text-change') != $(this).text()){
        $(this).text($(this).attr('data-text-change'));
      }else{
        $(this).text(clickText);
      }
    }
    $(this).closest('.js-accordion-area').find('.js-accordion-open').toggleClass('is-open').slideToggle(300, 'swing', function(){
      if($('.js-accordion-open.is-open').length){
        $.fn.matchHeight._update()
      }
    });
  });
});

/*---------------------------------
// SNSシェアボタン
---------------------------------*/
$(function(){
  var $share = $('.c-link-share');
  var $shareText = $('.c-link-share-text');
  var $snsButton = $('.c-link-share-button');
  $(document).on('click', function(e){
    if($(e.target).closest($shareText).length && !$share.hasClass('is-open')){
      $share.addClass('is-open');
    }else if(!$(e.target).closest($snsButton).length && $share.hasClass('is-open')){
      $share.removeClass('is-open');
    }
  });

  $(document).on('click', ".st-custom-button", function(e){
    var sns = $(this).data('network');
    var size = "";
    var snsUrl = "";
    var currentUrl = window.location.href;
    var title = $("meta[property='og:title']").attr('content');
    var pageHeight = document.documentElement.clientHeight;
    var pageWidth = document.documentElement.clientWidth;
    switch(sns){
      case "facebook":
        size = "menubar=no, toolbar=no, resizable=yes, scrollbars=no, height=" + Math.min(500, .6 * pageHeight) + ", width=" + Math.min(800, .8 * pageWidth);
        snsUrl = "//www.facebook.com/sharer.php?t=" + title + "&u=" + currentUrl;
        break;
      case "linkedin":
        size = "menubar=no, toolbar=no, resizable=yes, scrollbars=yes, height=" + Math.min(600, .6 * pageHeight) + ", width=" + Math.min(800, .8 * pageWidth);
        // linkedinは個々のパラメータ事にエンコードをする必要がある
        var sessionRedirect = encodeURIComponent("https://www.linkedin.com/shareArticle?title=");
        var encTitle = encodeURIComponent(title);
        var encCurrentUrl = encodeURIComponent(currentUrl);
        snsUrl = "//www.linkedin.com/uas/login?session_redirect=" + sessionRedirect + encodeURIComponent(encTitle + "&url=" + encCurrentUrl);
        // シェア画面の新規ウインドウを表示(linkedin用)
        window.open(snsUrl, '_blank', size);
        return;
        break;
      case "twitter":
        size = "menubar=no, toolbar=no, resizable=yes, scrollbars=yes, height=" + Math.min(500, .6 * pageHeight) + ", width=" + Math.min(800, .8 * pageWidth);
        snsUrl = "//twitter.com/share?text=" + title + "&url=" + currentUrl;
        break;
      case "line":
        size = "menubar=no, toolbar=no, resizable=yes, scrollbars=yes, height=" + Math.min(500, .6 * pageHeight) + ", width=" + Math.min(350, .8 * pageWidth);
        snsUrl = "//line.me/R/msg/text/?" + currentUrl;
        break;
      case "email":
        var address = "";
        var subject = "I'd like to share a link with you";
        var body = currentUrl;
        location.href = 'mailto:' + address + '?subject=' + subject + '&body=' + body;
        return;
        break;
      default:
        return;
        break;
    }
    // シェア画面の新規ウインドウを表示
    window.open(encodeURI(snsUrl), '_blank', size);
  });

});

/*---------------------------------
// トップページSCROLLボタン
---------------------------------*/
$(function(){
  $('.c-btn-mainv-scroll').on('click', function(e){
    e.preventDefault();
    $('html, body').animate({
      scrollTop: $(this).parents('.c-block-mainv').next().offset().top - 66
    }, 500);
  });
});

/*---------------------------------
// トップページSERVICESのパララックス（PC時）
---------------------------------*/
$(function(){
  var $target = $('.c-block-toppage-services-item:eq(0)');
  var $wrapper = $('.c-block-toppage-services-body');
  var item = '.c-block-toppage-services-item';
  var $item = $('.c-block-toppage-services-item');
  var targetOffset = 0;
  var windowHeight = 0;
  var scrollTop = 0;
  $(window).on('load', function(){
    if($(window).width() > 767){
      if($target.length){
        targetOffset = $target.offset().top;
      }
      windowHeight = $(window).height();
      scrollTop = $(window).scrollTop();
      if(targetOffset <(scrollTop + windowHeight)){
        $wrapper.removeClass('is-hide');
      }
    }
  });
  $(window).on('scroll', function(){
    if($(window).width() > 767){
      scrollTop = $(window).scrollTop();
      if(targetOffset <(scrollTop + windowHeight)){
        $wrapper.removeClass('is-hide');
      }else{
        $wrapper.addClass('is-hide');
      }
    }
  });
  $(window).on('resize', function(){
    if($(window).width() > 767){
      if($(item + '.is-added').length){
        $(item + '.is-added').remove();
        $item.css({
          'width': '',
        });
        $wrapper.css({
          'width': '',
          'left': '',
        });
      }
      setTimeout(function(){
        if($(window).width() > 767){
          if($target.length){
            targetOffset = $target.offset().top;
          }
          windowHeight = $(window).height();
          scrollTop = $(window).scrollTop();
          $.fn.matchHeight._update();
        }
      }, 1500);
    }
  });
});

/*---------------------------------
// トップページSERVICESのスライダー（SP時）
---------------------------------*/
$(function(){
  var $left = $('.c-block-toppage-services .nttd-angle-left');
  var $right = $('.c-block-toppage-services .nttd-angle-right');
  var $wrapper = $('.c-block-toppage-services-body');
  var item = '.c-block-toppage-services-item';
  var $item = $('.c-block-toppage-services-item');
  var $itemFirst = $('.c-block-toppage-services-item:first-child');
  var $itemLast = $('.c-block-toppage-services-item:last-child');
  var windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  var clickFlg = true;
  var lastWidth = '';
  if($(window).width() <= 767){
    $wrapper.removeClass('is-hide');
    if(getDevice() == 'pc'){
      $item.css({
        'width': $(window).width()
      });
      $wrapper.css({
        'left': -$(window).width()
      });
    }else{
      $item.css({
        'width': ''
      });
      $wrapper.css({
        'left': ''
      });
    }
  }
  $(window).on('load', function(){
    if(windowWidth <= 767){
      if(getDevice() == 'pc'){
        $item.css({
          'width': $(window).width()
        });
        $wrapper.css({
          'left': -$(window).width()
        });
      }else{
        $item.css({
          'width': ''
        });
        $wrapper.css({
          'left': ''
        });
      }
      $itemFirst.clone().appendTo($wrapper);
      $itemLast.clone().prependTo($wrapper);
      $itemFirst = $('.c-block-toppage-services-item:first-child');
      $itemLast = $('.c-block-toppage-services-item:last-child');
      $itemFirst.addClass('is-added');
      $itemLast.addClass('is-added');
      $wrapper.css({
        'width':($(window).width() *($item.length + 2)),
      });
      lastWidth = $(window).width();
    }
  });
  $(window).on('resize', function(){
    if(lastWidth != $(window).width()){
      lastWidth == $(window).width();
      windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
      if(windowWidth <= 767){
        if(getDevice() == 'pc'){
          $item.css({
            'width': $(window).width()
          });
          $wrapper.css({
            'left': -($(window).width())
          });
        }else{
          $item.css({
            'width': ''
          });
          $wrapper.css({
            'left': ''
          });
        }
        setTimeout(function(){
          windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
          if(windowWidth <= 767){
            $(item + '.is-added').remove();
            $itemFirst = $('.c-block-toppage-services-item:first-child');
            $itemLast = $('.c-block-toppage-services-item:last-child');
            $wrapper.css({
              'width':($(window).width() *($item.length + 2)),
              'left': -($(window).width()),
            });
            if(getDevice() == 'pc'){
              $item.css({
                'width': $(window).width()
              });
              $wrapper.css({
                'left': -($(window).width())
              });
            }else{
              $item.css({
                'width': ''
              });
              $wrapper.css({
                'left': ''
              });
            }
            $itemFirst.clone().appendTo($wrapper);
            $itemLast.clone().prependTo($wrapper);
            $itemFirst = $('.c-block-toppage-services-item:first-child');
            $itemLast = $('.c-block-toppage-services-item:last-child');
            $itemFirst.addClass('is-added');
            $itemLast.addClass('is-added');
          }
        }, 500);
      }
    }
  });
  $left.on('click', function(){
    if(clickFlg){
      clickFlg = false;
      $wrapper.css({
        'left':(parseInt($wrapper.css('left')) + $(window).width()),
      });
      setTimeout(function(){
        clickFlg = true;
      }, 500);
      if(parseInt($wrapper.css('left')) >= -$(window).width()){
        setTimeout(function(){
          $wrapper.css({
            'transition': 'none',
            'left': -($(window).width() *($item.length)),
          });
          setTimeout(function(){
            $wrapper.css({
              'transition': '',
            });
          }, 100);
        }, 500);
      }
    }else{
      return false;
    }
  });
  $right.on('click', function(){
    if(clickFlg){
      clickFlg = false;
      $wrapper.css({
        'left':(parseInt($wrapper.css('left')) - $(window).width()) + 'px',
      });
      setTimeout(function(){
        clickFlg = true;
      }, 500);
      if(parseInt($wrapper.css('left')) <= -($(window).width() *($item.length))){
        setTimeout(function(){
          $wrapper.css({
            'transition': 'none',
            'left': -$(window).width() + 'px',
          });
          setTimeout(function(){
            $wrapper.css({
              'transition': '',
            });
          }, 100);
        }, 500);
      }
    }else{
      return false;
    }
  });
});

/*---------------------------------
// フィルター制御
---------------------------------*/
$(function(){
  // クエリ更新用関数
  function updateQueryString(queryString, key, value){
    var queryStrings =(queryString == '') ? [] : queryString.replace('?', '').split('&');
    var updatedQueryStrings = jQuery.grep(queryStrings, function(a){
      return a.indexOf(key + '=') != 0 && a.indexOf('page=') != 0
    });
    if(String(value).trim() != ''){
      updatedQueryStrings.push(key + '=' + value);
    }
    return updatedQueryStrings.join('&');
  }

  function updateResults(queryString){
    let requestUrl = window.location.href.split('?')[0];
    if(queryString != ''){
      requestUrl += '?' + queryString;
    }
    var resultpage = $("#resultpageUrl").val();
    if(resultpage != null){
      requestUrl = resultpage;
      if(queryString != ''){
        requestUrl += '?' + queryString;
      }
    }
    window.location.href = requestUrl;
  }

  // js-filter
  $('[data-filter="filterIndustries"], [data-filter="filterServices"], [data-filter="filterDate"], [data-filter="filterCategories"]').each(function(){ // ページ読み込み時処理
    var checkedFlg = false;
    $(this).find('input[type="radio"]').each(function(){
      if($(this).prop('checked') == true){
        checkedFlg = true;
      }
    });
    if(checkedFlg == false){
      $(this).find('input[type="radio"]:first').prop('checked', true);
    }
  });
  $('.js-filter').find('li > span').click(function(){ // js-filter項目エリアの開閉
    var filter = $(this).attr('data-filter');
    if($(this).hasClass('is-open') == false && $(this).closest('.js-filter').find('li > span').hasClass('is-open') == true){
      $(this).closest('.js-filter').find('li > span').removeClass('is-open');
      $(this).addClass('is-open');
      $('.c-block-filter-select').removeClass('is-open');
      $('.c-block-filter-select[data-filter="' + filter + '"]').addClass('is-open');
    }else if($(this).hasClass('is-open') == true && $(this).closest('.js-filter').find('li > span').hasClass('is-open') == true){
      $(this).removeClass('is-open');
      $('.c-block-filter-select[data-filter="' + filter + '"]').removeClass('is-open');
    }else{
      $(this).addClass('is-open');
      $('.c-block-filter-select[data-filter="' + filter + '"]').addClass('is-open');
    }
  });
  $('.js-filter-button').on('click', function(){
    caseStudyFilter($(this));
  });
  $('.c-radio-filter').on('change', function(){
    caseStudyFilter($(this));
  });
  function caseStudyFilter(){
    var queryString = "";
    var industries = $('[data-filter="filterIndustries"]').find('input[type="radio"]:checked').attr('data-id');
    var services = $('[data-filter="filterServices"]').find('input[type="radio"]:checked').attr('data-id');
    var date = $('[data-filter="filterDate"]').find('input[type="radio"]:checked').attr('data-id');
    var categories = $('[data-filter="filterCategories"]').find('input[type="radio"]:checked').attr('data-id');
    var yearFrom = $('.js-filter-year-from').find('option:selected').attr('data-year');
    var yearTo = $('.js-filter-year-to').find('option:selected').attr('data-year');
    if(typeof industries !== "undefined" && industries != "all"){
      queryString = updateQueryString(queryString, 'industries', industries);
    }
    if(typeof services !== "undefined" && services != "all"){
      queryString = updateQueryString(queryString, 'services', services);
    }
    if(typeof date !== "undefined" && date != "all"){
      queryString = updateQueryString(queryString, 'date', date);
    }
    if(typeof categories !== "undefined" && categories != "all"){
      queryString = updateQueryString(queryString, 'categories', categories);
    }
    if(typeof yearFrom !== "undefined" && yearFrom != "all"){
      queryString = updateQueryString(queryString, 'YearFrom', yearFrom);
    }
    if(typeof yearTo !== "undefined" && yearTo != "all"){
      queryString = updateQueryString(queryString, 'YearTo', yearTo);
    }
    if(queryString != ''){
      queryString = "?" + queryString;
    }
    var stringLength = queryString.length;
    if(stringLength > 0){
      if(queryString.charAt(stringLength - 1) == "&"){
        queryString = queryString.slice(0, -1);
      }
      queryString = queryString.replace(/ /g, "-");
      if(history.pushState){
        history.pushState(null, null, queryString);
      }
    }else{
      if(history.pushState){
        history.pushState(null, null, window.location.href.split('?')[0]);
      }
    }
    location.reload();
  }
  $('.js-filter-all-button').on('click', function(){
    if(history.pushState){
      history.pushState(null, null, window.location.href.split('?')[0]);
    }
    location.reload();
  });

  // ページ送り用
  function navigateTo(page){
    var queryString = updateQueryString(window.location.search, 'page', page);
    updateResults(queryString);
  }
  $('[data-navigate-to]').on('click', function(){
    navigateTo($(this).attr('data-navigate-to'));
  });

  // 表示件数更新用
  function updateitemscount(itemCount){
    var queryString = updateQueryString(window.location.search, 'count', itemCount);
    updateResults(queryString);
  }
  $('.js-filter-items-displayed').on('change', function(){
    updateitemscount($(this).find('option:selected').attr('data-items-displayed'));
  });

  // js-events-filter
  $('.js-events-filter').find('li').click(function(e){
    e.preventDefault();
    $(this).toggleClass('active');
    var events = $('.js-events-filter[data-query-name="events"]').find('li.active span').attr('data-id');
    var year = $('.js-events-filter[data-query-name="year"]').find('li.active span').attr('data-id');
    var filter = $('.js-events-filter[data-query-name="filter"]').find('li.active span').attr('data-id');
    var queryString = "";
    if(typeof events !== "undefined" && events != "all"){
      queryString = updateQueryString(queryString, 'events', events);
    }
    if(typeof year !== "undefined" && year != "all"){
      queryString = updateQueryString(queryString, 'year', year);
    }
    if(typeof filter !== "undefined" && filter != "all"){
      queryString = updateQueryString(queryString, 'filter', filter);
    }
    if(queryString != ''){
      queryString = "?" + queryString;
    }
    var stringLength = queryString.length;
    if(stringLength > 0){
      if(queryString.charAt(stringLength - 1) == "&"){
        queryString = queryString.slice(0, -1);
      }
      queryString = queryString.replace(/ /g, "-");
      if(history.pushState){
        history.pushState(null, null, queryString);
      }
    }
    else {
      if(history.pushState){
        history.pushState(null, null, window.location.href.split('?')[0]);
      }
    }
    location.reload();
  });

  // 旧ニュースフィルター？（書籍・刊行物で使用）
  $('.c-block-news-filter').each(function(){
    if($(window).width() <= 767){
      $(this).addClass('js-accordion-area');
      $(this).find('.c-block-news-filter-head').addClass('js-accordion-click c-link-down');
      $(this).find('.c-list-horizontal').addClass('js-accordion-open');
    }
  });
  $(".c-block-news-filter").find(".c-list-horizontal li").each(function(){
    if($(this).hasClass("active")){
      if($(window).width() <= 767){
        $("[data-filter='NewsFilters']").find(".c-block-news-filter-head").addClass("is-active");
      }
    }
  });
  $('.c-block-news-filter').css({'display': ''});
  $(window).on('resize', function(){
    if($(window).width() <= 767 && !$('.c-block-news-filter.js-accordion-area').length){
      $('.c-block-news-filter').addClass('js-accordion-area');
      $('.c-block-news-filter').find('.c-block-news-filter-head').addClass('js-accordion-click c-link-down');
      $('.c-block-news-filter').find('.c-list-horizontal').addClass('js-accordion-open');
      if($('.c-block-news-filter').find(".c-list-horizontal li").hasClass("active")){
        $('.c-block-news-filter').find('.c-block-news-filter-head').addClass('is-active');
      }
    }else if($(window).width() > 767 && $('.c-block-news-filter.js-accordion-area').length){
      $('.c-block-news-filter').removeClass('js-accordion-area');
      $('.c-block-news-filter').find('.c-block-news-filter-head').removeClass('js-accordion-click c-link-down is-active is-open');
      $('.c-block-news-filter').find('.c-list-horizontal').removeClass('js-accordion-open is-open').css({'display': ''});
    }
  });
  $(document).on('click', '.js-accordion-click.c-link-down', function(){
    $(this).toggleClass('is-open');
  })
  $('[data-filter="NewsFilters"]').find('li').click(function(e){
    e.preventDefault();
    if($(this).attr('data-id') == "all"){
      return '';
    }
    $(this).toggleClass("active");
    $(this).find('span').toggleClass("is-active");
    if($(window).width() > 767){
      updateUrlCallback();
    }
  });
  $('[data-filter="NewsFilters"]').find('li button').on('click', function(){
    updateUrlCallback();
  });
  var updateUrlCallback = function(){
    var categories = $('[data-filter="Categories"]').find('span.is-active').attr('data-id');
    var filters = $('[data-filter="NewsFilters"]').find('li.active');
    var selectedFilters = "";
    var queryString = "";
    filters.each(function(){
      if($(this).find('span').attr('data-id') !== "all" && $(this).find('span').attr('data-id') !== null){
        if(selectedFilters === ""){
          selectedFilters = $(this).find('span').attr('data-id');
        }else{
          selectedFilters = selectedFilters + '|' + $(this).find('span').attr('data-id');
        }
      }
    });
    var yearFrom = $('.year-slider.YearFrom').find('div.slick-active').attr('data-year');
    var yearTo = $('.month-slider.YearTo').find('div.slick-active').attr('data-year');
    if(typeof categories !== "undefined" && categories != "all"){
      queryString = updateQueryString(queryString, 'categories', categories);
    }
    if(typeof selectedFilters !== "undefined" && selectedFilters != "" && selectedFilters != "all"){
      queryString = updateQueryString(window.location.search, 'filters', selectedFilters);
    }
    if(typeof yearFrom !== "undefined" && yearFrom != "all"){
      queryString = updateQueryString(queryString, 'YearFrom', yearFrom);
    }
    if(typeof yearTo !== "undefined" && yearTo != "all"){
      queryString = updateQueryString(queryString, 'YearTo', yearTo);
    }
    if(queryString != ''){
      queryString = "?" + queryString;
    }
    var stringLength = queryString.length;
    if(stringLength > 0){
      if(queryString.charAt(stringLength - 1) == "&"){
        queryString = queryString.slice(0, -1);
      }
      queryString = queryString.replace(/ /g, "-");
      if(history.pushState){
        history.pushState(null, null, queryString);
      }
    }else{
      if(history.pushState){
        history.pushState(null, null, window.location.href.split('?')[0]);
      }
    }
    location.reload();
  }

});

/*---------------------------------
// Youtube iframe 制御
---------------------------------*/
$(function(){
  $('.c-block-video-button, .c-block-video-image').on('click', function(){
    if($(this).closest('.c-block-video:not(.js-modal)').length){
      console.log('1');
      $(this).closest('.c-block-video').find('.c-block-video-button, .c-block-video-image, .c-block-video-text').hide();
      $(this).closest('.c-block-video').find('.c-block-video-iframe').attr('src', $(this).closest('.c-block-video').find('.c-block-video-iframe').attr('data-src') + '?autoplay=1&mute=1&showinfo=0');
    }else{
      console.log('2');
    }
  });
});

/*---------------------------------
// モーダル表示
---------------------------------*/
$(function(){
  var $modal = '';
  var videoID = '';
  var modalOpenScrollTop;
  $('.js-modal').on('click', function(e){
    e.preventDefault();
    modalOpenScrollTop = $(window).scrollTop();
    if($(this).is('[data-video-id]')){ //ビデオ用モーダルの場合
      $('body').append('<div class="c-modal is-video"><div class="c-modal-inner"><div class="c-modal-wrapper"><iframe class="c-block-video-iframe" allow="fullscreen"></iframe><button type="button" class="c-modal-close"></button></div></div></div>')
      videoID = $(this).attr('data-video-id');
      $modal = $('.c-modal.is-video');
      $modal.addClass('is-open');
      $modal.find('iframe').attr('src', 'https://www.youtube-nocookie.com/embed/' + videoID + '?controls=0&amp;nocookie=true&amp;autoplay=1&amp;mute=1');
    } else if ($(this).is('[data-target]') && !$(this).is('[data-target^="gallery-image-"]') && !$(this).is('[data-target^="lecture2"]')){
      let modalID = $(this).attr('data-target');
      let modalContent = '#' + modalID;

      $(modalContent).addClass('is-open');
      $(modalContent).find('.c-modal-wrapper').append('<button type="button" class="c-modal-close"></button>');
    } else if ($(this).is('[data-target^="gallery-image"]')) {
      let modalID = $(this).attr('data-target');
      let modalContent = '#' + modalID;

      $(modalContent).clone().addClass('is-open').addClass('is-clone').appendTo('.c-block-carousel-grid');
      $(modalContent).removeClass('is-open');
      $('.is-clone').find('.c-modal-wrapper').append('<button type="button" class="c-modal-close"></button>');
      if ($(modalContent).hasClass('is-gallery-video')) {
        $('.is-clone').find('video').attr('autoplay', '');
      }
    } else if ($(this).is('[data-target^="lecture2"]')) {
      let modalID = $(this).attr('data-target');
      let modalContent = '#' + modalID;

      $(modalContent).clone().addClass('is-open').addClass('is-clone').appendTo('.ic_Lecture2');
      $(modalContent).removeClass('is-open');
      $('.is-clone').find('.c-modal-wrapper').append('<button type="button" class="c-modal-close"></button>');
      if ($(modalContent).hasClass('is-gallery-video')) {
        $('.is-clone').find('video').attr('autoplay', '');
      }
    }
  });
  $(document).on('click', '.c-modal-close, .c-modal, .c-modal-inner', function(e){
    if($(this).closest('.c-modal').hasClass('is-video')){ //ビデオ用モーダルの場合
      if($(e.target).hasClass('c-modal') || $(e.target).hasClass('c-modal-inner') || $(e.target).hasClass('c-modal-close')){
        $modal = $(this).closest('.c-modal');
        $modal.addClass('is-close');
        setTimeout(function(){
          $modal.removeClass('is-close');
          $modal.removeClass('is-open');
          $('.c-modal.is-video').remove();
        }, 300);
      }else{
        e.stopPropagation();
      }
      $(window).scrollTop(modalOpenScrollTop);
    }else{
      $('.c-modal-close').closest('.c-modal').removeClass('is-open');
      $('.c-modal-close').remove();
      $('.is-clone').remove();
      $(window).scrollTop(modalOpenScrollTop);
      return false;
    }
  });
  $(document).on('click', '.c-modal-wrapper-inner', function(e){
    e.stopPropagation();
  });
});

/*---------------------------------
// お問い合わせのplaceholder制御
---------------------------------*/
$(function(){
  $('.c-input-text-contact').on('focus', function(){
    $(this).parent().next().addClass('is-focus');
  });
  $('.c-input-text-contact').on('blur', function(){
    if(!$(this).val()){
      $(this).parent().next().removeClass('is-focus');
    }
  });
});

/*---------------------------------
// お問い合わせのSelect
---------------------------------*/
$(function(){
  $('.js-select-contact').on('click', function(){
    console.log($(this).find('select').val());
  });
  $('.js-select-contact .chosen-results').on('click', function(){
    $(this).closest('.js-select-contact').removeClass('is-first');
    $(this).closest('.js-select-contact').next().addClass('is-focus');
  });

});

/*---------------------------------
// フルヘッダーのSP制御
---------------------------------*/
$(function(){
  var $contentHeader = $('.c-block-content-header.is-full');
  var currentWidth = $(window).width();
  var deviceFlg;
  if($(window).width() >= 768){
    $contentHeader.css({
      'height': ''
    });
  }else{
    $contentHeader.css({
      'height': $(window).outerHeight()
    });
  }
  $(window).on('resize orientationchange', function(){
    if(currentWidth !== $(window).width()){
      if($(window).width() >= 768){
        $contentHeader.css({
          'height': ''
        });
      }else{
        $contentHeader.css({
          'height': $(window).outerHeight()
        });
      }
      currentWidth = $(window).width()
    }
  });
});

/*---------------------------------
// 検索結果一覧ページ
---------------------------------*/
$(function(){
    $(window).on('load', function(){
    setTimeout(function(){
      $('.l-header-search-result-input').addClass('is-fadein');
      setTimeout(function(){
        $('.l-header-search-result-input').addClass('is-move');
        setTimeout(function(){
          $('.l-header-search-result-input input').focus();
        }, 800);
      }, 600);
    }, 300);
  });
});

/*---------------------------------
// カスタマーエクスペリエンスカルーセル
---------------------------------*/
$(function () {
  var modalWrap = ".case-modal-wrap";
  var modal = ".case-modal";
  var modalItem = modal + "-item";
  var modalPager = ".case-modal-pager";
  var modalPagerAll = modalPager + "-all";
  var modalPagerCur = modalPager + "-current";
  var pin = ".pin-case-modal";

  var controller = new ScrollMagic.Controller();

  //Screen判定関数
  var screen = function () {
    var pw = $(window).width();
    if (pw >= 768) {
      return 'pc';
    } else {
      return 'sp';
    }
  }

  //slick関数
  function slickRun() {
    $('#case-carousel').on('init', function (event, slick) {
        if (!$(modalWrap).find('.case-pager').length) {
          $(modalWrap).append('<div class="case-pager case-pager-bottom"><div class="case-pager-inner"><span class="case-pager-current"></span><span class="case-pager-slash">/</span><span class="case-pager-total"></span></div></div>');
          $(modalWrap).prepend('<div class="case-pager case-pager-top"><div class="case-pager-inner"><span class="case-pager-current"></span><span class="case-pager-slash">/</span><span class="case-pager-total"></span></div></div>');
          $('.slick-slider .slick-prev').clone(true).prependTo('.case-pager-inner');
          $('.slick-slider .slick-next').clone(true).appendTo('.case-pager-inner');
        }
        $('.case-pager-current').text(slick.currentSlide + 1);
        $('.case-pager-total').text(slick.slideCount);
      })
      .slick({
        infinite: true,
        dots: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: false,
        prevArrow: '<button class="slick-prev slick-arrow" type="button"><i class="nttd nttd-arrow-left"></i></button>',
        nextArrow: '<button class="slick-next slick-arrow" type="button"><i class="nttd nttd-arrow-right"></i></button>',
      })
      .on('beforeChange', function (event, slick, currentSlide, nextSlide) {
        $('.case-pager-current').text(nextSlide + 1);
      });
  }

  function slickDestroy() {
    $('.case-pager').remove();
    $('#case-carousel').slick('unslick');
  }

  //読み込み時slick実行
  if (screen() == 'sp') {
    slickRun();
    $('#case-carousel').slick('slickSetOption', 'centerMode', true, true);
  }

  //背景画像
  var cover = function () {
    if (screen() == 'sp') {
      $(modalItem).off('mouseover mouseout');
      var current = $('.slick-current').attr('data-slick-index');
      $('.case-cover-item').removeClass('is-active');
      $('.case-cover-item').eq(current).addClass('is-active');
    } else {
      $(modalItem).on('mouseover', function () {
        var current = $(modalItem).index(this);
        $('.case-cover-item').removeClass('is-active');
        $('.case-cover-item').eq(current).addClass('is-active');
      });
      $(modalItem).on('mouseout', function () {
        $('.case-cover-item').removeClass('is-active');
      });
    }
  }
  cover();
  $('#case-carousel').on('afterChange', function (event, slick, currentSlide) {
    cover();
  });

  //アイテムの総数
  var len = $(modalItem).length;

  //クリックしたアイテム番号取得
  $(document).on("click", '.case-modal-item', function () {
    let idx = $('.case-modal-item').index(this); //*global
  });

  //x,duration計算関数
  function range_calc() {
    var w = $(modalItem).width(); //アイテムの横幅取得
    var h = $(modal).height(); //アイテム高さ
    var screen_h = $(window).height(); //画面（ブラウザ）高さ
    var pager_h = $(modalPager).height(); //pager高さ
    return (w * (len - 1)) + screen_h - h - pager_h;
  }

  //ie　コンテンツ内に縦スクが出る場合、横スクで表示が乱れるためスクロール非表示
  var ua = navigator.userAgent.toLowerCase();
  var ver = navigator.appVersion.toLowerCase();
  var isMSIE = (ua.indexOf('msie') > -1) && (ua.indexOf('opera') == -1);
  var isIE11 = (ua.indexOf('trident/7') > -1);
  var isIE = isMSIE || isIE11;
  if (isIE) {
    $('.case-box-inner').css('overflow-y', 'hidden');
    $('.case-modal-item:first-child .case-box-inner').css('overflow-y', 'auto');
  }

  //Modaal
  $('.modal-open').modaal({
    fullscreen: true,
    hide_close: true,
    before_open: function () {

      $('html').addClass('modaal-active');
      if (screen() == 'pc') {

        //ScrollMagic
        var tween = TweenMax.to(modal, 1, {
          ease: Power0.easeNone,
          x: "-1000px"
        });
        let scene = new ScrollMagic.Scene({ //*global
            triggerElement: pin,
            triggerHook: "onLeave",
            duration: "1000px"
          })
          .setPin(pin)
          .setTween(tween)
          .on('update', function () {

            //x,duration再設定
            var range = range_calc();
            tween.progress(0);
            scene.duration(range + "px");
            tween.updateTo({
              ease: Power0.easeNone,
              x: "-" + range + "px"
            }, true);
            scene.setTween(tween);

            //BugFix（画面高さが狭いとき最後のカラムで上にずれる）
            var w = $(pin).css('width');
            $(pin).css({
              'width': w
            });
            $(pin).attr('data-def-w', w);
          })
          .on("end", function (event) {
            //BugFix（画面高さが狭いとき最後のカラムで上にずれる）
            var range = range_calc();
            $(modal).css({
              'transform': 'translate3d(-' + range + 'px, 0px, 0px)'
            });
            var w = $(pin).attr('data-def-w');
            $(pin).css({
              'position': 'fixed',
              'width': w
            });
          })
          .addTo(controller);
      }
      if (screen() == 'sp') {
        slickDestroy();
      }
    },
    after_open: function () {
      if (screen() == 'pc') {

        //アイテムの横幅取得
        var w = $(modalItem).width();

        //選択したアイテムへスクロール
        var scroll_range = w * idx;
        $('.modaal-container').animate({
          'scrollTop': scroll_range
        }, 200, 'swing');

        //pager操作
        $(modalPagerAll).text(len);
        $(modalPagerCur).text('1');
        $('.case-modal-arrow-prev').addClass('is-disabled');
        $('.case-modal-arrow-next').removeClass('is-disabled');
        if (len == 1) {
          $('.case-modal-arrow-next').addClass('is-disabled');
        }
        $('.modaal-container').on('scroll', function (e) {
          var w = $(modalItem).width();
          var pager_current = Math.floor($(this).scrollTop() / w) + 1;
          $(modalPagerCur).text(pager_current);
          if (pager_current == 1) {
            $('.case-modal-arrow-prev').addClass('is-disabled');
            if (len == 2) {
              $('.case-modal-arrow-next').removeClass('is-disabled');
            }
          } else if (pager_current == len) {
            $('.case-modal-arrow-next').addClass('is-disabled');
            if (len == 2) {
              $('.case-modal-arrow-prev').removeClass('is-disabled');
            }
          } else {
            $('.case-modal-arrow').removeClass('is-disabled');
          }

          //ie　非表示にしていた縦スク表示
          if (isIE) {
            var current_start_w = (pager_current - 1) * w;
            if (current_start_w <= $(this).scrollTop() && (current_start_w + (w / 2)) >= $(this).scrollTop()) {
              $('.case-modal-item:not(:nth-child(' + pager_current + ')) .case-box-inner').css('overflow-y', 'hidden');
              $('.case-modal-item:nth-child(' + pager_current + ') .case-box-inner').css('overflow-y', 'auto');
            } else {
              $('.case-modal-item .case-box-inner').css('overflow-y', 'hidden');
            }
          }
        });

        //スクロール制御（モーダルコンテンツ内でfixedしている要素の上ではホイールスクロールできない）
        var mousewheelevent = 'onwheel' in document ? 'wheel' : 'onmousewheel' in document ? 'mousewheel' : 'DOMMouseScroll';
        $('.modaal-container').on(mousewheelevent, function (e) {
          var num = 1;
          e.preventDefault();
          var delta = e.originalEvent.deltaY ? -(e.originalEvent.deltaY) : e.originalEvent.wheelDelta ? e.originalEvent.wheelDelta : -(e.originalEvent.detail);
          if (delta < 0) {
            var st = $(".modaal-container").scrollTop();
            $(".modaal-container").scrollTop(st + 70);
          } else {
            var st = $(".modaal-container").scrollTop();
            $(".modaal-container").scrollTop(st - 70);
          }
        });
      }
      if (screen() == 'sp') {
        slickRun();
        $('#case-carousel').slick('slickGoTo', idx, true);
      }
    },
    after_close: function () {

      $('html').removeClass('modaal-active');
      if (screen() == 'pc') {

        //ScrollMagic destroy
        scene.destroy(true);
        $(modal).css('transform', '');
      }
      if (screen() == 'sp') {
        $('#case-carousel').slick('resize');
        $('#case-carousel').slick('slickSetOption', 'centerMode', true, true);
      }
    }
  });

  $(document).on("click", '.case-modal-closecover', function () {
    $('.modal-open').modaal('close');
  });

  //resize
  var resizeTimer = null;
  $(window).on('resize', function () {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function () {

      //modaal中なら実行
      if ($('body.modaal-noscroll').length) {
        //modaal閉じる
        $('.modal-open').modaal('close');
      } else {
        //slick解除して処理
        if (screen() == 'pc') {
          if ($('#case-carousel.slick-initialized').length) {
            slickDestroy();
          }
        }
        if (screen() == 'sp') {
          if (!$('#case-carousel.slick-initialized').length) {
            slickRun();
            $('#case-carousel').slick('slickSetOption', 'centerMode', true, true);
          }
        }
        cover();
      }
    }, 0);
  });

  //ScrollMagic Arrow
  $('.case-modal-arrow').on('click', function () {
    //移動量
    var vol = Number($(this).attr("data-vol"));

    //現在セル取得
    var w = $(modalItem).width();
    var pager_current = Math.floor($(".modaal-container").scrollTop() / w);

    //移動後のアイテム番号
    var moved = pager_current + vol;

    //最初最後除外
    if (0 <= moved && moved <= len) {

      //選択したアイテムへスクロール
      var pos = w * moved;
      $(".modaal-container").animate({
        'scrollTop': pos
      }, 400, 'swing');
    }
  });
});

/*---------------------------------
// Innovation Conference用
---------------------------------*/
// ニュース アコーディオン ボタン表示
// ReadingMaterial アコーディオン 表示

$(function () {
  let $newsChild = $('.c-block-innovation-news-grid-accordion').children().length;
  if ($newsChild >= 1) {
    $('.c-block-innovation-news-grid-btn').addClass('is-active');
  }

  if ($('.c-block-innovation-report-accordion').length) {
    $('.c-block-innovation-report-btn').addClass('is-active');
  }

  if ($('.c-block-innovation-exhibition-accordion').length) {
    $('.c-block-innovation-exhibition-accordion-btn').addClass('is-active');
  }

});

$(function () {
  $(window).on('load', function () {
    $('.c-block-innovation-report-accordion').hide();
  });

  $('.js-accordion-btn').on('click', function () {
    $(this).closest('.js-accordion-area').find('.js-accordion-open').slideToggle(250);
    $(this).toggleClass('is-open');

    if ($(this).hasClass('is-open')) {
      $(this).text('CLOSE');
    } else {
      $(this).text('VIEW MORE');
    }
  });
});

// 右下固定エントリーバナー
$(function () {
  var $entryBanner = $('.c-block-innovation-entrybanner');
  var scrollHeight = 0;
  var windowHeight = 0;
  var scrollPosition = 0;
  var footHeight = 0;

  $(window).on('load', function () {
    scrollHeight = $(document).height();
    windowHeight = $(window).outerHeight();
    footHeight = $('.l-footer-upper').outerHeight() + $('.l-footer-lower').outerHeight();
    if ($(window).scrollTop() > 1) {
      $entryBanner.removeClass('is-hide');
    }
  });

  $(window).on('scroll touchmove', function () {
    if ($(window).scrollTop() > 1) {
      $entryBanner.removeClass('is-hide');
    } else {
      $entryBanner.addClass('is-hide');
    }
    if(scrollHeight != $(document).height()){
      scrollHeight = $(document).height();
    }
    scrollPosition = windowHeight + $(window).scrollTop();
    if (scrollHeight - scrollPosition <= footHeight) {
      $entryBanner.addClass('is-hide');
    } else {
      if ($(window).scrollTop() != 0) {
        $entryBanner.removeClass('is-hide');
      }
    }
  });

  $(window).on('resize', function () {
    if (getDevice == 'pc') {
      scrollHeight = $(document).height();
      windowHeight = $(window).outerHeight();
      footHeight = $('.l-footer-upper').outerHeight() + $('.l-footer-lower').outerHeight();
      scrollPosition = windowHeight + $(window).scrollTop();
      if (scrollHeight - scrollPosition <= footHeight) {
        $entryBanner.addClass('is-hide');
      } else {
        if ($(window).scrollTop() != 0) {
          $entryBanner.removeClass('is-hide');
        }
      }
    }
  });
});

// Innovation Conference 2021用
// https://www.nttdata.com/assets/NTTDATAJapan/Js/innovation_conference_2021.min.js 転記
"use strict";
var APP = APP || {};
! function (i) {
  i(function () {
    APP.browser(i), APP.spNavSwitch(i), APP.naviSticky(i), APP.countdown(i), APP.slick(i), APP.mh(i)
  })
}(jQuery), APP.browser = function (c) {
  c(function () {
    var i = navigator.userAgent.toLowerCase();
    var t = navigator.appVersion.toLowerCase();
    var e = -1 < i.indexOf("msie") && -1 == i.indexOf("opera");
    i = (e && t.indexOf("msie 8."), e && t.indexOf("msie 9."), e && t.indexOf("msie 10."), -1 < i.indexOf("trident/7"));
    (e || i) && c("html").addClass("ie")
  })
}, APP.spNavSwitch = function (t) {
  t(function () {
    t("#sp-nav-switch").length && (t("#sp-nav-switch").on("click", function () {
      t(this).toggleClass("is-open"), t(this).parent().next().toggleClass("is-open"), t("#sp-nav-switch").hasClass("is-open") ? t("#sp-nav-switch").children().text("CLOSE") : t("#sp-nav-switch").children().text("MENU")
    }))

    t(window).on("resize load", function () {
      if (t(window).outerWidth() >= 768) {
        t("#sp-nav-switch").removeClass("is-open").children().text("MENU");
        t(".c-block-anchor-menu").removeClass("is-open");
      } else {
        t(".c-block-anchor-menu a").on("click", function () {
          t("#sp-nav-switch").removeClass("is-open").children().text("MENU");
          t(".c-block-anchor-menu").removeClass("is-open");
        })
      }
    })

  })

}, APP.naviSticky = function (e) {

  e(function () {
    var i, t;
    e(".c-block-anchor-menu").length && ((i = function () {
      var i;
      e(window).outerWidth() < 768 ? e(".c-block-anchor-menu").unstick() : (i = 66, e("html").hasClass("ie") && (i = 66), e(".c-block-anchor-menu").sticky({
        topSpacing: i
      }))
    })(), t = null, e(window).on("resize", function () {
      clearTimeout(t), t = setTimeout(function () {
        i()
      }, 100)
    })), e(window).on("load scroll resize", function () {
      if (e(window).outerWidth() < 768) {
        if (e(".l-header").hasClass("is-scroll")) {
          e(".c-block-anchor-menu").css("margin-top", "0");
          e(".c-block-anchor-menu-btn").css("top", "87px");
        } else {
          e(".c-block-anchor-menu").css("margin-top", "19px");
          e(".c-block-anchor-menu-btn").css("top", "105px");
        }
      } else {
        e(".c-block-anchor-menu").css("margin-top", "0");
      }
    })
  })

}, APP.countdown = function (h) {
  h(function () {
    var d;
    h("#c-header-countdown").length && (d = setInterval(function () {
      var i = new Date;
      var t = h("#c-header-countdown").attr("data-date");
      var e = new Date(t);
      var c = ("0" + (Math.ceil((e - i) / 864e5) - 1)).slice(-2);
      var n = e - i;
      if (-1e3 <= n) {
        var o = Math.floor(n / 36e5);
        var s = ("0" + o % 24).slice(-2);
        var a = Math.floor((n - 36e5 * o) / 6e4);
        t = ("0" + a).slice(-2);
        e = Math.round((n - 36e5 * o - 6e4 * a) / 1e3);
        i = ("0" + e).slice(-2);
        "60" == i && (i = "00"), n < 0 && (i = t = s = c = "00");
        var r, l = {
          dd1: String(c).slice(0, 1),
          dd2: String(c).slice(1, 2),
          hh1: String(s).slice(0, 1),
          hh2: String(s).slice(1, 2),
          mm1: String(t).slice(0, 1),
          mm2: String(t).slice(1, 2),
          ss1: String(i).slice(0, 1),
          ss2: String(i).slice(1, 2)
        };
        for (r in l) {
          h("#c-header-countdown ." + r).html(l[r]);
        }
        0 == o && 0 == a && 0 == e ? clearInterval(d) : h("#c-header-countdown").css({
          opacity: 1
        })
      }
    }, 1e3))
  })
}, APP.slick = function (n) {
  n(function () {
    var t, i, e, c = n(".ic_Lecture2.ic_2021 .slides");
    c.length && (i = (t = function () {
      return !n(".ic_Lecture.ic_2021 .c-flex-2column-pc").length || n(window).width() < 768 ? "0px" : (n(window).width() - (n(".ic_Lecture.ic_2021 .c-flex-2column-pc").width() + 24)) / 2 + "px"
    })(), c.on("init", function (i, t) {
      n(this).append('<div class="slick-counter"><span class="current"></span><span class="slash">/</span><span class="total"></span></div>'), n(".current").text(t.currentSlide + 1), n(".total").text(t.slideCount)
    }).slick({
      infinite: !0,
      slidesToShow: 1,
      slidesToScroll: 1,
      centerMode: !0,
      centerPadding: i,
      prevArrow: '<a class="slick-prev" href="#"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAAoBAMAAABdi/SLAAAAG1BMVEVHcEz///////////////////////////////8W/R0OAAAACHRSTlMAkDXwDcu+pffGl/MAAABISURBVDjLY2CAAVUHBtyAyUIAj6xymwM+rSlDTWsIPq2tI0hrR6EgTsAQ0YEHENCL3178bh6umtvwa04Zipqd8JYb+MscrAAAnzMuS1rVpy8AAAAASUVORK5CYII=" /></a>',
      nextArrow: '<a class="slick-next" href="#"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAAoBAMAAABdi/SLAAAAG1BMVEVHcEz///////////////////////////////8W/R0OAAAACHRSTlMAkDXwDcu+pffGl/MAAABISURBVDjLY2DAACxBDHgAY7MCHlmWDCN8mt2GpmZX/JojhqtmQZxAvMOIoQMPaCWgl0xH43fzMNOKN026DTWtBMoNvGUOEgAAZh8uViemACkAAAAASUVORK5CYII=" /></a>'
    }).on("beforeChange", function (i, t, e, c) {
      n(".current").text(c + 1)
    }), e = null, n(window).on("resize", function () {
      clearTimeout(e), e = setTimeout(function () {
        var i = t();
        c.slick("slickSetOption", {
          centerPadding: i
        }, !0)
      }, 100)
    }), n(".ic_Lecture2.ic_2021 .slides *").on("touchstart click", function (i) {
      n(this).find(".flick").fadeOut()
    }))
  })
}, APP.mh = function (e) {
  e(function () {
    function i() {
      e(".ic_Lecture2.ic_2021 .slides .slick-slide .slide-title").matchHeight(), e(".ic_Lecture2.ic_2021 .slides .slide").matchHeight(), e(".ic_Timetable.ic_2021 .program .inner .title").matchHeight(), 767 < e(window).width() ? (e(".ic_Lecture2.ic_2021 .slides .slick-slide .type01 .title b").matchHeight(), e(".ic_Lecture2.ic_2021 .slides .slick-slide .type03 .title b").matchHeight(), e(".c-block-innovation-report .c-block-innovation-report-item .u-mb-10.c-flex-justify-between").matchHeight(), e(".c-block-innovation-report .c-block-innovation-report-item .c-block-innovation-report-item-title").matchHeight(), e(".c-block-innovation-report .c-block-innovation-report-item .c-block-innovation-report-item-position").matchHeight()) : (e(".ic_Lecture2.ic_2021 .slides .slick-slide .type01 .title b").matchHeight({
        remove: !0
      }), e(".ic_Lecture2.ic_2021 .slides .slick-slide .type03 .title b").matchHeight({
        remove: !0
      }), e(".c-block-innovation-report .c-block-innovation-report-item .u-mb-10.c-flex-justify-between").matchHeight({
        remove: !0
      }), e(".c-block-innovation-report .c-block-innovation-report-item .c-block-innovation-report-item-title").matchHeight({
        remove: !0
      }), e(".c-block-innovation-report .c-block-innovation-report-item .c-block-innovation-report-item-position").matchHeight({
        remove: !0
      }))
    }
    i();
    var t = null;
    e(window).on("resize", function () {
      clearTimeout(t), t = setTimeout(function () {
        i()
      }, 100)
    })
  })
};