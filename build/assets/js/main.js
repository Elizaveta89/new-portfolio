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

    // preloader





});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiQoZnVuY3Rpb24gKCkge1xuXG4gICAgLy8gbWVudVxuXG4gICAgdmFyIGJ1dHRvbiA9ICQoJy5oZWFkZXJfX21lbnUtYnV0dG9uJyk7XG4gICAgdmFyIGJ1dHRvbkFjdGl2ZUNsYXNzID0gJCgnLmhlYWRlcl9fbWVudS1idXR0b25fYWN0aXZlJyk7XG4gICAgdmFyIG1lbnUgPSAkKCcuaGVhZGVyX19tZW51Jyk7XG4gICAgdmFyIG1lbnVBY3RpdmVDbGFzcyA9ICdoZWFkZXJfX21lbnUtYWN0aXZlJztcblxuICAgIGJ1dHRvbi5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChtZW51Lmhhc0NsYXNzKG1lbnVBY3RpdmVDbGFzcykpIHtcbiAgICAgICAgICAgIG1lbnUucmVtb3ZlQ2xhc3MobWVudUFjdGl2ZUNsYXNzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1lbnUuYWRkQ2xhc3MobWVudUFjdGl2ZUNsYXNzKTtcbiAgICAgICAgICAgIGJ1dHRvbi5oaWRlKCk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIGJ1dHRvbkFjdGl2ZUNsYXNzLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbWVudS5yZW1vdmVDbGFzcyhtZW51QWN0aXZlQ2xhc3MpO1xuICAgICAgICBidXR0b24uc2hvdygpO1xuICAgIH0pXG5cbiAgICAvL3RhYnNcblxuICAgICQoJy5ibG9nX19uYXYtaXRlbScpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGluZGV4ID0gJCh0aGlzKS5pbmRleCgpO1xuICAgICAgICAkKCcuYmxvZ19fbmF2LWxpbmsnKS5yZW1vdmVDbGFzcygnYmxvZ19fbmF2LWxpbmstYWN0aXZlJyk7XG4gICAgICAgICQodGhpcykuZmluZCgnLmJsb2dfX25hdi1saW5rJykuYWRkQ2xhc3MoJ2Jsb2dfX25hdi1saW5rLWFjdGl2ZScpO1xuICAgICAgICB2YXIgYXJ0aWNsZSA9ICQoJyNhcnRpY2xlJyArIGluZGV4KTtcbiAgICAgICAgJCgnYm9keSxodG1sJykuYW5pbWF0ZSh7c2Nyb2xsVG9wOiBhcnRpY2xlLm9mZnNldCgpLnRvcH0sIDUwMCk7XG4gICAgfSlcblxuICAgICQoZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgbmF2VG9wUG9zID0gJCgnLmJsb2dfX25hdicpLm9mZnNldCgpLnRvcDtcbiAgICAgICAgJCh3aW5kb3cpLnNjcm9sbChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgdG9wID0gJChkb2N1bWVudCkuc2Nyb2xsVG9wKCk7XG4gICAgICAgICAgICBpZiAodG9wID4gbmF2VG9wUG9zKSAkKCcuYmxvZ19fbmF2JykuYWRkQ2xhc3MoJ2Jsb2dfX25hdi1maXhlZCcpO1xuICAgICAgICAgICAgZWxzZSAkKCcuYmxvZ19fbmF2JykucmVtb3ZlQ2xhc3MoJ2Jsb2dfX25hdi1maXhlZCcpO1xuICAgICAgICB9KTtcbiAgICB9KTtcblxuICAgIC8vIGFycm93X3VwXG5cbiAgICAkKFwiLmFycm93X19waWMtdXBcIikuY2xpY2soZnVuY3Rpb24gKCkge1xuICAgICAgICAkKCdib2R5JykuYW5pbWF0ZSh7XCJzY3JvbGxUb3BcIjogMH0sIDEwMDApO1xuICAgIH0pO1xuXG4gICAgLy9hcnJvd19kb3duXG5cbiAgICAkKFwiLmFycm93X19waWMtZG93blwiKS5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBoZWlnaHQgPSAkKFwiLndyYXBwZXJcIikuaGVpZ2h0KCk7XG4gICAgICAgICQoXCJib2R5XCIpLmFuaW1hdGUoe1wic2Nyb2xsVG9wXCI6IGhlaWdodH0sIDEwMDApO1xuICAgIH0pO1xuXG4gICAgLy8gZm9ybVxuXG4gICAgdmFyIGZlZWRiYWNrSW5wdXRzID0gWycjZmVlZGJhY2tOYW1lJywgJyNmZWVkYmFja0VtYWlsJywgJyNmZWVkYmFja1RleHRhcmVhJ107XG5cbiAgICBmdW5jdGlvbiBhZGRMaXN0ZW5lcnMoaW5wdXRTZWxlY3Rvcikge1xuICAgICAgICAkKGlucHV0U2VsZWN0b3IpLm9uKCdpbnB1dCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGNoZWNrSW5wdXQoaW5wdXRTZWxlY3Rvcik7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZlZWRiYWNrSW5wdXRzLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgYWRkTGlzdGVuZXJzKGl0ZW0pO1xuICAgIH0pXG5cbiAgICBmdW5jdGlvbiByZXNldEVycm9yKGlucHV0U2VsZWN0b3IpIHtcbiAgICAgICAgJChpbnB1dFNlbGVjdG9yKS5yZW1vdmVDbGFzcygnZmVlZGJhY2tfX2Vycm9yJyk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2hlY2tJbnB1dChpbnB1dFNlbGVjdG9yKSB7XG4gICAgICAgIGlmICgkKGlucHV0U2VsZWN0b3IpLnZhbCgpID09ICcnKSB7XG4gICAgICAgICAgICAkKGlucHV0U2VsZWN0b3IpLmFkZENsYXNzKCdmZWVkYmFja19fZXJyb3InKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlc2V0RXJyb3IoaW5wdXRTZWxlY3Rvcik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAkKCcuYnV0dG9uX19zdWJtaXQnKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGZlZWRiYWNrSW5wdXRzLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgIGNoZWNrSW5wdXQoaXRlbSk7XG4gICAgICAgIH0pXG4gICAgfSk7XG5cbiAgICAkKCcuYnV0dG9uX19yZXNldCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZmVlZGJhY2tJbnB1dHMuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICAgcmVzZXRFcnJvcihpdGVtKTtcbiAgICAgICAgfSlcbiAgICB9KVxuXG4gICAgLy8gZmxpcHBlclxuXG4gICAgdmFyIHdlbGNvbWVDb250ZW50ID0gJCgnLmNvbnRlbnRfX3dlbGNvbWUnKTtcbiAgICB2YXIgYXV0aEJ0biA9ICQoJy5hdXRob3JpemF0aW9uJyk7XG5cbiAgICBmdW5jdGlvbiBmbGlwKCkge1xuICAgICAgICBpZiAod2VsY29tZUNvbnRlbnQuaGFzQ2xhc3MoJ3dlbGNvbWVfX2ZsaXAnKSkge1xuICAgICAgICAgICAgd2VsY29tZUNvbnRlbnQucmVtb3ZlQ2xhc3MoJ3dlbGNvbWVfX2ZsaXAnKTtcbiAgICAgICAgICAgICQoJy5hdXRob3JpemF0aW9uX19tZW51JykuYWRkQ2xhc3MoJ3dlbGNvbWVfX2JhY2snKTtcbiAgICAgICAgICAgIGF1dGhCdG4ucmVtb3ZlQ2xhc3MoJ2F1dGhvcml6YXRpb25fX2xpbmstbm9uZScpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgd2VsY29tZUNvbnRlbnQuYWRkQ2xhc3MoJ3dlbGNvbWVfX2ZsaXAnKTtcbiAgICAgICAgICAgICQoJy53ZWxjb21lJykuYWRkQ2xhc3MoJ3dlbGNvbWVfX2JhY2snKTtcbiAgICAgICAgICAgIGF1dGhCdG4uYWRkQ2xhc3MoJ2F1dGhvcml6YXRpb25fX2xpbmstbm9uZScpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYXV0aEJ0bi5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGZsaXAoKTtcbiAgICB9KVxuXG4gICAgLy8gcHJlbG9hZGVyXG5cblxuXG5cblxufSk7Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
