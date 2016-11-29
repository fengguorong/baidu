$(function(){
    var num=0;
    var heights=$(window).height();
    var flag=true;
    touch.on("body","swipeup",".content",function(){
        if(!flag){
            return;
        }
        num++;
        if(num==$("section").length){
            num=$("section").length-1;
            return;
        }
        $(".content").css({marginTop:-num*heights});
        flag=false;
    })
    touch.on("body","swipedown",".content",function(){
        if(!flag){
            return;
        }
        num--;
        if(num==-1){
            num=0;
            return;
        }
        $(".content").css({marginTop:-num*heights});
        flag=false;
    })
    $(".content")[0].addEventListener("webkitTransitionEnd",function() {
        flag = true;
    })

})



