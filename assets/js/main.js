'use strict';

$(function () {
    // var width = 111;
    // var animationSpeed = 1;
    var pause = 30;
    var defaultMargingLeft = 118.5;
    var img=$('#img1').width();
    var lastMargingLeft = img - defaultMargingLeft;
    var marginLeft = 0;
    var $slider = $('#slider');
    var $slideContainer = $slider.find('.slides');
    var $slides = $slideContainer.find('.slide');
    var interval;

    function startSlider() {
        interval = setInterval(function () {
            if (marginLeft <= lastMargingLeft) {
                marginLeft += defaultMargingLeft;
              //  console.log(marginLeft, defaultMargingLeft);
            }
            else {
                //$slideContainer.css('marginLeft', 0);
                marginLeft = defaultMargingLeft;
                 
            }
            $slideContainer.css('marginLeft', -1 * marginLeft);
             /*  //  $slideContainer.animate({ marginLeft: '-=' width }, animationSpeed, function () {
                 console.log(marginLeft);
                 if (marginLeft <= lastMargingLeft) 
                {
                   marginLeft+=defaultMargingLeft;
                   
                } 
                 else
                {
                    //$slideContainer.css('marginLeft', 0);
                     marginLeft=222;
                     
             /*      }
                
              });  */
        }, pause);
    }

    function stopSlider() {
        clearInterval(interval);
    }

    $slider.on('mouseenter', stopSlider).on('mouseleave', startSlider);

});