$(function () {

    // preloader

    $('.wrapper').hide();

    var imgs = [];

    $('*').each(function () {
        var element, background, img;
        element = $(this);
        background = element.css('background-image');
        img = element.is('img');

        if (background != 'none') {
            var path = background.replace('url("', '').replace('")', '');
            imgs.push(path);
        }

        if (img) {
            var path = element.attr('src');
            if (path) {
                imgs.push(path);
            }
        }
    });

    var percentsTotal = 1;

    for (var i = 0; i < imgs.length; i++) {
        var image = $('<img>', {
            attr: {
                src: imgs[i]
            }
        });
        image.on('load', function () {
            setPercents(imgs.length, percentsTotal);
            percentsTotal++;
        });

        image.on('error', function () {
            percentsTotal++;
        })
    }

    function setPercents(total, current) {
        var percent = Math.ceil(current / total * 100);
        if (percent >= 100) {
            $('.preloader').fadeOut();
            $('.wrapper').show();
        }
        $('.preloader__percents').text(percent);
    }

    // menu

    var button = $('.header__menu-button');
    var buttonActiveClass = $('.header__menu-button_active');
    var menu = $('.header__menu');
    var menuActiveClass = 'header__menu-active';

    button.on('click', function () {
        if (menu.hasClass(menuActiveClass)) {
            menu.removeClass(menuActiveClass);
        } else {
            menu.addClass(menuActiveClass);
            button.hide();
        }
    });

    buttonActiveClass.on('click', function () {
        menu.removeClass(menuActiveClass);
        button.show();
    })

    //tabs

    $('.blog__nav-item').on('click', function () {
        var index = $(this).index();
        $('.blog__nav-link').removeClass('blog__nav-link-active');
        $(this).find('.blog__nav-link').addClass('blog__nav-link-active');
        var article = $('#article' + index);
        $('body,html').animate({scrollTop: article.offset().top}, 500);
    })

    $(function () {
        var navTopPos = $('.blog__nav').offset().top;
        $(window).scroll(function () {
            var top = $(document).scrollTop();
            if (top > navTopPos) $('.blog__nav').addClass('blog__nav-fixed');
            else $('.blog__nav').removeClass('blog__nav-fixed');
        });
    });

    // arrow_up

    $(".arrow__pic-up").click(function () {
        $('body').animate({"scrollTop": 0}, 1000);
    });

    //arrow_down

    $(".arrow__pic-down").click(function () {
        var height = $(".wrapper").height();
        $("body").animate({"scrollTop": height}, 1000);
    });

    // form

    var feedbackInputs = ['#feedbackName', '#feedbackEmail', '#feedbackTextarea'];
    var authInputs = ['#authLogin', '#authPassword'];

    $('.feedback__error-window').hide();

    function addListeners(inputSelector) {
        $(inputSelector).on('input', function () {
            checkInput(inputSelector);
        });
    }

    feedbackInputs.forEach(function (item) {
        addListeners(item);
    })

    authInputs.forEach(function (i) {
        addListeners(i);
    })

    function resetError(inputSelector) {
        $(inputSelector).removeClass('feedback__error');
    }

    function checkInput(inputSelector) {
        if ($(inputSelector).val() == '') {
            $(inputSelector).addClass('feedback__error');
            $(inputSelector).siblings('.feedback__error-window').show();
            return false;
        } else {
            resetError(inputSelector);
            $(inputSelector).siblings('.feedback__error-window').hide();
            return true;
        }
    }

    $('.button__submit').on('click', function (event) {
        feedbackInputs.forEach(function (item) {
            if (!checkInput(item)) {
                event.preventDefault();
            }
        })
    });

    $('.nav__link-auth').on('click', function () {
        authInputs.forEach(function (i) {
            checkInput(i);
        })
    })

    $('.button__reset').on('click', function () {
        $('.feedback__error-window').hide();
        feedbackInputs.forEach(function (item) {
            resetError(item);
        })
    })

    // flipper

    var welcomeContent = $('.content__welcome');
    var authBtn = $('.authorization');

    function flip() {
        if (welcomeContent.hasClass('welcome__flip')) {
            welcomeContent.removeClass('welcome__flip');
            $('.authorization__menu').addClass('welcome__back');
            authBtn.removeClass('authorization__link-none');
        } else {
            welcomeContent.addClass('welcome__flip');
            $('.welcome').addClass('welcome__back');
            authBtn.addClass('authorization__link-none');
        }
    }

    authBtn.on('click', function () {
        flip();
    })




});

