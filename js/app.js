$(document).ready(function () {

    // ON PAGE LOAD => CF. CAROUSSEL
    $(".img_container img:first-child").addClass("active");

    // DROPDOWN
    $("#burger_menu").click(function () {
        $("#scrolling_menu").slideToggle();
        $("#burger_menu").toggleClass("bg-color-white");
        $("#burger_menu div").toggleClass("bg-color-black");
    });

    // SCROLL DISPLAY CARS ...

    $(window).scroll(function () {
        // IF BOTTOM SCROLL IS REACHED
        if ($(window).scrollTop() + $(window).height() == $(document).height()) {
            $(".toBeFaded").fadeIn(2000);
        }
    })

    // CAROUSSEL

    let counter;
    let leftValue;
    let nbrImgs;

    function init(item) {
        counter = item.parent().find(".img_container img.active").index();
        leftValue = counter * -100;
        nbrImgs = item.parent().find(".img_container img").length;

    }

    function handleCaroussel(alternatives, item) {
        let eqPosition;
        if (alternatives == 1) {
            eqPosition = counter - 1;
            leftValue += 100;
        } else {
            eqPosition = counter + 1;
            leftValue -= 100;
        }
        item.parent().find(".img_container img").removeClass("active");
        item.parent().find(".img_container img").eq(eqPosition).addClass("active");
        item.parent().find(".img_container").animate({ left: leftValue + "%" }, 800);
    }

    $(".arrow_left").click(function () {

        init($(this));
        if (counter > 0) {
            handleCaroussel(1, $(this));
        }
    });

    $(".arrow_right").click(function () {

        init($(this));

        if (counter < nbrImgs - 1) {
            handleCaroussel(2, $(this));
        }
    });

});