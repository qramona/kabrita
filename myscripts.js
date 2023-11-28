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
    // let $carousel = $('.specprojects__slider');
    // let owl = $carousel.data('owlCarousel');
    // owl.reinit({items: 1});
    //     // $('#basket1').click(function(){
    //     //     $('#basket-amount1').css('display','flex');
    //     //     $('#basket1').css('display','none');
    //     // })
    // ('').onclick

    const kabritaOffline = document.getElementById('kabrita__offline')
    const kabritaOnline = document.getElementById('kabrita__online')
    const onBtn1 = document.getElementById('offline-on')
    const offBtn1 = document.getElementById('offline-off')
    const onBtn2 = document.getElementById('online-on')
    const offBtn2 = document.getElementById('online-off')
    const offlineBlocks = document.getElementById('blocks__offline-to-buy')
    const onlineBlocks = document.getElementById('blocks__online-to-buy')

    offBtn1.onclick = function foo(){
        offBtn1.style.display = 'none';
        onBtn1.style.display = 'flex';
        offlineBlocks.style.display = 'flex';
    }
    onBtn1.onclick = function (){
        offBtn1.style.display = 'flex';
        onBtn1.style.display = 'none';
        offlineBlocks.style.display = 'none';
    }
    //
    offBtn2.onclick = function foo(){
        offBtn2.style.display = 'none';
        onBtn2.style.display = 'flex';
        onlineBlocks.style.display = 'flex';
    }
    onBtn2.onclick = function (){
        offBtn2.style.display = 'flex';
        onBtn2.style.display = 'none';
        onlineBlocks.style.display = 'none';
    }



});