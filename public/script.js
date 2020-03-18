
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

    //frequently asked question section collapse function
    

    var questions =document.getElementsByClassName("question__button");
    var i;
   function trye() {
       for(i=0;i<questions.length;i++){
           console.log(questions[i]);
           questions[i].addEventListener("click",funky);
       };
   };
   trye();
   function funky(btn) {
       var content=btn.target.nextElementSibling;
       var contentClass=content.getAttributeNode("class").value;
       if(contentClass==="content"){
            content.classList.remove("content");
            content.classList.add("content-new");
       }else{
           content.classList.remove("content-new");
           content.classList.add("content");
       }
   };

    //hamburger navigation vertical navbar functionality

    const hamburger =document.querySelector(".burger");
    const navbarVertical=document.querySelector(".nav-list");
    const hamburgerLines=document.querySelectorAll(".burger-line");
    

    hamburger.addEventListener("click",navy);

    function navy() {
        navbarVertical.classList.toggle("nav-list-toggle");
        hamburgerLines[0].classList.toggle("line1");
        hamburgerLines[1].classList.toggle("line2");
        hamburgerLines[2].classList.toggle("line3");
    };


    //about us nav link modal popup function

    const about = document.getElementById("about");
    const close =document.querySelector(".about__modal-close");
    const modal = document.querySelector(".about__modal");
    about.addEventListener("click",aboutModal);
    close.addEventListener("click",aboutModal);

    function aboutModal() {
        modal.classList.toggle("about-new");
    };
        
    
    
    

};

window.onscroll=function () {wScroll()};



function wScroll() {
    if(document.body.scrollTop> 100 || document.documentElement.scrollTop> 100){
        document.getElementById("nav-bar").style.top="0";
        document.getElementById("nav-button").style.right="0";
    }else{
        document.getElementById("nav-bar").style.top="-1000px";
        document.getElementById("nav-button").style.right="-100px";
    }
};

