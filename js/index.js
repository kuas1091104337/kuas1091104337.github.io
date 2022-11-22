$(function(){
//  header
    function headerMenuClose(){
        $('#DAmenu').prop('checked',false)
    }
    $('.DAmenuBg').click(headerMenuClose);

//  DAscrollFunction
    var distance = 1000,//(px)
        speed = 300,//(ms)
        minSpeed = 300,//(ms)
        maxSpeed = 600,//(ms)
        rate = speed / distance,
        $DotAbgDiv = $('.DotAindexBg > div')
    $('#DAscrollUl > .DAscrollLi').click(function(){
        var $this = $(this)
        if($this.children('a').hasClass('select')) return
        $(window).off('scroll',DAscrollFunction);
        $('#DAmenu').prop('checked',false)
        $this.children('a').addClass('select').end().siblings('.DAscrollLi').find('a').removeClass('select')
        var goToThereOffsetTop = $DotAbgDiv.eq($this.index()).offset().top - $('#DAhead').height(),
            bodySrcollTime = Math.abs($(window).scrollTop() - goToThereOffsetTop) / rate;
        $('html, body').stop(true).delay(200).animate({
            scrollTop:goToThereOffsetTop
        },(bodySrcollTime < minSpeed ? minSpeed : bodySrcollTime > maxSpeed ? maxSpeed : bodySrcollTime),function(){
            $(window).on('scroll',DAscrollFunction);
        })
    });
    function DAscrollFunction(){
        var WST = $(window).scrollTop(),
            WH = $(window).height(),
            DAscrollNavSelect = 0;
        $DotAbgDiv.each(function(index) {
            if(WST > $DotAbgDiv.eq(index).offset().top + $DotAbgDiv.eq(index).outerHeight(true) / 2.5 - WH){
                DAscrollNavSelect = index
            }
        });
        $('#DAscrollUl > .DAscrollLi').eq(DAscrollNavSelect).children('a').addClass('select').end().siblings('.DAscrollLi').find('a').removeClass('select')
    }
    if($('body').hasClass('DotAindexBg')){
        $(window).on('scroll',DAscrollFunction).scroll();
    }
    
//  DAworks
    var $DAfigcaption = $('.DAworksBox figcaption')
    function getStyleObj(target,mouseevent){
        var obj = {},
            styleObj = {},
            top = Math.abs(0 - mouseevent.offsetY),
            bottom = Math.abs(target.innerHeight() - mouseevent.offsetY),
            left = Math.abs(0 - mouseevent.offsetX),
            right = Math.abs(target.innerWidth() - mouseevent.offsetX);
        obj[top] = 'top';
        obj[bottom] = 'bottom';
        obj[left] = 'left';
        obj[right] = 'right';
        switch(obj[Math.min(top,bottom,left,right)]){
            case 'top':
                styleObj.top = '-100%';
                styleObj.left = '0%';
                break;
            case 'bottom':
                styleObj.top = '100%';
                styleObj.left = '0%';
                break;
            case 'left':
                styleObj.top = '0%';
                styleObj.left = '-100%';
                break;
            case 'right':
                styleObj.top = '0%';
                styleObj.left = '100%';
                break;
        }
        console.log(styleObj);
        return styleObj
    }
    $('.DAworksBox figure').on('mouseenter',function(e){
        $(this).find('figcaption').stop().css(getStyleObj($(this),e)).animate({
          top:'0%',
          left:'0%'
        },300)
    }).on('mouseleave',function(e){
        $(this).find('figcaption').stop().animate(getStyleObj($(this),e),300)
    });

//  DA header & foot
    $.ajax({
        url:'common.html',
        dataType:'html'
    }).done(function(data) {
        $("#DAfoot").html($("<div>"+data+"</div>").find('#DAfoot').html());
        $("#DAH").html($("<div>"+data+"</div>").find('#DAH').html());
        var DAwebUrl = location.href,
            DAwebHref = DAwebUrl.substr(DAwebUrl.lastIndexOf("/") + 1)
        $('#DAN>ul a[href="'+DAwebHref+'"]').addClass('now')
        $('.DAmenuBg').click(headerMenuClose);
    });

//  DAedm
    function edmMenuClose(){
        $('#edmMenuCtrl').prop('checked',false)
    }
    $('.DAedmMenuBox > label').click(edmMenuClose);
    setTimeout(edmMenuClose,1200);
    
//  DAgifBanner
    $('#DAgifBanner > div').click(function(){
        $(this).hasClass('click') ? $(this).removeClass('click') : $(this).addClass('click')
    });

//  DArightMenu
    if($('body').hasClass('DotAotherBg')){
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
    }

//  DAvideo
    var DAplanNowNumber = 0,DAVfinalNowNumber = 0,DAVthirdNowNumber = 0,DAVsecondNowNumber = 0,DAVfirstNowNumber = 0,
        DAplanWillNumber,DAVfinalWillNumber,DAVthirdWillNumber,DAVsecondWillNumber,DAVfirstWillNumber,
        DAVfinalTimer,DAVthirdTimer,DAVsecondTimer,DAVfirstTimer,
        DAplanMaxNumber = $('.DAplanImg > img').length,
        DAVfinalMaxNumber = $('#DAvideoFinalImg > img').length,
        DAVthirdMaxNumber = $('#DAvideoThirdImg > img').length,
        DAVsecondMaxNumber = $('#DAvideoSecondImg > img').length,
        DAVfirstMaxNumber = $('#DAvideoFirstImg > img').length,
        timerTime = 250;

    // function DAplanDo(){
    //     DAplanWillNumber = (DAplanWillNumber + DAplanMaxNumber) % DAplanMaxNumber;
    //     $('.DAplanImg > img').eq(DAplanNowNumber).hide().end().eq(DAplanWillNumber).show()
    //     DAplanNowNumber = DAplanWillNumber
    // }
    // $('.DAplanCtrl > .next').click(function(){
    //     DAplanWillNumber = DAplanNowNumber + 1
    //     DAplanDo()
    // });
    // $('.DAplanCtrl > .prev').click(function(){
    //     DAplanWillNumber = DAplanNowNumber - 1
    //     DAplanDo()
    // });
    // function DAvideoFinalNext(){
    //     DAVfinalWillNumber = DAVfinalNowNumber + 1
    //     DAvideoFinalGo()
    // }
    // function DAvideoFinalPrev(){
    //     DAVfinalWillNumber = DAVfinalNowNumber - 1
    //     DAvideoFinalGo()
    // }
    // function DAvideoFinalGo(){
    //     DAVfinalWillNumber = (DAVfinalWillNumber + DAVfinalMaxNumber) % DAVfinalMaxNumber;
    //     $('#DAvideoFinalImg > img').eq(DAVfinalNowNumber).hide().end().eq(DAVfinalWillNumber).show()
    //     DAVfinalNowNumber = DAVfinalWillNumber
    // }
    // function DAvideoThirdNext(){
    //     DAVthirdWillNumber = DAVthirdNowNumber + 1
    //     DAvideoThirdGo()
    // }
    // function DAvideoThirdPrev(){
    //     DAVthirdWillNumber = DAVthirdNowNumber - 1
    //     DAvideoThirdGo()
    // }
    // function DAvideoThirdGo(){
    //     DAVthirdWillNumber = (DAVthirdWillNumber + DAVthirdMaxNumber) % DAVthirdMaxNumber;
    //     $('#DAvideoThirdImg > img').eq(DAVthirdNowNumber).hide().end().eq(DAVthirdWillNumber).show()
    //     DAVthirdNowNumber = DAVthirdWillNumber
    // }
    // function DAvideoSecondNext(){
    //     DAVsecondWillNumber = DAVsecondNowNumber + 1
    //     DAvideoSecondGo()
    // }
    // function DAvideoSecondPrev(){
    //     DAVsecondWillNumber = DAVsecondNowNumber - 1
    //     DAvideoSecondGo()
    // }
    // function DAvideoSecondGo(){
    //     DAVsecondWillNumber = (DAVsecondWillNumber + DAVsecondMaxNumber) % DAVsecondMaxNumber;
    //     $('#DAvideoSecondImg > img').eq(DAVsecondNowNumber).hide().end().eq(DAVsecondWillNumber).show()
    //     DAVsecondNowNumber = DAVsecondWillNumber
    // }
    // function DAvideoFirstNext(){
    //     DAVfirstWillNumber = DAVfirstNowNumber + 1
    //     DAvideoFirstGo()
    // }
    // function DAvideoFirstPrev(){
    //     DAVfirstWillNumber = DAVfirstNowNumber - 1
    //     DAvideoFirstGo()
    // }
    // function DAvideoFirstGo(){
    //     DAVfirstWillNumber = (DAVfirstWillNumber + DAVfirstMaxNumber) % DAVfirstMaxNumber;
    //     $('#DAvideoFirstImg > img').eq(DAVfirstNowNumber).hide().end().eq(DAVfirstWillNumber).show()
    //     DAVfirstNowNumber = DAVfirstWillNumber
    // }
    // $('.DAvideoBox > .mediaCtrl').click(function(){
    //     $(this).hide().prev('div').addClass('play')
    //     switch($(this).parent().attr('id')) {
    //         case 'DAvideoFinal' :
    //             DAvideoFinalTimer = setInterval(DAvideoFinalNext,timerTime);
    //             break;
    //         case 'DAvideoThird' :
    //             DAvideoThirdTimer = setInterval(DAvideoThirdNext,timerTime);
    //             break;
    //         case 'DAvideoSecond' :
    //             DAvideoSecondTimer = setInterval(DAvideoSecondNext,timerTime);
    //             break;
    //         default :
    //             DAvideoFirstTimer = setInterval(DAvideoFirstNext,timerTime);
    //     }
    // });

    // var DAvideoFinalTimer = 0,
    //     DAvideoFinalNext = 1,
    //     DAvideoFinalPrev = 2,
    //     DAvideoThirdTimer = 3,
    //     DAvideoThirdNext = 4,
    //     DAvideoThirdPrev = 5,
    //     DAvideoSecondTimer = 6,
    //     DAvideoSecondNext = 7,
    //     DAvideoSecondPrev = 8,
    //     DAvideoFirstTimer = 9,
    //     DAvideoFirstNext = 10,
    //     DAvideoFirstPrev = 11,
    //     var obj = {}

    //     obj['DAvideoFinalTimer'] = DAvideoFinalTimer
    //     obj['DAvideoFinalTimer'] = DAvideoFinalTimer
    //     obj['DAvideoFinalNext'] = DAvideoFinalNext
    //     obj['DAvideoFinalPrev'] = DAvideoFinalPrev
    //     obj['DAvideoThirdTimer'] = DAvideoThirdTimer
    //     obj['DAvideoThirdNext'] = DAvideoThirdNext
    //     obj['DAvideoThirdPrev'] = DAvideoThirdPrev
    //     obj['DAvideoSecondTimer'] = DAvideoSecondTimer
    //     obj['DAvideoSecondNext'] = DAvideoSecondNext
    //     obj['DAvideoSecondPrev'] = DAvideoSecondPrev
    //     obj['DAvideoFirstTimer'] = DAvideoFirstTimer
    //     obj['DAvideoFirstNext'] = DAvideoFirstNext
    //     obj['DAvideoFirstPrev'] = DAvideoFirstPrev

    //     // obj[DAvideoFinalTimer] = 'DAvideoFinalTimer'
    //     // obj[DAvideoFinalTimer] = 'DAvideoFinalTimer'
    //     // obj[DAvideoFinalNext] = 'DAvideoFinalNext'
    //     // obj[DAvideoFinalPrev] = 'DAvideoFinalPrev'
    //     // obj[DAvideoThirdTimer] = 'DAvideoThirdTimer'
    //     // obj[DAvideoThirdNext] = 'DAvideoThirdNext'
    //     // obj[DAvideoThirdPrev] = 'DAvideoThirdPrev'
    //     // obj[DAvideoSecondTimer] = 'DAvideoSecondTimer'
    //     // obj[DAvideoSecondNext] = 'DAvideoSecondNext'
    //     // obj[DAvideoSecondPrev] = 'DAvideoSecondPrev'
    //     // obj[DAvideoFirstTimer] = 'DAvideoFirstTimer'
    //     // obj[DAvideoFirstNext] = 'DAvideoFirstNext'
    //     // obj[DAvideoFirstPrev] = 'DAvideoFirstPrev'

    // $('.DAvideoCtrl > .switch').click(function(){
    //     var $videoCtrl = $(this).parent('div'),
    //         videoId = $(this).parent('div').parent('div').attr('id'),//

    //         timerName = obj[videoId + 'Timer'],
    //         DAvideoNext = obj[videoId + 'Next'],
    //         DAvideoPrev = obj[videoId + 'Prev']
    //         console.log(videoId);//DAvideoFinal
    //         console.log(timerName);
    //         console.log(DAvideoNext);
    //         console.log(DAvideoPrev);

    //     if($videoCtrl.hasClass('play')){
    //         $videoCtrl.removeClass('play').addClass('pause')

    //         clearInterval(timerName)
    //         $(this).siblings('.next').on('click', DAvideoNext);
    //         $(this).siblings('.prev').on('click', DAvideoPrev);

    //         // switch(videoId) {
    //         //     case 'DAvideoFinal' :
    //         //         clearInterval(DAvideoFinalTimer)
    //         //         $(this).siblings('.next').on('click', DAvideoFinalNext);
    //         //         $(this).siblings('.prev').on('click', DAvideoFinalPrev);
    //         //         break;
    //         //     case 'DAvideoThird' :
    //         //         clearInterval(DAvideoThirdTimer)
    //         //         $(this).siblings('.next').on('click', DAvideoThirdNext);
    //         //         $(this).siblings('.prev').on('click', DAvideoThirdPrev);
    //         //         break;
    //         //     case 'DAvideoSecond' :
    //         //         clearInterval(DAvideoSecondTimer)
    //         //         $(this).siblings('.next').on('click', DAvideoSecondNext);
    //         //         $(this).siblings('.prev').on('click', DAvideoSecondPrev);
    //         //         break;
    //         //     default :
    //         //         clearInterval(DAvideoFirstTimer)
    //         //         $(this).siblings('.next').on('click', DAvideoFirstNext);
    //         //         $(this).siblings('.prev').on('click', DAvideoFirstPrev);
    //         // }

    //     }else{
    //         $videoCtrl.removeClass('pause').addClass('play')

    //         timerName = setInterval(DAvideoNext,timerTime);
    //         $(this).siblings('.next').off('click', DAvideoNext);
    //         $(this).siblings('.prev').off('click', DAvideoPrev);

    //         // switch(videoId) {
    //         //     case 'DAvideoFinal' :
    //         //         DAvideoFinalTimer = setInterval(DAvideoFinalNext,timerTime);
    //         //         $(this).siblings('.next').off('click', DAvideoFinalNext);
    //         //         $(this).siblings('.prev').off('click', DAvideoFinalPrev);
    //         //         break;
    //         //     case 'DAvideoThird' :
    //         //         DAvideoThirdTimer = setInterval(DAvideoThirdNext,timerTime);
    //         //         $(this).siblings('.next').off('click', DAvideoThirdNext);
    //         //         $(this).siblings('.prev').off('click', DAvideoThirdPrev);
    //         //         break;
    //         //     case 'DAvideoSecond' :
    //         //         DAvideoSecondTimer = setInterval(DAvideoSecondNext,timerTime);
    //         //         $(this).siblings('.next').off('click', DAvideoSecondNext);
    //         //         $(this).siblings('.prev').off('click', DAvideoSecondPrev);
    //         //         break;
    //         //     default :
    //         //         DAvideoFirstTimer = setInterval(DAvideoFirstNext,timerTime);
    //         //         $(this).siblings('.next').off('click', DAvideoFirstNext);
    //         //         $(this).siblings('.prev').off('click', DAvideoFirstPrev);
    //         // }
    //     };
    // });

//  DAbanner
    var $window = $(window),
        imgNumberShow,
        $DAcolumnItem = $('.DAcolumn > .DAitem'),
        $DAcolumnItemMaxNumber = $DAcolumnItem.length,
        $windowWidth = $(window).innerWidth(),
        $windowHeight = $(window).innerHeight()
    // if($('body').hasClass('DAbanner')){
    if($('body').attr('id') == 'DAbanner'){
        $window.on('resize', function(){
            var BNgutter = 5,
                DAcolumnMaxWidth = 300,
                DAcolumnAmount = Math.ceil($window.width() / DAcolumnMaxWidth), // 3
                DAcolumnWidth = $window.width() / DAcolumnAmount, // 300
                DAoffsetY_Array = [];
            $('.DAitem').each(function(){
                var HWratio = $(this).data('height') / $(this).data('width'),
                    //i是計算第一行有那幾個，之後就是DAcolumnAmount最短的那個
                    i = DAoffsetY_Array.length < DAcolumnAmount ? DAoffsetY_Array.length : DAoffsetY_Array.indexOf(Math.min(...DAoffsetY_Array)),
                    // i = DAoffsetY_Array.length < DAcolumnAmount ? DAoffsetY_Array.length : DAoffsetY_Array.indexOf(Math.min.apply(null, DAoffsetY_Array)),
                    // i = DAoffsetY_Array.length < DAcolumnAmount ? DAoffsetY_Array.length : DAoffsetY_Array.indexOf(Math.min.apply(Math, DAoffsetY_Array)),
                    DAitemHeight = (DAcolumnWidth - BNgutter * 2) * HWratio;//算出每個.item的實際高度(px)
                console.log(i);
                console.log(Math.min.apply(Math, DAoffsetY_Array));
                if(DAoffsetY_Array.length == i) DAoffsetY_Array.push(BNgutter)//給DAoffsetY_Array[]一個5的值
                console.log(DAoffsetY_Array);
                $(this).css({
                    width:DAcolumnWidth - BNgutter * 2,
                    height:DAitemHeight,
                    top:DAoffsetY_Array[i],
                    left:DAcolumnWidth * i + BNgutter
                });
                DAoffsetY_Array[i] += DAitemHeight + BNgutter * 2//因為if(DAoffsetY_Array.length == i)已經push一個5的值了，
                console.log(DAoffsetY_Array[i]);
            });
        }).resize();
    }
    $DAcolumnItem.dblclick(function(){
    // $DAcolumnItem.click(function(){
        imgNumberShow = $(this).index()
        var imgSrc = $(this).find('img').attr('src'),
            imgWidth = $(this).data('width'),
            imgHeight = $(this).data('height');
        if(imgHeight > $windowHeight){
            $('#BNshowBox > img').addClass('overHeight')
        }else if(imgWidth > $windowWidth){
            $('#BNshowBox > img').addClass('overWidth')
        }else{
            $('#BNshowBox > img').removeClass()
        };
        $('#BNshowBox').show().find('img').attr({
            src:imgSrc,
            width:imgWidth,
            height:imgHeight
        });
    })
    $('#BNshowBox').click(function(){
        $(this).hide().find('img').attr({src:' ',width:' ',height:' '});
    })
    $('#BNshowBox > #BNshowNext').click(function(e){
        imgNumberShow++
        showBanner()
        e.stopPropagation()
    })
    $('#BNshowBox > #BNshowPrev').click(function(e){
        imgNumberShow--
        showBanner()
        e.stopPropagation()
    })
    $('#BNshowBox > img').click(function(e){e.stopPropagation()})
    function showBanner(){
        imgNumberShow = (imgNumberShow + $DAcolumnItemMaxNumber) % $DAcolumnItemMaxNumber;
        var ImgSrc = $DAcolumnItem.eq(imgNumberShow).children('img').attr('src'),
            ImgWidth = $DAcolumnItem.eq(imgNumberShow).data('width'),
            ImgHeight = $DAcolumnItem.eq(imgNumberShow).data('height');
        if(ImgHeight > $windowHeight){
            $('#BNshowBox > img').removeClass().addClass('overHeight')
        }else if(ImgWidth > $windowWidth){
            $('#BNshowBox > img').removeClass().addClass('overWidth')
        }else{
            $('#BNshowBox > img').removeClass()
        };
        $('#BNshowBox > img').attr({
            src:ImgSrc, width:ImgWidth, height:ImgHeight
        });
    }
    
});
