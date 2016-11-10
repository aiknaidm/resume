var Swiper=require("./components/swiper/swiper-3.3.1.min");

var swiperAnimate=require("./components/swiper/swiper.animate1.0.2.min");
var $ = require('zepto-modules/zepto');

require('zepto-modules/event');
require('zepto-modules/ajax');
require('zepto-modules/touch');

module.exports = $;
var mySwiper = new Swiper ('.swiper-container', {
    
    onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
        swiperAnimate.swiperAnimateCache(swiper); //隐藏动画元素 
        swiperAnimate.swiperAnimate(swiper); //初始化完成开始动画
     }, 
    onSlideChangeEnd: function(swiper){ 
         swiperAnimate.swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
     } 

  })   
  $("#myIscroll").hide();          
  $("#swiper-container").show();          
$("#enter").tap(function(){
   
    //http请求
     $.post('/api/skill',{},function(response){
        console.log(response);
        $("#scroller").append("<ul>");
        for (var i = 0; i < response.length; i++) {

            $("#scroller").append("<li class='skill'>"+
                                        "<div><span>类型:</span>"+response[i].category+"</div>"+
                                        "<div><span>技能：</span>"+response[i].name+"</div>"+
                                        "<div><span>学习时间：</span>"+response[i].time+"</div>"+
                                        "<div><span>程度:</span>"+response[i].level+"</div>"+

                                    "</li>"
                                    
                );   
        }
         $("#scroller").append("</ul>");
         $('#myIscroll').show();
         $('#swiper-container').hide();
          var iScroll = require('./components/iscroll/iscroll');
          var myScroll = new iScroll('#wrapper',{mouseWheel:true});
          document.addEventListener('touchmove',function(e){
                e.preventDefault();
        })
    })
});
