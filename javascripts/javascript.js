$(document).ready(function() {
    
    $(".poster").click(function() {
        $(".poster").css("display", "none")
    });

    $(".pers1").click(function() {
        $(".dia1").css("display", "block")
        $(".star1").css("display", "block")
    });
    
    $(".pers2").click(function() {
        $(".dia2").css("display", "block")
        $(".star2").css("display", "block")
    });

    $(".pers3").click(function() {
        $(".dia3").css("display", "block")
        $(".star3").css("display", "block")
    });

    $(".pers4").click(function() {
        $(".dia4").css("display", "block")
        $(".star4").css("display", "block")
    });

    $(".pers5").click(function() {
        $(".dia5").css("display", "block")
        $(".star5").css("display", "block")
        $(".endp").css("display", "block")
    });

    $(".dia1").click(function() {
        $(this).css("display", "none")
    });

    $(".dia2").click(function() {
        $(this).css("display", "none")
    });

    $(".dia3").click(function() {
        $(this).css("display", "none")
    });

    $(".dia4").click(function() {
        $(this).css("display", "none")
    });

    $(".dia5").click(function() {
        $(this).css("display", "none")
    });

    $(".endp").click(function() {
        $(this).css("display", "none")
    });

    $(".list4, .list41").draggable();
    $(".list4, .list41").droppable();
});