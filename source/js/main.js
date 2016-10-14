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