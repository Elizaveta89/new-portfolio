

$(function () {
    var button = $('.header__menu-button');
    var buttonActiveClass = 'header__menu-button_active';
    var menu = $('.header__menu');
    var menuActiveClass = 'header__menu-active';

    button.on ('click', function() {
        if (button.hasClass(buttonActiveClass)) {
            button.removeClass(buttonActiveClass);
            menu.removeClass(menuActiveClass);
        } else {
            button.addClass(buttonActiveClass);
            menu.addClass(menuActiveClass);
        }
    })

});