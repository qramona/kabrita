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

});
const basket01 = document.getElementById('basket1')
const basket02 = document.getElementById('basket2')
const basket03 = document.getElementById('basket3')
const basket04 = document.getElementById('basket4')
const basket05 = document.getElementById('basket5')
const basket06 = document.getElementById('basket6')
const basket07 = document.getElementById('basket7')
const basket08 = document.getElementById('basket8')
const basket09 = document.getElementById('basket9')
const basketAmount1 = document.getElementById('basket-amount1')
const basketAmount2 = document.getElementById('basket-amount2')
const basketAmount3 = document.getElementById('basket-amount3')
const basketAmount4 = document.getElementById('basket-amount4')
const basketAmount5 = document.getElementById('basket-amount5')
const basketAmount6 = document.getElementById('basket-amount6')
const basketAmount7 = document.getElementById('basket-amount7')
const basketAmount8 = document.getElementById('basket-amount8')
const basketAmount9 = document.getElementById('basket-amount9')
//


function basket(basketId, basketAmountId) {
    return function() {
        return function() {
            basketId.style.display = 'none';
            basketAmountId.style.display = 'flex';
        };
    };
}
basket01.onclick = basket(basket01, basketAmount1)();
basket02.onclick = basket(basket02, basketAmount2)();
basket03.onclick = basket(basket03, basketAmount3)();
basket04.onclick = basket(basket04, basketAmount4)();
basket05.onclick = basket(basket05, basketAmount5)();
basket06.onclick = basket(basket06, basketAmount6)();
basket07.onclick = basket(basket07, basketAmount7)();
basket08.onclick = basket(basket08, basketAmount8)();
basket09.onclick = basket(basket09, basketAmount9)();
//
let count = 1;
const plusbtn1 = document.getElementById('plus-btn1')
const plusbtn2 = document.getElementById('plus-btn2')
const plusbtn3 = document.getElementById('plus-btn3')
const plusbtn4 = document.getElementById('plus-btn4')
const plusbtn5 = document.getElementById('plus-btn5')
const plusbtn6 = document.getElementById('plus-btn6')
const plusbtn7 = document.getElementById('plus-btn7')
const plusbtn8 = document.getElementById('plus-btn8')
const plusbtn9 = document.getElementById('plus-btn9')
//
const minusbtn1 = document.getElementById('minus-btn1')
const minusbtn2 = document.getElementById('minus-btn2')
const minusbtn3 = document.getElementById('minus-btn3')
const minusbtn4 = document.getElementById('minus-btn4')
const minusbtn5 = document.getElementById('minus-btn5')
const minusbtn6 = document.getElementById('minus-btn6')
const minusbtn7 = document.getElementById('minus-btn7')
const minusbtn8 = document.getElementById('minus-btn8')
const minusbtn9 = document.getElementById('minus-btn9')
//
const countLabel1 = document.getElementById('countLabel1')
const countLabel2 = document.getElementById('countLabel2')
const countLabel3 = document.getElementById('countLabel3')
const countLabel4 = document.getElementById('countLabel4')
const countLabel5 = document.getElementById('countLabel5')
const countLabel6 = document.getElementById('countLabel6')
const countLabel7 = document.getElementById('countLabel7')
const countLabel8 = document.getElementById('countLabel8')
const countLabel9 = document.getElementById('countLabel9')

const circleActive = document.getElementsByClassName('circle--active')
//
// function valueBtn() {
//     minusbtn1.onclick = function () {
//         if (count > 1) {
//             count -= 1;
//             countLabel1.innerHTML = count;
//         } else {
//             basketAmount1.style.display = 'none'
//             basket01.style.display = 'flex'
//         }
//     }
//
//     plusbtn1.onclick = function () {
//         count += 1;
//         countLabel1.innerHTML = count;
//     }
// }
// valueBtn()

// function valueBtn1(minusBtn,plusBtn,countLabel,basketAmount,basketNum) {
//             minusBtn.onclick = function () {
//                 if (count > 1) {
//                     count -= 1;
//                     countLabel.innerHTML = count;
//                 } else {
//                     basketAmount.style.display = 'none'
//                     basketNum.style.display = 'flex'
//                 }
//             }
//             plusBtn.onclick = function () {
//                 count += 1;
//                 countLabel.innerHTML = count;
//             }
//
// }
// plusbtn1.onclick =valueBtn1(minusbtn1,plusbtn1,countLabel1,basketAmount1,basket01)

function valueBtn1(minusBtn,countLabel,basketAmount,basketNum) {
    return function(){
    minusBtn.onclick = function () {
        if (count > 1) {
            count -= 1;
            countLabel.innerHTML = count;
        } else {
            basketAmount.style.display = 'none'
            basketNum.style.display = 'flex'
        }
    }
        }
}
minusbtn1.onclick = valueBtn1(minusbtn1,countLabel1,basketAmount1,basket01)
minusbtn2.onclick = valueBtn1(minusbtn2,countLabel2,basketAmount2,basket02)
function valueBtn2(plusBtn,countLabel){
    return function(){
        plusBtn.onclick = function () {
                count += 1;
                countLabel.innerHTML = count;
            }
    }
}
plusbtn1.onclick = valueBtn2(plusbtn1,countLabel1)
plusbtn2.onclick = valueBtn2(plusbtn2,countLabel2)

// filtration
const filtrationSets = document.getElementById('filtration-sets')
const filtrationBox = document.getElementById('filtration-boxs')
const filtrationPresent = document.getElementById('filtration-presents')
const KabritaSet = document.getElementById('Kabrita__Set')
const KabritaBox = document.getElementById('Kabrita__Box')
const KabritaPresent = document.getElementById('Kabrita__Present')

filtrationSets.onclick = function(){
    KabritaSet.style.display = 'flex'
    KabritaBox.style.display = 'none'
    KabritaPresent.style.display = 'none'
}
filtrationBox.onclick = function (){
    KabritaSet.style.display = 'none'
    KabritaBox.style.display = 'flex'
    KabritaPresent.style.display = 'none'
}
filtrationPresent.onclick = function (){
    KabritaSet.style.display = 'none'
    KabritaBox.style.display = 'none'
    KabritaPresent.style.display = 'flex'
}