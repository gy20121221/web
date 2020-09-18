/*
确认窗口，有返回值
var a;
a=confirm("hello");
document.writeln(a);*/

/*var id;
function run1(){
    alert("hello");
    clearInterval(id);/!*取消定时器*!/
}
setInterval("run1()",2000);/!*定时器，时间单位是毫秒*!/
id=setInterval("run1()",2000);*/


/*
1,尽可能在setInterval中自己清除（停止）。（设置判断）
2、如果将setInterval赋给一个全局变量，
在其他地方ClearInterval进行清除有可能达不到效果。
(原因：那边刚清除，这边可能又重新赋值了，惨痛的经历！）
var timesRun = 0;
var interval = setInterval(function(){
    timesRun += 1;
    if(timesRun === 2){
        clearInterval(interval);
    }
    document.writeln("hello");
    //do whatever here..
}, 2000);*/


/*function run(){
    document.writeln("hello");
}
setTimeout("run()",2000);/!*一次性定时器 取消和循环定时器一样*!/

*/

/*var a=location.href;
document.writeln(a);/!*输出当前地址*!/
location.href="study24.html";/!*跳转对应地址,设置href属性，浏览器就会跳转到对应的路径。*!/
*/

/*function a{
    location.href="https://www.bilibili.com/";
}
setTimeout(a,2000);/!*延迟跳转*!/*/
