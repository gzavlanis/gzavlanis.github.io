let mybutton= document.getElementById("myBtn");
window.onscroll= function() {scrollFunction()};

let header= document.getElementById("myHeader");
var sticky= header.offsetTop;

function scrollFunction(){
    if (document.body.scrollTop> 20 || document.documentElement.scrollTop> 20){
        mybutton.style.display= "block";
    } else{
        mybutton.style.display= "none";
    }
    if (window.pageYOffset> sticky){
        header.classList.add("sticky");
    } else{
        header.classList.remove("sticky");
    }
}

function topFunction(){
    document.body.scrollTop= 0;
    document.documentElement.scrollTop= 0;
}