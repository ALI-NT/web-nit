function tabe(){
    alert("console ;]");
    console.log("advertising");
}

var button1 = document.getElementsByTagName("button")[0];
var button2 = document.getElementsByTagName("button")[1];
var button3 = document.getElementsByTagName("button")[2];
var move1 = function() {
    window.location.href = "about-me.html";
}
var move2 = function() {
    window.location.href = "home.html";
}
var move3 = function() {
    window.location.href = "articles.html";
}
button1.addEventListener("click", move1);
button2.addEventListener("click", move2);
button3.addEventListener("click", move3);

var img = document.getElementsByTagName("img")[0];
var git = function() {
    window.location.href = "https://github.com/ALI-NT";
}
img.addEventListener("click", git);

var article1 = document.getElementsByClassName("article")[0];
var article2 = document.getElementsByClassName("article")[1];
var tabe1 = function() {
    window.location.href = "single-article-1.html";
}
var tabe2 = function() {
    window.location.href = "single-article-2.html";
}
article1.addEventListener("click", tabe1);
article2.addEventListener("click", tabe2);