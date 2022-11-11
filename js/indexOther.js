$(function(){
    $.ajax({
        url:'common.html', 
        dataType:'html'
    }).done(function(data) {
        $("#DArightMenu").html($("<div>"+data+"</div>").find('#DArightMenu').html());
    })
    $(document).on('contextmenu', function(e){
        e.preventDefault();
        var menuOffsetTop = e.clientY,
            menuOffsetLeft = e.clientX,
            $DAmenu = $('#DArightMenu'),
            $window = $(window),
            DAmenuWidth = $DAmenu.outerWidth(true),
            DAmenuHeight = $DAmenu.outerHeight(true);
        if(menuOffsetTop + DAmenuHeight > $window.height()) menuOffsetTop -= DAmenuHeight
        if(menuOffsetLeft + DAmenuWidth > $window.width()) menuOffsetLeft -= DAmenuWidth
        $DAmenu.css({top:menuOffsetTop,left:menuOffsetLeft}).show()
        $(document).on('click', function(){
            $DAmenu.hide()
        });
    });

    var whatUserAgent = navigator.userAgent;
    if(!whatUserAgent.match(/(iPhone|iPod|Android)/)){
        alert("按右鍵返回 Dot A 首頁")         
    }
});
