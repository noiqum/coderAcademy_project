
window.onload=function () {
    
    var span=document.getElementById("sp");
    var text=document.getElementById('name');
    var email=document.getElementById("email");
    var span1=document.getElementById("ea");

    text.addEventListener("focus",move);
    email.addEventListener('focus',move1);
    

    function move() {
        span.classList.add("new");

};
    function move1() {
        span1.classList.add("new");
    };

    

};
window.onscroll=function () {wScroll()};

function wScroll() {
    if(document.body.scrollTop> 100 || document.documentElement.scrollTop> 100){
        document.getElementById("nav-bar").style.top="0"
    }else{
        document.getElementById("nav-bar").style.top="-100px"
    }
};

