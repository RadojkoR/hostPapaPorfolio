//HIDE MAINHEADER
$("document").ready(function () {
//    alert("hello")

const $aboutHr = $("#about .hr")
const $myPriorityTextH3 = $(".myPriorityText h3, .myPriorityText2 h3, .myPriorityText3 h3, .myPriorityText4 h3")
const $myPriorityTextP = $(".myPriorityText p, .myPriorityText2 p, .myPriorityText3 p, .myPriorityText4 p")

//  ANIMATION ON SCROLL
$(window).on("scroll", function () {
    const $travelsWithDrea = $('.travelsWithDrea');
    const $mes = $('.mes');
    const $oneMinuteMama = $('.oneMinuteMama');
    const $converter = $('.converter');
    const $cocktail = $('.cocktail');
    const $aboutH1 = $("#about h1");
    const $hexagon = $(".hexagon");
    const $hexagon2 = $(".hexagon2");
    const $hexagon3 = $(".hexagon3");
    const $hexagon4 = $(".hexagon4");
    const $mySkills = $("#mySkills");
    const $aboutMe = $(".aboutMe");

    // ANIMATE ABOUT SECTION
  if ($(window).width() > 767) {
    if ($(window).scrollTop() > 500) {       
        $($aboutH1).animate({
            left: "0%",
            opacity: "1"
        }, 800);          
    }

    if ($(window).scrollTop() > 600) {
        $($aboutHr).animate({
            left: "0%",
            opacity: "1"
        }, 800); 
    }
// ROTATE HEXAGON
 if ($(window).scrollTop() > 700) {
    $($hexagon).css({
        transform: "rotateY(0deg)",
        transition: "transform 0.5s",
        transitionDelay: "0.2s",
        opacity: "1"
    }, 700)
    
    $($hexagon2).css({
        transform: "rotateY(0deg)",
        transition: "transform 0.5s",
        transitionDelay: "0.4s",
    })

    $($hexagon3).css({
        transform: "rotateY(0deg)",
        transition: "transform 0.5s",
        transitionDelay: "0.6s",
    })

    $($hexagon4).css({
        transform: "rotateY(0deg)",
        transition: "transform 0.5s",
        transitionDelay: "0.8s",
    })

}

// ANIMATE MY PRIORITY TEXT
if ($(window).scrollTop() > 800) {
    $($myPriorityTextH3).animate({
        opacity: "1"
    }, 1000)
}

if ($(window).scrollTop() > 850) {
    $($myPriorityTextP).css({
        transform: "rotateY(0deg)",
        transition: "transform 0.8s",
        transitionDelay: "0.5s",
    })
}

// ANIMATE ABOUT ME SECTION

if ($(window).scrollTop() > 1100) {
    //ANIMATE SKILLBAR SECTIOIN
    $($mySkills ).animate({
        right: "0%",
        opacity: "1"
    }, 1000)
// ANIMATE ABOUT ME
$($aboutMe).animate({
    left: "0%",
    opacity: "1"
}, 1000)
    
}

// ANIMATE MY PROJECTS SECTION
if ($(window).scrollTop() > 1800) {
    const $myProjectsH1 = $('#myProjects h1');
    
    $($myProjectsH1).animate({
        left: '0',
        opacity: '1'
    }, 1000);
    $('#myProjects .hr').animate({
        right: '0',
        opacity: '1',
    }, 1000);
}



if ($(window).scrollTop() > 2100) {
    $($travelsWithDrea).css({
        transform: 'translateY(0px)',
        transition: 'all 0.8s ease',
        opacity: '1'
    })

    $($mes).css({
        transform: 'translateY(0px)',
        opacity: '1',
        transition: 'all 1s ease',
        transitionDelay: "0.4s"
    })

    $($oneMinuteMama).css({
        transform: 'translateY(0px)',
        opacity: '1',
        transition: 'all 1s ease',
        transitionDelay: "0.8s"
    })

   
}

if ($(window).scrollTop() > 2400) {
    $($converter).css({
        transform: 'translateY(0px)',
        opacity: '1',
        transition: 'all 1s ease',
        transitionDelay: "0.4s"
    })

    $($cocktail).css({
        transform: 'translateY(0px)',
        opacity: '1',
        transition: 'all 1s ease',
        transitionDelay: "0.8s"
    })
}

} else {
    if ($(window).scrollTop() > 400) {       
        $($aboutH1).animate({
            left: "0%",
            opacity: "1"
        }, 800);          
    }

    if ($(window).scrollTop() > 500) {
        $($aboutHr).animate({
            left: "0%",
            opacity: "1"
        }, 800); 
    }
// ROTATE HEXAGON
 if ($(window).scrollTop() > 550) {
    $($hexagon).css({
        transform: "rotateY(0deg)",
        transition: "transform 0.5s",
        transitionDelay: "0.2s",
        opacity: "1"
    }, 700)
    
    $($hexagon2).css({
        transform: "rotateY(0deg)",
        transition: "transform 0.5s",
        transitionDelay: "0.4s",
    })

    $($hexagon3).css({
        transform: "rotateY(0deg)",
        transition: "transform 0.5s",
        transitionDelay: "0.6s",
    })

    $($hexagon4).css({
        transform: "rotateY(0deg)",
        transition: "transform 0.5s",
        transitionDelay: "0.8s",
    })   

}

if ($(window).scrollTop() > 650) {
    $($myPriorityTextH3).animate({
        opacity: "1"
    }, 1000)
}

if ($(window).scrollTop() > 750) {
    $($myPriorityTextP).css({
        transform: "rotateY(0deg)",
        transition: "transform 0.8s",
        transitionDelay: "0.5s",
    })
}

// ANIMATE ABOUT ME SECTION

if ($(window).scrollTop() > 950) {
// ANIMATE ABOUT ME
$($aboutMe).animate({
    left: "0%",
    opacity: "1"
}, 1000)
    
}

if ($(window).scrollTop() > 1300) {
    //ANIMATE SKILLBAR SECTIOIN
    $($mySkills ).animate({
        right: "0%",
        opacity: "1"
    }, 1000)
    
}
    const $myProjectsH1 = $('#myProjects h1');
    const $myProjectsHr = $('#myProjects .hr');
if ($(window).scrollTop() > 1800) {
    
    $($myProjectsH1).animate({
        left: '0',
        opacity: '1'
    }, 1000);
    $($myProjectsHr).animate({
        right: '0%',
        opacity: '1',
    }, 1000);
}

if ($(window).scrollTop() > 2100) {
    $($travelsWithDrea).css({
        transform: 'translateY(0px)',
        transition: 'all 0.8s ease',
        opacity: '1'
    })
}

if ($(window).scrollTop() > 2500) {
    $($mes).css({
        transform: 'translateY(0px)',
        opacity: '1',
        transition: 'all 1s ease'
    })
}

if ($(window).scrollTop() > 3000) {
    $($oneMinuteMama).css({
        transform: 'translateY(0px)',
        opacity: '1',
        transition: 'all 1s ease'
    })   
}



if ($(window).scrollTop() > 3400) {
    $($converter).css({
        transform: 'translateY(0px)',
        opacity: '1',
        transition: 'all 1s ease'
    })

    
}
if ($(window).scrollTop() > 3900) {
    $($cocktail).css({
        transform: 'translateY(0px)',
        opacity: '1',
        transition: 'all 1s ease'
    })
}

}
});//END ANIMATION ON SCROL



//SKILLBARS
var offsetTop = $('#offsetTop').offset().top;

    $(window).scroll(function () {

        var height = $(window).height();
        if ($(window).scrollTop() + height > offsetTop) {
            jQuery('.skillbar').each(function () {
                jQuery(this).find('.skillbar-bar').animate({
                    width: jQuery(this).attr('data-percent')
                }, 4000);
            });
        }

    });

       $("#mainHeader").css({
          top:scroll/5 + "%" 
        })

 // HOVER 

    const $travelsBox = $('.travelsWithDrea .box');
    const $travelsButton = $('.travelsWithDrea button');
    const $travelsContent =  $('.travelsWithDrea .content');

    $($travelsBox).hover(function() {

        $($travelsBox).css({
            opacity: '0.5',
            transition: 'all 0.4s ease'
        })

        $($travelsButton).css({
            transform: "rotateY(0deg)",
            transition: 'all 0.4s ease'
        }, 800)
        $($travelsContent).css({
            transform: "rotateY(0deg)",
            transition: "transform 0.8s",
            transitionDelay: "0.5s",
        })

        $($mesButton).css({
            transform: "rotateY(90deg)",
            transition: 'all 0.4s ease'
        }, 500)

        $($mamaButton).css({
            transform: "rotateY(90deg)",
            transition: 'all 0.4s ease'
        }, 500)

        $($converterButton).css({
            transform: "rotateY(90deg)",
            transition: 'all 0.4s ease'
        }, 500)

        $($cocktailButton).css({
            transform: "rotateY(90deg)",
            transition: 'all 0.4s ease'
        }, 500)
    
     }, function() {

        $($travelsBox).css({
            opacity: '1'
        })

        });//END TRAVELS WITH DREA HOVER
 const $mesBox = $('.mes .box')  
 const $mesButton = $('.mes button');
 const $mesContent = $('.mes .content');

 $($mesBox).hover(function() {

    $($travelsButton).css({
        transform: "rotateY(90deg)",
        transition: 'all 0.4s ease'
    }, 800)

    $($mamaButton).css({
        transform: "rotateY(90deg)",
        transition: 'all 0.4s ease'
    }, 500)

    $($converterButton).css({
        transform: "rotateY(90deg)",
        transition: 'all 0.4s ease'
    }, 500)

    $($cocktailButton).css({
        transform: "rotateY(90deg)",
        transition: 'all 0.4s ease'
    }, 500)

    $($mesBox).css({
        opacity: '0.5',
        transition: 'all 0.4s ease'
    })

    $($mesButton).css({
        transform: "rotateY(0deg)",
        transition: 'all 0.4s ease'
    }, 500)

    $($mesContent).css({
        transform: "rotateY(0deg)",
        transition: "transform 0.8s",
        transitionDelay: "0.5s",
    })

 }, function() {
    
    $($mesBox).css({
        opacity: '1',
        transition: 'all 0.4s ease'
    })

   

 });//END MES HOVER
 const $mamaBox = $('.oneMinuteMama .box')
 const $mamaButton = $('.oneMinuteMama button');
 const $mamaContent = $('.oneMinuteMama .content');

 $($mamaBox).hover(function() {

    $($mesButton).css({
        transform: "rotateY(90deg)",
        transition: 'all 0.4s ease'
    }, 500)

    $($travelsButton).css({
        transform: "rotateY(90deg)",
        transition: 'all 0.4s ease'
    }, 800)

    $($converterButton).css({
        transform: "rotateY(90deg)",
        transition: 'all 0.4s ease'
    }, 500)

    $($cocktailButton).css({
        transform: "rotateY(90deg)",
        transition: 'all 0.4s ease'
    }, 500)

    $($mamaBox).css({
        opacity: '0.5',
        transition: 'all 0.4s ease'
    })

    $($mamaButton).css({
        transform: "rotateY(0deg)",
        transition: 'all 0.4s ease'
    }, 500)
    $($mamaContent).css({
        transform: "rotateY(0deg)",
        transition: "transform 0.8s",
        transitionDelay: "0.5s",
    })

 }, function() {
   

    $($mamaBox).css({
        opacity: '1',
        transition: 'all 0.4s ease'
    })

 });//END ONE MINUTE MAMA HOVER

 
 const $converterBox = $('.converter .box')
 const $converterButton = $('.converter button');
 const $converterContent = $('.converter .content');

 $($converterBox).hover(function() {

    $($mesButton).css({
        transform: "rotateY(90deg)",
        transition: 'all 0.4s ease'
    }, 500)

    $($travelsButton).css({
        transform: "rotateY(90deg)",
        transition: 'all 0.4s ease'
    }, 800)

    $($mamaButton).css({
        transform: "rotateY(90deg)",
        transition: 'all 0.4s ease'
    }, 800)

    $($cocktailButton).css({
        transform: "rotateY(90deg)",
        transition: 'all 0.4s ease'
    }, 500)

    $($converterBox).css({
        opacity: '0.5',
        transition: 'all 0.4s ease'
    })

    $($converterButton).css({
        transform: "rotateY(0deg)",
        transition: 'all 0.4s ease'
    }, 500)
    $($converterContent).css({
        transform: "rotateY(0deg)",
        transition: "transform 0.8s",
        transitionDelay: "0.5s",
    })

 }, function() {
   

    $($converterBox).css({
        opacity: '1',
        transition: 'all 0.4s ease'
    })

 });//END ONE CONVERTER HOVER

 const $cocktailBox = $('.cocktail .box')
 const $cocktailButton = $('.cocktail button');
 const $cocktailContent = $('.cocktail .content');

 $($cocktailBox).hover(function() {

    $($mesButton).css({
        transform: "rotateY(90deg)",
        transition: 'all 0.4s ease'
    }, 500)

    $($travelsButton).css({
        transform: "rotateY(90deg)",
        transition: 'all 0.4s ease'
    }, 800)

    $($mamaButton).css({
        transform: "rotateY(90deg)",
        transition: 'all 0.4s ease'
    }, 800)

    $($converterButton).css({
        transform: "rotateY(90deg)",
        transition: 'all 0.4s ease'
    }, 500)

    $($cocktailBox).css({
        opacity: '0.5',
        transition: 'all 0.4s ease'
    })

    $($cocktailButton).css({
        transform: "rotateY(0deg)",
        transition: 'all 0.4s ease'
    }, 500)
    $($cocktailContent).css({
        transform: "rotateY(0deg)",
        transition: "transform 0.8s",
        transitionDelay: "0.5s",
    })

 }, function() {
   

    $($cocktailBox).css({
        opacity: '1',
        transition: 'all 0.4s ease'
    })

 });//END ONE CONVERTER HOVER

 //SMOOTH SCROLL

    const $menuTopA = $('#menuTop a');

 $($menuTopA).on('click', function(e) {
    e.preventDefault();

    const href = $(this).attr('href');

    $('html, body').animate({
        scrollTop: $( href ).offset().top
    }, '300');//END SCROLL ANIMATION
 });

 //CURRENT CLASS

 $(window).scroll(function () {
    var y = $(this).scrollTop();
    $($menuTopA).each(function (event) {
        if (y >= $($(this).attr('href')).offset().top - 90) {
            $($menuTopA).not(this).removeClass('active');
            $(this).addClass('active');
        }
    });
}); //END CURRENT CLASS

//HAMBURGER MENU

const $hamburger = $(".hamburger");
const $cross = $(".cross");
const $mainNav = $("#mainNav");

$($cross).hide();
$($hamburger ).click(function() {
    $($mainNav).slideToggle("slow", function() {
        $($hamburger).hide();
        $($cross).show();
    })
});

$($cross).click(function() {
    $($mainNav).slideToggle("slow", function() {
        $($cross).hide();
        $($hamburger).show();
    });
})

// $('button').click(function() {
//     $(this).toggleClass('expanded').siblings('div').slideToggle();
//   });


//UPDATE COPYRIGHT YEAR
document.querySelector('#copyrightYear').innerText = new Date().getFullYear();

var windowsize = $(window).width();

$(window).resize(function() {
  var windowsize = $(window).width();
});



}); //END DOC READY
