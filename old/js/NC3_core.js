// smoothscroll.js
!function(a,b,c){"use strict";function d(){function h(a,b){this.scrollLeft=a,this.scrollTop=b}function i(a){return.5*(1-Math.cos(Math.PI*a))}function j(a){if("object"!=typeof a||null===a||a.behavior===c||"auto"===a.behavior||"instant"===a.behavior)return!0;if("object"==typeof a&&"smooth"===a.behavior)return!1;throw new TypeError("behavior not valid")}function k(c){var d,e,f;do{c=c.parentNode,d=c===b.body,e=c.clientHeight<c.scrollHeight||c.clientWidth<c.scrollWidth,f="visible"===a.getComputedStyle(c,null).overflow}while(!d&&(!e||f));return d=e=f=null,c}function l(b){var d,f,h,c=g(),j=(c-b.startTime)/e;j=j>1?1:j,d=i(j),f=b.startX+(b.x-b.startX)*d,h=b.startY+(b.y-b.startY)*d,b.method.call(b.scrollable,f,h),f===b.x&&h===b.y||a.requestAnimationFrame(l.bind(a,b))}function m(c,d,e){var i,j,k,m,n=g();c===b.body?(i=a,j=a.scrollX||a.pageXOffset,k=a.scrollY||a.pageYOffset,m=f.scroll):(i=c,j=c.scrollLeft,k=c.scrollTop,m=h),l({scrollable:i,method:m,startTime:n,startX:j,startY:k,x:d,y:e})}if(!("scrollBehavior"in b.documentElement.style)){var d=a.HTMLElement||a.Element,e=468,f={scroll:a.scroll||a.scrollTo,scrollBy:a.scrollBy,elScroll:d.prototype.scroll||h,scrollIntoView:d.prototype.scrollIntoView},g=a.performance&&a.performance.now?a.performance.now.bind(a.performance):Date.now;a.scroll=a.scrollTo=function(){if(j(arguments[0]))return void f.scroll.call(a,arguments[0].left||arguments[0],arguments[0].top||arguments[1]);m.call(a,b.body,~~arguments[0].left,~~arguments[0].top)},a.scrollBy=function(){if(j(arguments[0]))return void f.scrollBy.call(a,arguments[0].left||arguments[0],arguments[0].top||arguments[1]);m.call(a,b.body,~~arguments[0].left+(a.scrollX||a.pageXOffset),~~arguments[0].top+(a.scrollY||a.pageYOffset))},d.prototype.scroll=d.prototype.scrollTo=function(){if(j(arguments[0]))return void f.elScroll.call(this,arguments[0].left||arguments[0],arguments[0].top||arguments[1]);m.call(this,this,arguments[0].left,arguments[0].top)},d.prototype.scrollBy=function(){var a=arguments[0];"object"==typeof a?this.scroll({left:a.left+this.scrollLeft,top:a.top+this.scrollTop,behavior:a.behavior}):this.scroll(this.scrollLeft+a,this.scrollTop+arguments[1])},d.prototype.scrollIntoView=function(){if(j(arguments[0]))return void f.scrollIntoView.call(this,arguments[0]||!0);var c=k(this),d=c.getBoundingClientRect(),e=this.getBoundingClientRect();c!==b.body?(m.call(this,c,c.scrollLeft+e.left-d.left,c.scrollTop+e.top-d.top),a.scrollBy({left:d.left,top:d.top,behavior:"smooth"})):a.scrollBy({left:e.left,top:e.top,behavior:"smooth"})}}}"object"==typeof exports?module.exports={polyfill:d}:d()}(window,document);

