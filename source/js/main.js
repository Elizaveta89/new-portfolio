$(function () {

    // preloader

    // $('.wrapper').hide();

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
            // $('.wrapper').show(0, onPagePreload);
        }
        $('.preloader__percents').text(percent);
    }

    var articleArray = [];

    function onPagePreload() {
        $('.article').each(function () {
            var articleTop = $(this).offset().top - $(this).height() / 2;
            articleArray.push(articleTop);
        })
        articleArray[0] = 0;


        var navTopPos = $('.blog__nav').offset().top;
        $(window).scroll(function () {
            var top = $(document).scrollTop();
            if (top > navTopPos) {
                $('.blog__nav').addClass('blog__nav-fixed');
            } else {
                $('.blog__nav').removeClass('blog__nav-fixed');
            }
        });
    }

    // blur

    var blur = (function(){
        var
            blur = $('.works__feedback-blur'),
            blurSection = $('.works__bottom');

        return {
            set : function () {

                var
                    imgWidth = $('.works__bottom-img').width(),
                    posLeft = blurSection.offset().left - blur.offset().left,
                    posTop = blurSection.offset().top - blur.offset().top;

                blur.css({
                    'background-size' : imgWidth + 'px' + ' ' + 'auto',
                    'background-position' : posLeft + 'px' + ' ' + posTop + 'px'
                })
            }
        }
    }());

    $(window).resize(function(){
        if($('.works__feedback').length){
            blur.set();
        }
    });

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

    //blog

    $('.blog__nav-item').on('click', function () {
        var index = $(this).index();
        $('.blog__nav-link').removeClass('blog__nav-link-active');
        $(this).find('.blog__nav-link').addClass('blog__nav-link-active');
        var article = $('#article' + index);
        $('body,html').animate({scrollTop: article.offset().top}, 500);
    })

    $(window).scroll(function () {
        $('.blog__nav-link').removeClass('blog__nav-link-active');
        for (var i = articleArray.length - 1; i >= 0; i--) {
            var elementHeight = articleArray[i];
            if ($(window).scrollTop() >= elementHeight) {
                $('.blog__nav-link:eq(' + i + ')').addClass('blog__nav-link-active');
                break;
            }
        }
    })

    $('.blog__nav').on('click', function(){
        if ($(this).hasClass('blog__nav-active')) {
            $(this).removeClass('blog__nav-active');
        }else {
            $(this).addClass('blog__nav-active');
        }
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

    //Form

    var feedbackInputs = ['#feedbackName', '#feedbackEmail', '#feedbackTextarea'];
    var authInput = ['#authLogin', '#authPassword'];

    $('.feedback__error-window').hide();
    $('.form__error-window').hide();
    $('.window__reset').hide();

    function addListeners(inputSelector) {
        $(inputSelector).on('input', function () {
            checkInput(inputSelector);
            checkInputAuth(inputSelector);
        });
    }

    feedbackInputs.forEach(function (item) {
        addListeners(item);
    })

    authInput.forEach(function (i) {
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

    function checkInputAuth(inputSelector) {
        if ($(inputSelector).val() == '') {
            $(inputSelector).closest('.form__label').removeClass('form__success')
            $(inputSelector).closest('.form__label').addClass('form__error');
            $(inputSelector).siblings('.form__error-window').show();
            return false;
        } else {
            $(inputSelector).closest('.form__label').removeClass('form__error');
            $(inputSelector).siblings('.form__error-window').hide();
            $(inputSelector).closest('.form__label').addClass('form__success');
            return true;
        }

    }

    $('.button__submit').on('click', function (event) {
        event.preventDefault();
        var hasError = false;
        feedbackInputs.forEach(function (item) {
            hasError = !checkInput(item) || hasError;
        });

        if (!hasError) {
            var xhr = new XMLHttpRequest();
            xhr.open('POST', '/addItem');

            var data = {
                name: $('#feedbackName').value,
                mail: $('#feedbackEmail').value,
                body: $('#feedbackTextarea').value
            }
            xhr.setRequestHeader('Content-type', 'application/json');
            xhr.send(JSON.stringify(data));
            xhr.onload = function(){
                console.log(xhr.responseText);
            }

            $('.window__reset').show();
        }
    });

    $('.nav__link-auth').on('click', function () {
        authInput.forEach(function (i) {
            checkInputAuth(i);
        })
    })

    $('.button__reset').on('click', function () {
        $('.feedback__error-window').hide();
        feedbackInputs.forEach(function (item) {
            resetError(item);
        })
    })

    $('.window__reset-button').on('click', function() {
        $('.window__reset').hide();
    });

    //Slider

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
    });


    map

    var map;

    var marker;

    var Bratislavskaya = new google.maps.LatLng(55.659473, 37.749500);

    function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
            center: {lat:55.658111, lng: 37.754521},
            zoom: 16,
            scrollwheel: false,
            styles: [
                { "elementType": "geometry",
                  "stylers": [{"color": "#f5f5f5"}]
                },
                { "elementType": "geometry.fill",
                    "stylers": [{"color": "#f2f2f2"}]
                },
                { "elementType": "labels.icon",
                    "stylers": [{"visibility": "off"}]
                },
                { "elementType": "labels.text.fill",
                    "stylers": [{"color": "#616161"}]
                },
                { "elementType": "labels.text.stroke",
                    "stylers": [{"color": "#f5f5f5"}]
                },
                { "featureType": "administrative.land_parcel",
                    "elementType": "labels.text.fill",
                    "stylers": [{"color": "#bdbdbd"}]
                },
                { "featureType": "poi",
                    "elementType": "geometry",
                    "stylers": [{"color": "#eeeeee"}]
                },
                { "featureType": "poi",
                    "elementType": "labels.text.fill",
                    "stylers": [{"color": "#757575"}]
                },
                { "featureType": "poi.park",
                    "elementType": "geometry",
                    "stylers": [{"color": "#e5e5e5"}]
                },
                { "featureType": "poi.park",
                    "elementType": "labels.text.fill",
                    "stylers": [{"color": "#9e9e9e"}]
                },
                { "featureType": "road",
                    "stylers": [{"color": "#d6d6d6"}]
                },
                { "featureType": "road",
                    "elementType": "geometry",
                    "stylers": [{"color": "#ffffff"}]
                },
                { "featureType": "road.arterial",
                    "elementType": "labels.text.fill",
                    "stylers": [{"color": "#757575"}]
                },
                { "featureType": "road.highway",
                    "elementType": "geometry",
                    "stylers": [{"color": "#dadada"}]
                },
                { "featureType": "road.highway",
                    "elementType": "labels.text.fill",
                    "stylers": [{"color": "#616161"}]
                },
                { "featureType": "road.local",
                    "elementType": "labels.text.fill",
                    "stylers": [{"color": "#9e9e9e"}]
                },
                {"featureType": "transit.line",
                    "elementType": "geometry",
                    "stylers": [{"color": "#e5e5e5"}]
                },
                { "featureType": "transit.station",
                    "elementType": "geometry",
                    "stylers": [{"color": "#eeeeee"}]
                },
                { "featureType": "water",
                    "elementType": "geometry",
                    "stylers": [{"color": "#c9c9c9"}]
                },
                { "featureType": "water",
                    "elementType": "geometry.fill",
                    "stylers": [{"color": "#86a77a"}]
                },
                { "featureType": "water",
                    "elementType": "labels.text.fill",
                    "stylers": [{"color": "#9e9e9e"}]
                }
            ]
        });

        var imageMarker = {
            url: './assets/img/icons/map_marker.png',
            size: new google.maps.Size(20, 32)
        };

        marker = new google.maps.Marker({
            position: Bratislavskaya,
            map: map,
            icon: imageMarker
        });
    }
    initMap();


});
