$(function(){
  // $(window).on("resize",titeFooter);
  // function titeFooter(){
  //   if($('#tite2014Box').innerHeight()<=480){
  //     $('#titeFooter').css({display:"none"});
  //   }else{
  //     $('#titeFooter').css({display:"block"});
  //   }
  // }
  // titeFooter();
  $('.titeNavCtrl0, #titeIndexNav label, .bottomNavBox label').click(function(){
    var titeHashNumber = $(this).attr('class').substr(-1);
    location.hash = titeHashNumber;
  });
  $(window).on('hashchange', function(){
    $('#tite2014Box > input').eq(location.hash.substr(-1)).click();
  });
  $(window).triggerHandler('hashchange')
  $.ajax({
      url:'json/titeMap.json',
      dataType:'json'
  }).done(function(data){
      var titeMapData = '';
      for (var i = 0, max = data.length; i < max; i++) {
        titeMapData += '<div class="titeTableTr"><div><h5>'+data[i].titeMapTitle+'</h5><img src="'+data[i].titeMapImg+'" alt="'+data[i].titeMapTitle+'"></div><div><p>'+data[i].titeMapContent+'</p></div></div>';
      }
      $('.titeMapTable').html(titeMapData);
  })
  $.ajax({
      url:'json/titeNews.json',
      dataType:'json'
  }).done(function(data){
      var titeNewsData = '';
      for (var i = 0, max = data.length; i < max; i++) {
        titeNewsData += '<li><img src="'+data[i].titeNewsImg+'" alt="'+data[i].titeNewsTitle+'" width="100%"><h4>'+data[i].titeNewsTitle+'<span>'+data[i].titeNewsTime+'</span></h4><p>'+data[i].titeNewsContent+'</p></li>';
      }
      $('.titeNews > ul').html(titeNewsData);
  })
  $.ajax({
      url:'json/titeLove.json',
      dataType:'json'
  }).done(function(data){
      var titeLoveData = '';
      for (var i = 0, max = data.length; i < max; i++) {
        titeLoveData += '<li><p>'+data[i].titeLoveFirm+'</p><img src="'+data[i].titeLoveImg+'" alt="'+data[i].titeLoveGoods+'" width="100%"><h4>'+data[i].titeLoveGoods+'</h4><strong>'+data[i].titeLoveCoin+'</strong></li>';
      }
      $('.titeLove > ul').html(titeLoveData);
  })
});