/*var name;
var age;
function get(){
    document.writeln(this.name+"是"+this.age);
}
var obj={
    name:"szr",
    age:20,
    getName:get
}
obj.getName();*/

/*let name;
let age;
let obj={
    name:"zzp",
    age:20,
    get:function (){
        document.writeln(this.name+this.age);
    }
}*/

var name;
var age;
var obj= {
    name: "szr",
    age: 20,
    get: function () {
        document.writeln(this.name + this.age);
    },
}
function setGet(name,age){
    var obj={};
    obj.name=name;
    obj.age=age;
    obj.get=function (){
        document.writeln(this.name);
    };
    return obj;
}//模块化
var a=setGet("zzp",20);
document.writeln(a.name);
document.writeln(obj.name);
var b=setGet("szr",20);
document.writeln(b.name)
b.get();


