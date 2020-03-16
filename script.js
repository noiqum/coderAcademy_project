
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

    
    
        
    
    
    

};

window.onscroll=function () {wScroll()};



function wScroll() {
    if(document.body.scrollTop> 100 || document.documentElement.scrollTop> 100){
        document.getElementById("nav-bar").style.top="0";
        document.getElementById("nav-button").style.right="0";
    }else{
        document.getElementById("nav-bar").style.top="-100px";
        document.getElementById("nav-button").style.right="-100px";
    }
};

