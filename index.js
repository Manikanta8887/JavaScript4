// 1st Question

var a="    Pawan";
var b="Kalyan    ";
var c=a.concat(b);
console.log(c);
var d=c.trim();
console.log(d);
var e=d.toUpperCase();
console.log(e);


// 2nd Question

var a1="Manikanta";
var b1=a1.slice(2,7);
console.log(b1);
var c1=b1.charAt(b1.length-1);
console.log(c1);
var d1=c1.toLowerCase();
console.log(d1);


// 3rd Question

var f="M";
var g="anikanta";
var h=f.concat(g);
console.log(f);
var i=h.toUpperCase();
console.log(i);
var j=i.slice(1,2);
console.log(j);


// 4th Question

var k="Manikanta";
var l="Thirnati";
var m=k.slice(0,3);
var n=l.slice(5,8);
var o=k.charAt(0).toUpperCase()+k.slice(1,3).concat(l.slice(5,7))+l.charAt(7).toUpperCase();
console.log(o);

// 5th Question

var p="    Manikanta    ";
var s=p.trim();
var t=s.charAt(0).toUpperCase()+s.slice(1,8)+s.charAt(8).toUpperCase();
console.log(t);


// 6th Question

var js="hello how are you";
var jss=js.split(" ");
console.log(jss);
var jsss=jss.indexOf("are");
console.log(jsss);