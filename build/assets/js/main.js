$(function () {

    // menu

    var button = $('.header__menu-button');
    var buttonActiveClass = $('.header__menu-button_active');
    var menu = $('.header__menu');
    var menuActiveClass = 'header__menu-active';

    button.on ('click', function() {
        if (menu.hasClass(menuActiveClass)) {
            menu.removeClass(menuActiveClass);
        } else {
            menu.addClass(menuActiveClass);
            button.hide();
        }
    });

    buttonActiveClass.on('click', function(){
            menu.removeClass(menuActiveClass);
            button.show();
    })

    //tabs

    $('.blog__nav-item').on('click', function() {
        var index = $(this).index();
        $('.blog__nav-link').removeClass('blog__nav-link-active');
        $(this).find('.blog__nav-link').addClass('blog__nav-link-active');
        var article = $('#article' + index);
        $('body,html').animate({scrollTop: article.offset().top}, 500);
    })

    $(function(){
        var navTopPos = $('.blog__nav').offset().top;
        $(window).scroll(function() {
            var top = $(document).scrollTop();
            if (top > navTopPos) $('.blog__nav').addClass('blog__nav-fixed');
            else $('.blog__nav').removeClass('blog__nav-fixed');
        });
    });

    // arrow_up

    $(".arrow__pic-up").click(function(){
        $('body').animate({"scrollTop":0}, 1000);
    });

    //arrow_down

    $(".arrow__pic-down").click(function(){
        var height=$(".wrapper").height();
        $("body").animate({"scrollTop":height}, 1000);
    });

    // form

    var feedbackInputs = ['#feedbackName','#feedbackEmail','#feedbackTextarea'];

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

    $('.button__submit').on('click', function() {
        feedbackInputs.forEach(function (item) {
            checkInput(item);
        })
    });

    $('.button__reset').on('click', function () {
        feedbackInputs.forEach(function (item) {
            resetError(item);
        })
    })

});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiQoZnVuY3Rpb24gKCkge1xuXG4gICAgLy8gbWVudVxuXG4gICAgdmFyIGJ1dHRvbiA9ICQoJy5oZWFkZXJfX21lbnUtYnV0dG9uJyk7XG4gICAgdmFyIGJ1dHRvbkFjdGl2ZUNsYXNzID0gJCgnLmhlYWRlcl9fbWVudS1idXR0b25fYWN0aXZlJyk7XG4gICAgdmFyIG1lbnUgPSAkKCcuaGVhZGVyX19tZW51Jyk7XG4gICAgdmFyIG1lbnVBY3RpdmVDbGFzcyA9ICdoZWFkZXJfX21lbnUtYWN0aXZlJztcblxuICAgIGJ1dHRvbi5vbiAoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmIChtZW51Lmhhc0NsYXNzKG1lbnVBY3RpdmVDbGFzcykpIHtcbiAgICAgICAgICAgIG1lbnUucmVtb3ZlQ2xhc3MobWVudUFjdGl2ZUNsYXNzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1lbnUuYWRkQ2xhc3MobWVudUFjdGl2ZUNsYXNzKTtcbiAgICAgICAgICAgIGJ1dHRvbi5oaWRlKCk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIGJ1dHRvbkFjdGl2ZUNsYXNzLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBtZW51LnJlbW92ZUNsYXNzKG1lbnVBY3RpdmVDbGFzcyk7XG4gICAgICAgICAgICBidXR0b24uc2hvdygpO1xuICAgIH0pXG5cbiAgICAvL3RhYnNcblxuICAgICQoJy5ibG9nX19uYXYtaXRlbScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgaW5kZXggPSAkKHRoaXMpLmluZGV4KCk7XG4gICAgICAgICQoJy5ibG9nX19uYXYtbGluaycpLnJlbW92ZUNsYXNzKCdibG9nX19uYXYtbGluay1hY3RpdmUnKTtcbiAgICAgICAgJCh0aGlzKS5maW5kKCcuYmxvZ19fbmF2LWxpbmsnKS5hZGRDbGFzcygnYmxvZ19fbmF2LWxpbmstYWN0aXZlJyk7XG4gICAgICAgIHZhciBhcnRpY2xlID0gJCgnI2FydGljbGUnICsgaW5kZXgpO1xuICAgICAgICAkKCdib2R5LGh0bWwnKS5hbmltYXRlKHtzY3JvbGxUb3A6IGFydGljbGUub2Zmc2V0KCkudG9wfSwgNTAwKTtcbiAgICB9KVxuXG4gICAgJChmdW5jdGlvbigpe1xuICAgICAgICB2YXIgbmF2VG9wUG9zID0gJCgnLmJsb2dfX25hdicpLm9mZnNldCgpLnRvcDtcbiAgICAgICAgJCh3aW5kb3cpLnNjcm9sbChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHZhciB0b3AgPSAkKGRvY3VtZW50KS5zY3JvbGxUb3AoKTtcbiAgICAgICAgICAgIGlmICh0b3AgPiBuYXZUb3BQb3MpICQoJy5ibG9nX19uYXYnKS5hZGRDbGFzcygnYmxvZ19fbmF2LWZpeGVkJyk7XG4gICAgICAgICAgICBlbHNlICQoJy5ibG9nX19uYXYnKS5yZW1vdmVDbGFzcygnYmxvZ19fbmF2LWZpeGVkJyk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgLy8gYXJyb3dfdXBcblxuICAgICQoXCIuYXJyb3dfX3BpYy11cFwiKS5jbGljayhmdW5jdGlvbigpe1xuICAgICAgICAkKCdib2R5JykuYW5pbWF0ZSh7XCJzY3JvbGxUb3BcIjowfSwgMTAwMCk7XG4gICAgfSk7XG5cbiAgICAvL2Fycm93X2Rvd25cblxuICAgICQoXCIuYXJyb3dfX3BpYy1kb3duXCIpLmNsaWNrKGZ1bmN0aW9uKCl7XG4gICAgICAgIHZhciBoZWlnaHQ9JChcIi53cmFwcGVyXCIpLmhlaWdodCgpO1xuICAgICAgICAkKFwiYm9keVwiKS5hbmltYXRlKHtcInNjcm9sbFRvcFwiOmhlaWdodH0sIDEwMDApO1xuICAgIH0pO1xuXG4gICAgLy8gZm9ybVxuXG4gICAgdmFyIGZlZWRiYWNrSW5wdXRzID0gWycjZmVlZGJhY2tOYW1lJywnI2ZlZWRiYWNrRW1haWwnLCcjZmVlZGJhY2tUZXh0YXJlYSddO1xuXG4gICAgZnVuY3Rpb24gYWRkTGlzdGVuZXJzKGlucHV0U2VsZWN0b3IpIHtcbiAgICAgICAgJChpbnB1dFNlbGVjdG9yKS5vbignaW5wdXQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBjaGVja0lucHV0KGlucHV0U2VsZWN0b3IpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmZWVkYmFja0lucHV0cy5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgIGFkZExpc3RlbmVycyhpdGVtKTtcbiAgICB9KVxuXG4gICAgZnVuY3Rpb24gcmVzZXRFcnJvcihpbnB1dFNlbGVjdG9yKSB7XG4gICAgICAgICQoaW5wdXRTZWxlY3RvcikucmVtb3ZlQ2xhc3MoJ2ZlZWRiYWNrX19lcnJvcicpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNoZWNrSW5wdXQoaW5wdXRTZWxlY3Rvcikge1xuICAgICAgICBpZiAoJChpbnB1dFNlbGVjdG9yKS52YWwoKSA9PSAnJykge1xuICAgICAgICAgICAgJChpbnB1dFNlbGVjdG9yKS5hZGRDbGFzcygnZmVlZGJhY2tfX2Vycm9yJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXNldEVycm9yKGlucHV0U2VsZWN0b3IpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJCgnLmJ1dHRvbl9fc3VibWl0Jykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICAgIGZlZWRiYWNrSW5wdXRzLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgIGNoZWNrSW5wdXQoaXRlbSk7XG4gICAgICAgIH0pXG4gICAgfSk7XG5cbiAgICAkKCcuYnV0dG9uX19yZXNldCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZmVlZGJhY2tJbnB1dHMuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICAgcmVzZXRFcnJvcihpdGVtKTtcbiAgICAgICAgfSlcbiAgICB9KVxuXG59KTsiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
