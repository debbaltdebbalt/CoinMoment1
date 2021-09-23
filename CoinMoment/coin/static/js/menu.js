window.onload = function () {

    $(document).mouseup(function (e) {
        if ($(".hidden-menu").hasClass('show-hidden-menu')) {
            var div = $("#hidden-block");
            if (!div.is(e.target) && div.has(e.target).length === 0) {
                div.removeClass('show-hidden-menu');
            }
        }
        $("#menu-button").on("click", function() {
            $(".hidden-menu").addClass('show-hidden-menu');
        });
    });

    $("#add-new-bank").on("click", function() {
        $(".add-new-bank-block").addClass('show-add-new-bank-block');
        $("#add-new-bank-block").addClass('block-shadow');
        $("#add-new-bank").addClass('block-button');
    });

    $(".close-button").on("click", function() {
        $(".add-new-bank-block").removeClass('show-add-new-bank-block');
        $("#add-new-bank-block").removeClass('block-shadow');
        $("#add-new-bank").removeClass('block-button');
    });

    $(document).mouseup(function (e) {
        var div = $("#add-new-bank-block");
        if (!div.is(e.target) && div.has(e.target).length === 0) {
            $(".add-new-bank-block").removeClass('show-add-new-bank-block');
            $("#add-new-bank-block").removeClass('block-shadow');
            $("#add-new-bank").removeClass('block-button');
        }
    });

    $("#exchange-button").on("click", function() {
        $("#ex-bl").addClass('show-modal-block');
        $("#buy-block").addClass('block-shadow');
        $("th").css({"background" : "#b2b2b2", "border-bottom" : "1px solid #aaabad"});
        $("td").css("background", "#b2b2b2");
        $("#exchange-button").addClass('block-button');
        $("#transfer-button").addClass('block-button');
    });

    $("#close-modal-block1").on("click", function() {
        $("#ex-bl").removeClass('show-modal-block');
        $("#buy-block").removeClass('block-shadow');
        $("th").css({"background" : "", "border-bottom" : "1px solid #dedede"});
        $("td").css("background", "");
        $("#exchange-button").removeClass('block-button');
        $("#transfer-button").removeClass('block-button');
    });

    /*$(document).mouseup(function (e) {
        var div = $("#ex-bl");
        console.log(div)
        if (!div.is(e.target) && div.has(e.target).length === 0) {
            console.log(123)
            $("#ex-bl").removeClass('show-modal-block');
            $("#buy-block").removeClass('block-shadow');
            $("th").css({"background" : "", "border-bottom" : "1px solid #dedede"});
            $("td").css("background", "");
            $("#exchange-button").removeClass('block-button');
            $("#transfer-button").removeClass('block-button');
        }
    });*/

    $("#transfer-button").on("click", function() {
        $(".detail-modal-block.d2").addClass('show-modal-block');
        $("#transfer-block").addClass('block-shadow');
        $("th").css({"background" : "#b2b2b2", "border-bottom" : "1px solid #aaabad"});
        $("td").css("background", "#b2b2b2");
        $("#exchange-button").addClass('block-button');
        $("#transfer-button").addClass('block-button');
    });

    $("#close-modal-block2").on("click", function() {
        $(".detail-modal-block.d2").removeClass('show-modal-block');
        $("#transfer-block").removeClass('block-shadow');
        $("th").css({"background" : "", "border-bottom" : "1px solid #dedede"});
        $("td").css("background", "");
        $("#exchange-button").removeClass('block-button');
        $("#transfer-button").removeClass('block-button');
    });

    /*$(document).mouseup(function (e) {
        var div = $("#tr-bl");
        if (!div.is(e.target) && div.has(e.target).length === 0) {
            $("#tr-bl").removeClass('show-modal-block');
            $("#transfer-block").removeClass('block-shadow');
            $("th").css({"background" : "", "border-bottom" : "1px solid #dedede"});
            $("td").css("background", "");
            $("#exchange-button").removeClass('block-button');
            $("#transfer-button").removeClass('block-button');
        }
    });*/

    $('#dr1').click(function () {
        $(this).toggleClass('active');
        $(this).find('.dropdown-menu').slideToggle(300);
    });
    $('#dr1').focusout(function () {
        $(this).removeClass('active');
        $(this).find('.dropdown-menu').slideUp(300);
    });
    $('.dropdown .dropdown-menu.t1 li').click(function () {
        $(this).parents('.dropdown').find('#current1').empty();
        $(this).clone().appendTo('#current1');
        $(this).parents('.dropdown').find('#coin1').attr('value', $(this).attr('data-id'));
    });

    $('#dr2').click(function () {
        $(this).toggleClass('active');
        $(this).find('.dropdown-menu').slideToggle(300);
    });
    $('#dr2').focusout(function () {
        $(this).removeClass('active');
        $(this).find('.dropdown-menu').slideUp(300);
    });
    $('.dropdown .dropdown-menu.t2 li').click(function () {
        $(this).parents('.dropdown').find('#current2').empty();
        $(this).clone().appendTo('#current2');
        $(this).parents('.dropdown').find('#coin2').attr('value', $(this).attr('data-id'));
    });

    $('#dr3').click(function () {
        $(this).toggleClass('active');
        $(this).find('.dropdown-menu').slideToggle(300);
    });
    $('#dr3').focusout(function () {
        $(this).removeClass('active');
        $(this).find('.dropdown-menu').slideUp(300);
    });
    $('.dropdown .dropdown-menu.t3 li').click(function () {
        $(this).parents('.dropdown').find('#current3').empty();
        $(this).clone().appendTo('#current3');
        $(this).parents('.dropdown').find('#coin3').attr('value', $(this).attr('data-id'));
    });

};