$(function () {
    var items = $('.slider__item').toArray();

    for (var i = 0; i < items.length; i++) {
        var dotHtml = '<li class="slider__dots-item"><a class="slider__dots-link" href="#"></a></li>';
        $('.slider__dots-list').append(dotHtml);
    }

    var dots = $('.slider__dots-item');
    var currentItemIndex = 0;

    slideTo(0);

    function slideTo(index) {
        var result = 0;
        for (var i = 0; i < index; i++) {
            result -= $(items[i]).outerWidth(true);
        }
        $('.slider__list').animate({marginLeft: result}, 500)
        dots.removeClass('dots__active');
        dots.eq(index).addClass('dots__active');
        currentItemIndex = index;
    }

    $('.slider__arrows-right').on('click', function () {
        if (currentItemIndex == items.length - 1) {
            currentItemIndex = - 1;
        }
        slideTo(++currentItemIndex);
    })

    $('.slider__arrows-left').on('click', function () {
        if (currentItemIndex == 0) {
            currentItemIndex = items.length;
        }
        slideTo(--currentItemIndex);
    })

    $('.slider__dots-item').on('click', function () {
        slideTo($(this).index());
    })

});



//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiLCJzbGlkZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzlMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJChmdW5jdGlvbiAoKSB7XG5cbiAgICAvLyBwcmVsb2FkZXJcblxuICAgICQoJy53cmFwcGVyJykuaGlkZSgpO1xuXG4gICAgdmFyIGltZ3MgPSBbXTtcblxuICAgICQoJyonKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGVsZW1lbnQsIGJhY2tncm91bmQsIGltZztcbiAgICAgICAgZWxlbWVudCA9ICQodGhpcyk7XG4gICAgICAgIGJhY2tncm91bmQgPSBlbGVtZW50LmNzcygnYmFja2dyb3VuZC1pbWFnZScpO1xuICAgICAgICBpbWcgPSBlbGVtZW50LmlzKCdpbWcnKTtcblxuICAgICAgICBpZiAoYmFja2dyb3VuZCAhPSAnbm9uZScpIHtcbiAgICAgICAgICAgIHZhciBwYXRoID0gYmFja2dyb3VuZC5yZXBsYWNlKCd1cmwoXCInLCAnJykucmVwbGFjZSgnXCIpJywgJycpO1xuICAgICAgICAgICAgaW1ncy5wdXNoKHBhdGgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGltZykge1xuICAgICAgICAgICAgdmFyIHBhdGggPSBlbGVtZW50LmF0dHIoJ3NyYycpO1xuICAgICAgICAgICAgaWYgKHBhdGgpIHtcbiAgICAgICAgICAgICAgICBpbWdzLnB1c2gocGF0aCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIHZhciBwZXJjZW50c1RvdGFsID0gMTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgaW1ncy5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgaW1hZ2UgPSAkKCc8aW1nPicsIHtcbiAgICAgICAgICAgIGF0dHI6IHtcbiAgICAgICAgICAgICAgICBzcmM6IGltZ3NbaV1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGltYWdlLm9uKCdsb2FkJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgc2V0UGVyY2VudHMoaW1ncy5sZW5ndGgsIHBlcmNlbnRzVG90YWwpO1xuICAgICAgICAgICAgcGVyY2VudHNUb3RhbCsrO1xuICAgICAgICB9KTtcblxuICAgICAgICBpbWFnZS5vbignZXJyb3InLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBwZXJjZW50c1RvdGFsKys7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2V0UGVyY2VudHModG90YWwsIGN1cnJlbnQpIHtcbiAgICAgICAgdmFyIHBlcmNlbnQgPSBNYXRoLmNlaWwoY3VycmVudCAvIHRvdGFsICogMTAwKTtcbiAgICAgICAgaWYgKHBlcmNlbnQgPj0gMTAwKSB7XG4gICAgICAgICAgICAkKCcucHJlbG9hZGVyJykuZmFkZU91dCgpO1xuICAgICAgICAgICAgJCgnLndyYXBwZXInKS5zaG93KCk7XG4gICAgICAgIH1cbiAgICAgICAgJCgnLnByZWxvYWRlcl9fcGVyY2VudHMnKS50ZXh0KHBlcmNlbnQpO1xuICAgIH1cblxuICAgIC8vIG1lbnVcblxuICAgIHZhciBidXR0b24gPSAkKCcuaGVhZGVyX19tZW51LWJ1dHRvbicpO1xuICAgIHZhciBidXR0b25BY3RpdmVDbGFzcyA9ICQoJy5oZWFkZXJfX21lbnUtYnV0dG9uX2FjdGl2ZScpO1xuICAgIHZhciBtZW51ID0gJCgnLmhlYWRlcl9fbWVudScpO1xuICAgIHZhciBtZW51QWN0aXZlQ2xhc3MgPSAnaGVhZGVyX19tZW51LWFjdGl2ZSc7XG5cbiAgICBidXR0b24ub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAobWVudS5oYXNDbGFzcyhtZW51QWN0aXZlQ2xhc3MpKSB7XG4gICAgICAgICAgICBtZW51LnJlbW92ZUNsYXNzKG1lbnVBY3RpdmVDbGFzcyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtZW51LmFkZENsYXNzKG1lbnVBY3RpdmVDbGFzcyk7XG4gICAgICAgICAgICBidXR0b24uaGlkZSgpO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICBidXR0b25BY3RpdmVDbGFzcy5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIG1lbnUucmVtb3ZlQ2xhc3MobWVudUFjdGl2ZUNsYXNzKTtcbiAgICAgICAgYnV0dG9uLnNob3coKTtcbiAgICB9KVxuXG4gICAgLy90YWJzXG5cbiAgICAkKCcuYmxvZ19fbmF2LWl0ZW0nKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBpbmRleCA9ICQodGhpcykuaW5kZXgoKTtcbiAgICAgICAgJCgnLmJsb2dfX25hdi1saW5rJykucmVtb3ZlQ2xhc3MoJ2Jsb2dfX25hdi1saW5rLWFjdGl2ZScpO1xuICAgICAgICAkKHRoaXMpLmZpbmQoJy5ibG9nX19uYXYtbGluaycpLmFkZENsYXNzKCdibG9nX19uYXYtbGluay1hY3RpdmUnKTtcbiAgICAgICAgdmFyIGFydGljbGUgPSAkKCcjYXJ0aWNsZScgKyBpbmRleCk7XG4gICAgICAgICQoJ2JvZHksaHRtbCcpLmFuaW1hdGUoe3Njcm9sbFRvcDogYXJ0aWNsZS5vZmZzZXQoKS50b3B9LCA1MDApO1xuICAgIH0pXG5cbiAgICAkKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIG5hdlRvcFBvcyA9ICQoJy5ibG9nX19uYXYnKS5vZmZzZXQoKS50b3A7XG4gICAgICAgICQod2luZG93KS5zY3JvbGwoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIHRvcCA9ICQoZG9jdW1lbnQpLnNjcm9sbFRvcCgpO1xuICAgICAgICAgICAgaWYgKHRvcCA+IG5hdlRvcFBvcykgJCgnLmJsb2dfX25hdicpLmFkZENsYXNzKCdibG9nX19uYXYtZml4ZWQnKTtcbiAgICAgICAgICAgIGVsc2UgJCgnLmJsb2dfX25hdicpLnJlbW92ZUNsYXNzKCdibG9nX19uYXYtZml4ZWQnKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICAvLyBhcnJvd191cFxuXG4gICAgJChcIi5hcnJvd19fcGljLXVwXCIpLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJCgnYm9keScpLmFuaW1hdGUoe1wic2Nyb2xsVG9wXCI6IDB9LCAxMDAwKTtcbiAgICB9KTtcblxuICAgIC8vYXJyb3dfZG93blxuXG4gICAgJChcIi5hcnJvd19fcGljLWRvd25cIikuY2xpY2soZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgaGVpZ2h0ID0gJChcIi53cmFwcGVyXCIpLmhlaWdodCgpO1xuICAgICAgICAkKFwiYm9keVwiKS5hbmltYXRlKHtcInNjcm9sbFRvcFwiOiBoZWlnaHR9LCAxMDAwKTtcbiAgICB9KTtcblxuICAgIC8vIGZvcm1cblxuICAgIHZhciBmZWVkYmFja0lucHV0cyA9IFsnI2ZlZWRiYWNrTmFtZScsICcjZmVlZGJhY2tFbWFpbCcsICcjZmVlZGJhY2tUZXh0YXJlYSddO1xuICAgIHZhciBhdXRoSW5wdXRzID0gWycjYXV0aExvZ2luJywgJyNhdXRoUGFzc3dvcmQnXTtcblxuICAgICQoJy5mZWVkYmFja19fZXJyb3Itd2luZG93JykuaGlkZSgpO1xuXG4gICAgZnVuY3Rpb24gYWRkTGlzdGVuZXJzKGlucHV0U2VsZWN0b3IpIHtcbiAgICAgICAgJChpbnB1dFNlbGVjdG9yKS5vbignaW5wdXQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBjaGVja0lucHV0KGlucHV0U2VsZWN0b3IpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmZWVkYmFja0lucHV0cy5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgIGFkZExpc3RlbmVycyhpdGVtKTtcbiAgICB9KVxuXG4gICAgYXV0aElucHV0cy5mb3JFYWNoKGZ1bmN0aW9uIChpKSB7XG4gICAgICAgIGFkZExpc3RlbmVycyhpKTtcbiAgICB9KVxuXG4gICAgZnVuY3Rpb24gcmVzZXRFcnJvcihpbnB1dFNlbGVjdG9yKSB7XG4gICAgICAgICQoaW5wdXRTZWxlY3RvcikucmVtb3ZlQ2xhc3MoJ2ZlZWRiYWNrX19lcnJvcicpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNoZWNrSW5wdXQoaW5wdXRTZWxlY3Rvcikge1xuICAgICAgICBpZiAoJChpbnB1dFNlbGVjdG9yKS52YWwoKSA9PSAnJykge1xuICAgICAgICAgICAgJChpbnB1dFNlbGVjdG9yKS5hZGRDbGFzcygnZmVlZGJhY2tfX2Vycm9yJyk7XG4gICAgICAgICAgICAkKGlucHV0U2VsZWN0b3IpLnNpYmxpbmdzKCcuZmVlZGJhY2tfX2Vycm9yLXdpbmRvdycpLnNob3coKTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlc2V0RXJyb3IoaW5wdXRTZWxlY3Rvcik7XG4gICAgICAgICAgICAkKGlucHV0U2VsZWN0b3IpLnNpYmxpbmdzKCcuZmVlZGJhY2tfX2Vycm9yLXdpbmRvdycpLmhpZGUoKTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJCgnLmJ1dHRvbl9fc3VibWl0Jykub24oJ2NsaWNrJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIGZlZWRiYWNrSW5wdXRzLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgIGlmICghY2hlY2tJbnB1dChpdGVtKSkge1xuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfSk7XG5cbiAgICAkKCcubmF2X19saW5rLWF1dGgnKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGF1dGhJbnB1dHMuZm9yRWFjaChmdW5jdGlvbiAoaSkge1xuICAgICAgICAgICAgY2hlY2tJbnB1dChpKTtcbiAgICAgICAgfSlcbiAgICB9KVxuXG4gICAgJCgnLmJ1dHRvbl9fcmVzZXQnKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICQoJy5mZWVkYmFja19fZXJyb3Itd2luZG93JykuaGlkZSgpO1xuICAgICAgICBmZWVkYmFja0lucHV0cy5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgICByZXNldEVycm9yKGl0ZW0pO1xuICAgICAgICB9KVxuICAgIH0pXG5cbiAgICAvLyBmbGlwcGVyXG5cbiAgICB2YXIgd2VsY29tZUNvbnRlbnQgPSAkKCcuY29udGVudF9fd2VsY29tZScpO1xuICAgIHZhciBhdXRoQnRuID0gJCgnLmF1dGhvcml6YXRpb24nKTtcblxuICAgIGZ1bmN0aW9uIGZsaXAoKSB7XG4gICAgICAgIGlmICh3ZWxjb21lQ29udGVudC5oYXNDbGFzcygnd2VsY29tZV9fZmxpcCcpKSB7XG4gICAgICAgICAgICB3ZWxjb21lQ29udGVudC5yZW1vdmVDbGFzcygnd2VsY29tZV9fZmxpcCcpO1xuICAgICAgICAgICAgJCgnLmF1dGhvcml6YXRpb25fX21lbnUnKS5hZGRDbGFzcygnd2VsY29tZV9fYmFjaycpO1xuICAgICAgICAgICAgYXV0aEJ0bi5yZW1vdmVDbGFzcygnYXV0aG9yaXphdGlvbl9fbGluay1ub25lJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB3ZWxjb21lQ29udGVudC5hZGRDbGFzcygnd2VsY29tZV9fZmxpcCcpO1xuICAgICAgICAgICAgJCgnLndlbGNvbWUnKS5hZGRDbGFzcygnd2VsY29tZV9fYmFjaycpO1xuICAgICAgICAgICAgYXV0aEJ0bi5hZGRDbGFzcygnYXV0aG9yaXphdGlvbl9fbGluay1ub25lJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhdXRoQnRuLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZmxpcCgpO1xuICAgIH0pXG5cblxuXG5cbn0pO1xuIiwiJChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGl0ZW1zID0gJCgnLnNsaWRlcl9faXRlbScpLnRvQXJyYXkoKTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgaXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIGRvdEh0bWwgPSAnPGxpIGNsYXNzPVwic2xpZGVyX19kb3RzLWl0ZW1cIj48YSBjbGFzcz1cInNsaWRlcl9fZG90cy1saW5rXCIgaHJlZj1cIiNcIj48L2E+PC9saT4nO1xuICAgICAgICAkKCcuc2xpZGVyX19kb3RzLWxpc3QnKS5hcHBlbmQoZG90SHRtbCk7XG4gICAgfVxuXG4gICAgdmFyIGRvdHMgPSAkKCcuc2xpZGVyX19kb3RzLWl0ZW0nKTtcbiAgICB2YXIgY3VycmVudEl0ZW1JbmRleCA9IDA7XG5cbiAgICBzbGlkZVRvKDApO1xuXG4gICAgZnVuY3Rpb24gc2xpZGVUbyhpbmRleCkge1xuICAgICAgICB2YXIgcmVzdWx0ID0gMDtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBpbmRleDsgaSsrKSB7XG4gICAgICAgICAgICByZXN1bHQgLT0gJChpdGVtc1tpXSkub3V0ZXJXaWR0aCh0cnVlKTtcbiAgICAgICAgfVxuICAgICAgICAkKCcuc2xpZGVyX19saXN0JykuYW5pbWF0ZSh7bWFyZ2luTGVmdDogcmVzdWx0fSwgNTAwKVxuICAgICAgICBkb3RzLnJlbW92ZUNsYXNzKCdkb3RzX19hY3RpdmUnKTtcbiAgICAgICAgZG90cy5lcShpbmRleCkuYWRkQ2xhc3MoJ2RvdHNfX2FjdGl2ZScpO1xuICAgICAgICBjdXJyZW50SXRlbUluZGV4ID0gaW5kZXg7XG4gICAgfVxuXG4gICAgJCgnLnNsaWRlcl9fYXJyb3dzLXJpZ2h0Jykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoY3VycmVudEl0ZW1JbmRleCA9PSBpdGVtcy5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICBjdXJyZW50SXRlbUluZGV4ID0gLSAxO1xuICAgICAgICB9XG4gICAgICAgIHNsaWRlVG8oKytjdXJyZW50SXRlbUluZGV4KTtcbiAgICB9KVxuXG4gICAgJCgnLnNsaWRlcl9fYXJyb3dzLWxlZnQnKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChjdXJyZW50SXRlbUluZGV4ID09IDApIHtcbiAgICAgICAgICAgIGN1cnJlbnRJdGVtSW5kZXggPSBpdGVtcy5sZW5ndGg7XG4gICAgICAgIH1cbiAgICAgICAgc2xpZGVUbygtLWN1cnJlbnRJdGVtSW5kZXgpO1xuICAgIH0pXG5cbiAgICAkKCcuc2xpZGVyX19kb3RzLWl0ZW0nKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHNsaWRlVG8oJCh0aGlzKS5pbmRleCgpKTtcbiAgICB9KVxuXG59KTtcblxuXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
