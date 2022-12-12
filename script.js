let mybutton= document.getElementById("myBtn");
window.onscroll= function() {scrollFunction()};
window.onscroll= function() {myFunction()};

let header= document.getElementById("myHeader");
var sticky= header.offsetTop;

function scrollFunction(){
    if (document.body.scrollTop> 20 || document.documentElement.scrollTop> 20){
        mybutton.style.display= "block";
    } else{
        mybutton.style.display= "none";
    }
}

function topFunction(){
    document.body.scrollTop= 0;
    document.documentElement.scrollTop= 0;
}

function myFunction(){
    if (window.pageYOffset> sticky){
        header.classList.add("sticky");
    } else{
        header.classList.remove("sticky");
    }
}