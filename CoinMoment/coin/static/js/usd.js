window.onload = function () {
    $("#deposit-button").on("click", function() {
        $(".detail-modal-block.b").addClass('show-modal-block');
        $("#deposit-block").addClass('block-shadow');
        $("th").css({"background" : "#b2b2b2", "border-bottom" : "1px solid #aaabad"});
        $("td").css("background", "#b2b2b2");
        $("#deposit-button").addClass('block-button');
        $("#withdraw-button").addClass('block-button');
    });

    $("#close-modal-bank-block").on("click", function() {
        $(".detail-modal-block.b").removeClass('show-modal-block');
        $("#deposit-block").removeClass('block-shadow');
        $("th").css({"background" : "", "border-bottom" : "1px solid #dedede"});
        $("td").css("background", "");
        $("#deposit-button").removeClass('block-button');
        $("#withdraw-button").removeClass('block-button');
    });

    $('#bank-drop-down').click(function () {
        $(this).toggleClass('active');
        $(this).find('.dropdown-menu').slideToggle(300);
    });
    $('#bank-drop-down').focusout(function () {
        $(this).removeClass('active');
        $(this).find('.dropdown-menu').slideUp(300);
    });
    $('.dropdown.b .dropdown-menu.b li').click(function () {
        $(this).parents('.dropdown.b').find('#current-bank').empty();
        $(this).clone().appendTo('#current-bank');
        $(this).parents('.dropdown.b').find('#selected-bank').attr('value', $(this).attr('data-id'));
    });

    $("#withdraw-button").on("click", function() {
        $(".detail-modal-block.w").addClass('show-modal-block');
        $("#withdraw-block").addClass('block-shadow');
        $("th").css({"background" : "#b2b2b2", "border-bottom" : "1px solid #aaabad"});
        $("td").css("background", "#b2b2b2");
        $("#deposit-button").addClass('block-button');
        $("#withdraw-button").addClass('block-button');
    });

    $("#close-modal-withdraw-block").on("click", function() {
        $(".detail-modal-block.w").removeClass('show-modal-block');
        $("#withdraw-block").removeClass('block-shadow');
        $("th").css({"background" : "", "border-bottom" : "1px solid #dedede"});
        $("td").css("background", "");
        $("#deposit-button").removeClass('block-button');
        $("#withdraw-button").removeClass('block-button');
    });

    $('#withdraw-drop-down').click(function () {
        $(this).toggleClass('active');
        $(this).find('.dropdown-menu.w').slideToggle(300);
    });
    $('#withdraw-drop-down').focusout(function () {
        $(this).removeClass('active');
        $(this).find('.dropdown-menu.w').slideUp(300);
    });
    $('.dropdown.w .dropdown-menu.w li').click(function () {
        $(this).parents('.dropdown.w').find('#current-withdraw').empty();
        $(this).clone().appendTo('#current-withdraw');
        $(this).parents('.dropdown.w').find('#selected-withdraw').attr('value', $(this).attr('data-id'));
    });
}