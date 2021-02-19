
window.onload=function (){

    let bili=document.createElement("div");
    bili.id="b";
    // console.log(bili);
    bili.innerHTML="<div style=\"position: fixed;float:left;width: 260px;height: 24px;background: red;z-index: 1000;top:200px\">\n" +
        "        <input id=\"sr\" class=\"bilibili-player-video-danmaku-input\" type=\"text\" style=\"width: 150px;height: 20px;\">\n" +
        "        <button class=\"bilibili-player-video-btn-send bui bui-button bui-button-blue\" type=\"button\">发射弹幕</button>\n" +
        "</div>";
    document.body.parentNode.appendChild(bili);
    let button=document.getElementById("b").getElementsByTagName("button")[0];
    let input=document.getElementById("b").getElementsByTagName("input")[0];

    let bu=function () {
        button.onclick=function () {
            console.log(input.value);
        }
    }
    bu();

}