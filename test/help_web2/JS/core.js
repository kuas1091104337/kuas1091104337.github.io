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
    //虛寶兌換區
    $("#numberSendBtn").click(function(){
        $("#activeErrorPopup").stop().fadeToggle();
    });
    $("#ErrorBtn").click(function(){
        $("#activeErrorPopup").stop().fadeToggle();
    });
    // $("#numberSendBtn").click(function(){
    //     $("#activeSuccessPopup").stop().fadeToggle();
    // });
    // $("#SuccessBtn").click(function(){
    //     $("activeSuccessPopup").stop().fadeToggle();
    // });
});
