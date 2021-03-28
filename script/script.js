$(function () {
    $("#mainMenu>li").mouseover(function () {
        $(".subMenu").stop().slideDown(800);
        $("#subMenuBG").stop().slideDown(800);
    });
    $("#mainMenu>li").mouseout(function () {
        $(".subMenu").stop().slideUp(400);
        $("#subMenuBG").stop().slideUp(400);
    });
});
