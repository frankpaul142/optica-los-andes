$(document).ready(function() {
    $(".list-locales li a").click(function() {
        var checkElement = $(this).next();
        if ((checkElement.is('ul'))) {
            ($(this)).slideToggle();
        }
    });
});
