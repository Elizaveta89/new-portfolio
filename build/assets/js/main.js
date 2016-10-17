$(function () {

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

    function addListeners(inputSelector) {
        $(inputSelector).on('input', function () {
            checkInput(inputSelector);
        });
    }

    feedbackInputs.forEach(function (item) {
        addListeners(item);
    })

    function resetError(inputSelector) {
        $(inputSelector).removeClass('feedback__error');
    }

    function checkInput(inputSelector) {
        if ($(inputSelector).val() == '') {
            $(inputSelector).addClass('feedback__error');
        } else {
            resetError(inputSelector);
        }
    }

    $('.button__submit').on('click', function () {
        feedbackInputs.forEach(function (item) {
            checkInput(item);
        })
    });

    $('.button__reset').on('click', function () {
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

    // map


});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJChmdW5jdGlvbiAoKSB7XG5cbiAgICAvLyBtZW51XG5cbiAgICB2YXIgYnV0dG9uID0gJCgnLmhlYWRlcl9fbWVudS1idXR0b24nKTtcbiAgICB2YXIgYnV0dG9uQWN0aXZlQ2xhc3MgPSAkKCcuaGVhZGVyX19tZW51LWJ1dHRvbl9hY3RpdmUnKTtcbiAgICB2YXIgbWVudSA9ICQoJy5oZWFkZXJfX21lbnUnKTtcbiAgICB2YXIgbWVudUFjdGl2ZUNsYXNzID0gJ2hlYWRlcl9fbWVudS1hY3RpdmUnO1xuXG4gICAgYnV0dG9uLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKG1lbnUuaGFzQ2xhc3MobWVudUFjdGl2ZUNsYXNzKSkge1xuICAgICAgICAgICAgbWVudS5yZW1vdmVDbGFzcyhtZW51QWN0aXZlQ2xhc3MpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbWVudS5hZGRDbGFzcyhtZW51QWN0aXZlQ2xhc3MpO1xuICAgICAgICAgICAgYnV0dG9uLmhpZGUoKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgYnV0dG9uQWN0aXZlQ2xhc3Mub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBtZW51LnJlbW92ZUNsYXNzKG1lbnVBY3RpdmVDbGFzcyk7XG4gICAgICAgIGJ1dHRvbi5zaG93KCk7XG4gICAgfSlcblxuICAgIC8vdGFic1xuXG4gICAgJCgnLmJsb2dfX25hdi1pdGVtJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgaW5kZXggPSAkKHRoaXMpLmluZGV4KCk7XG4gICAgICAgICQoJy5ibG9nX19uYXYtbGluaycpLnJlbW92ZUNsYXNzKCdibG9nX19uYXYtbGluay1hY3RpdmUnKTtcbiAgICAgICAgJCh0aGlzKS5maW5kKCcuYmxvZ19fbmF2LWxpbmsnKS5hZGRDbGFzcygnYmxvZ19fbmF2LWxpbmstYWN0aXZlJyk7XG4gICAgICAgIHZhciBhcnRpY2xlID0gJCgnI2FydGljbGUnICsgaW5kZXgpO1xuICAgICAgICAkKCdib2R5LGh0bWwnKS5hbmltYXRlKHtzY3JvbGxUb3A6IGFydGljbGUub2Zmc2V0KCkudG9wfSwgNTAwKTtcbiAgICB9KVxuXG4gICAgJChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBuYXZUb3BQb3MgPSAkKCcuYmxvZ19fbmF2Jykub2Zmc2V0KCkudG9wO1xuICAgICAgICAkKHdpbmRvdykuc2Nyb2xsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciB0b3AgPSAkKGRvY3VtZW50KS5zY3JvbGxUb3AoKTtcbiAgICAgICAgICAgIGlmICh0b3AgPiBuYXZUb3BQb3MpICQoJy5ibG9nX19uYXYnKS5hZGRDbGFzcygnYmxvZ19fbmF2LWZpeGVkJyk7XG4gICAgICAgICAgICBlbHNlICQoJy5ibG9nX19uYXYnKS5yZW1vdmVDbGFzcygnYmxvZ19fbmF2LWZpeGVkJyk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgLy8gYXJyb3dfdXBcblxuICAgICQoXCIuYXJyb3dfX3BpYy11cFwiKS5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgICQoJ2JvZHknKS5hbmltYXRlKHtcInNjcm9sbFRvcFwiOiAwfSwgMTAwMCk7XG4gICAgfSk7XG5cbiAgICAvL2Fycm93X2Rvd25cblxuICAgICQoXCIuYXJyb3dfX3BpYy1kb3duXCIpLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGhlaWdodCA9ICQoXCIud3JhcHBlclwiKS5oZWlnaHQoKTtcbiAgICAgICAgJChcImJvZHlcIikuYW5pbWF0ZSh7XCJzY3JvbGxUb3BcIjogaGVpZ2h0fSwgMTAwMCk7XG4gICAgfSk7XG5cbiAgICAvLyBmb3JtXG5cbiAgICB2YXIgZmVlZGJhY2tJbnB1dHMgPSBbJyNmZWVkYmFja05hbWUnLCAnI2ZlZWRiYWNrRW1haWwnLCAnI2ZlZWRiYWNrVGV4dGFyZWEnXTtcblxuICAgIGZ1bmN0aW9uIGFkZExpc3RlbmVycyhpbnB1dFNlbGVjdG9yKSB7XG4gICAgICAgICQoaW5wdXRTZWxlY3Rvcikub24oJ2lucHV0JywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgY2hlY2tJbnB1dChpbnB1dFNlbGVjdG9yKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZmVlZGJhY2tJbnB1dHMuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICBhZGRMaXN0ZW5lcnMoaXRlbSk7XG4gICAgfSlcblxuICAgIGZ1bmN0aW9uIHJlc2V0RXJyb3IoaW5wdXRTZWxlY3Rvcikge1xuICAgICAgICAkKGlucHV0U2VsZWN0b3IpLnJlbW92ZUNsYXNzKCdmZWVkYmFja19fZXJyb3InKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjaGVja0lucHV0KGlucHV0U2VsZWN0b3IpIHtcbiAgICAgICAgaWYgKCQoaW5wdXRTZWxlY3RvcikudmFsKCkgPT0gJycpIHtcbiAgICAgICAgICAgICQoaW5wdXRTZWxlY3RvcikuYWRkQ2xhc3MoJ2ZlZWRiYWNrX19lcnJvcicpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVzZXRFcnJvcihpbnB1dFNlbGVjdG9yKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICQoJy5idXR0b25fX3N1Ym1pdCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZmVlZGJhY2tJbnB1dHMuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICAgY2hlY2tJbnB1dChpdGVtKTtcbiAgICAgICAgfSlcbiAgICB9KTtcblxuICAgICQoJy5idXR0b25fX3Jlc2V0Jykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBmZWVkYmFja0lucHV0cy5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgICByZXNldEVycm9yKGl0ZW0pO1xuICAgICAgICB9KVxuICAgIH0pXG5cbiAgICAvLyBmbGlwcGVyXG5cbiAgICB2YXIgd2VsY29tZUNvbnRlbnQgPSAkKCcuY29udGVudF9fd2VsY29tZScpO1xuICAgIHZhciBhdXRoQnRuID0gJCgnLmF1dGhvcml6YXRpb24nKTtcblxuICAgIGZ1bmN0aW9uIGZsaXAoKSB7XG4gICAgICAgIGlmICh3ZWxjb21lQ29udGVudC5oYXNDbGFzcygnd2VsY29tZV9fZmxpcCcpKSB7XG4gICAgICAgICAgICB3ZWxjb21lQ29udGVudC5yZW1vdmVDbGFzcygnd2VsY29tZV9fZmxpcCcpO1xuICAgICAgICAgICAgJCgnLmF1dGhvcml6YXRpb25fX21lbnUnKS5hZGRDbGFzcygnd2VsY29tZV9fYmFjaycpO1xuICAgICAgICAgICAgYXV0aEJ0bi5yZW1vdmVDbGFzcygnYXV0aG9yaXphdGlvbl9fbGluay1ub25lJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB3ZWxjb21lQ29udGVudC5hZGRDbGFzcygnd2VsY29tZV9fZmxpcCcpO1xuICAgICAgICAgICAgJCgnLndlbGNvbWUnKS5hZGRDbGFzcygnd2VsY29tZV9fYmFjaycpO1xuICAgICAgICAgICAgYXV0aEJ0bi5hZGRDbGFzcygnYXV0aG9yaXphdGlvbl9fbGluay1ub25lJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhdXRoQnRuLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZmxpcCgpO1xuICAgIH0pXG5cbiAgICAvLyBtYXBcblxuXG59KTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
