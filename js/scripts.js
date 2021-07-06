$(document).ready(function(){
    $('#mycarousel').carousel({ interval: 2000 });
    $('#carouselButton').click(function(){
        if ($('#carouselButton').children('span').hasClass('fa-pause')){
            $('#mycarousel').carousel('pause');
            $('#carouselButton').children('span').removeClass('fa-pause');
            $('#carouselButton').children('span').addClass('fa-play');
        }
        else 
        if ($('#carouselButton').children('span').hasClass('fa-play')){
            $('#mycarousel').carousel('cycle');
            $('#carouselButton').children('span').removeClass('fa-play');
            $('#carouselButton').children('span').addClass('fa-pause');
        }
    });

    $('#aLoginModal').click(function(){
        $('#aLoginModal').attr("data-toggle","modal");
        $('#aLoginModal').attr("data-target", "#loginModal");
    })

    $('#aReserveModal').click(function(){
        $('#aReserveModal').attr("data-toggle","modal");
        $('#aReserveModal').attr("data-target", "#reserveModal");
        $('#aReserveModal').attr("data-placement", "bottom");
    })
});