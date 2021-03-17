let es = document.querySelectorAll("form");
var idx = es.length - 4;
if(idx >= 0){
var a = document.createElement("INPUT");
a.setAttribute("type", "submit");
a.setAttribute("value", "消");
a.onclick = shoumetu;
es[idx].appendChild(a);

var b = document.createElement("INPUT");
b.setAttribute("type", "submit");
b.setAttribute("value", "鎌");
b.onclick = kama;
es[idx].appendChild(b);


var c = document.createElement("INPUT");
c.setAttribute("type", "submit");
c.setAttribute("value", "鞭");
c.onclick = muchi;
es[idx].appendChild(c);


var d = document.createElement("INPUT");
d.setAttribute("type", "submit");
d.setAttribute("value", "土");
d.onclick = tuchi;
es[idx].appendChild(d);

var e = document.createElement("INPUT");
e.setAttribute("type", "submit");
e.setAttribute("value", "槍");
e.onclick = kyoka;
es[idx].appendChild(e);


var f = document.createElement("INPUT");
f.setAttribute("type", "submit");
f.setAttribute("value", "旗");
f.onclick = shogun;
es[idx].appendChild(f);

var g = document.createElement("INPUT");
g.setAttribute("type", "submit");
g.setAttribute("value", "丹");
g.onclick = tan;
es[idx].appendChild(g);


var h = document.createElement("INPUT");
h.setAttribute("type", "submit");
h.setAttribute("value", "域");
h.onclick = seiatsu;
es[idx].appendChild(h);

var k = document.createElement("INPUT");
k.setAttribute("type", "submit");
k.setAttribute("value", "情報");
k.onclick = jyoho;
es[idx + 1].appendChild(k);

function shoumetu(){
    es[idx].querySelectorAll("select")[0].value = 4;
}

function kama(){
    es[idx].querySelectorAll("select")[0].value = 16;
}

function muchi(){
    es[idx].querySelectorAll("select")[0].value = 18;
}

function tuchi(){
    es[idx].querySelectorAll("select")[0].value = 54;
}

function kyoka(){
    es[idx].querySelectorAll("select")[0].value = 21;
}

function shogun(){
    es[idx].querySelectorAll("select")[0].value = 22;
}

function tan(){
    es[idx].querySelectorAll("select")[0].value = 31;
}
function seiatsu(){
    es[idx].querySelectorAll("select")[0].value = 57;
}
function jyoho(){
    es[idx+1].querySelectorAll("select")[0].value = 8;
}
}
