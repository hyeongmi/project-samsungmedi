$(function(){
    mainInit();
    //링크막아주기
    $(document).on('click','a[href="#"]',function(e){
        e.preventDefault();
    })

    let $top = $('.quick .q-menu li:nth-child(5) ');
    let tops = 0;
    $top.on('click',function(){
        $('html,body').animate({scrollTop: 0},300);
    })

    $(window).trigger('scroll');

    $top.hide();

    $(window).on('scroll',function(){
        tops=$(window).scrollTop();

        if(tops>150){
            $top.show();
        }else{
            $top.hide();
        }
    })

})

function mainInit(){
vbanner();
smcreport();
family();

}

function vbanner(){
    let $mainli = $('#visual .v-list li');
    let $pagingli = $('#visual .paging li');
    let cnt=0, old=0, size=$mainli.length, timer=null, interval=4000;

    timer = setInterval(make, interval);
    function make(){
        cnt++;
        if(cnt>size-1){
            cnt= 0;
        }
        banner('100%','-100%');
    }

    $mainli.on('mouseenter',function(){
        clearInterval(timer);
    })
    $mainli.on('mouseleave',function(){
        clearInterval(timer);
        timer=setInterval(make, interval);
    })

    $pagingli.on('click',function(){
        cnt = $(this).index();
        if(cnt != old){
            banner('100%','-100%');
        }
    })

    function banner(start,end){
        $mainli.eq(cnt).css({left:start}).animate({left:0},400);
        $mainli.eq(old).css({left:0}).animate({left:end},400);
        $mainli.removeClass('on');
        $mainli.eq(cnt).addClass('on');
        $pagingli.removeClass('on').eq(cnt).addClass('on');
        old=cnt;
        clearInterval(timer);
        timer=setInterval(make,interval);
    }
}

function smcreport(){
    let $reportli = $('.main .report .list li');
    let cnt = 0, old=0 ,timer=null, interval=7000, size=$reportli.length;

    timer = setInterval(make,interval);
    function make(){
        cnt++;
        if(cnt>size-1){
            cnt=0;
        }
        reportviwe('0','1');
    }
   
    $reportli.on('mouseenter',function(){
        clearInterval(timer);
    })
    
 
    $reportli.on('mouseleave',function(){
        clearInterval(timer);
        timer=setInterval(make,interval);
    })

    function reportviwe(start,end){
        $reportli.eq(cnt).css({opacity:start}).animate({opacity:0},1000);
        $reportli.eq(old).css({opacity:0}).animate({opacity:end},1000);
        old = cnt;
        clearInterval(timer);
        timer=setInterval(make,interval);
    }
}

function family(){
    $('.family1 .f-title').click(function(){
        $('.family1 .f-center').slideToggle(400);
    })
    $('.family2 .f-stitle').click(function(){
        $('.family2 .f-list').slideToggle(400);
    })
}

