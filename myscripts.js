$(document).ready(function (){

    $('.burger-menu').click(function(){

        $('.header__menu-items').css('display','flex');
        $('.burger-menu').css('display','none');
        $('.close-logo').css('display','flex');
    })
    $('#close-logo').click(function(){
        $('#menu-items').css('display','none');
        $('#close-logo').css('display','none');
        $('#burger-menu').css('display','flex');
    })

    $('.carousel').carousel({
        dots:true,
        arrow:false,
        time: 4,
        transition: 1,
        }
    )
    $('.owl-carousel').owlCarousel({
        loop: true,
        arrow:true,
        margin: 10,
        dots: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            992: {
                items: 2
            },
            1200:{
                items:3
            }
        }
    })
    let $carousel = $('.specprojects__slider');
    let owl = $carousel.data('owlCarousel');
    owl.reinit({items: 1});
        // $('#basket1').click(function(){
        //     $('#basket-amount1').css('display','flex');
        //     $('#basket1').css('display','none');
        // })
});