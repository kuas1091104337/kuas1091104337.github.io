$(function(){
//loading
    // cookie開始位置和結束位置
    // var cs = document.cookie.indexOf('first=') + 1; 
    // console.log(cs);//0 ,1
    // var cn = document.cookie.indexOf(';',cs); 
    // console.log(cn);//-1 ,-1
    // if(cn == -1){ //沒有找到分好
    //     cn = document.cookie.length; 
    //     console.log('if的',cn);//0 ,7
    // } 
    // var cookie = document.cookie.substring(cs,cn) ; //截取這段COOKIE 
    // console.log(cookie);//空值 ,irst=1
    // if(cookie == ''){//為空為第一次訪問
    //     window.onload = function(){
    //         $("#loading h2, #loading h3, #loading p, #Moms_Kalbi_logo, .red_line, .blue_line").addClass("load");
    //         $("#loading").delay(2000).fadeOut();
    //     }
    //     document.cookie = 'first=1' ; //寫入COOKIE 
    // }else{ 
    //     document.getElementById("loading").style.display="none";
    // }   

    // var MKcookieValue = document.cookie.; 
    // if(MKcookieValue!=='WelcomeTo_MomsKalbi'){
    //     document.cookie. = '';
    //     window.onload = function(){
    //         $("#loading h2, #loading h3, #loading p, #Moms_Kalbi_logo, .red_line, .blue_line").addClass("load");
    //         $("#loading").delay(2000).fadeOut();
    //     }
    //     document.cookie. = 'WelcomeTo_MomsKalbi'; 
    // }else{ 
    //     document.getElementById("loading").style.display="none";
    // }
    // console.log(document.cookie.);

var MKstorageValue='WelcomeTo_MomsKalbi';

    var MKstorageValue = sessionStorage.MomsKalbi; 
    if(!MKstorageValue){
    // if(MKstorageValue!=='WelcomeTo_MomsKalbi'){
        document.getElementById("loading").style.display="block";
        window.onload = function(){
            document.getElementById('loading').className='load';
            setTimeout('document.getElementById("loading").style.display="none";',2000);
        }
        sessionStorage.MomsKalbi = 'WelcomeTo_MomsKalbi'; 
    }

//navbar JQ    
    $("header").load("common.html header>hgroup", function(){
        $("li.menu").click(function(){
            $(this).stop().toggleClass("click");
            $("ul.second").stop().slideToggle();
            // $("a.language").click(function(){
            //     $(this).stop().toggleClass("select");
            //     $(this).next().stop().slideToggle();
            // });
        });
        $(window).on("resize",function(){
            if($(window).outerWidth(true)>982){
                $("ul.second").attr("style","");
                $("a.language").removeClass("select");
                $("li.menu").removeClass("click");
            }
        });
        var MKurl = location.href, MKhref = location.href.substr(location.href.lastIndexOf("/")+1);
        $("nav a[href='" + MKhref + "']").addClass("select");
    });
    $("footer").load("common.html footer>p");

    $("#lightBoxMKmemberLogin").load("common.html #lightBoxMKmemberLogin>div");
    $("#lightBoxMKmemberInformation").load("common.html #lightBoxMKmemberInformation>div");
      
//預約reserve區
    $(".reserveInfoBtn").click(function(){
        $(this).parent().toggleClass("click")     
    });
//  goTop區
	$(window).scroll(function(){
        if($(window).scrollTop()>100){
            $("#goTop").stop().fadeIn();
        }else{
            $("#goTop").stop().fadeOut();
        };
    });
    $("#goTop").click(function(){
        $("html,body").animate({scrollTop:0},600);
        // $("html,body").velocity("scrollTop:0", 500);
    });
//  signIn區    
    // if(document.querySelector("#signIn a")){
    //     document.querySelector("#signIn a").onclick=function(){
    //         if(this.className == "signIn"){
    //             this.className = "signOut";
    //         }else{
    //             this.className = "signIn";
    //         };      
    //     };
    // };

    $("#signIn").click(function(){
        var $this = $(this),
            $signIn_a = $this.children("a");

        $this.addClass("click");

        setTimeout(MKmemberlightBoxShow, 400);
        function MKmemberlightBoxShow(){
            if($signIn_a.hasClass("signIn")){
                $("#lightBoxMKmemberLogin").show();
            }else if($signIn_a.hasClass("signOut")){
                $("#lightBoxMKmemberInformation").show();
            };   
        }
        // if($signIn_a.hasClass("signOut")){
        //     $("#lightBoxMKmemberLogin").delay(5000).show(300);
        // }else if($signIn_a.hasClass("signIn")){
        //     $("#lightBoxMKmemberInformation").delay(5000).show(300);
        // };  
        
        $(".goToIndex").click(function(){
            $("#signIn").removeClass("click").children("a").toggleClass("signIn signOut");
            $(this).parents("#lightBoxMKmemberInformation, #lightBoxMKmemberLogin").hide();
        })
    });

//  註冊登入頁面
    $(".inputBox > input").click(function(){
        $(this).addClass("click");    
    });
    $("#residence > select").click(function(){
        $(this).parent().addClass("click");
    });

});
