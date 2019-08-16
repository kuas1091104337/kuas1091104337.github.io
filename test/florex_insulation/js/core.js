window.onload=function(){
	var bannerGo=setInterval(bannerNext,3000),
		bannerImg = document.getElementById("bannerImg"),
		bannerBox = document.getElementById("bannerBox"),
		bannerMaxNumber = document.querySelectorAll("#bannerMenu li").length,
		bannerNumber = 1;

	function forBannerDotGo(){
		for (var i = 1; i <= bannerMaxNumber; i++) {
			document.getElementById("banner_"+i).className="";
		}		
	}
	function forBnow(){
		document.getElementById("banner_"+bannerNumber).className="now";		
	}
	function bannerIMG(){
		bannerImg.src="images/banner"+bannerNumber+".jpg";		
	}

	bannerIMG();

	for (var i = 1; i <= bannerMaxNumber; i++) {
		document.getElementById("banner_"+i).onclick=bannerShow;
	}
	function bannerShow(){
		bannerNumber = this.id.substr(this.id.indexOf("_")+1);
		bannerIMG();
		forBannerDotGo();
		this.className="now";
	}

	document.getElementById("bannerArowNext").onclick=bannerNext;
	function bannerNext(){
		if(bannerNumber<bannerMaxNumber){
			bannerNumber++;
		}else{
			bannerNumber=1;
		};
		bannerIMG();
		forBannerDotGo();
		forBnow();
	}

	document.getElementById("bannerArowPrev").onclick=function(){
		if(bannerNumber>1){
			bannerNumber--;
		}else{
			bannerNumber=bannerMaxNumber;
		};
		bannerIMG();
		forBannerDotGo();
		forBnow();
	}
	bannerBox.onmouseover=function(){
		clearInterval(bannerGo);
	}
	bannerBox.onmouseout=function(){
		clearInterval(bannerGo);
		bannerGo=setInterval(bannerNext,3000);
	}
}

