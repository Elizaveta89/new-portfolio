

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG4kKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgYnV0dG9uID0gJCgnLmhlYWRlcl9fbWVudS1idXR0b24nKTtcbiAgICB2YXIgYnV0dG9uQWN0aXZlQ2xhc3MgPSAnaGVhZGVyX19tZW51LWJ1dHRvbl9hY3RpdmUnO1xuICAgIHZhciBtZW51ID0gJCgnLmhlYWRlcl9fbWVudScpO1xuICAgIHZhciBtZW51QWN0aXZlQ2xhc3MgPSAnaGVhZGVyX19tZW51LWFjdGl2ZSc7XG5cbiAgICBidXR0b24ub24gKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAoYnV0dG9uLmhhc0NsYXNzKGJ1dHRvbkFjdGl2ZUNsYXNzKSkge1xuICAgICAgICAgICAgYnV0dG9uLnJlbW92ZUNsYXNzKGJ1dHRvbkFjdGl2ZUNsYXNzKTtcbiAgICAgICAgICAgIG1lbnUucmVtb3ZlQ2xhc3MobWVudUFjdGl2ZUNsYXNzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGJ1dHRvbi5hZGRDbGFzcyhidXR0b25BY3RpdmVDbGFzcyk7XG4gICAgICAgICAgICBtZW51LmFkZENsYXNzKG1lbnVBY3RpdmVDbGFzcyk7XG4gICAgICAgIH1cbiAgICB9KVxuXG59KTsiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
