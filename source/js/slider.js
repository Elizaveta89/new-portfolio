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


