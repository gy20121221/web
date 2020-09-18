/*
var msg="https://www.bilibili.com/video/av73840600?p=60小飞";
var temp=encodeURI(msg);//16进制编码转换
document.writeln(temp);
document.writeln(decodeURI(temp));//解码
*/



/*
var str="10.123";
var str2="10.123a";
var num1=parseInt(str);
var num2=parseFloat(str);
var num3=parseInt(str2);
var num4=parseFloat(str2);
document.writeln(typeof (num1)+num1);
document.writeln(typeof (num2)+num2);
document.writeln(typeof (num3)+num3);
document.writeln(typeof (num4)+num4);
/!*如果字符串的某个字符从字面值上无法转为数字,那么从该字符开始停止转换,仅返回
前面正确的转换值。(例如: 11.5a55， parselnt 结果11，parseFloat 结果11.5)。
+
如果字符串的第-一个字符就无法以字面值上转为数字，那么停止转换，返回NaN.
NaN (Not A Number, -一个数字类型的标识，表示不是一个正确的数字)。
*!/*/

/*
function getSum(a,b){
    return a+b;
}
function getSum(a,b,c){
    return a+b+c;
}
document.writeln(getSum(1,2));
document.writeln(getSum(1,2,3));
/!*
JavaScript函数定义必须用小写的function;
JavaScript函数无需定义返回值类型，直接在function后面书写方法名;。
参数的定义无需使用var关键字，否则报错;
JavaScript函数体中,return可以不写，也可以return具体值,或者仅仅写return;。

JavaScript函数调用执行完毕一定有返回值，值及类型根据return决定，如果未return
具体值，返回值为undefined;
JavaScript函数若同名，则不存在方法重载，只有方法相互覆盖，最后定义的函数覆盖
之前的定义;。
因为JavaScript不存在函数重载,所以JavaScript仅根据方法名来调用函数,即使实参与
函数的形参不匹配，也不会影响正常调用;
*!/*/


/*
function Peron(){
    this.name="小飞";
    this.age=20;
}
var a =new Peron();
document.writeln(a.name);
document.writeln(a.age);
*/



/*var per={name:"小飞",age:"20"};
document.writeln(per.age+per.name);*/

