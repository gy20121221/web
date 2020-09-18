// alert("hello world!!!");
//  var str="hello world";输出
// alert(str);输出
// document.write(str);输出


/*document.writeln(typeof(str));
str=10;
document.writeln(typeof(str));
str=true;
document.writeln(typeof(str));
str=12.03;
document.writeln(typeof(str));
str=null;
document.writeln(typeof(str));*/


//typeof()显示数据类型
/*var str=10;
var str2="10";
document.writeln(str==str2);
document.writeln(str===str2);
===全等，必须要类型和值都相同*/


/* var reg=/^\s*$/;//0到多个空格
document.write(reg.test("   a   "));
必须全部字符符合正则返回true
有一个字符不符合正则就会返回false*/
/*var reg=/^\s+$/;//直接方式
document.write(reg.test(" we"));
var reg1=/\s+/;//普通方式
document.write(reg1.test(" qeq"));*/
/*/^表达式$/
只要有无法成立正则的字符存在，即为false。。
全部符合为true.
(检查严格，眼睛不揉沙子)。
适用于表单校验。
/表达式/
只要有成立正则的字符存在，即为true。。
全部不符合为false
(检查不严格，懒人思想)。
适用于字符串查找、替换。*/


/*var  arr= [1,2,3,"a",true];//常用的JS数组。长度5。
var arr= new Array();创建一一个 数组对象，数组长度默认为0。*/


/*var ar=[1,2,33,4,"qeq"];
document.write(ar.length);
ar[1]="qqq";
ar[ar.length]="qqqwq";//可以给ar直接增加空间，添加元素
document.writeln(ar);
ar[10]=10;
document.writeln(ar);
document.writeln(ar.length);*/


/*var arr=['a','b','cc'];
document.writeln(arr.join('@'));//链接数组
document.writeln(arr.reverse());//反转数组
document.writeln(arr.pop());//删除最后一个元素并且返回数组长度
document.writeln(arr.push('qwq','mmm')); //向数组的末尾添加一个或更多元素，并返回新的长度。
document.writeln(arr.reverse())//颠倒数组中元素的顺序*/








