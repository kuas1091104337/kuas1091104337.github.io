$(function(){
    //問題處理評分(我的問題)區
    $("#scoreBtn").click(function(){
        $("#scoreBtn").stop().fadeToggle();
        $("#scoreDiv").stop().slideToggle();
        $("html,body").stop().animate({scrollTop: 500}, 300);
    });
    $("#sendBtn").click(function(){
        $("#QuScorePopup").stop().fadeToggle();
    });
	$("#QuDefineBtn").click(function(){
        $("#QuScorePopup").stop().fadeToggle();
        $("#scoreDiv").stop().slideToggle();
        $("#scoreBtn").stop().fadeToggle();
    });
    //我要提問區
    $("#deleteBtn").click(function(){
        alert("確定刪除 (檔案名稱)");
    });
    $("#cancelBtn").click(function(){
        alert("確定清空提問內容?");
    });
    $("#submitBtn").click(function(){
        $("#askPopup").stop().fadeToggle();
    });
    $("#AskDefineBtn").click(function(){
        $("#askPopup").stop().fadeToggle();
    });
    //goTop區
    $(window).scroll(function(){
        if($(window).scrollTop()>500){
            $("#goTop").stop().fadeIn();
        }else{
            $("#goTop").stop().fadeOut();
        };
    });
    $("#goTop").click(function(){
        $("html,body").animate({scrollTop:0},500);
    });
    //公告/更新區
    // $("ul.newsBoxs li div").eq(2).slideDown();
    // $("span.more div").eq(0).addClass("click");
    $("ul.newsBoxs>li>h3").click(function(){
        $(this).siblings().slideToggle();
        $(this).children().find("div.icon-before").toggleClass("click");

    });
   
});
