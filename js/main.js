$(function() {

    $('.header__list-item.drop-down').on('click', function(){
        $(this).children('.drop-down__link').toggleClass('active');
        $(this).children('.drop-down__list').toggleClass('active');
    });



    $('.burger-menu').on('click', function () {
        $('.header__top, .burger-menu, .header__menu').toggleClass('active')
    })
    $('.header__list-item').on('click', function () {
        $(this).toggleClass('active')
    })



    $('.review__slider').slick({
        prevArrow: '<button type="button" class="slick-prev"><img class="prev__img arrow__img" src="images/svg/big-arrow-prev.svg" alt="arrow"></button>',
        nextArrow: '<button type="button" class="slick-next"><img class="next__img arrow__img" src="images/svg/big-arrow-next.svg" alt="arrow"></button>',
        responsive: [
            {
                breakpoint: 810,
                settings: {
                    dots: true,
                }
            },
            
        ]
    });


    

});