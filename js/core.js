// smoothscroll.js
!function(a,b,c){"use strict";function d(){function h(a,b){this.scrollLeft=a,this.scrollTop=b}function i(a){return.5*(1-Math.cos(Math.PI*a))}function j(a){if("object"!=typeof a||null===a||a.behavior===c||"auto"===a.behavior||"instant"===a.behavior)return!0;if("object"==typeof a&&"smooth"===a.behavior)return!1;throw new TypeError("behavior not valid")}function k(c){var d,e,f;do{c=c.parentNode,d=c===b.body,e=c.clientHeight<c.scrollHeight||c.clientWidth<c.scrollWidth,f="visible"===a.getComputedStyle(c,null).overflow}while(!d&&(!e||f));return d=e=f=null,c}function l(b){var d,f,h,c=g(),j=(c-b.startTime)/e;j=j>1?1:j,d=i(j),f=b.startX+(b.x-b.startX)*d,h=b.startY+(b.y-b.startY)*d,b.method.call(b.scrollable,f,h),f===b.x&&h===b.y||a.requestAnimationFrame(l.bind(a,b))}function m(c,d,e){var i,j,k,m,n=g();c===b.body?(i=a,j=a.scrollX||a.pageXOffset,k=a.scrollY||a.pageYOffset,m=f.scroll):(i=c,j=c.scrollLeft,k=c.scrollTop,m=h),l({scrollable:i,method:m,startTime:n,startX:j,startY:k,x:d,y:e})}if(!("scrollBehavior"in b.documentElement.style)){var d=a.HTMLElement||a.Element,e=468,f={scroll:a.scroll||a.scrollTo,scrollBy:a.scrollBy,elScroll:d.prototype.scroll||h,scrollIntoView:d.prototype.scrollIntoView},g=a.performance&&a.performance.now?a.performance.now.bind(a.performance):Date.now;a.scroll=a.scrollTo=function(){if(j(arguments[0]))return void f.scroll.call(a,arguments[0].left||arguments[0],arguments[0].top||arguments[1]);m.call(a,b.body,~~arguments[0].left,~~arguments[0].top)},a.scrollBy=function(){if(j(arguments[0]))return void f.scrollBy.call(a,arguments[0].left||arguments[0],arguments[0].top||arguments[1]);m.call(a,b.body,~~arguments[0].left+(a.scrollX||a.pageXOffset),~~arguments[0].top+(a.scrollY||a.pageYOffset))},d.prototype.scroll=d.prototype.scrollTo=function(){if(j(arguments[0]))return void f.elScroll.call(this,arguments[0].left||arguments[0],arguments[0].top||arguments[1]);m.call(this,this,arguments[0].left,arguments[0].top)},d.prototype.scrollBy=function(){var a=arguments[0];"object"==typeof a?this.scroll({left:a.left+this.scrollLeft,top:a.top+this.scrollTop,behavior:a.behavior}):this.scroll(this.scrollLeft+a,this.scrollTop+arguments[1])},d.prototype.scrollIntoView=function(){if(j(arguments[0]))return void f.scrollIntoView.call(this,arguments[0]||!0);var c=k(this),d=c.getBoundingClientRect(),e=this.getBoundingClientRect();c!==b.body?(m.call(this,c,c.scrollLeft+e.left-d.left,c.scrollTop+e.top-d.top),a.scrollBy({left:d.left,top:d.top,behavior:"smooth"})):a.scrollBy({left:e.left,top:e.top,behavior:"smooth"})}}}"object"==typeof exports?module.exports={polyfill:d}:d()}(window,document);
/*!
 * jQuery Mousewheel 3.1.13
 * Copyright 2015 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):"object"==typeof exports?module.exports=a:a(jQuery)}(function(a){function b(b){var g=b||window.event,h=i.call(arguments,1),j=0,l=0,m=0,n=0,o=0,p=0;if(b=a.event.fix(g),b.type="mousewheel","detail"in g&&(m=-1*g.detail),"wheelDelta"in g&&(m=g.wheelDelta),"wheelDeltaY"in g&&(m=g.wheelDeltaY),"wheelDeltaX"in g&&(l=-1*g.wheelDeltaX),"axis"in g&&g.axis===g.HORIZONTAL_AXIS&&(l=-1*m,m=0),j=0===m?l:m,"deltaY"in g&&(m=-1*g.deltaY,j=m),"deltaX"in g&&(l=g.deltaX,0===m&&(j=-1*l)),0!==m||0!==l){if(1===g.deltaMode){var q=a.data(this,"mousewheel-line-height");j*=q,m*=q,l*=q}else if(2===g.deltaMode){var r=a.data(this,"mousewheel-page-height");j*=r,m*=r,l*=r}if(n=Math.max(Math.abs(m),Math.abs(l)),(!f||f>n)&&(f=n,d(g,n)&&(f/=40)),d(g,n)&&(j/=40,l/=40,m/=40),j=Math[j>=1?"floor":"ceil"](j/f),l=Math[l>=1?"floor":"ceil"](l/f),m=Math[m>=1?"floor":"ceil"](m/f),k.settings.normalizeOffset&&this.getBoundingClientRect){var s=this.getBoundingClientRect();o=b.clientX-s.left,p=b.clientY-s.top}return b.deltaX=l,b.deltaY=m,b.deltaFactor=f,b.offsetX=o,b.offsetY=p,b.deltaMode=0,h.unshift(b,j,l,m),e&&clearTimeout(e),e=setTimeout(c,200),(a.event.dispatch||a.event.handle).apply(this,h)}}function c(){f=null}function d(a,b){return k.settings.adjustOldDeltas&&"mousewheel"===a.type&&b%120===0}var e,f,g=["wheel","mousewheel","DOMMouseScroll","MozMousePixelScroll"],h="onwheel"in document||document.documentMode>=9?["wheel"]:["mousewheel","DomMouseScroll","MozMousePixelScroll"],i=Array.prototype.slice;if(a.event.fixHooks)for(var j=g.length;j;)a.event.fixHooks[g[--j]]=a.event.mouseHooks;var k=a.event.special.mousewheel={version:"3.1.12",setup:function(){if(this.addEventListener)for(var c=h.length;c;)this.addEventListener(h[--c],b,!1);else this.onmousewheel=b;a.data(this,"mousewheel-line-height",k.getLineHeight(this)),a.data(this,"mousewheel-page-height",k.getPageHeight(this))},teardown:function(){if(this.removeEventListener)for(var c=h.length;c;)this.removeEventListener(h[--c],b,!1);else this.onmousewheel=null;a.removeData(this,"mousewheel-line-height"),a.removeData(this,"mousewheel-page-height")},getLineHeight:function(b){var c=a(b),d=c["offsetParent"in a.fn?"offsetParent":"parent"]();return d.length||(d=a("body")),parseInt(d.css("fontSize"),10)||parseInt(c.css("fontSize"),10)||16},getPageHeight:function(b){return a(b).height()},settings:{adjustOldDeltas:!0,normalizeOffset:!0}};a.fn.extend({mousewheel:function(a){return a?this.bind("mousewheel",a):this.trigger("mousewheel")},unmousewheel:function(a){return this.unbind("mousewheel",a)}})});

//手刻區
$(function(){
//  遊戲公告區
    $('#bulletinBox h3').click(function(){
        $(this).siblings().slideToggle();
        // $(this).children().find('div.icon-before').toggleClass('click');
        $(this).find('.more').toggleClass('click');
    });
//  BS神手來找碴_goTop區
	$(window).scroll(function(){
        if($(window).scrollTop()>100){
            $('#findBugTop').stop().fadeIn();
        }else{
            $('#findBugTop').stop().fadeOut();
        };
    });
    $('#findBugTop').click(function(){
        document.querySelector('#findBugH').scrollIntoView({behavior:'smooth'});
    });
});
