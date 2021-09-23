window.onload = function () {
    $(".answer").on("click", function() {
        if ($(this).children("dd").hasClass('show-dd')) {
            $(this).children("dd").removeClass('show-dd');
            $(this).children("dt").children("svg").children("polyline")[0].points[1].y = 15
        } else {
            $(this).children("dd").addClass('show-dd');
            $(this).children("dt").children("svg").children("polyline")[0].points[1].y = 3
        }
        //$(".answer").removeClass('show-dd');
    });
};