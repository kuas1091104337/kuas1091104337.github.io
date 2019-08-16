// var defaultLanguage = "english";
// var jsonUrl = "https://jsonbin.org/krmfla/language/";
// var barEl = document.getElementById("switchLanguageBar");
// getData(defaultLanguage);
// barEl.addEventListener("click", handleLanguage);
// //=== function kits ===
// function getData(language) {
//   var url = jsonUrl + language;
//   $('.content p').fadeOut();
//   $.getJSON(url, function(data) {
//     // console.log(data);
//     renderView(data);
//   });
// }
// function renderView(data) {
//   var titleEl = document.getElementById("title");
//   var descriptionEl = document.getElementById("description");
//   titleEl.innerText = data.title;
//   descriptionEl.innerText = data.description;
//   $('.content p').fadeIn();
// }
// function handleLanguage(event) {
//   var attr = event.target.getAttribute("language");
//   if (attr) {
//     getData(attr)
//   }
// }

var defaultLanguage = "english",
    jsonUrl = "https://jsonbin.org/krmfla/language/";
    // jsonUrl = "language.json";
getData(defaultLanguage);

$("#switchLanguageBar > span").click(function(){
  var langCode = $(this).attr("id");
  if(langCode){
    getData(langCode)
  }
});
function getData(language) {
  var url = jsonUrl + language;
  // console.log(url);
  $.getJSON(url, function(dataLang){
    console.log(dataLang);
    renderView(dataLang);
  });
}
function renderView(dataLang) {
  $("#title").html(dataLang.title);
  $("#description")l.html(dataLang.description);
}
