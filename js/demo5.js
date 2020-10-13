window.onload=function (){
    let wi=document.getElementsByClassName("wi")[0];
    let pre=document.getElementById("pre");
    let next=document.getElementById("next");
    let index=0;
    // let wiUl=document.querySelector(".wi-ul")[0];
    // let wiUl=document.getElementsByClassName("wi-ul")[0];
    let wiA=wi.getElementsByClassName("wi-a");
    let wiImg=wi.getElementsByClassName("wi-img");
    let clear=function (clearClass,ClassName){
        for (let i = 0; i < clearClass.length; i++) {
            clearClass[i].className=ClassName;
        }
    }
    let change=function (cla,className,changeName){
        clear(cla,className);
        cla[index].className=changeName;
    }
    let pand=function (){
        if (index>=wiImg.length-1) index=0;
        else index++;
    }
    let onM=function (star){
        wi.onmouseover=function (){
            clearInterval(star);
            wi.onmouseout=function (){
                let  starn=setInterval(function (){
                    pand();
                    change(wiImg,"wi-img","wi-img img-top");
                },2000);
                onM(starn);
        }
        }
    }

    let changeA=function (){
        change(wiA,"wi-a","wi-a aJ");
    }
    let wiAoc=function (){
        for (let i = 0; i < wiA.length; i++) {
            wiA[i].onclick=function (){
                index=i;
                change(wiImg,"wi-img","wi-img img-top");
            }
        }
    }


    /*！主程序！*/
    let  star=setInterval(function (){
        pand();
        change(wiImg,"wi-img","wi-img img-top");
    },2000);//计时器，改变图片显示
    pre.onclick=function (){
        if (index===0) {
            index=wiImg.length-1;
        }
        else index--;
        change(wiImg,"wi-img","wi-img img-top");
    }//点击前往上一张图片
    next.onclick=function (){
        if (index>=wiImg.length-1) {
            index=0;
        }
        else index++;
        change(wiImg,"wi-img","wi-img img-top");
    }//点击前往下一张图片
    wiAoc();//实现点击图片下圆点改变图片，并且改变小圆点显示
    setInterval(changeA,10);//每10ms，监控index实时改变小圆点显示
    onM(star);//用回调函数的方法实现，把鼠标移到窗口暂停图片变化
}
