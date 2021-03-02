$(document).ready(function(){
  initAutoType();

  
});

var initAutoType = function(){
  var types = ["en Bac+2","informaticien","curieux","motivé"];
  var words = $("#auto_taper");

  var stopType = false;     //用于停止自动打字的

  var index = 0;
  var tempWords = "";
  var isNext = false;
  var time = 120;

  var startType = setInterval(function(){
    if(stopType){
      //如果需要停止打字
      clearInterval(startType);
    }
    if(tempWords.length === 0){
      //如果删完了，就开始
      if(isNext){
        index++;
        index = index%4;
        isNext = false;
      }
      tempWords = types[index].substring(0,tempWords.length+1);
    }else if(tempWords.length === types[index].length && isNext === false){
      //如果已经到头了，就要删去
     // tempWords = tempWords.substring(0,tempWords.length-1);
      isNext = true;
      time = 5000;
    }else{
      //如果既没删完也没显示完
      if(isNext){
        //如果是在减少
        tempWords = tempWords.substring(0,tempWords.length-1);
        time = 150;
      }
      else{
        //如果在增多
        time = 200;
        tempWords = types[index].substring(0,tempWords.length+1);
      }
    }
    words.html("&nbsp;"+tempWords);
  },time);
};






$(function(){
  var items = document.querySelectorAll("#parcours li");
 
  function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  };
 
function callbackFunc() {
  for (var i = 0; i < items.length; i++) {
    if (isElementInViewport(items[i])) {
      items[i].classList.add("in-view");
    }
  }
}
 
window.addEventListener("load", callbackFunc);
window.addEventListener("scroll", callbackFunc);
})
      
function mailsome1() {
  var who = prompt("Veuillez saisir l'adresse d'e-mail ", "xiangyu.an@etu.unilim.fr");
  var what = prompt("Saisissez l'objet: ", "none");
  if (confirm("Etes-vous sûr d'envoyer à" + who + "avec l'objet " + what + "?") == true) {
      parent.location.href = 'mailto:' + who + '?subject=' + what + '';
  }
}

document.onreadystatechange = function () {
  if (document.readyState == "complete") {    
      $(".loading-div").hide();
      $('body').css('overflow','scroll');
  }
}
