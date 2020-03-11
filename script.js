window.onscroll=function () {wScroll()};

function wScroll() {
    if(document.body.scrollTop> 100 || document.documentElement.scrollTop> 100){
        document.getElementById("nav-bar").style.top="0"
    }else{
        document.getElementById("nav-bar").style.top="-100px"
    }
};