//手刻區
$(function(){
//  header、footer、會員登入動態載入區
    $.ajax({
        url:'NC3common.html',
        dataType:'html'
    }).done(function(data) {
        $('#nc3H').html($("<div>"+data+"</div>").find('#nc3H').html());
        $('#nc3HsignIn').html($("<div>"+data+"</div>").find('#nc3HsignIn').html());
        $('#nc3F').html($("<div>"+data+"</div>").find('#nc3F').html());
        $('#nc3memberLogIn').html($("<div>"+data+"</div>").find('#nc3memberLogIn').html());
    })  
//  banner區 ( IPBN = inputBanner )
    $.ajax({
        url:'json/nc3BannerData.json',
        dataType:'json'
    }).done(function(data){
        var IPBNinput = '',
            IPBNslideBox = '',
            IPBNpage = '';
        for(var i = 0, max = data.length; i < max; i++){
            IPBNinput += '<input type="radio" name="IPBN" id="IPBNctrl_'+i+'"';
            if(i==0){IPBNinput += ' checked="true"';}
            IPBNinput += '>';
            IPBNpage += '<label for="IPBNctrl_'+i+'"></label>';
            IPBNslideBox += '<li id="IPBN_'+i+'"><a href="'+data[i].nc3BannerHref+'" target="_blank"><h2>'+data[i].nc3BannerTitle+'</h2><p>'+data[i].nc3BannerContent1+'</p><p>'+data[i].nc3BannerContent2+'</p></a><a href="mailto:service@net-chinese.com.tw">聯繫我們</a></li>';
        }
        $('#IPBNbox').prepend(IPBNinput);
        $('.IPBNslideBox').html(IPBNslideBox);
        $('.IPBNpage').html(IPBNpage);

        var IPBNtoNextTime = 5500,
            IPBNnowNumber = 0,
            IPBNmaxNumber = $('#IPBNbox > input').length,
            IPBNtimer;
        function IPBNprev(){
            IPBNnowNumber--;
            IPBNchangeHandle();
        }
        function IPBNnext(){
            IPBNnowNumber++;
            IPBNchangeHandle();
        }
        function IPBNchangeHandle(){
            $('.IPBNnext, .IPBNprev').off('click');
            IPBNnowNumber = (IPBNnowNumber + IPBNmaxNumber) % IPBNmaxNumber;
            $('#IPBNctrl_'+IPBNnowNumber).click();
            $('.IPBNslideBox').one('transitionend',function(){
                $('.IPBNprev').on('click',IPBNprev);
                $('.IPBNnext').on('click',IPBNnext);
            })
        }
        function IPBNauto(){
            IPBNtimer = setInterval(IPBNnext,IPBNtoNextTime);
        }
        $('.IPBNpage > label').click(function(){
            IPBNnowNumber = $(this).index();
        });
        $('#IPBNbox').on('mouseenter',function(){
            clearInterval(IPBNtimer);
        }).on('mouseleave',function(){
            IPBNauto();
        });
        $('.IPBNprev').on('click',IPBNprev);
        $('.IPBNnext').on('click',IPBNnext);
        IPBNauto();   
    });

//  域名目錄表區
    $.ajax({
        url:'json/domainData.json',
        dataType:'json'
    }).done(function(data){
        var domainInput = "",
            domainLabel = "",
            domainContent = "";
        for(var i = 0, Imax = data.length; i < Imax; i++){
        //Input
            domainInput += '<input type="radio" name="domainsList" id="nc3Zone' + (i+1) + 'Ctrl"';
            if(i==0){domainInput += ' checked="yes"';}
            domainInput += '>';
        //Label
            domainLabel += '<label for="nc3Zone' + (i+1) + 'Ctrl">' + data[i].domainName + '</label>';
        //Content
            domainContent += '<div id="nc3Zone' + (i+1) + 'Content">';
            for(var j = 0, Jmax = data[i].zone.length; j < Jmax; j++){
                domainContent += '<input type="radio" name="nc3Zone' + (i+1) + '" id="nc3Zone' + (i+1) + 'Type' + (j+1) + '"';
                if(j==0){domainContent += ' checked="yes"';}
                domainContent += '>';
            }
            domainContent += '<div id="nc3Zone' + (i+1) + 'Type">';
            for(var j = 0, Jmax = data[i].zone.length; j < Jmax; j++){
                domainContent += '<label for="nc3Zone' + (i+1) + 'Type' + (j+1) + '">' + data[i].zone[j].domainTypeName + '</label>';
            }
            domainContent += '</div><div id="nc3Zone' + (i+1) + 'TypeContent">';
            for(var j = 0, Jmax = data[i].zone.length; j < Jmax; j++){
                domainContent += '<div id="nc3Zone' + (i+1) + 'Type' + (j+1) + 'Content"><ul>';
                    for(var k = 0, Kmax = data[i].zone[j].domainTypeContent.length; k < Kmax; k++){
                        domainContent += '<li class="nc3suffixLabel">';
                        domainContent += '<input type="checkbox" id="' + data[i].zone[j].domainTypeId + '_' + data[i].zone[j].domainTypeContent[k].suffixIdFor + '" value="' + data[i].zone[j].domainTypeContent[k].suffixIdFor + '">';
                        domainContent += '<label for="' + data[i].zone[j].domainTypeId + '_' + data[i].zone[j].domainTypeContent[k].suffixIdFor + '">' + data[i].zone[j].domainTypeContent[k].suffixIdFor + '</label>';
                        if(data[i].zone[j].domainTypeContent[k].suffixQuMessage!==""){domainContent += '<ins class="nc3quMessage" cite="' + data[i].zone[j].domainTypeContent[k].suffixQuMessage + '"></ins>'};
                        domainContent += '</li>';
                    }                        
                domainContent += '</ul></div>';
            }
            domainContent += '</div></div>';
        }
        $("#nc3List").prepend(domainInput);
        $("#nc3ListZone").html(domainLabel);
        $('#nc3ListZoneContent').html(domainContent);
    });    
//  nc3Active
    $.ajax({
        url:'json/nc3ActiveData.json',
        dataType:'json'
    }).done(function(data){
        var nc3Active = '';
        for(var i = 0, max = data.length; i < max; i++){
            nc3Active += '<figure><a href="'+data[i].nc3ActiveHref+'" target="_blank"><figcaption>'+data[i].nc3ActiveTitle+'</figcaption><p>'+data[i].nc3ActiveContent+'</p><img src="images/NC3/'+data[i].nc3ActiveImg+'" width="215" height="165"/></a></figure>';
        }
        $('.nc3Active').html(nc3Active);
        console.log(nc3Active);
    });
//  goTop區
	$(window).scroll(function(){
        if($(window).scrollTop()>200){
            $("#nc3GoTop").stop().fadeIn();
        }else{
            $("#nc3GoTop").stop().fadeOut();
        };
    });
    $('#nc3GoTop').click(function(){
        document.querySelector('header').scrollIntoView({behavior:'smooth'});
    });
});

