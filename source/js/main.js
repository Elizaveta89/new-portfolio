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
