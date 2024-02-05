/* ==========================================================================
   Document Ready Function
========================================================================== */

$(document).ready(function() {

    /* ==========================================================================
        Nav Container On Hover
    ========================================================================== */

    if ($(".nav-container").length) {
        if (window.innerWidth > 991) {
            $(".dropdown").addClass("hoverEvt");
            $(".dropdown-menu").addClass("otherHoverEvt");
            $(".hoverEvt").hover(
            function() { 
                $(".otherHoverEvt", this).fadeIn("fast");
                $(this).children("a").css({
                    "background" : "#fff",
                    "color" : "#000"
                });
            },
            function() { 
                $(".otherHoverEvt", this).fadeOut("fast");
                $(this).children("a").css({
                    "background" : "#3A608F",
                    "color" : "#fff"
                });
            });

        } else {
            // reseting nav styles
            $(".dropdown").removeClass("hoverEvt").children("a").css({
                "background" : "",
                "color" : ""
            });
            $(".dropdown-menu").removeClass("otherHoverEvt").css("display", "");
        }
    }


    /* ==========================================================================
        Layer Slider
    ========================================================================== */

    if ($('.layerslider').length) {
        $('.layerslider').layerSlider({
            responsive: false,
            responsiveUnder: 792,
            layersContainer: 792,
            skinsPath: 'js/layerslider/skins/',
            hoverPrevNext: false,
            navButtons: false,
            navStartStop: false,
            showCircleTimer: false
        });
    }

    /* ==========================================================================
        Tabs
    ========================================================================== */

    if ($(".tabs").length) {
        $(".tabs").tabs();
    }

    /* ==========================================================================
        Mega Menu
    ========================================================================== */


    $(document).on('click', '.yamm .dropdown-menu', function(e) {
        e.stopPropagation()
    });

    /* ==========================================================================
        Cart
    ========================================================================== */

    if ($("#cart-btn").length) {

        var cartDropDown = $(".header-container .cart-block .cart-dropdown"),
            cartBtn = $("#cart-btn");

        // Hovering in and Out of Cart
        $("#cart-btn, .header-container .cart-block .cart-dropdown").mouseenter(function() {
             $(".header-container .cart-block .cart-dropdown").addClass("active");
        });
        $("#cart-btn, .header-container .cart-block .cart-dropdown").mouseleave(function() {
             $(".header-container .cart-block .cart-dropdown").removeClass("active");
        });

    }

    /* ==========================================================================
        Responsive Header
    ========================================================================== */

    if ($(".header-container .logo").length) {
        if (window.innerWidth <= 767) {
            $(".header-container .logo").prepend($(".header-container .search-part .logo .title.tablet"));
        }
    }

    /* ==========================================================================
       Window Scroll Function
    ========================================================================== */

    function getCurrentScroll() {
        return window.pageYOffset || document.documentElement.scrollTop;
    }
    
    $(window).scroll(function() {

        /* ==========================================================================
           Return To Top
        ========================================================================== */

        if ($(this).scrollTop() >= 50) {
            $("#return-to-top").removeClass("gone");
            $("#return-to-top").addClass("visible");
        } else {
            $("#return-to-top").removeClass("visible");
            $("#return-to-top").addClass("gone");
        }

    });
        $("#return-to-top").click(function() {
            $("html, body").animate({
                scrollTop: 0
            }, "slow");
            return false;
        });

});

/* ==========================================================================
    Functions
========================================================================== */

function setMaxHeight($object) {
    var heightArray = [],
        maxHeight;

    // reseting the height
    $object.css("height", "auto");
    
    $object.each(function() {
        heightArray.push($(this).outerHeight());
    });

    maxHeight = Math.max.apply(Math,heightArray);
    $object.css("height", maxHeight);
}

$(window).load(function () {

    /* ==========================================================================
        Category Page
    ========================================================================== */

    // Equal Heights
    if ($("#products_container").length && window.innerWidth >= 768) {
        var rowCount = $("#products_container [class*='row-']").length;

        // Welcome Container
        for (var i = 1; i <= rowCount; i++ ) {
            setMaxHeight($("#products_container .row-"+i+" .table_cell .description > a"));
        };

    }

}).resize(function(){

    /* ==========================================================================
        Nav Container On Hover
    ========================================================================== */

    if ($(".nav-container").length) {
        if (window.innerWidth > 991) {
            $(".dropdown").addClass("hoverEvt");
            $(".dropdown-menu").addClass("otherHoverEvt");
            $(".hoverEvt").hover(
            function() { 
                $(".otherHoverEvt", this).fadeIn("fast");
                $(this).children("a").css({
                    "background" : "#fff",
                    "color" : "#000"
                });
            },
            function() { 
                $(".otherHoverEvt", this).fadeOut("fast");
                $(this).children("a").css({
                    "background" : "#3A608F",
                    "color" : "#fff"
                });
            });

        } else {
            // reseting nav styles
            $(".dropdown").removeClass("hoverEvt").children("a").css({
                "background" : "",
                "color" : ""
            });
            $(".dropdown-menu").removeClass("otherHoverEvt").css("display", "");
        }
    }

    /* ==========================================================================
        Responsive Header
    ========================================================================== */

    if ($(".header-container .logo").length) {
        if (window.innerWidth <= 767) {
            $(".header-container .logo").prepend($(".header-container .search-part .logo .title.tablet"));
        } else if (window.innerWidth > 767 && window.innerWidth <= 991) {
            $(".header-container .search-part .logo .title.tablet").insertAfter($(".header-container .search-part .logo > a"));
        }
    }

    /* ==========================================================================
        Category Page
    ========================================================================== */

    // Equal Heights
    if ($("#products_container").length && window.innerWidth >= 768) {
        var rowCount = $("#products_container [class*='row-']").length;

        // Welcome Container
        for (var i = 1; i <= rowCount; i++ ) {
            setMaxHeight($("#products_container .row-"+i+" .table_cell .description > a"));
        };

    }

});