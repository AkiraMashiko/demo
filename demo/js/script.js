
$(function () {
    // ハンバーガーのラッパー押したときに.navと.header__button（ハンバーガー）にjs-activeクラスを付与する
    $(".hamburger").on("click", function () {
      $(".globalMenuSp,.hamburger").toggleClass("active");
    });

    // .nav__link押したときに.navと.header__button（ハンバーガー）のjs-activeクラスを削除する
    $(".nav__link").on("click", function () {
      $(".globalMenuSp,.hamburger").removeClass("active");
    });
  });

$(function(){
    //ローディング
    loading = anime({
        targets: 'div#loading > div',
        rotate: '360deg',
        loop: true,
        easing: 'linear',
        duration: 1500
    });
});

$(window).on('load',function(){
    //ローディングのアニメーションを一旦止める
    loading.pause();

    var loadingTimeline = anime.timeline({
        targets: 'div#loading > div',
    });
    
    //ローディングと同じアニメーションを1回実行しないと変な位置で止まっているおそれがある
    //横100%　→　縦100%　→　フェードアウト　　というアニメーションです
    loadingTimeline.add({
        rotate: '360deg',
        easing: 'linear',
        duration: 1000
    }).add({
        width: '100%',
        easing: 'easeOutExpo',
        duration: 500
    }).add({
        height: '100%',
        easing: 'easeOutExpo',
        duration: 500
    }).add({
        targets: 'div#loading',
        opacity: 0,
        easing: 'linear',
        duration: 1000,
        complete: function(){
            $('div#loading').remove();
        }
    });
});


//topimagetext
(function($){  
    $.fn.textyle = function(options){
        var target = this;
        var targetTxt = target.contents();
        var defaults = {
                    duration : 600,
                    delay : 200,
                    easing : 'swing',
                    callback : null
                };
        var setting = $.extend(defaults, options);
    //split txt & wrap txt by span
        targetTxt.each(function(){
            var texts = $(this);
            if(this.nodeType === 3){
                mkspn(texts);
            }
        });
        function mkspn(texts){
            texts.replaceWith(texts.text().replace(/(\S)/g,'<span>$1</span>'));
        }
    //txt animation
        return this.each(function(){
            var len = target.children().length;
            target.css('opacity',1);
            for (var i = 0; i < len; i++) {
                target.children('span:eq('+i+')')
                .delay(setting.delay*i)
                .animate({
                    opacity : 1,
                    top : 0,
                    left : 0,
                },setting.duration,setting.easing,setting.callback);
            };
        });
    };
}( jQuery ));
  //////plugin code to here//////

$(window).on('load',function(){
  //////code to call//////
$('.ex1').textyle();
$('.ex2').textyle({
    duration : 600,
    delay : 200,
    easing : 'easeInCubic',
    callback : function(){
$(this).css({
        color : 'coral',
        transition : '2s',
});
$('.desc').css('opacity',1);
        }
    });
});

//スムーススクロール
jQuery(function(){
    jQuery('a[href^="#"]').click(function(){
      var speed = 1000;
      var href= $(this).attr("href");
      var target = $(href == "#" || href == "" ? 'html' : href);
      var position = target.offset().top;
      $("html, body").animate({scrollTop:position}, speed, "swing");
      return false;
    });
});

// スクロールしたら要素がフェードイン
jQuery(function(){
    jQuery(window).scroll(function (){
        jQuery('.fadein').each(function(){
            var elemPos = jQuery(this).offset().top;
            var scroll = jQuery(window).scrollTop();
            var windowHeight = jQuery(window).height();
            if (scroll > elemPos - windowHeight + 100){
                jQuery(this).addClass('scrollin');
            }
        });
    });
  });

jQuery(function(){
    jQuery(window).scroll(function (){
        jQuery('.fadein_left').each(function(){
            var elemPos = jQuery(this).offset().top;
            var scroll = jQuery(window).scrollTop();
            var windowHeight = jQuery(window).height();
            if (scroll > elemPos - windowHeight + 100){
                jQuery(this).addClass('scrollin');
            }
        });
    });
  });

jQuery(function(){
    jQuery(window).scroll(function (){
        jQuery('.fadein_right').each(function(){
            var elemPos = jQuery(this).offset().top;
            var scroll = jQuery(window).scrollTop();
            var windowHeight = jQuery(window).height();
            if (scroll > elemPos - windowHeight + 100){
                jQuery(this).addClass('scrollin');
            }
        });
    });
  });